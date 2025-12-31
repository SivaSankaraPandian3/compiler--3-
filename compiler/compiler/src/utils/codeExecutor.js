
// Mock Database for SQL
export const sqlDatabase = {
    Customers: {
        columns: ["customer_id", "first_name", "last_name", "age", "country"],
        data: [
            { customer_id: 1, first_name: "John", last_name: "Doe", age: 31, country: "USA" },
            { customer_id: 2, first_name: "Robert", last_name: "Luna", age: 22, country: "USA" },
            { customer_id: 3, first_name: "David", last_name: "Robinson", age: 22, country: "UK" },
            { customer_id: 4, first_name: "John", last_name: "Reinhardt", age: 25, country: "UK" },
            { customer_id: 5, first_name: "Betty", last_name: "Doe", age: 28, country: "UAE" }
        ]
    },
    Orders: {
        columns: ["order_id", "item", "amount", "customer_id"],
        data: [
            { order_id: 1, item: "Keyboard", amount: 400, customer_id: 4 },
            { order_id: 2, item: "Mouse", amount: 300, customer_id: 4 },
            { order_id: 3, item: "Monitor", amount: 12000, customer_id: 3 },
            { order_id: 4, item: "Keyboard", amount: 400, customer_id: 1 },
            { order_id: 5, item: "Mousepad", amount: 250, customer_id: 2 }
        ]
    },
    Shippings: {
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
    products: {
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

export const executeSQL = (query) => {
    try {
        const normalizedQuery = query.replace(/\s+/g, ' ').replace(/;/g, '').trim();
        const lowerQuery = normalizedQuery.toLowerCase();

        // Basic check for operation
        if (!lowerQuery.startsWith('select')) {
            if (lowerQuery.startsWith('insert')) return { message: "WriteResult({ \"nInserted\" : 1 })" };
            if (lowerQuery.startsWith('update')) return { message: "Query OK, 1 row affected" };
            if (lowerQuery.startsWith('delete')) return { message: "Query OK, 1 row deleted" };
            return { error: "Unsupported SQL operation. Try SELECT, INSERT, UPDATE, DELETE." };
        }

        // --- Extraction ---
        const selectPartRaw = (normalizedQuery.match(/select\s+(.*?)\s+from/i) || [])[1];
        const fromPart = (normalizedQuery.match(/from\s+([^\s\(\)]+)/i) || [])[1];
        if (!fromPart) return { error: "No table specified in FROM clause" };

        let selectPart = selectPartRaw;
        let topLimit = null;

        // Support SELECT TOP N ... or SELECT ... TOP N
        const topMatch = selectPart.match(/top\s+(\d+)/i);
        if (topMatch) {
            topLimit = parseInt(topMatch[1]);
            selectPart = selectPart.replace(/top\s+\d+/i, '').trim();
        }

        const joinMatch = normalizedQuery.match(/join\s+([^\s]+)\s+(?:as\s+)?(\w+)?\s*on\s+(.*?)(?=\s+where|\s+group|\s+order|\s+limit|$)/i);
        const whereMatch = normalizedQuery.match(/where\s+(.*?)(?=\s+group|\s+order|\s+limit|$)/i);
        const groupMatch = normalizedQuery.match(/group\s+by\s+(.*?)(?=\s+order|\s+limit|$)/i);
        const orderMatch = normalizedQuery.match(/order\s+by\s+(.*?)(?=\s+limit|$)/i);
        const limitMatch = normalizedQuery.match(/limit\s+(\d+)/i);

        let tableKey = Object.keys(sqlDatabase).find(k => k.toLowerCase() === fromPart.toLowerCase());
        let table = sqlDatabase[tableKey];
        if (!table) return { error: `Table '${fromPart}' does not exist` };

        let workingData = [...table.data];

        // --- Join Logic ---
        if (joinMatch) {
            const joinTableName = joinMatch[1];
            const joinCondition = joinMatch[3];
            const joinTableKey = Object.keys(sqlDatabase).find(k => k.toLowerCase() === joinTableName.toLowerCase());
            const joinTable = sqlDatabase[joinTableKey];

            if (joinTable) {
                const combined = [];
                const cond = joinCondition.split('=');
                const leftColRaw = cond[0].trim();
                const rightColRaw = cond[1].trim();
                const leftCol = leftColRaw.includes('.') ? leftColRaw.split('.').pop() : leftColRaw;
                const rightCol = rightColRaw.includes('.') ? rightColRaw.split('.').pop() : rightColRaw;

                workingData.forEach(row1 => {
                    joinTable.data.forEach(row2 => {
                        const r1Val = row1[Object.keys(row1).find(k => k.toLowerCase() === leftCol.toLowerCase())];
                        const r2Val = row2[Object.keys(row2).find(k => k.toLowerCase() === rightCol.toLowerCase())];
                        if (String(r1Val) === String(r2Val)) {
                            combined.push({ ...row1, ...row2 });
                        }
                    });
                });
                workingData = combined;
            }
        }

        // --- Filtering Logic (WHERE) ---
        if (whereMatch) {
            const whereClause = whereMatch[1];
            const conditions = whereClause.split(/\s+AND\s+(?![^']*'[^']*'(?:\s+AND|$))/i);

            conditions.forEach(c => {
                const match = c.match(/(.*?)\s*(=|>|<|>=|<=|!=|like|between|in)\s*(.*)/i);
                if (match) {
                    let col = match[1].trim().split('.').pop();
                    const op = match[2].toLowerCase();
                    const valRaw = match[3].trim();

                    workingData = workingData.filter(row => {
                        const rowColKey = Object.keys(row).find(k => k.toLowerCase() === col.toLowerCase());
                        const rVal = row[rowColKey];

                        if (op === '=') return String(rVal).toLowerCase() == valRaw.replace(/['"]/g, '').toLowerCase();
                        if (op === '!=') return String(rVal).toLowerCase() != valRaw.replace(/['"]/g, '').toLowerCase();
                        if (op === '>') return Number(rVal) > Number(valRaw);
                        if (op === '<') return Number(rVal) < Number(valRaw);
                        if (op === '>=') return Number(rVal) >= Number(valRaw);
                        if (op === '<=') return Number(rVal) <= Number(valRaw);
                        if (op === 'like') return new RegExp('^' + valRaw.replace(/['"]/g, '').replace(/%/g, '.*') + '$', 'i').test(String(rVal));
                        if (op === 'in') {
                            const list = valRaw.replace(/[\(\)]/g, '').split(',').map(v => v.trim().replace(/['"]/g, ''));
                            return list.includes(String(rVal));
                        }
                        if (op === 'between') {
                            const parts = valRaw.split(/\s+and\s+/i);
                            const v1 = Number(parts[0]);
                            const v2 = Number(parts[1]);
                            return Number(rVal) >= v1 && Number(rVal) <= v2;
                        }
                        return true;
                    });
                }
            });
        }

        const isDistinct = selectPart.toLowerCase().startsWith('distinct');
        const selectFieldsRaw = isDistinct ? selectPart.substring(8).trim() : selectPart;

        // Split by comma but ignore commas inside parentheses
        const selectFields = [];
        let currentField = '';
        let parenLevel = 0;
        for (let i = 0; i < selectFieldsRaw.length; i++) {
            const char = selectFieldsRaw[i];
            if (char === '(') parenLevel++;
            else if (char === ')') parenLevel--;

            if (char === ',' && parenLevel === 0) {
                selectFields.push(currentField.trim());
                currentField = '';
            } else {
                currentField += char;
            }
        }
        if (currentField.trim()) selectFields.push(currentField.trim());

        const hasAgg = selectFields.some(f => /(count|sum|avg|min|max)\(/i.test(f));

        // Window functions check
        const hasWindow = selectFields.some(f => /(row_number|rank|dense_rank|ntile|lag|lead|first_value|last_value)\(/i.test(f));

        if (hasAgg || groupMatch) {
            const gColRaw = groupMatch ? groupMatch[1].trim() : null;
            const gCol = gColRaw ? gColRaw.split('.').pop() : null;
            const groups = {};

            workingData.forEach(row => {
                const key = gCol ? row[Object.keys(row).find(k => k.toLowerCase() === gCol.toLowerCase())] : 'all';
                if (!groups[key]) groups[key] = [];
                groups[key].push(row);
            });

            workingData = Object.keys(groups).map(key => {
                const res = {};
                selectFields.forEach(f => {
                    const agg = f.match(/(count|sum|avg|min|max)\((.*?)\)(?:\s+as\s+(\w+))?/i);
                    if (agg) {
                        const func = agg[1].toLowerCase();
                        const colRaw = agg[2].trim();
                        const col = colRaw.split('.').pop();
                        const alias = agg[3] || `${func}_${col.replace('*', 'all')}`;
                        const groupRows = groups[key];

                        if (func === 'count') res[alias] = col === '*' ? groupRows.length : groupRows.filter(r => r[col] != null).length;
                        else {
                            const rowColKeyFirst = Object.keys(groupRows[0]).find(k => k.toLowerCase() === col.toLowerCase());
                            const vals = groupRows.map(r => Number(r[rowColKeyFirst])).filter(v => !isNaN(v));
                            if (func === 'sum') res[alias] = vals.reduce((a, b) => a + b, 0);
                            if (func === 'avg') res[alias] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
                            if (func === 'min') res[alias] = Math.min(...vals);
                            if (func === 'max') res[alias] = Math.max(...vals);
                        }
                    } else {
                        const parts = f.split(/\s+as\s+/i);
                        const colRaw = parts[0].trim();
                        const col = colRaw.split('.').pop();
                        const alias = parts[1] || col;
                        const rowColKey = Object.keys(groups[key][0]).find(k => k.toLowerCase() === col.toLowerCase());
                        res[alias] = rowColKey ? row[rowColKey] : null;
                    }
                });
                return res;
            });
        } else {
            // Row-level projection logic
            workingData = workingData.map((row, index) => {
                const res = {};
                if (selectFields[0] === '*') return row;

                selectFields.forEach(f => {
                    const parts = f.split(/\s+as\s+/i);
                    const exprPart = parts[0].trim();
                    let alias = parts[1] ? parts[1].trim().replace(/['"]/g, '') : null;

                    if (!alias) {
                        // If no alias, try to generate a clean one
                        if (exprPart.includes('(')) {
                            // For functions like SUBSTRING(name, 1, 3), use the function name or a simpler identifier
                            alias = exprPart.split('(')[0].trim().toLowerCase();
                        } else {
                            alias = exprPart.split('.').pop().trim().replace(/['"]/g, '');
                        }
                    }

                    // Handle CASE WHEN
                    if (exprPart.toLowerCase().startsWith('case')) {
                        const whenMatch = exprPart.match(/when\s+(.*?)\s+then\s+(.*?)\s+else\s+(.*?)\s+end/i);
                        if (whenMatch) {
                            const condition = whenMatch[1];
                            const thenVal = whenMatch[2].replace(/['"]/g, '');
                            const elseVal = whenMatch[3].replace(/['"]/g, '');
                            // Very naive condition checker
                            const condMatch = condition.match(/(\w+)\s*([<>=!]+)\s*(.*)/);
                            if (condMatch) {
                                const cCol = condMatch[1];
                                const cOp = condMatch[2];
                                const cVal = condMatch[3].replace(/['"]/g, '');
                                const rVal = row[Object.keys(row).find(k => k.toLowerCase() === cCol.toLowerCase())];
                                let pass = false;
                                if (cOp === '=') pass = String(rVal) == cVal;
                                else if (cOp === '>') pass = Number(rVal) > Number(cVal);
                                else if (cOp === '<') pass = Number(rVal) < Number(cVal);
                                res[alias] = pass ? thenVal : elseVal;
                            } else {
                                res[alias] = elseVal;
                            }
                            return;
                        }
                    }

                    const funcMatch = exprPart.match(/(\w+)\((.*?)\)/i);
                    if (funcMatch) {
                        const fName = funcMatch[1].toLowerCase();
                        const fArgsRaw = funcMatch[2] ? funcMatch[2].split(',').map(arg => arg.trim()) : [];

                        const getArgValue = (arg) => {
                            if (!arg) return null;
                            if (arg.startsWith("'") && arg.endsWith("'")) return arg.slice(1, -1);
                            if (arg.startsWith('"') && arg.endsWith('"')) return arg.slice(1, -1);
                            if (!isNaN(arg) && arg !== '') return Number(arg);
                            const colName = arg.split('.').pop();
                            const rowColKey = Object.keys(row).find(k => k.toLowerCase() === colName.toLowerCase());
                            return rowColKey ? row[rowColKey] : null;
                        };

                        const args = fArgsRaw.map(getArgValue);

                        // String Functions
                        if (fName === 'upper') res[alias] = String(args[0] || '').toUpperCase();
                        else if (fName === 'lower') res[alias] = String(args[0] || '').toLowerCase();
                        else if (fName === 'length') res[alias] = String(args[0] || '').length;
                        else if (fName === 'trim') res[alias] = String(args[0] || '').trim();
                        else if (fName === 'concat') res[alias] = args.join('');
                        else if (fName === 'substring') {
                            const s = String(args[0] || '');
                            const start = (args[1] || 1) - 1;
                            const len = args[2];
                            res[alias] = len ? s.substr(start, len) : s.substr(start);
                        }

                        // Numeric Functions
                        else if (fName === 'round') res[alias] = Math.round(Number(args[0] || 0));
                        else if (fName === 'ceiling' || fName === 'ceil') res[alias] = Math.ceil(Number(args[0] || 0));
                        else if (fName === 'floor') res[alias] = Math.floor(Number(args[0] || 0));
                        else if (fName === 'abs') res[alias] = Math.abs(Number(args[0] || 0));
                        else if (fName === 'power') res[alias] = Math.pow(Number(args[0] || 0), Number(args[1] || 0));

                        // Date Functions
                        else if (fName === 'now' || fName === 'getdate' || fName === 'getdata') {
                            // Use a slightly rounded time to ensure user code and solution code match if executed close together
                            const now = new Date();
                            now.setMilliseconds(0);
                            res[alias] = now.toISOString();
                        }
                        else if (fName === 'current_date') res[alias] = new Date().toISOString().split('T')[0];
                        else if (fName === 'current_time' || fName === 'currenttime') {
                            const now = new Date();
                            now.setMilliseconds(0);
                            res[alias] = now.toTimeString().split(' ')[0];
                        }
                        else if (fName === 'date_add') {
                            const d = new Date(args[0]);
                            d.setDate(d.getDate() + (Number(args[1]) || 0));
                            res[alias] = d.toISOString().split('T')[0];
                        }
                        else if (fName === 'datediff') {
                            const d1 = new Date(args[0]);
                            const d2 = new Date(args[1]);
                            res[alias] = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));
                        }

                        // Window Functions (Simulated)
                        else if (fName === 'row_number') res[alias] = index + 1;
                        else if (fName === 'rank' || fName === 'dense_rank') res[alias] = index + 1;
                        else if (fName === 'ntile') res[alias] = Math.ceil((index + 1) / (workingData.length / (args[0] || 1)));
                        else if (fName === 'lag') {
                            const offset = Number(args[1] || 1);
                            const prev = workingData[index - offset];
                            const cName = (fArgsRaw[0] || '').split('.').pop();
                            res[alias] = prev ? prev[Object.keys(prev).find(k => k.toLowerCase() === cName.toLowerCase())] : null;
                        }
                        else if (fName === 'lead') {
                            const offset = Number(args[1] || 1);
                            const next = workingData[index + offset];
                            const cName = (fArgsRaw[0] || '').split('.').pop();
                            res[alias] = next ? next[Object.keys(next).find(k => k.toLowerCase() === cName.toLowerCase())] : null;
                        }
                        else if (fName === 'first_value') {
                            const first = workingData[0];
                            const cName = (fArgsRaw[0] || '').split('.').pop();
                            res[alias] = first ? first[Object.keys(first).find(k => k.toLowerCase() === cName.toLowerCase())] : null;
                        }
                        else if (fName === 'last_value') {
                            const last = workingData[workingData.length - 1];
                            const cName = (fArgsRaw[0] || '').split('.').pop();
                            res[alias] = last ? last[Object.keys(last).find(k => k.toLowerCase() === cName.toLowerCase())] : null;
                        }

                        // Conversion & Null Handling
                        else if (fName === 'coalesce') res[alias] = args.find(a => a !== null && a !== undefined);
                        else if (fName === 'nullif') res[alias] = args[0] === args[1] ? null : args[0];
                        else if (fName === 'cast' || fName === 'convert') res[alias] = args[0];

                        // System Info
                        else if (fName === 'database') res[alias] = 'LocalDB';
                        else if (fName === 'user' || fName === 'session_user' || fName === 'current_user' || fName === 'version') res[alias] = 'Admin_v1.0';

                        // Control Flow
                        else if (fName === 'if' || fName === 'iif') res[alias] = args[0] ? args[1] : args[2];

                        else res[alias] = args[0];
                    } else {
                        const col = exprPart.split('.').pop();
                        const rowColKey = Object.keys(row).find(k => k.toLowerCase() === col.toLowerCase());
                        res[alias] = rowColKey ? row[rowColKey] : null;
                    }
                });
                return res;
            });

            if (isDistinct) {
                const seen = new Set();
                workingData = workingData.filter(r => {
                    const s = JSON.stringify(r);
                    if (seen.has(s)) return false;
                    seen.add(s);
                    return true;
                });
            }
        }


        if (orderMatch) {
            const parts = orderMatch[1].trim().split(/\s+/);
            const col = parts[0].split('.').pop();
            const dir = (parts[1] || 'asc').toLowerCase();
            workingData.sort((a, b) => {
                const rowColKeyA = Object.keys(a).find(k => k.toLowerCase() === col.toLowerCase());
                const rowColKeyB = Object.keys(b).find(k => k.toLowerCase() === col.toLowerCase());
                const vA = a[rowColKeyA];
                const vB = b[rowColKeyB];
                return dir === 'asc' ? (vA < vB ? -1 : 1) : (vA < vB ? 1 : -1);
            });
        }

        const finalLimit = topLimit || (limitMatch ? parseInt(limitMatch[1]) : null);
        if (finalLimit !== null) workingData = workingData.slice(0, finalLimit);

        return { columns: workingData.length ? Object.keys(workingData[0]) : [], data: workingData };

    } catch (error) {
        console.error("SQL Execution Error:", error);
        return { error: "Query Syntax Error: " + error.message };
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

            // int a = 10, b = 20;
            const multiIntMatch = line.match(/int\s+(.+);/);
            if (multiIntMatch && !line.includes('[]') && !line.includes('(')) {
                const decls = multiIntMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    if (parts.length === 2) {
                        variables[parts[0].trim()] = evaluateExpression(parts[1].trim());
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

            // Support int a = 10, b = 20;
            const multiIntMatch = line.match(/int\s+(.+);/);
            if (multiIntMatch && !line.includes('(')) {
                const decls = multiIntMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    if (parts.length === 2) {
                        const varName = parts[0].trim();
                        const val = parts[1].trim();
                        if (!isNaN(val)) variables[varName] = Number(val);
                        else {
                            const mathMatch = val.match(/(\w+)\s*([\+\-\*\/])\s*(\w+)/);
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
        const result = executeSQL(code);
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
            const result = await context.pyodide.runPythonAsync(code);
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
            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            new Function(code)();
            console.log = originalLog;
            return { output: logs.join('\n') || "Executed successfully." };
        } catch (e) {
            return { error: e.message };
        }
    }

    if (lang === 'html' || lang === 'css') {
        const hasHtmlTags = /<[a-z][\s\S]*>/i.test(code);
        const isFullHtml = /<html[\s\S]*>/i.test(code);

        if (isFullHtml) {
            return { html: code };
        }

        const processedCode = (lang === 'css' && !hasHtmlTags)
            ? `<style>${code}</style><div class="container"><div class="box">Default Box</div></div>`
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
  <script type="text/babel">
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
        eval(evalCode);
        let ComponentToRender = null;
        if (window.DefaultExport) ComponentToRender = window.DefaultExport;
        else if (typeof App !== 'undefined') ComponentToRender = App;
        else if (typeof Counter !== 'undefined') ComponentToRender = Counter;
        else {
           const possibleComponents = Object.keys(window).filter(key => 
               typeof window[key] === 'function' && !['React', 'ReactDOM', 'Babel'].includes(key) &&
               (/^[A-Z]/.test(key) || key.toLowerCase() === 'counter' || key.toLowerCase() === 'app')
           );
           if (possibleComponents.length > 0) ComponentToRender = window[possibleComponents[0]];
        }
        if (ComponentToRender) {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(ComponentToRender));
        } else {
            addLog('Could not find a React component to render. Make sure your component name is capitalized.', 'error');
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
        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const angularTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/reflect-metadata@0.1.13/Reflect.js"></script>
  <script src="https://unpkg.com/zone.js@0.14.4/dist/zone.min.js"></script>
  <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
  <script src="https://unpkg.com/@angular/core@17.3.0/bundles/core.umd.js"></script>
  <script src="https://unpkg.com/@angular/common@17.3.0/bundles/common.umd.js"></script>
  <script src="https://unpkg.com/@angular/compiler@17.3.0/bundles/compiler.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser@17.3.0/bundles/platform-browser.umd.js"></script>
  <script src="https://unpkg.com/@angular/animations@17.3.0/bundles/animations.umd.js"></script>
  <script src="https://unpkg.com/@angular/animations@17.3.0/bundles/animations-browser.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser@17.3.0/bundles/platform-browser-animations.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser-dynamic@17.3.0/bundles/platform-browser-dynamic.umd.js"></script>
  <script src="https://unpkg.com/@angular/forms@17.3.0/bundles/forms.umd.js"></script>
  <script src="https://unpkg.com/@angular/router@17.3.0/bundles/router.umd.js"></script>
  <script src="https://unpkg.com/@angular/common@17.3.0/bundles/common-http.umd.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
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
            while ((typeof ng === 'undefined' || typeof Babel === 'undefined') && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (typeof ng === 'undefined' || typeof Babel === 'undefined') {
                throw new Error('Angular or Babel failed to load. Please check your internet connection.');
            }
        }

        const rawCode = decodeURIComponent(escape(atob('${base64Code}')));
        
        // Define common Angular globals for easier access
        const { Component, NgModule, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } = ng.core;
        const { CommonModule } = ng.common;
        const { HttpClientModule } = ng.common.http;
        const { FormsModule, ReactiveFormsModule } = ng.forms;
        const { BrowserModule } = ng.platformBrowser;
        const { BrowserAnimationsModule } = ng.platformBrowser.animations;
        const { platformBrowserDynamic } = ng.platformBrowserDynamic;

        // Strip imports/exports and transpile
        const processedCode = rawCode
            .replace(/import\\s+[\\s\\S]*?\\s+from\\s+['"].*?['"];?/g, '')
            .replace(/export\\s+class/g, 'class');

        const transpiled = Babel.transform(processedCode, {
            presets: ['typescript'],
            plugins: [['proposal-decorators', { legacy: true }], 'proposal-class-properties']
        }).code;

        // Execute transpiled component code
        eval(transpiled);

        // Auto-detect root component
        const classMatch = processedCode.match(/class\\s+(\\w+)/);
        const className = classMatch ? classMatch[1] : 'AppComponent';
        
        let RootComponent = null;
        try { RootComponent = eval(className); } catch(e) {
            RootComponent = window[className];
        }

        if (!RootComponent) {
            throw new Error(\`Could not find component class: $\{className\}\`);
        }

        // Create dynamic module
        const moduleCode = Babel.transform(\`
            @ng.core.NgModule({
              imports: [
                ng.platformBrowser.BrowserModule,
                ng.platformBrowser.animations.BrowserAnimationsModule,
                ng.common.CommonModule,
                ng.common.http.HttpClientModule,
                ng.forms.FormsModule,
                ng.forms.ReactiveFormsModule
              ],
              declarations: [RootComponent],
              bootstrap: [RootComponent]
            })
            class DynamicModule {}
            window.DynamicModule = DynamicModule;
        \`, {
            presets: ['typescript'],
            plugins: [['proposal-decorators', { legacy: true }], 'proposal-class-properties']
        }).code;

        eval(moduleCode);

        platformBrowserDynamic().bootstrapModule(window.DynamicModule)
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
