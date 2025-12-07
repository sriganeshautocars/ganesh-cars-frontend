// --- Safari Polyfill for requestIdleCallback ---
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function (cb) {
    return setTimeout(() => {
      const start = Date.now();
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1);
  };
}

if (!window.cancelIdleCallback) {
  window.cancelIdleCallback = function (id) {
    clearTimeout(id);
  };
}
// -----------------------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
