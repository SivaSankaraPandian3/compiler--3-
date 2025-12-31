
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Preview({ srcDoc }) {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const handler = (event) => {
            if (event.data.type === "iframe-error") {
                setErrors((prev) => [...prev, event.data]);
            }
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, []);

    return (
        <div className="preview-pane">
            <div className="preview-header">
                <span>Preview</span>
            </div>

            <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                className="preview-iframe"
            />

            {/* Error Console */}
            {errors.length > 0 && (
                <div className="error-console">
                    <h4>Errors:</h4>
                    {errors.map((err, i) => (
                        <pre key={i} style={{ color: "red" }}>
                            {err.message}
                            {"\n"}Line: {err.lineno}, Column: {err.colno}
                        </pre>
                    ))}
                </div>
            )}
        </div>
    );
}

Preview.propTypes = {
    srcDoc: PropTypes.string.isRequired,
};
