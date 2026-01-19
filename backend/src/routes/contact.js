import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const router = express.Router();

// Mock transporter (replace with real email service in production)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'user@example.com',
    pass: process.env.SMTP_PASS || 'password',
  },
});

// Store contact submissions (mock database)
const contactSubmissions = [];

// Submit contact form
router.post('/submit', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 3 }).withMessage('Subject must be at least 3 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, company, phone, subject, message } = req.body;

    // Create contact submission
    const submission = {
      id: contactSubmissions.length + 1,
      name,
      email,
      company: company || null,
      phone: phone || null,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    contactSubmissions.push(submission);

    // In production, send email notification
    if (process.env.NODE_ENV === 'production') {
      try {
        await transporter.sendMail({
          from: `"${name}" <${email}>`,
          to: process.env.CONTACT_EMAIL || 'contact@brosa.ai',
          subject: `Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          `,
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    res.status(201).json({
      status: 'success',
      message: 'Message sent successfully. We\'ll get back to you within 24 hours.',
      data: {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
        createdAt: submission.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to send message. Please try again later.',
    });
  }
});

// Get contact form submissions (admin endpoint)
router.get('/submissions', (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;
    
    let filteredSubmissions = contactSubmissions;
    
    if (status) {
      filteredSubmissions = filteredSubmissions.filter(s => s.status === status);
    }
    
    const paginatedSubmissions = filteredSubmissions
      .slice(parseInt(offset), parseInt(offset) + parseInt(limit))
      .reverse(); // Most recent first

    res.json({
      status: 'success',
      data: {
        submissions: paginatedSubmissions,
        total: filteredSubmissions.length,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get submissions',
    });
  }
});

// Get single submission
router.get('/submissions/:id', (req, res) => {
  try {
    const submission = contactSubmissions.find(s => s.id === parseInt(req.params.id));
    
    if (!submission) {
      return res.status(404).json({
        status: 'error',
        message: 'Submission not found',
      });
    }

    res.json({
      status: 'success',
      data: submission,
    });
  } catch (error) {
    console.error('Get submission error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get submission',
    });
  }
});

// Update submission status
router.put('/submissions/:id', [
  body('status').isIn(['new', 'in-progress', 'resolved', 'closed']).withMessage('Invalid status'),
  body('notes').optional().trim(),
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const submissionIndex = contactSubmissions.findIndex(s => s.id === parseInt(req.params.id));
    
    if (submissionIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Submission not found',
      });
    }

    const { status, notes, assignedTo } = req.body;
    
    contactSubmissions[submissionIndex].status = status;
    if (notes) contactSubmissions[submissionIndex].notes = notes;
    if (assignedTo) contactSubmissions[submissionIndex].assignedTo = assignedTo;
    contactSubmissions[submissionIndex].updatedAt = new Date().toISOString();

    res.json({
      status: 'success',
      message: 'Submission updated successfully',
      data: contactSubmissions[submissionIndex],
    });
  } catch (error) {
    console.error('Update submission error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update submission',
    });
  }
});

// Get contact statistics
router.get('/stats', (req, res) => {
  try {
    const stats = {
      totalSubmissions: contactSubmissions.length,
      statusBreakdown: {
        new: contactSubmissions.filter(s => s.status === 'new').length,
        'in-progress': contactSubmissions.filter(s => s.status === 'in-progress').length,
        resolved: contactSubmissions.filter(s => s.status === 'resolved').length,
        closed: contactSubmissions.filter(s => s.status === 'closed').length,
      },
      submissionsToday: contactSubmissions.filter(s => {
        const today = new Date().toDateString();
        return new Date(s.createdAt).toDateString() === today;
      }).length,
      avgResponseTime: Math.floor(Math.random() * 24) + 2, // hours
    };

    res.json({
      status: 'success',
      data: stats,
    });
  } catch (error) {
    console.error('Contact stats error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get contact statistics',
    });
  }
});

export default router;