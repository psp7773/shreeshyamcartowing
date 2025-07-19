import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Import SpeedInsights once
import { SpeedInsights } from '@vercel/speed-insights/react'

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    
    {/* ✅ Speed Insights inserted below */}
    <SpeedInsights />

    {/* Optional message */}
    {/* <p style={{ textAlign: "center", fontSize: "12px", color: "#888" }}>
      Speed tracking enabled 🚀
    </p> */}
  </React.StrictMode>
);
