
import { useState, useEffect } from "react";
import Editor from "../Editor.jsx";
import Preview from "../Preview.jsx";
import "../../styles/App.css";

function HtmlCompiler() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>
            ${html}

            <style>
              ${css}
            </style>

            <!-- Error catcher -->
            <script>
              window.onerror = function(message, source, lineno, colno, error) {
                window.parent.postMessage(
                  { 
                    type: "iframe-error",
                    message,
                    source,
                    lineno,
                    colno
                  },
                  "*"
                );
              };
            </script>

            <!-- User JS code -->
            <script>
              try {
                ${js}
              } catch(err) {
                window.parent.postMessage(
                  {
                    type: "iframe-error",
                    message: err.message,
                    source: "User JS",
                    lineno: 0,
                    colno: 0
                  },
                  "*"
                );
              }
            </script>

          </body>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="main-content">
      <div className="editors-pane">
        <div className="editor-section">
          <Editor
            label="HTML"
            value={html}
            onChange={setHtml}
            language="html"
          />
        </div>

        <div className="editor-section">
          <Editor
            label="CSS"
            value={css}
            onChange={setCss}
            language="css"
          />
        </div>

        <div className="editor-section">
          <Editor
            label="JavaScript"
            value={js}
            onChange={setJs}
            language="javascript"
          />
        </div>
      </div>

      <Preview srcDoc={srcDoc} />
    </div>
  );
}

export default HtmlCompiler;
