// api/ping.js — Diagnostic endpoint
// Visit /api/ping in your browser to check server status and key configuration.

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    keys: {
      ANTHROPIC_KEY: process.env.ANTHROPIC_KEY
        ? "✓ found (" + process.env.ANTHROPIC_KEY.slice(0, 8) + "…)"
        : "✗ missing",
      GEMINI_KEY: process.env.GEMINI_KEY
        ? "✓ found (" + process.env.GEMINI_KEY.slice(0, 8) + "…)"
        : "✗ missing",
    },
    node_version: process.version,
  });
};
