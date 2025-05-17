const axios = require('axios');

const PTERO_API = process.env.PTERO_API;
const PTERO_PANEL_URL = process.env.PTERO_PANEL_URL;
const SERVER_ID = process.env.PTERO_SERVER_ID;

const headers = {
  Authorization: `Bearer ${PTERO_API}`,
  'Content-Type': 'application/json',
  Accept: 'Application/vnd.pterodactyl.v1+json'
};

const startServer = async () => {
  await axios.post(
    `${PTERO_PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
    { signal: 'start' },
    { headers }
  );
};

const stopServer = async () => {
  await axios.post(
    `${PTERO_PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
    { signal: 'stop' },
    { headers }
  );
};

const getConsole = async () => {
  const res = await axios.get(
    `${PTERO_PANEL_URL}/api/client/servers/${SERVER_ID}/utilization`,
    { headers }
  );
  return res.data;
};

module.exports = { startServer, stopServer, getConsole };