const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const platform = os.platform();
  const uptime = os.uptime();
  
  res.json({
    message: 'Welcome to Kubernetes Demo App!',
    hostname,
    platform,
    uptime: `${Math.floor(uptime / 3600)} hours, ${Math.floor((uptime % 3600) / 60)} minutes`,
    timestamp: new Date().toISOString()
  });
});

// Add a new health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.3'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 