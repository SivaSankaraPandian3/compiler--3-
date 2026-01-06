
// Mock Database for SQL
export const sqlDatabase = {
    CustomersArchive: {
        columns: ["customer_id", "first_name", "last_name", "age", "country"],
        data: [
            { customer_id: 1, first_name: "John", last_name: "Doe", age: 31, country: "USA" },
            { customer_id: 2, first_name: "Robert", last_name: "Luna", age: 22, country: "USA" },
            { customer_id: 3, first_name: "David", last_name: "Robinson", age: 22, country: "UK" },
            { customer_id: 4, first_name: "John", last_name: "Reinhardt", age: 25, country: "UK" },
            { customer_id: 5, first_name: "Betty", last_name: "Doe", age: 28, country: "UAE" }
        ]
    },
    OrdersArchive: {
        columns: ["order_id", "item", "amount", "customer_id"],
        data: [
            { order_id: 1, item: "Keyboard", amount: 400, customer_id: 4 },
            { order_id: 2, item: "Mouse", amount: 300, customer_id: 4 },
            { order_id: 3, item: "Monitor", amount: 12000, customer_id: 3 },
            { order_id: 4, item: "Keyboard", amount: 400, customer_id: 1 },
            { order_id: 5, item: "Mousepad", amount: 250, customer_id: 2 }
        ]
    },
    ShippingsArchive: {
        columns: ["shipping_id", "status", "customer_id"],
        data: [
            { shipping_id: 1, status: "Pending", customer_id: 2 },
            { shipping_id: 2, status: "Pending", customer_id: 4 }
        ]
    },
    pets: {
        columns: ["pet_id", "pet_name", "pet_type", "owner_name", "age", "color"],
        data: [
            { pet_id: 1, pet_name: "Buddy", pet_type: "Dog", owner_name: "Alice", age: 4, color: "Golden" },
            { pet_id: 2, pet_name: "Mittens", pet_type: "Cat", owner_name: "Bob", age: 2, color: "Black" },
            { pet_id: 3, pet_name: "Rex", pet_type: "Dog", owner_name: "Charlie", age: 2, color: "Brown" },
            { pet_id: 4, pet_name: "Tweety", pet_type: "Bird", owner_name: "David", age: 1, color: "Yellow" }
        ]
    },
    books: {
        columns: ["book_id", "title", "author", "price", "stock_quantity"],
        data: [
            { book_id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, stock_quantity: 10 },
            { book_id: 2, title: "1984", author: "George Orwell", price: 8.99, stock_quantity: 20 },
            { book_id: 3, title: "Python 101", author: "John Doe", price: 25.00, stock_quantity: 5 },
            { book_id: 4, title: "Cheap Reads", author: "Jane Smith", price: 5.00, stock_quantity: 50 }
        ]
    },
    employees: {
        columns: ["emp_id", "emp_name", "department", "salary", "hire_date", "position"],
        data: [
            { emp_id: 1, emp_name: "Alice", department: "IT", salary: 70000, hire_date: "2020-01-15", position: "Developer" },
            { emp_id: 2, emp_name: "Bob", department: "HR", salary: 50000, hire_date: "2019-05-20", position: "Manager" },
            { emp_id: 3, emp_name: "Charlie", department: "IT", salary: 80000, hire_date: "2021-03-10", position: "Lead" },
            { emp_id: 4, emp_name: "David", department: "Sales", salary: 60000, hire_date: "2018-11-05", position: "Executive" },
            { emp_id: 5, emp_name: "Eve", department: "Sales", salary: 65000, hire_date: "2022-02-14", position: "Associate" }
        ]
    },
    ElectronicsProducts: {
        columns: ["product_id", "product_name", "category", "price", "brand", "warranty_years"],
        data: [
            { product_id: 1, product_name: "Laptop", category: "Electronics", price: 1000, brand: "Samsung", warranty_years: 2 },
            { product_id: 2, product_name: "Phone", category: "Electronics", price: 800, brand: "Apple", warranty_years: 1 },
            { product_id: 3, product_name: "TV", category: "Electronics", price: 1200, brand: "Samsung", warranty_years: 3 },
            { product_id: 4, product_name: "Headphones", category: "Electronics", price: 150, brand: "Sony", warranty_years: 1 }
        ]
    },
    sales: {
        columns: ["sale_id", "product_id", "quantity_sold", "sale_date"],
        data: [
            { sale_id: 1, product_id: 1, quantity_sold: 2, sale_date: "2023-01-01" },
            { sale_id: 2, product_id: 2, quantity_sold: 5, sale_date: "2023-01-02" },
            { sale_id: 3, product_id: 1, quantity_sold: 1, sale_date: "2023-01-03" }
        ]
    },
    students: {
        columns: ["student_id", "student_name", "grade_level", "gpa", "enrollment_year"],
        data: [
            { student_id: 1, student_name: "Student A", grade_level: 10, gpa: 3.8, enrollment_year: 2021 },
            { student_id: 2, student_name: "Student B", grade_level: 9, gpa: 3.2, enrollment_year: 2022 },
            { student_id: 3, student_name: "Student C", grade_level: 11, gpa: 3.9, enrollment_year: 2020 },
            { student_id: 4, student_name: "Student D", grade_level: 10, gpa: 3.4, enrollment_year: 2021 }
        ]
    },
    customers: {
        columns: ["customer_id", "customer_name", "city", "total_purchases", "membership_type"],
        data: [
            { customer_id: 1, customer_name: "Rajesh", city: "Mumbai", total_purchases: 60000, membership_type: "VIP" },
            { customer_id: 2, customer_name: "Amit", city: "Delhi", total_purchases: 30000, membership_type: "Regular" },
            { customer_id: 3, customer_name: "Priya", city: "Mumbai", total_purchases: 55000, membership_type: "VIP" },
            { customer_id: 4, customer_name: "Sonia", city: "Bangalore", total_purchases: 15000, membership_type: "Regular" }
        ]
    },
    orders: {
        columns: ["order_id", "customer_name", "customer_id", "book_title", "order_amount", "order_status", "order_date", "quantity"],
        data: [
            { order_id: 1, customer_name: "John", customer_id: 4, book_title: "The Great Gatsby", order_amount: 500, order_status: "Completed", order_date: "2023-05-10", quantity: 2 },
            { order_id: 2, customer_name: "Alice", customer_id: 1, book_title: "1984", order_amount: 1500, order_status: "Completed", order_date: "2023-06-15", quantity: 1 },
            { order_id: 3, customer_name: "John", customer_id: 4, book_title: "Python 101", order_amount: 250, order_status: "Pending", order_date: "2023-07-20", quantity: 1 },
            { order_id: 4, customer_name: "Bob", customer_id: 2, book_title: "Cheap Reads", order_amount: 1200, order_status: "Completed", order_date: "2023-08-05", quantity: 3 }
        ]
    }
};

import initSqlJs from 'sql.js';

let sqlEngine = null;

// Update to improve error logging
const getSqlEngine = async () => {
    if (sqlEngine) return sqlEngine;
    try {
        const SQL = await initSqlJs({
            locateFile: file => `/sql-wasm.wasm`
        });
        sqlEngine = new SQL.Database();

        // Add common function aliases
        try {
            sqlEngine.create_function("substring", (str, start, len) => {
                if (str === null || str === undefined) return null;
                const s = String(str);
                const startIdx = Math.max(0, (Number(start) || 1) - 1);
                if (len === undefined) return s.substring(startIdx);
                return s.substring(startIdx, startIdx + Number(len));
            });
            sqlEngine.create_function("len", (str) => (str !== null && str !== undefined) ? String(str).length : null);
            sqlEngine.create_function("getdate", () => new Date().toISOString().replace('T', ' ').split('.')[0]);
            sqlEngine.create_function("now", () => new Date().toISOString().replace('T', ' ').split('.')[0]);
            sqlEngine.create_function("curdate", () => new Date().toISOString().split('T')[0]);
            sqlEngine.create_function("iif", (cond, t, f) => cond ? t : f);
            sqlEngine.create_function("isnull", (val, fallback) => (val === null || val === undefined) ? fallback : val);
            sqlEngine.create_function("ceiling", (x) => (x !== null && x !== undefined) ? Math.ceil(x) : null);
            sqlEngine.create_function("floor", (x) => (x !== null && x !== undefined) ? Math.floor(x) : null);
            sqlEngine.create_function("sqrt", (x) => (x !== null && x !== undefined) ? Math.sqrt(x) : null);
            sqlEngine.create_function("power", (x, y) => (x !== null && y !== null) ? Math.pow(x, y) : null);
        } catch (fErr) {
            console.warn("Could not create SQL function aliases:", fErr);
        }

        // Merge standard database with custom tables from localStorage
        const customTables = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
        const finalDatabase = { ...sqlDatabase };

        // Merge case-insensitively: custom tables overwrite built-in ones
        Object.entries(customTables).forEach(([key, val]) => {
            const existingKey = Object.keys(finalDatabase).find(k => k.toLowerCase() === key.toLowerCase());
            if (existingKey) delete finalDatabase[existingKey];
            finalDatabase[key] = val;
        });

        // Seed the database
        for (const [tableName, tableInfo] of Object.entries(finalDatabase)) {
            const columnsDef = tableInfo.columns.map(col => `"${col}"`).join(', ');

            // Clean drop and recreate to ensure schema match
            sqlEngine.run(`DROP TABLE IF EXISTS "${tableName}"`);
            sqlEngine.run(`CREATE TABLE "${tableName}" (${columnsDef})`);

            for (const row of tableInfo.data) {
                const keys = Object.keys(row);
                const cols = keys.map(k => `"${k}"`).join(', ');
                const vals = keys.map(k => {
                    const v = row[k];
                    if (v === null || v === undefined) return 'NULL';
                    if (typeof v === 'string') return `'${v.replace(/'/g, "''")}'`;
                    return v;
                }).join(', ');
                sqlEngine.run(`INSERT INTO "${tableName}" (${cols}) VALUES (${vals})`);
            }
        }
        return sqlEngine;
    } catch (err) {
        console.error("Failed to initialize SQL engine:", err);
        throw err;
    }
};

// Listen for custom table additions to reset engine
if (typeof window !== 'undefined') {
    window.addEventListener('sql-table-added', () => {
        sqlEngine = null; // Forces re-initialization on next execution
    });
}

export const executeSQL = async (query) => {
    try {
        let engine;
        try {
            engine = await getSqlEngine();
        } catch (e) {
            throw new Error(`SQL Engine Init Error: ${e.message}`);
        }

        if (!engine) throw new Error("SQL Engine not initialized (unknown reason)");

        // Handle a few common non-SELECT mock responses if needed, 
        // but sqlEngine.run handles them for real now.
        const normalizedQuery = query.trim();
        const lowerQuery = normalizedQuery.toLowerCase();

        // Execute query (exec returns an array of results for each statement)
        const res = engine.exec(normalizedQuery);
        if (res.length === 0) {
            // Check if it was a non-SELECT statement that affected rows
            if (!lowerQuery.startsWith('select')) {
                let message = "Command executed successfully";
                if (lowerQuery.startsWith('insert')) message = "Query OK, 1 row inserted";
                if (lowerQuery.startsWith('update')) message = "Query OK, rows affected";
                if (lowerQuery.startsWith('delete')) message = "Query OK, rows deleted";

                // Try to auto-fetch the affected table content
                try {
                    const match = normalizedQuery.match(/(?:insert\s+into|update|delete\s+from)\s+["']?([a-zA-Z0-9_]+)["']?/i);
                    if (match && match[1]) {
                        const tableName = match[1];
                        const checkRes = engine.exec(`SELECT * FROM "${tableName}" LIMIT 20`);
                        if (checkRes.length > 0) {
                            const lastResult = checkRes[0];
                            const columns = lastResult.columns;
                            const data = lastResult.values.map(values => {
                                const obj = {};
                                columns.forEach((col, i) => {
                                    obj[col] = values[i];
                                });
                                return obj;
                            });
                            return { message, columns, data };
                        }
                    }
                } catch (autoSelectErr) {
                    console.warn("Auto-select failed:", autoSelectErr);
                }

                return { message };
            }
            return { columns: [], data: [] };
        }

        // If multiple statements, return the last result set (typical for scripts ending in SELECT)
        const lastResult = res[res.length - 1];
        const columns = lastResult.columns;
        const data = lastResult.values.map(values => {
            const obj = {};
            columns.forEach((col, i) => {
                obj[col] = values[i];
            });
            return obj;
        });

        return { columns, data };


    } catch (error) {
        console.error("Real SQL Error:", error);
        return { error: error.message };
    }
};


export const executeJava = (sourceCode) => {

    let outputBuffer = "";
    const variables = {};

    // Helper to evaluate simple expressions
    const evaluateExpression = (expr) => {
        expr = expr.trim();
        // String literal
        if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);
        // Number literal
        if (!isNaN(expr)) return Number(expr);
        // Variable
        if (variables[expr] !== undefined) return variables[expr];

        // Simple Math (binary)
        const mathMatch = expr.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
        if (mathMatch) {
            const val1 = evaluateExpression(mathMatch[1]);
            const val2 = evaluateExpression(mathMatch[3]);
            const op = mathMatch[2];
            if (typeof val1 === 'number' && typeof val2 === 'number') {
                switch (op) {
                    case '+': return val1 + val2;
                    case '-': return val1 - val2;
                    case '*': return val1 * val2;
                    case '/': return val1 / val2;
                }
            }
            // String concat
            if (op === '+') return val1 + "" + val2;
        }
        return expr;
    };

    const lines = sourceCode.split('\n');

    try {
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // int[] arr = {1, 2, 3};
            const arrayMatch = line.match(/int\[\]\s+(\w+)\s*=\s*\{(.*)\};/);
            if (arrayMatch) {
                const values = arrayMatch[2].split(',').map(v => evaluateExpression(v.trim()));
                variables[arrayMatch[1]] = values;
            }

            // Multi-variable mismatch fix
            const multiVarMatch = line.match(/(?:int|String|double|float|char)\s+(.+);/);
            if (multiVarMatch && !line.includes('[]') && !line.includes('(')) {
                const typePart = multiVarMatch[0].trim().split(/\s+/)[0];
                const decls = multiVarMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    const varName = parts[0].trim();
                    if (parts.length === 2) {
                        variables[varName] = evaluateExpression(parts[1].trim());
                    } else {
                        variables[varName] = (typePart === 'String' ? "" : 0);
                    }
                });
            }

            // sum += num;
            const addAssignMatch = line.match(/(\w+)\s*\+=\s*(.+);/);
            if (addAssignMatch) {
                const varName = addAssignMatch[1];
                if (variables[varName] !== undefined) {
                    const addedVal = evaluateExpression(addAssignMatch[2]);
                    if (typeof addedVal === 'number') {
                        variables[varName] += addedVal;
                    }
                }
            }

            // for (int num : arr)
            const forMatch = line.match(/for\s*\(int\s+(\w+)\s*:\s*(\w+)\)/);
            if (forMatch) {
                const iterVar = forMatch[1];
                const arrayVar = forMatch[2];
                if (Array.isArray(variables[arrayVar])) {
                    // Simple simulation
                    const nextLine = lines[lines.indexOf(line) + 1] || "";
                    if (nextLine.includes('+=') && nextLine.includes(iterVar)) {
                        const targetVarMatch = nextLine.match(/(\w+)\s*\+=/);
                        if (targetVarMatch) {
                            const targetVar = targetVarMatch[1];
                            variables[arrayVar].forEach(val => {
                                variables[targetVar] += val;
                            });
                        }
                    }
                }
            }

            // String s = "Text";
            const strMatch = line.match(/String\s+(\w+)\s*=\s*"(.*)";/);
            if (strMatch) variables[strMatch[1]] = strMatch[2];

            // System.out.println(...)
            if (line.includes('System.out.println')) {
                const match = line.match(/System\.out\.println\((.*)\);/);
                if (match) {
                    let content = match[1];
                    const parts = content.split('+');
                    let lineOut = "";
                    parts.forEach(part => {
                        lineOut += evaluateExpression(part);
                    });
                    outputBuffer += lineOut + "\n";
                }
            }
        });
    } catch (e) {
        outputBuffer += `\nError parsing Java: ${e.message}`;
        return { error: outputBuffer };
    }

    if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
    return { output: outputBuffer };
};

export const executeCpp = (sourceCode) => {
    let outputBuffer = "";
    const variables = {};
    const lines = sourceCode.split('\n');
    try {
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // Support int/float/double/char a = 10, b = 20;
            const multiVarMatch = line.match(/(?:int|float|double|char|string)\s+(.+);/);
            if (multiVarMatch && !line.includes('(')) {
                const decls = multiVarMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    if (parts.length === 2) {
                        const varName = parts[0].trim();
                        const val = parts[1].trim();
                        if (!isNaN(val)) variables[varName] = Number(val);
                        else {
                            const mathMatch = val.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
                            if (mathMatch) {
                                const v1 = !isNaN(mathMatch[1]) ? Number(mathMatch[1]) : variables[mathMatch[1]];
                                const v2 = !isNaN(mathMatch[3]) ? Number(mathMatch[3]) : variables[mathMatch[3]];
                                if (v1 !== undefined && v2 !== undefined) {
                                    if (mathMatch[2] === '+') variables[varName] = v1 + v2;
                                    if (mathMatch[2] === '-') variables[varName] = v1 - v2;
                                    if (mathMatch[2] === '*') variables[varName] = v1 * v2;
                                    if (mathMatch[2] === '/') variables[varName] = v1 / v2;
                                }
                            }
                        }
                    } else {
                        const varName = parts[0].trim();
                        variables[varName] = 0;
                    }
                });
            }

            // Naive cout parser
            if (line.includes('cout')) {
                // Remove cout << and ending semicolon/endl
                let content = line.replace(/cout\s*<</, '').replace(/<<\s*endl\s*;?/, '').replace(/;/, '').trim();

                // Try to resolve content
                if (content.startsWith('"') && content.endsWith('"')) {
                    outputBuffer += content.slice(1, -1) + "\n";
                } else if (variables[content] !== undefined) {
                    outputBuffer += variables[content] + "\n";
                } else {
                    // Try simple math in cout
                    const mathMatch = content.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
                    if (mathMatch) {
                        const v1 = !isNaN(mathMatch[1]) ? Number(mathMatch[1]) : variables[mathMatch[1]];
                        const v2 = !isNaN(mathMatch[3]) ? Number(mathMatch[3]) : variables[mathMatch[3]];
                        if (v1 !== undefined && v2 !== undefined) {
                            if (mathMatch[2] === '+') outputBuffer += (v1 + v2) + "\n";
                            if (mathMatch[2] === '-') outputBuffer += (v1 - v2) + "\n";
                            if (mathMatch[2] === '*') outputBuffer += (v1 * v2) + "\n";
                            if (mathMatch[2] === '/') outputBuffer += (v1 / v2) + "\n";
                        }
                    }
                }
            }
        });
    } catch (e) {
        outputBuffer += `\nError parsing C++: ${e.message}`;
        return { error: outputBuffer };
    }
    if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
    return { output: outputBuffer };
};

export const executeCode = async (language, code, context = {}) => {
    const lang = (language || '').toLowerCase();

    if (['sql', 'mysql', 'postgresql', 'sqlserver', 'sqlite', 'oracle'].includes(lang)) {
        const result = await executeSQL(code);
        return result;
    }

    if (lang === 'java') {
        return executeJava(code);
    }

    if (lang === 'c++' || lang === 'cpp') {
        return executeCpp(code);
    }

    if (lang === 'python') {
        if (!context.pyodide) {
            return { error: 'Python engine not initialized.' };
        }
        try {
            let output = "";
            context.pyodide.setStdout({
                batched: (msg) => { output += msg + "\n"; }
            });

            // Mock input() if inputs are provided
            let codeToRun = code;
            if (context.inputs && Array.isArray(context.inputs)) {
                // Escape input strings to avoid injection or syntax errors in Python string
                const safeInputs = context.inputs.map(i => String(i).replace(/"/g, '\\"').replace(/\n/g, '\\n'));
                const inputList = `["${safeInputs.join('", "')}"]`;

                const mockInput = `
import sys
_input_buffer = ${inputList}
_input_idx = 0
def input(prompt=None):
    global _input_idx
    if prompt:
        print(prompt, end='')
    if _input_idx < len(_input_buffer):
        val = _input_buffer[_input_idx]
        _input_idx += 1
        return str(val)
    raise EOFError("EOF when reading a line")
`;
                codeToRun = mockInput + "\n" + code;
            }

            const result = await context.pyodide.runPythonAsync(codeToRun);
            if (!output && result !== undefined) {
                output = result.toString();
            }
            return { output: output || "Executed successfully." };
        } catch (error) {
            return { error: error.message };
        }
    }

    if (lang === 'javascript' || lang === 'js') {
        try {
            // Check for syntax errors first
            new Function(code);

            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            new Function(code)();
            console.log = originalLog;
            return { output: logs.join('\n') || "Executed successfully." };
        } catch (e) {
            return { error: `Syntax/Runtime Error: ${e.message}` };
        }
    }

    if (lang === 'html' || lang === 'css') {
        const hasHtmlTags = /<[a-z][\s\S]*>/i.test(code);
        const isFullHtml = /<html[\s\S]*>/i.test(code);

        if (isFullHtml) {
            return { html: code };
        }

        const processedCode = (lang === 'css' && !hasHtmlTags)
            ? `<style>${code}</style>
               <div class="container">
                 <div class="box text-red text-blue primary active">Default Box (Styled Area)</div>
                 <h1 class="header">Main Heading</h1>
                 <p class="text-p">This is a sample paragraph for styling.</p>
                 <a href="#" class="link">Sample Link</a>
                 <button class="btn">Button</button>
                 <ul class="list">
                   <li>List Item 1</li>
                   <li>List Item 2</li>
                 </ul>
               </div>`
            : code;

        // Use Base64 to safely inject code and avoid any template literal escaping issues
        const base64Code = btoa(unescape(encodeURIComponent(processedCode)));

        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 0; color: #333; margin: 0; background: #fff; display: flex; flex-direction: column; height: 100vh; }
    #output-viewport { flex: 1; padding: 20px; overflow-y: auto; box-sizing: border-box; }
    #console-logs { 
        height: 150px; 
        background: #1e1e1e; 
        color: #d4d4d4; 
        padding: 10px; 
        font-family: 'SFMono-Regular', Consolas, monospace; 
        font-size: 12px; 
        overflow-y: auto; 
        border-top: 2px solid #333;
        box-sizing: border-box;
    }
    .log-entry { margin-bottom: 4px; padding: 2px 4px; border-radius: 2px; white-space: pre-wrap; word-break: break-all; }
    .log-info { color: #9cdcfe; }
    .log-error { color: #f48771; background: rgba(244, 135, 113, 0.1); }
    .log-warn { color: #cca700; }
    
    .container { border: 2px dashed #ccc; padding: 20px; min-height: 100px; border-radius: 8px; margin-bottom: 15px; }
    .box { background: #4a5568; color: white; padding: 15px; border-radius: 4px; text-align: center; }
  </style>
  <script>
    window.onerror = function(msg, url, line, col, error) {
      const logContainer = document.getElementById('console-logs');
      if (logContainer) {
        const div = document.createElement('div');
        div.className = 'log-entry log-error';
        div.textContent = '✖ Run Error: ' + msg;
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
      }
      return false;
    };

    window.alert = function(message) {
      window.parent.postMessage({
        type: "iframe-alert",
        message: message
      }, "*");
    };

  </script>
</head>
<body>
  <div id="output-viewport"></div>
  <div id="console-logs"></div>
  <script>
    (function() {
      const logContainer = document.getElementById('console-logs');
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      
      const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? '✖ ' : type === 'warn' ? '⚠ ' : '› ') + 
                          (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
      };

      console.log = (...args) => { addLog(args.join(' '), 'info'); originalLog.apply(console, args); };
      console.error = (...args) => { addLog(args.join(' '), 'error'); originalError.apply(console, args); };
      console.warn = (...args) => { addLog(args.join(' '), 'warn'); originalWarn.apply(console, args); };

      // Safely inject code
      try {
        const decodedCode = decodeURIComponent(escape(atob('${base64Code}')));
        document.getElementById('output-viewport').innerHTML = decodedCode;
        
        // Execute scripts in injected content
        const scripts = document.getElementById('output-viewport').querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      } catch (e) {
        addLog('Injection Error: ' + e.message, 'error');
      }
    })();
  </script>
</body>
</html>
        `;
        return { html: htmlTemplate };
    }

    if (lang === 'react') {
        // Pre-validate React syntax if Babel is available in main thread
        if (typeof Babel !== 'undefined') {
            try {
                Babel.transform(code, { presets: ['react'] });
            } catch (e) {
                return { error: `Syntax Error: ${e.message}` };
            }
        }

        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const reactTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 0; color: #333; margin: 0; background: #fff; display: flex; flex-direction: column; height: 100vh; }
    #root { flex: 1; min-height: 100px; padding: 20px; box-sizing: border-box; overflow-y: auto; }
    #console-logs { 
        height: 150px; 
        background: #1e1e1e; 
        color: #d4d4d4; 
        padding: 10px; 
        font-family: 'SFMono-Regular', Consolas, monospace; 
        font-size: 12px; 
        overflow-y: auto; 
        border-top: 2px solid #333;
    }
    .log-entry { margin-bottom: 4px; padding: 2px 4px; border-radius: 2px; white-space: pre-wrap; word-break: break-all; }
    .log-info { color: #9cdcfe; }
    .log-error { color: #f48771; background: rgba(244, 135, 113, 0.1); }
    .log-warn { color: #cca700; }
  </style>
</head>
<body>
  <div id="root"></div>
  <div id="console-logs"></div>
  <script>
    const logContainer = document.getElementById('console-logs');
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? '✖ ' : type === 'warn' ? '⚠ ' : '› ') + (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
    };
    console.log = (...args) => { addLog(args.join(' '), 'info'); originalLog.apply(console, args); };
    console.error = (...args) => { addLog(args.join(' '), 'error'); originalError.apply(console, args); };
    console.warn = (...args) => { addLog(args.join(' '), 'warn'); originalWarn.apply(console, args); };
    
    const { useState, useEffect, useCallback, useMemo, useRef, useReducer, useContext } = React;
    
    try {
        const code = decodeURIComponent(escape(atob('${base64Code}')));
        const processedCode = code
            .replace(/import\\s+[\\s\\S]*?\\s+from\\s+['"].*?['"];?/g, '')
            .replace(/export default (\\w+);?/g, 'window.DefaultExport = $1;')
            .replace(/export (const|class|function)/g, '$1');

        const evalCode = Babel.transform(processedCode, { presets: ['react'] }).code;
        
        // Execute in global scope
        window.eval(evalCode);
        
        let ComponentToRender = null;
        if (window.DefaultExport) {
            ComponentToRender = window.DefaultExport;
        } else if (window.App) {
            ComponentToRender = window.App;
        } else if (window.Counter) {
            ComponentToRender = window.Counter;
        } else if (typeof App !== 'undefined') {
            ComponentToRender = App;
        } else if (typeof Counter !== 'undefined') {
            ComponentToRender = Counter;
        } else {
            // Search all window properties for likely components
            const potentialNames = Object.keys(window).filter(key => 
                typeof window[key] === 'function' && 
                !['React', 'ReactDOM', 'Babel'].includes(key) &&
                (/^[A-Z]/.test(key) || key.toLowerCase() === 'app' || key.toLowerCase() === 'counter')
            );
            if (potentialNames.length > 0) {
                // Prefer App or Counter if they exist among these
                const bestMatch = potentialNames.find(n => n.toLowerCase() === 'app' || n.toLowerCase() === 'counter') || potentialNames[0];
                ComponentToRender = window[bestMatch];
            }
        }

        if (ComponentToRender) {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(ComponentToRender));
        } else {
            addLog('Could not find a React component to render. Make sure your component name is capitalized (e.g., function App() { ... }).', 'error');
        }
    } catch (e) {
        addLog('Runtime Error: ' + e.message, 'error');
    }
  </script>
</body>
</html>
        `;
        return { html: reactTemplate };
    }

    if (lang === 'angular') {
        // Pre-validate Angular/TS syntax if Babel is available
        if (typeof Babel !== 'undefined') {
            try {
                Babel.transform(code, {
                    presets: ['typescript'],
                    plugins: [['proposal-decorators', { legacy: true }], 'proposal-class-properties']
                });
            } catch (e) {
                return { error: `Angular/TS Syntax Error: ${e.message}` };
            }
        }
        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const angularTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/reflect-metadata@0.1.13/Reflect.js" crossorigin></script>
  <script src="https://unpkg.com/zone.js@0.14.4/bundles/zone.umd.min.js" crossorigin></script>
  <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/core@12.2.16/bundles/core.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/common@12.2.16/bundles/common.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/compiler@12.2.16/bundles/compiler.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/platform-browser@12.2.16/bundles/platform-browser.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/animations@12.2.16/bundles/animations.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/animations@12.2.16/bundles/animations-browser.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/platform-browser@12.2.16/bundles/platform-browser-animations.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/platform-browser-dynamic@12.2.16/bundles/platform-browser-dynamic.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/forms@12.2.16/bundles/forms.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/router@12.2.16/bundles/router.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@angular/common@12.2.16/bundles/common-http.umd.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 20px; margin: 0; background: #f8fafc; color: #1e293b; }
    #console-logs { 
        position: fixed; bottom: 0; left: 0; right: 0;
        height: 120px; background: #0f172a; color: #e2e8f0; 
        padding: 10px; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; 
        overflow-y: auto; border-top: 2px solid #334155; z-index: 1000;
        box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
    }
    .log-entry { margin-bottom: 4px; border-radius: 2px; padding: 2px 6px; }
    .log-error { color: #f87171; background: rgba(248, 113, 113, 0.1); }
    .log-info { color: #38bdf8; }
    app-root { display: block; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); min-height: 100px; }
  </style>
</head>
<body>
  <app-root><div style="color: #64748b; text-align: center; padding: 40px;">Initializing Angular Environment...</div></app-root>
  <div id="console-logs"></div>
  <script>
    const logContainer = document.getElementById('console-logs');
    const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? '✖ ' : '› ') + (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
    };
    window.onerror = (msg) => addLog(msg, 'error');
    console.log = (...args) => { addLog(args.join(' ')); window.parent.postMessage({type: 'console', method: 'log', args: args}, '*'); };
    console.error = (...args) => { addLog(args.join(' '), 'error'); window.parent.postMessage({type: 'console', method: 'error', args: args}, '*'); };

    async function startApp() {
      try {
        if (typeof ng === 'undefined' || typeof Babel === 'undefined') {
            addLog('Waiting for Angular libraries to load...', 'info');
            let attempts = 0;
            // Wait up to 30 seconds for slow connections
            while ((typeof ng === 'undefined' || typeof Babel === 'undefined') && attempts < 300) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
                // Show progress every 5 seconds
                if (attempts % 50 === 0) {
                    const elapsed = attempts / 10;
                    addLog('Still loading... (' + elapsed + 's elapsed)', 'info');
                }
            }
            if (typeof ng === 'undefined' || typeof Babel === 'undefined') {
                const missing = [];
                if (typeof ng === 'undefined') missing.push('Angular');
                if (typeof Babel === 'undefined') missing.push('Babel');
                throw new Error(missing.join(' and ') + ' failed to load. Please check your internet connection or firewall.');
            }
            addLog('Libraries loaded successfully!', 'info');
        }

        const rawCode = decodeURIComponent(escape(atob('${base64Code}')));
        
        // Define common Angular globals for easier access
        const { platformBrowserDynamic } = ng.platformBrowserDynamic;
        
        // Define common Angular decorators globally for transpiled code access
        window.Component = ng.core.Component;
        window.NgModule = ng.core.NgModule;
        window.Input = ng.core.Input;
        window.Output = ng.core.Output;
        window.ViewChild = ng.core.ViewChild;
        window.EventEmitter = ng.core.EventEmitter;
        window.OnInit = ng.core.OnInit;
        window.OnDestroy = ng.core.OnDestroy;
        window.CommonModule = ng.common.CommonModule;
        window.FormsModule = ng.forms.FormsModule;
        window.ReactiveFormsModule = ng.forms.ReactiveFormsModule;
        window.HttpClientModule = ng.common.http.HttpClientModule;
        window.BrowserModule = ng.platformBrowser.BrowserModule;
        window.BrowserAnimationsModule = ng.platformBrowser.animations.BrowserAnimationsModule;

        let processedCode = rawCode
            .replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, '')
            .replace(/export\s+class/g, 'class');

        // Check if it's a full component or just a template
        if (!processedCode.includes('@Component')) {
            addLog('No @Component detected. Wrapping as template...', 'info');
            processedCode = "@Component({\n" +
                "  selector: 'app-root',\n" +
                "  template: " + JSON.stringify(processedCode) + "\n" +
                "})\n" +
                "class AppComponent {\n" +
                "  doSomething() { console.log('Button clicked!'); }\n" +
                "}";
        }

    const transpiled = Babel.transform(processedCode, {
        filename: 'component.ts',
        presets: ['typescript'],
        plugins: [['proposal-decorators', { legacy: true }], 'proposal-class-properties']
    }).code;

    // Auto-detect Root Component Name
    const classMatch = processedCode.match(/class\\s+(\\w+)/);
    const className = classMatch ? classMatch[1] : 'AppComponent';

    // Execute transpiled component code and ensure the class is attached to window
    addLog('Executing component code...', 'info');
    eval(transpiled + '\\nif (typeof ' + className + ' !== "undefined") window["' + className + '"] = ' + className + ';');

    const RootComponent = window[className];

    if (!RootComponent) {
        throw new Error('Could not find component class: ' + className);
    }

    window.RootComponent = RootComponent;

    // Create dynamic module
    const moduleCode = Babel.transform(\`
            @NgModule({
              imports: [
                BrowserModule,
                BrowserAnimationsModule,
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
              ],
              declarations: [window.RootComponent],
              bootstrap: [window.RootComponent]
            })
            class DynamicModule {}
            window.DynamicModule = DynamicModule;
        \`, {
            filename: 'module.ts',
            presets: ['typescript'],
            plugins: [['proposal-decorators', { legacy: true }], 'proposal-class-properties']
        }).code;

        eval(moduleCode);

        platformBrowserDynamic().bootstrapModule(window.DynamicModule)
          .then(() => addLog('✓ Angular bootstrapped successfully!', 'info'))
          .catch(err => addLog('Bootstrap Error: ' + err.message, 'error'));

      } catch (e) {
        addLog('Angular Runtime Error: ' + e.message, 'error');
        console.error(e);
      }
    }

    // Start with a small delay to ensure script contexts are initialized
    setTimeout(startApp, 100);
  </script>
</body>
</html>
        `;
        return { html: angularTemplate };
    }

    return { error: `Execution for ${language} is not supported yet.` };
};
