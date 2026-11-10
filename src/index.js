import { offlineHTML } from './template.js';

const notFoundHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subdomain Not Found</title>
  <style>
    body { background-color: #121212; color: #e0e0e0; font-family: monospace; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; text-align: center; }
    .container { padding: 2rem; border: 1px solid #333; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>404 | Subdomain Not Found</h2>
    <p>This subdomain under shamiltp.me has not been created yet.</p>
  </div>
</body>
</html>`;

export default {
  async fetch(request) {
    try {
      const response = await fetch(request);

      // 1. If the Lenovo tunnel is down (Cloudflare Error 530)
      if (response.status === 530) {
        return new Response(offlineHTML, {
          status: 503, // Best for SEO during downtime
          headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
      }

      // 2. If the Subdomain does not exist
      // Captures 404 from Nginx, or 522/523 if wildcard DNS points to a dummy IP
      if (response.status === 404 || response.status === 522 || response.status === 523) {
        return new Response(notFoundHTML, {
          status: 404,
          headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
      }

      // 3. If Lenovo is online and subdomain exists, pass traffic normally
      return response;
      
    } catch (err) {
      // Fallback if the fetch fails entirely (e.g. unroutable DNS)
      return new Response(notFoundHTML, {
        status: 404,
        headers: { 'content-type': 'text/html;charset=UTF-8' },
      });
    }
  }
};