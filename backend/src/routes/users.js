import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Mock database
const users = [];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Access token required',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'brosa-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      status: 'error',
      message: 'Invalid token',
    });
  }
};

// Get user profile
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.userId);
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    res.json({
      status: 'success',
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get user profile',
    });
  }
});

// Update user profile
router.put('/profile', authenticateToken, (req, res) => {
  try {
    const userIndex = users.findIndex(u => u.id === req.user.userId);
    if (userIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    const { name, businessType, phone, address } = req.body;
    
    // Update user data
    if (name) users[userIndex].name = name;
    if (businessType) users[userIndex].businessType = businessType;
    if (phone) users[userIndex].phone = phone;
    if (address) users[userIndex].address = address;
    
    users[userIndex].updatedAt = new Date().toISOString();

    // Remove password from response
    const { password, ...userWithoutPassword } = users[userIndex];

    res.json({
      status: 'success',
      message: 'Profile updated successfully',
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update profile',
    });
  }
});

// Get user dashboard data
router.get('/dashboard', authenticateToken, (req, res) => {
  try {
    // Mock dashboard data
    const dashboardData = {
      stats: {
        totalOrders: Math.floor(Math.random() * 1000) + 100,
        totalRevenue: Math.floor(Math.random() * 10000) + 1000,
        newCustomers: Math.floor(Math.random() * 100) + 10,
        avgOrderValue: Math.floor(Math.random() * 50) + 20,
      },
      recentOrders: [
        {
          id: 1,
          customerName: 'John Doe',
          items: ['Margherita Pizza', 'Caesar Salad'],
          total: 25.99,
          status: 'completed',
          date: new Date().toISOString(),
        },
        {
          id: 2,
          customerName: 'Jane Smith',
          items: ['Pasta Carbonara'],
          total: 18.99,
          status: 'preparing',
          date: new Date().toISOString(),
        },
      ],
      menuPerformance: [
        { item: 'Margherita Pizza', orders: 45, revenue: 450 },
        { item: 'Caesar Salad', orders: 32, revenue: 256 },
        { item: 'Pasta Carbonara', orders: 28, revenue: 420 },
      ],
    };

    res.json({
      status: 'success',
      data: dashboardData,
    });
  } catch (error) {
    console.error('Get dashboard error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get dashboard data',
    });
  }
});

export default router;