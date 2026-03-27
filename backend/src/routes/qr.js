import express from 'express';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Mock database for QR codes
const qrCodes = [];

// Generate QR code
router.post('/generate', async (req, res) => {
  try {
    const { 
      businessName, 
      menuItems, 
      phoneNumber, 
      logoUrl, 
      theme = 'default' 
    } = req.body;

    // Validate required fields
    if (!businessName || !phoneNumber) {
      return res.status(400).json({
        status: 'error',
        message: 'Business name and phone number are required',
      });
    }

    // Create QR code data
    const qrData = {
      id: uuidv4(),
      businessName,
      phoneNumber,
      menuItems: menuItems || [],
      logoUrl: logoUrl || null,
      theme,
      whatsappUrl: `https://wa.me/${phoneNumber.replace(/\D/g, '')}`,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
    };

    // Generate QR code image
    const qrCodeImage = await QRCode.toDataURL(qrData.whatsappUrl, {
      width: 512,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });

    qrData.qrCodeImage = qrCodeImage;
    qrCodes.push(qrData);

    res.status(201).json({
      status: 'success',
      message: 'QR code generated successfully',
      data: {
        id: qrData.id,
        qrCodeImage,
        whatsappUrl: qrData.whatsappUrl,
        expiresAt: qrData.expiresAt,
      },
    });
  } catch (error) {
    console.error('QR generation error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to generate QR code',
    });
  }
});

// Get QR code by ID
router.get('/:id', (req, res) => {
  try {
    const qrCode = qrCodes.find(qr => qr.id === req.params.id);
    
    if (!qrCode) {
      return res.status(404).json({
        status: 'error',
        message: 'QR code not found',
      });
    }

    // Check if QR code has expired
    if (new Date() > new Date(qrCode.expiresAt)) {
      return res.status(410).json({
        status: 'error',
        message: 'QR code has expired',
      });
    }

    res.json({
      status: 'success',
      data: qrCode,
    });
  } catch (error) {
    console.error('Get QR error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get QR code',
    });
  }
});

// List all QR codes for a business (mock implementation)
router.get('/business/:businessId', (req, res) => {
  try {
    const businessQRCodes = qrCodes.filter(qr => 
      qr.businessId === req.params.businessId
    );

    res.json({
      status: 'success',
      data: {
        qrCodes: businessQRCodes,
        total: businessQRCodes.length,
      },
    });
  } catch (error) {
    console.error('List QR error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to list QR codes',
    });
  }
});

// Update QR code
router.put('/:id', async (req, res) => {
  try {
    const qrIndex = qrCodes.findIndex(qr => qr.id === req.params.id);
    
    if (qrIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'QR code not found',
      });
    }

    const { businessName, menuItems, phoneNumber, logoUrl, theme } = req.body;

    // Update QR code data
    if (businessName) qrCodes[qrIndex].businessName = businessName;
    if (menuItems) qrCodes[qrIndex].menuItems = menuItems;
    if (phoneNumber) {
      qrCodes[qrIndex].phoneNumber = phoneNumber;
      qrCodes[qrIndex].whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
      
      // Regenerate QR code image with new phone number
      const qrCodeImage = await QRCode.toDataURL(qrCodes[qrIndex].whatsappUrl, {
        width: 512,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
      qrCodes[qrIndex].qrCodeImage = qrCodeImage;
    }
    if (logoUrl) qrCodes[qrIndex].logoUrl = logoUrl;
    if (theme) qrCodes[qrIndex].theme = theme;

    qrCodes[qrIndex].updatedAt = new Date().toISOString();

    res.json({
      status: 'success',
      message: 'QR code updated successfully',
      data: qrCodes[qrIndex],
    });
  } catch (error) {
    console.error('Update QR error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update QR code',
    });
  }
});

// Delete QR code
router.delete('/:id', (req, res) => {
  try {
    const qrIndex = qrCodes.findIndex(qr => qr.id === req.params.id);
    
    if (qrIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'QR code not found',
      });
    }

    qrCodes.splice(qrIndex, 1);

    res.json({
      status: 'success',
      message: 'QR code deleted successfully',
    });
  } catch (error) {
    console.error('Delete QR error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete QR code',
    });
  }
});

// Get QR code analytics
router.get('/:id/analytics', (req, res) => {
  try {
    const qrCode = qrCodes.find(qr => qr.id === req.params.id);
    
    if (!qrCode) {
      return res.status(404).json({
        status: 'error',
        message: 'QR code not found',
      });
    }

    // Mock analytics data
    const analytics = {
      totalScans: Math.floor(Math.random() * 1000) + 100,
      uniqueScans: Math.floor(Math.random() * 500) + 50,
      conversions: Math.floor(Math.random() * 100) + 10,
      conversionRate: Math.random() * 0.3 + 0.1,
      topLocations: [
        { city: 'New York', scans: 150 },
        { city: 'Los Angeles', scans: 120 },
        { city: 'Chicago', scans: 90 },
      ],
      scanTrend: [
        { date: '2024-01-01', scans: 10 },
        { date: '2024-01-02', scans: 15 },
        { date: '2024-01-03', scans: 12 },
        { date: '2024-01-04', scans: 20 },
        { date: '2024-01-05', scans: 18 },
      ],
    };

    res.json({
      status: 'success',
      data: analytics,
    });
  } catch (error) {
    console.error('QR analytics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get QR analytics',
    });
  }
});

export default router;