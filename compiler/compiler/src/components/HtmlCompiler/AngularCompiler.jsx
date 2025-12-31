
import React, { useState, useEffect } from "react";
import Editor from "../Editor.jsx";
import Preview from "../Preview.jsx";
import "../../styles/App.css";

function AngularCompiler() {
    const [html, setHtml] = useState(`
<div ng-app="myApp" ng-controller="myCtrl">
  <h1>{{ greeting }}</h1>
  <input type="text" ng-model="name" placeholder="Enter name">
  <p>Hello, {{ name }}!</p>
</div>
`);
    const [css, setCss] = useState("body { font-family: sans-serif; padding: 20px; }");
    const [js, setJs] = useState(`
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.greeting = 'Welcome to Angular!';
  $scope.name = 'World';
});
`);
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <head>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
          </head>
          <body>
            ${html}

            <style>
              ${css}
            </style>

            <script>
               try {
                 ${js}
               } catch(err) {
                 console.error(err);
               }
            </script>
          </body>
        </html>
      `);
        }, 500);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="main-content">
            <div className="editors-pane">
                <div className="editor-section">
                    <Editor label="HTML (View)" value={html} onChange={setHtml} language="html" />
                </div>
                <div className="editor-section">
                    <Editor label="CSS" value={css} onChange={setCss} language="css" />
                </div>
                <div className="editor-section">
                    <Editor label="Angular JS (Controller)" value={js} onChange={setJs} language="javascript" />
                </div>
            </div>
            <Preview srcDoc={srcDoc} />
        </div>
    );
}

export default AngularCompiler;
