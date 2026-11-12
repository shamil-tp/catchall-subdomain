import { offlineHTML } from './template.js';

const notFoundHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subdomain Not Found</title>
  <style>
    body { 
      background-color: #0f1117; 
      color: #e2e8f0; 
      font-family: monospace; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      margin: 0; 
      text-align: center; 
      transition: background-color 1s ease, color 1s ease;
    }
    .container { 
      padding: 2rem; 
      border: 1px solid #262b3c; 
      border-radius: 8px; 
      transition: border-color 1s ease, background-color 1s ease;
    }
  </style>
</head>
<body>
  <div class="container" id="main-container">
    <h2>404 | Subdomain Not Found</h2>
    <p>This subdomain under shamiltp.me has not been created yet.</p>
  </div>

 <script>
  // Curated palette of high-contrast, harmonious cyberpunk / developer themes
  const developerPalettes = [
    { bg: "#0f1117", border: "#262b3c", text: "#e2e8f0" }, // Deep Slate & Frost Blue
    { bg: "#140909", border: "#591c1c", text: "#fca5a5" }, // Crimson Void & Soft Red
    { bg: "#07120a", border: "#166534", text: "#86efac" }, // Emerald Matrix & Mint
    { bg: "#100914", border: "#581c87", text: "#d8b4fe" }, // Deep Violet & Lavender
    { bg: "#061214", border: "#155e75", text: "#a5f3fc" }, // Cyan Abyss & Electric Blue
    { bg: "#160d07", border: "#c2410c", text: "#fed7aa" }  // Sunset Ember & Warm Peach
  ];

  function initThemeTransitions() {
    let index = 0;

    setInterval(() => {
      index = (index + 1) % developerPalettes.length;
      const theme = developerPalettes[index];

      // Smoothly update CSS variables or direct styles
      document.body.style.backgroundColor = theme.bg;
      document.body.style.color = theme.text;
      
      const container = document.getElementById('main-container');
      container.style.borderColor = theme.border;
    }, 1500); // 3 seconds gives the eyes time to appreciate each transition
  }

  document.addEventListener("DOMContentLoaded", initThemeTransitions);
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    try {
      const response = await fetch(request);

      // 1. Differentiate between Tunnel Down / Bad Gateway (530 or 502) and Uncreated Subdomain
      if (response.status === 530 || response.status === 502) {
        const errorText = await response.clone().text();

        // If it's a DNS error 1016, it's an uncreated subdomain
        if (errorText.includes('1016')) {
          return new Response(notFoundHTML, {
            status: 404,
            headers: { 'content-type': 'text/html;charset=UTF-8' },
          });
        }

        // Otherwise, the Lenovo tunnel or local upstream server is down/unreachable
        return new Response(offlineHTML, {
          status: 503,
          headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
      }

      // 2. If the Subdomain does not exist (404, 522, 523)
      if (response.status === 404 || response.status === 522 || response.status === 523) {
        return new Response(notFoundHTML, {
          status: 404,
          headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
      }

      // 3. Pass traffic normally if everything is working
      return response;
      
    } catch (err) {
      return new Response(notFoundHTML, {
        status: 404,
        headers: { 'content-type': 'text/html;charset=UTF-8' },
      });
    }
  }
};