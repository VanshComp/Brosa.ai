import express from 'express';

const router = express.Router();

// Get business analytics
router.get('/business/:businessId', (req, res) => {
  try {
    const { businessId } = req.params;
    const { timeframe = '30d' } = req.query;

    // Mock analytics data based on timeframe
    const analytics = {
      overview: {
        totalOrders: Math.floor(Math.random() * 5000) + 1000,
        totalRevenue: Math.floor(Math.random() * 50000) + 10000,
        avgOrderValue: Math.floor(Math.random() * 50) + 20,
        conversionRate: Math.random() * 0.3 + 0.1,
        newCustomers: Math.floor(Math.random() * 1000) + 100,
        returningCustomers: Math.floor(Math.random() * 500) + 50,
      },
      trends: {
        orders: [
          { date: '2024-01-01', value: 45 },
          { date: '2024-01-02', value: 52 },
          { date: '2024-01-03', value: 38 },
          { date: '2024-01-04', value: 65 },
          { date: '2024-01-05', value: 71 },
          { date: '2024-01-06', value: 89 },
          { date: '2024-01-07', value: 94 },
        ],
        revenue: [
          { date: '2024-01-01', value: 945 },
          { date: '2024-01-02', value: 1123 },
          { date: '2024-01-03', value: 856 },
          { date: '2024-01-04', value: 1345 },
          { date: '2024-01-05', value: 1523 },
          { date: '2024-01-06', value: 1876 },
          { date: '2024-01-07', value: 2045 },
        ],
      },
      topItems: [
        { name: 'Margherita Pizza', orders: 234, revenue: 2808 },
        { name: 'Caesar Salad', orders: 189, revenue: 1512 },
        { name: 'Pasta Carbonara', orders: 156, revenue: 2340 },
        { name: 'Tiramisu', orders: 98, revenue: 686 },
        { name: 'Bruschetta', orders: 87, revenue: 522 },
      ],
      customerBehavior: {
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,
        bounceRate: Math.random() * 0.4 + 0.1,
        pagesPerSession: Math.random() * 5 + 2,
      },
      demographics: {
        ageGroups: [
          { range: '18-24', percentage: 15 },
          { range: '25-34', percentage: 35 },
          { range: '35-44', percentage: 28 },
          { range: '45-54', percentage: 15 },
          { range: '55+', percentage: 7 },
        ],
        locations: [
          { city: 'New York', orders: 456, percentage: 25 },
          { city: 'Los Angeles', orders: 323, percentage: 18 },
          { city: 'Chicago', orders: 278, percentage: 15 },
          { city: 'Houston', orders: 234, percentage: 13 },
          { city: 'Phoenix', orders: 189, percentage: 10 },
        ],
      },
      peakHours: [
        { hour: '12:00', orders: 45 },
        { hour: '13:00', orders: 67 },
        { hour: '14:00', orders: 89 },
        { hour: '18:00', orders: 123 },
        { hour: '19:00', orders: 156 },
        { hour: '20:00', orders: 134 },
      ],
    };

    res.json({
      status: 'success',
      data: analytics,
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get analytics',
    });
  }
});

// Get customer analytics
router.get('/customers/:businessId', (req, res) => {
  try {
    const { businessId } = req.params;

    const customerAnalytics = {
      totalCustomers: Math.floor(Math.random() * 5000) + 1000,
      newCustomers: {
        thisMonth: Math.floor(Math.random() * 500) + 100,
        lastMonth: Math.floor(Math.random() * 400) + 80,
        growth: Math.random() * 0.3 + 0.1,
      },
      retention: {
        oneMonth: Math.random() * 0.4 + 0.3,
        threeMonth: Math.random() * 0.3 + 0.2,
        sixMonth: Math.random() * 0.2 + 0.1,
      },
      topCustomers: [
        { name: 'John Doe', orders: 45, totalSpent: 1125, lastOrder: '2024-01-15' },
        { name: 'Jane Smith', orders: 38, totalSpent: 950, lastOrder: '2024-01-14' },
        { name: 'Mike Johnson', orders: 32, totalSpent: 800, lastOrder: '2024-01-13' },
        { name: 'Sarah Williams', orders: 28, totalSpent: 700, lastOrder: '2024-01-12' },
        { name: 'Tom Brown', orders: 25, totalSpent: 625, lastOrder: '2024-01-11' },
      ],
      customerSegments: [
        { segment: 'VIP', customers: 50, avgOrderValue: 45, totalRevenue: 2250 },
        { segment: 'Regular', customers: 200, avgOrderValue: 28, totalRevenue: 5600 },
        { segment: 'Occasional', customers: 500, avgOrderValue: 18, totalRevenue: 9000 },
        { segment: 'New', customers: 1000, avgOrderValue: 15, totalRevenue: 15000 },
      ],
    };

    res.json({
      status: 'success',
      data: customerAnalytics,
    });
  } catch (error) {
    console.error('Customer analytics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get customer analytics',
    });
  }
});

// Get real-time metrics
router.get('/realtime/:businessId', (req, res) => {
  try {
    const realtimeMetrics = {
      activeUsers: Math.floor(Math.random() * 50) + 10,
      activeOrders: Math.floor(Math.random() * 20) + 5,
      conversionRate: Math.random() * 0.3 + 0.1,
      avgResponseTime: Math.floor(Math.random() * 60) + 15,
      popularItems: [
        { name: 'Margherita Pizza', orders: 5 },
        { name: 'Caesar Salad', orders: 3 },
        { name: 'Pasta Carbonara', orders: 2 },
      ],
      recentActivity: [
        { action: 'New order', customer: 'John D.', time: '2 min ago' },
        { action: 'Order completed', customer: 'Jane S.', time: '5 min ago' },
        { action: 'New customer', customer: 'Mike J.', time: '8 min ago' },
      ],
    };

    res.json({
      status: 'success',
      data: realtimeMetrics,
    });
  } catch (error) {
    console.error('Real-time metrics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get real-time metrics',
    });
  }
});

// Export analytics data
router.get('/export/:businessId', (req, res) => {
  try {
    const { businessId } = req.params;
    const { format = 'json', timeframe = '30d' } = req.query;

    // Mock export data
    const exportData = {
      businessId,
      timeframe,
      generatedAt: new Date().toISOString(),
      summary: {
        totalOrders: Math.floor(Math.random() * 5000) + 1000,
        totalRevenue: Math.floor(Math.random() * 50000) + 10000,
        avgOrderValue: Math.floor(Math.random() * 50) + 20,
      },
      orders: [
        { id: 1, customer: 'John Doe', items: ['Pizza'], total: 25.99, date: '2024-01-15' },
        { id: 2, customer: 'Jane Smith', items: ['Salad'], total: 18.99, date: '2024-01-14' },
      ],
      customers: [
        { id: 1, name: 'John Doe', email: 'john@example.com', totalOrders: 15 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', totalOrders: 8 },
      ],
    };

    if (format === 'csv') {
      // Convert to CSV format (simplified)
      const csvHeader = 'Order ID,Customer,Items,Total,Date\n';
      const csvData = exportData.orders
        .map(order => `${order.id},${order.customer},"${order.items.join(', ')}",${order.total},${order.date}`)
        .join('\n');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="analytics-${businessId}-${Date.now()}.csv"`);
      res.send(csvHeader + csvData);
    } else {
      res.json({
        status: 'success',
        data: exportData,
      });
    }
  } catch (error) {
    console.error('Export analytics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to export analytics',
    });
  }
});

export default router;