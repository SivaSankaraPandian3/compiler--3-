
import React, { useState, useEffect } from "react";
import Editor from "../Editor.jsx";
import Preview from "../Preview.jsx";
import "../../styles/App.css";

function ReactCompiler() {
  const [html, setHtml] = useState(`<!-- 
  NOTE: This is the HTML file. 
  Write your React code in the JS tab/pane.
  The React App will mount to the 'root' div below.
-->
<div id="root"></div>`);

  const [css, setCss] = useState(`body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 0 auto;
}

button {
  background: #61dafb;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background: #21a1f1;
}`);

  const [js, setJs] = useState(`import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// Main App Component
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello React!</h1>
      <p>This component is fully interactive.</p>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

// Application Entry Point
const root = createRoot(document.getElementById('root'));
root.render(<App />);
`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Using Import Maps for modern ESM React
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            
            <!-- Import Map for React modules -->
            <script type="importmap">
            {
              "imports": {
                "react": "https://esm.sh/react@18.2.0",
                "react-dom/client": "https://esm.sh/react-dom@18.2.0/client"
              }
            }
            </script>
            
            <!-- Babel for in-browser JSX compilation -->
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          </head>
          <body>
            ${html}

            <script>
              window.alert = function(message) {
                window.parent.postMessage({
                  type: "iframe-alert",
                  message: message
                }, "*");
              };
            </script>


            <style>
              ${css}
            </style>

            <script type="text/babel" data-type="module">
              try {
                ${js}
              } catch(err) {
                 window.parent.postMessage({ type: "iframe-error", message: err.message }, "*");
              }
            </script>
          </body>
        </html>
      `);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="main-content">
      <div className="editors-pane">
        <div className="editor-section">
          <Editor label="HTML (Structure)" value={html} onChange={setHtml} language="html" />
        </div>
        <div className="editor-section">
          <Editor label="CSS (Styles)" value={css} onChange={setCss} language="css" />
        </div>
        <div className="editor-section">
          <Editor label="React / JSX (Logic)" value={js} onChange={setJs} language="javascript" />
        </div>
      </div>
      <Preview srcDoc={srcDoc} />
    </div>
  );
}

export default ReactCompiler;
