# 🎓 Web Compiler - Educational Coding Platform

A comprehensive online compiler designed for students to learn and practice multiple programming languages in one place.

## 🌟 Features

### Supported Languages & Technologies
- **HTML/CSS/JavaScript** - Web development fundamentals
- **Python** - General-purpose programming (powered by Pyodide)
- **Java** - Object-oriented programming basics
- **SQL/MySQL** - Database queries with interactive schema viewer
- **React** - Modern JavaScript framework
- **Angular** - TypeScript-based framework

### Student-Friendly Features
- ✅ **Real-time Code Execution** - See results instantly
- ✅ **Syntax Highlighting** - Color-coded code for better readability
- ✅ **Interactive SQL Database** - Pre-loaded sample data for practice
- ✅ **Split-Panel Layout** - Write code and see output side-by-side
- ✅ **Error Handling** - Clear error messages to help debug
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **No Installation Required** - Run everything in the browser

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd compiler
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📚 How to Use

### For Students

#### HTML/CSS/JavaScript Compiler
1. Click on "HTML / Web" in the sidebar
2. Write HTML in the first editor
3. Add CSS styling in the second editor
4. Add JavaScript logic in the third editor
5. See live preview automatically

#### Python Compiler
1. Click on "Python" in the sidebar
2. Write your Python code
3. Click "Run" button
4. View output in the output panel

Example:
```python
print("Hello, Students!")
for i in range(5):
    print(f"Number: {i}")
```

#### Java Compiler
1. Click on "Java" in the sidebar
2. Write basic Java code
3. Click "Run" to execute
4. See results in output

Example:
```java
int a = 10;
int b = 20;
System.out.println("Sum: " + (a + b));
```

#### SQL Compiler
1. Click on "MySQL" in the sidebar
2. Explore the database schema on the left
3. Write SQL queries in the editor
4. Click "Run SQL" to execute
5. View results and available tables on the right

Example Queries:
```sql
-- Select all customers
SELECT * FROM Customers;

-- Filter by age
SELECT first_name, age FROM Customers WHERE age > 25;

-- Join tables
SELECT c.first_name, o.item 
FROM Customers c 
JOIN Orders o ON c.customer_id = o.customer_id;
```

#### React Compiler
1. Click on "React" in the sidebar
2. Write React components in JSX
3. Add CSS styling
4. See live interactive preview

#### Angular Compiler
1. Click on "Angular" in the sidebar
2. Write Angular templates and controllers
3. See two-way data binding in action

### For Teachers

#### Sharing Code Examples
1. Write your example code in any compiler
2. Students can copy and modify the code
3. Use the SQL compiler to teach database concepts with real data

#### Suggested Learning Path
1. **Week 1-2**: HTML/CSS/JavaScript basics
2. **Week 3-4**: Python fundamentals
3. **Week 5-6**: Java and OOP concepts
4. **Week 7-8**: SQL and database queries
5. **Week 9-10**: React framework
6. **Week 11-12**: Angular framework

## 🛠️ Technical Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Code Editor**: react-simple-code-editor
- **Syntax Highlighting**: Prism.js
- **Python Runtime**: Pyodide (Python in WebAssembly)
- **Styling**: CSS3 with responsive design

## 📁 Project Structure

```
compiler/
├── src/
│   ├── components/
│   │   ├── CodeCompiler/
│   │   │   └── CodeCompiler.jsx       # Python, Java compilers
│   │   ├── HtmlCompiler/
│   │   │   ├── HtmlCompiler.jsx       # HTML/CSS/JS compiler
│   │   │   ├── ReactCompiler.jsx      # React compiler
│   │   │   └── AngularCompiler.jsx    # Angular compiler
│   │   ├── SqlCompiler/
│   │   │   ├── SqlCompiler.jsx        # SQL compiler with DB viewer
│   │   │   └── SqlCompiler.css        # SQL compiler styles
│   │   ├── Editor.jsx                 # Reusable code editor
│   │   ├── Preview.jsx                # Preview component
│   │   └── Sidebar.jsx                # Navigation sidebar
│   ├── styles/
│   │   └── App.css                    # Global styles
│   ├── App.jsx                        # Main app component
│   └── main.jsx                       # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Learning Objectives

### HTML/CSS/JavaScript
- Understand DOM structure
- Learn CSS styling and layout
- Practice JavaScript events and DOM manipulation

### Python
- Learn basic syntax and data types
- Practice loops and conditionals
- Understand functions and modules

### Java
- Understand variables and data types
- Learn basic object-oriented concepts
- Practice simple calculations

### SQL
- Learn SELECT, INSERT, UPDATE, DELETE
- Understand WHERE clauses and filtering
- Practice JOIN operations
- Explore database relationships

### React
- Understand components and JSX
- Learn state management with hooks
- Practice event handling

### Angular
- Learn two-way data binding
- Understand directives
- Practice MVC pattern

## 🔧 Customization

### Adding More Sample Data (SQL)
Edit `src/components/SqlCompiler/SqlCompiler.jsx`:

```javascript
const database = {
    YourTable: {
        columns: ["id", "name", "value"],
        data: [
            { id: 1, name: "Example", value: 100 }
        ]
    }
};
```

### Changing Theme Colors
Edit `src/styles/App.css` or component-specific CSS files.

### Adding New Languages
1. Create a new compiler component
2. Add route in `App.jsx`
3. Add navigation link in `Sidebar.jsx`

## 🐛 Known Limitations

- **Python**: Limited to Pyodide capabilities, some libraries may not work
- **Java**: Basic interpreter, doesn't support full Java syntax
- **SQL**: In-memory database, changes don't persist
- **React/Angular**: Limited to client-side rendering

## 🚀 Future Enhancements

- [ ] Code persistence (save student work)
- [ ] User authentication
- [ ] Assignment submission system
- [ ] Code sharing via URL
- [ ] More programming languages (C++, PHP, Ruby)
- [ ] Real-time collaboration
- [ ] Code execution history
- [ ] Downloadable code files
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Code templates and examples
- [ ] Progress tracking for students

## 📖 Educational Resources

### Recommended Learning Sites
- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript
- [Python.org](https://docs.python.org/3/tutorial/) - Python tutorial
- [W3Schools](https://www.w3schools.com) - SQL tutorials
- [React Docs](https://react.dev) - Official React documentation
- [Angular Docs](https://angular.io/docs) - Official Angular documentation

### Practice Exercises

#### SQL Beginner Exercises
1. Select all customers from USA
2. Find customers older than 25
3. Count total orders
4. Find the most expensive item
5. List customers with pending shipments

#### Python Beginner Exercises
1. Print "Hello World"
2. Calculate sum of numbers 1-100
3. Create a simple calculator
4. Find even numbers in a list
5. Reverse a string

#### JavaScript Exercises
1. Create a button click counter
2. Build a simple calculator
3. Create a todo list
4. Make a color picker
5. Build a timer/stopwatch

## 🤝 Contributing

Contributions are welcome! If you'd like to add features or fix bugs:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is created for educational purposes.

## 👨‍🏫 For Educators

### Classroom Integration Tips

1. **Live Coding Sessions**: Use the compiler to demonstrate concepts in real-time
2. **Homework Assignments**: Share code snippets for students to complete
3. **Code Reviews**: Review student code together using the compiler
4. **Quick Quizzes**: Test SQL queries or Python logic on the spot
5. **Project Building**: Guide students through building complete projects

### Assessment Ideas

- SQL query challenges with the sample database
- Python algorithm implementations
- HTML/CSS layout recreations
- React component building exercises
- Debugging challenges

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Contact the instructor/administrator

---

**Built with ❤️ for students learning to code**

Happy Coding! 🚀👨‍💻👩‍💻
