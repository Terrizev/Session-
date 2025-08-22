// Local entrypoint. Keeps existing behavior for local runs (and pm2), but doesn't start a listener
// when deployed to Vercel (serverless). Vercel will use api/index.js.

const app = require('./app');
const PORT = process.env.PORT || 8000;

// If running under Vercel's serverless environment, do not listen here.
// Vercel will invoke the handler from api/index.js which wraps the express app.
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}