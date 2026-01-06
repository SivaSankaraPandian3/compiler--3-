// Sample exercises and code templates for students

export const pythonExamples = {
  helloWorld: `# Hello World Program
print("Hello, World!")
print("Welcome to Python programming!")`,

  calculator: `# Simple Calculator
num1 = 10
num2 = 5

print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)`,

  loops: `# Loop Examples
# For loop
for i in range(5):
    print(f"Number: {i}")

# While loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1`,

  lists: `# Working with Lists
fruits = ["apple", "banana", "cherry", "date"]

print("All fruits:", fruits)
print("First fruit:", fruits[0])
print("Number of fruits:", len(fruits))

# Add a fruit
fruits.append("elderberry")
print("Updated list:", fruits)

# Loop through fruits
for fruit in fruits:
    print(f"I like {fruit}")`,

  functions: `# Functions in Python
def greet(name):
    return f"Hello, {name}!"

def add_numbers(a, b):
    return a + b

# Call functions
print(greet("Student"))
result = add_numbers(15, 25)
print(f"Sum: {result}")`
};

export const javaExamples = {
  variables: `// Variables and Data Types
int age = 20;
String name = "Student";
int score = 95;

System.out.println("Name: " + name);
System.out.println("Age: " + age);
System.out.println("Score: " + score);`,

  arithmetic: `// Arithmetic Operations
int a = 15;
int b = 4;

System.out.println("Addition: " + (a + b));
System.out.println("Subtraction: " + (a - b));
System.out.println("Multiplication: " + (a * b));
System.out.println("Division: " + (a / b));`,

  strings: `// String Operations
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;

System.out.println("Full Name: " + fullName);
System.out.println("Length: " + fullName);`
};

export const sqlExamples = {
  selectAll: `-- Select all customers
SELECT * FROM CustomersArchive;`,

  selectColumns: `-- Select specific columns
SELECT first_name, last_name, age 
FROM CustomersArchive;`,

  whereClause: `-- Filter with WHERE clause
SELECT first_name, age 
FROM CustomersArchive 
WHERE age > 25;`,

  orderBy: `-- Sort results
SELECT first_name, age 
FROM CustomersArchive 
ORDER BY age DESC;`,

  join: `-- Join tables (Note: This is an example, actual JOIN may not work in current implementation)
SELECT c.first_name, o.item, o.amount
FROM CustomersArchive c, OrdersArchive o
WHERE c.customer_id = o.customer_id;`,

  count: `-- Count records
SELECT COUNT(*) as total_customers 
FROM CustomersArchive;`,

  groupBy: `-- Group by country
SELECT country, COUNT(*) as count
FROM CustomersArchive
GROUP BY country;`,

  substring: `-- Substring example
SELECT SUBSTRING(customer_name, 1, 3) 
FROM customers;`,

  currentTime: `-- Current time example
SELECT current_time() 
FROM customers;`,

  getData: `-- Get data status example
SELECT getdata() 
FROM customers;`
};

export const htmlExamples = {
  basic: {
    html: `<!-- Basic HTML Structure -->
<div class="container">
  <h1>Welcome Students!</h1>
  <p>This is a simple web page.</p>
  <button id="myButton">Click Me!</button>
  <p id="output"></p>
</div>`,
    css: `/* Basic Styling */
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #007acc;
}

button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}`,
    js: `// JavaScript Interaction
document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('output').textContent = 'Button clicked! 🎉';
});`
  },

  calculator: {
    html: `<!-- Simple Calculator -->
<div class="calculator">
  <h2>Simple Calculator</h2>
  <input type="number" id="num1" placeholder="First number">
  <input type="number" id="num2" placeholder="Second number">
  <div class="buttons">
    <button onclick="calculate('+')">+</button>
    <button onclick="calculate('-')">-</button>
    <button onclick="calculate('*')">×</button>
    <button onclick="calculate('/')">÷</button>
  </div>
  <p id="result"></p>
</div>`,
    css: `.calculator {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: white;
}

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;
}

button {
  padding: 15px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: rgba(255,255,255,0.3);
  transform: scale(1.05);
}

#result {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}`,
    js: `function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;
  
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = 'Please enter valid numbers';
    return;
  }
  
  switch(operation) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
  }
  
  document.getElementById('result').textContent = 'Result: ' + result;
}`
  }
};

export const reactExamples = {
  counter: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// Counter Component for Students
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Student Counter App</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`,

  todoList: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// Simple Todo List
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="card">
      <h1>My Todo List</h1>
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`
};

export const angularExamples = {
  twoWayBinding: `<div ng-app="studentApp" ng-controller="studentCtrl">
  <h1>{{ title }}</h1>
  <p>Enter your name:</p>
  <input type="text" ng-model="studentName" placeholder="Your name">
  <p>Hello, {{ studentName }}!</p>
  
  <p>Enter your age:</p>
  <input type="number" ng-model="age">
  <p>You are {{ age }} years old.</p>
</div>`,

  list: `<div ng-app="myApp" ng-controller="listCtrl">
  <h2>Student List</h2>
  <ul>
    <li ng-repeat="student in students">
      {{ student.name }} - Grade: {{ student.grade }}
    </li>
  </ul>
</div>`
};
