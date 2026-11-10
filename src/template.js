export const offlineHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Host Unreachable | @shamil-tp</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;800&display=swap');
    
    body { 
      background: #09090b; 
      color: #fafafa; 
      font-family: 'Inter', sans-serif; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      margin: 0; 
      overflow: hidden; 
    }
    
    /* Subtle tech background grid */
    .grid-bg { 
      position: absolute; 
      top: 0; left: 0; width: 100%; height: 100%; 
      background-image: linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px); 
      background-size: 40px 40px; 
      opacity: 0.15; 
      z-index: -1; 
    }
    
    .card { 
      background: rgba(24, 24, 27, 0.7); 
      backdrop-filter: blur(16px); 
      -webkit-backdrop-filter: blur(16px);
      padding: 40px; 
      border-radius: 16px; 
      border: 1px solid #27272a; 
      max-width: 550px; 
      width: 90%; 
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); 
      z-index: 1; 
    }
    
    .header { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      margin-bottom: 30px; 
      border-bottom: 1px solid #27272a; 
      padding-bottom: 15px; 
    }
    
    .branding { 
      font-family: 'Fira Code', monospace; 
      color: #71717a; 
      font-size: 0.85rem; 
      letter-spacing: 0.05em; 
    }
    
    .status-container { 
      display: flex; 
      align-items: center; 
      gap: 10px; 
      background: rgba(239, 68, 68, 0.1); 
      padding: 6px 14px; 
      border-radius: 20px; 
      border: 1px solid rgba(239, 68, 68, 0.2); 
    }
    
    .pulse-dot { 
      width: 8px; 
      height: 8px; 
      background: #ef4444; 
      border-radius: 50%; 
      box-shadow: 0 0 10px #ef4444; 
      animation: pulse 2s infinite; 
    }
    
    @keyframes pulse { 
      0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 
      70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 
      100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } 
    }
    
    .status-text { 
      color: #ef4444; 
      font-size: 0.75rem; 
      font-weight: 700; 
      font-family: 'Fira Code', monospace; 
      letter-spacing: 0.1em;
    }
    
    h1 { 
      font-size: 2.2rem; 
      margin: 0 0 15px 0; 
      font-weight: 800; 
      background: linear-gradient(to right, #ffffff, #71717a); 
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent; 
    }
    
    p { 
      color: #a1a1aa; 
      line-height: 1.7; 
      margin: 0 0 20px 0; 
      font-size: 1.05rem; 
    }
    
    /* Custom Mock Terminal */
    .terminal { 
      background: #000000; 
      padding: 16px; 
      border-radius: 8px; 
      font-family: 'Fira Code', monospace; 
      font-size: 0.85rem; 
      color: #a1a1aa; 
      margin-top: 30px; 
      border: 1px solid #27272a; 
      text-align: left; 
      line-height: 1.5;
    }
    
    .terminal .prompt { color: #10b981; } /* Green */
    .terminal .path { color: #3b82f6; }   /* Blue */
    .terminal .err { color: #ef4444; }    /* Red */
    .terminal .cmd { color: #facc15; }    /* Yellow */
    
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .cursor { animation: blink 1.2s step-end infinite; color: #fafafa; }
    
    .signature { 
      margin-top: 35px; 
      text-align: center; 
      font-size: 0.85rem; 
      color: #52525b; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      gap: 8px; 
    }
    
    .signature a { 
      color: #e4e4e7; 
      text-decoration: none; 
      font-weight: 600; 
      display: inline-flex; 
      align-items: center; 
      gap: 6px; 
      transition: color 0.2s;
      padding: 6px 12px;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 6px;
    }
    
    .signature a:hover { 
      color: #3b82f6; 
      border-color: #3b82f6;
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="card">
    <div class="header">
      <div class="branding">Cloudflare Edge / Node 01</div>
      <div class="status-container">
        <div class="pulse-dot"></div>
        <span class="status-text">OFFLINE</span>
      </div>
    </div>
    
    <h1>Connection Refused</h1>
    <p>You've successfully reached the edge routing network, but the origin server hosting this application is currently powered down or undergoing maintenance.</p>
    
    <div class="terminal">
      <span class="prompt">shamil_tp@neo</span>:<span class="path">~</span>$ ping application.local<br>
      <span class="err">Destination Host Unreachable</span><br>
      <span class="prompt">shamil_tp@neo</span>:<span class="path">~</span>$ <span class="cmd">cloudflared tunnel info</span><br>
      <span class="err">Status: Disconnected (530)</span><br>
      <span class="prompt">shamil_tp@neo</span>:<span class="path">~</span>$<span class="cursor">_</span>
    </div>

    <div class="signature">
      <span>Custom infrastructure engineered by</span>
      <a href="https://github.com/shamil-tp" target="_blank">
        <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        shamil-tp
      </a>
    </div>
  </div>
</body>
</html>
`