const express = require('express');
const router = express.Router();
const { startServer, stopServer, getConsole } = require('../services/pteroService');
const auth = require('../middleware/auth');

router.post('/start', auth, async (req, res) => {
  await startServer();
  res.json({ message: 'Server started' });
});

router.post('/stop', auth, async (req, res) => {
  await stopServer();
  res.json({ message: 'Server stopped' });
});

router.get('/console', auth, async (req, res) => {
  const data = await getConsole();
  res.json(data);
});

module.exports = router;