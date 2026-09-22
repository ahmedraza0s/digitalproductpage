const express = require('express');

// Used exclusively for webhooks to get the raw string body before JSON parsing
const rawBodyParser = express.raw({ type: 'application/json' });

module.exports = rawBodyParser;
