export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subdomain Not Found</title>
      <style>
        body { 
          background-color: #121212; 
          color: #e0e0e0; 
          font-family: monospace; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          margin: 0; 
          text-align: center;
        }
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

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
      status: 404
    });
  }
}