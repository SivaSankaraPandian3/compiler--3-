import React from "react";
import PropTypes from "prop-types";
import Editor from "react-simple-code-editor";

export default function CodeEditor({ label, value, onChange, language }) {
  const highlightCode = (code) => {
    let lang = language;
    if (lang === 'react') lang = 'jsx';
    if (lang === 'html') lang = 'markup';
    if (lang === 'c++' || lang === 'cpp') lang = 'cpp';
    if (lang === 'angular') lang = 'typescript'; // Map angular to typescript
    if (lang === 'java') lang = 'java';
    if (lang === 'python') lang = 'python';
    if (lang === 'sql' || lang === 'mysql' || lang === 'postgresql' || lang === 'sqlserver') lang = 'sql'; // Add SQL support and its dialects

    if (window.Prism && window.Prism.languages[lang]) {
      return window.Prism.highlight(code, window.Prism.languages[lang], lang);
    }
    // Fallback if specific language not loaded
    if (window.Prism && window.Prism.languages.javascript) {
      return window.Prism.highlight(code, window.Prism.languages.javascript, 'javascript');
    }
    return code;
  };

  return (
    <div className="editor-container">
      <div className="editor-header">
        <span className="editor-label">{label}</span>
      </div>
      <div className="editor-wrapper">
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={highlightCode}
          padding={0}
          style={{
            fontFamily: "'Fira Code', 'Cascadia Code', 'Source Code Pro', monospace",
            lineHeight: "1.5",
            fontSize: 15,
            backgroundColor: "#1e1e1e",
            color: "#e6e6e6", // Bright text for high contrast
            caretColor: "#ffffff",
            minHeight: "100%",
          }}
          className="code-editor"
          textareaid="code-textarea"
          preid="code-pre"
          textareaClassName="code-textarea"
          spellCheck="false"
        />
      </div>
    </div>
  );
}

CodeEditor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
