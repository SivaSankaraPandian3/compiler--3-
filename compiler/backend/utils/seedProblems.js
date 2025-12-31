const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Problem = require('../models/Problem');
const connectDB = require('../config/db');

dotenv.config({ path: './.env' });

const problemsData = {
    sql: [
        { title: "The Neighborhood Pet Registry", description: "Select all pets that are dogs and are older than 3 years.", difficulty: 3, tags: ["sql"], starterCode: "SELECT * FROM pets", solution: "SELECT * FROM pets WHERE pet_type = 'Dog' AND age > 3;", hints: ["Use WHERE clause", "Combine with AND"], icon: "💾", color: "#4a5568" },
        { title: "The Bookworms Haven", description: "Find all books that cost less than $20 and have more than 5 in stock.", difficulty: 1, tags: ["sql"], starterCode: "SELECT * FROM books", solution: "SELECT * FROM books WHERE price < 20 AND stock_quantity > 5;", hints: ["Filter by price and stock"], icon: "💾", color: "#4a5568" },
        { title: "TechCorp Employees", description: "Select all employees from IT department ordered by salary descending.", difficulty: 1, tags: ["sql"], starterCode: "SELECT * FROM employees", solution: "SELECT * FROM employees WHERE department = 'IT' ORDER BY salary DESC;", hints: ["Filter by department", "Use ORDER BY DESC"], icon: "💾", color: "#4a5568" },
        // MySQL Problems
        { title: "MySQL Countries", description: "Find all unique countries in Customers table.", difficulty: 1, tags: ["sql", "mysql"], starterCode: "SELECT DISTINCT country FROM Customers", solution: "SELECT DISTINCT country FROM Customers;", hints: ["Use DISTINCT"], icon: "🐬", color: "#00758F" },
        { title: "MySQL Age Filter", description: "Find customers younger than 25.", difficulty: 1, tags: ["sql", "mysql"], starterCode: "SELECT * FROM Customers", solution: "SELECT * FROM Customers WHERE age < 25;", hints: ["Use WHERE age < 25"], icon: "🐬", color: "#00758F" },
        // PostgreSQL Problems
        { title: "PostgreSQL Item Search", description: "Find all orders for 'Keyboard'.", difficulty: 1, tags: ["sql", "postgresql"], starterCode: "SELECT * FROM Orders", solution: "SELECT * FROM Orders WHERE item = 'Keyboard';", hints: ["Filter by item"], icon: "🐘", color: "#336791" },
        { title: "PostgreSQL High Amount", description: "Find orders with amount > 500.", difficulty: 2, tags: ["sql", "postgresql"], starterCode: "SELECT * FROM Orders", solution: "SELECT * FROM Orders WHERE amount > 500;", hints: ["Use WHERE amount > 500"], icon: "🐘", color: "#336791" },
        // SQL Server Problems
        { title: "SQL Server Pending", description: "Find all pending shippings.", difficulty: 1, tags: ["sql", "sqlserver"], starterCode: "SELECT * FROM Shippings", solution: "SELECT * FROM Shippings WHERE status = 'Pending';", hints: ["Filter by status"], icon: "🖧", color: "#CC2927" },
        { title: "SQL Server Average", description: "Find average order amount.", difficulty: 2, tags: ["sql", "sqlserver"], starterCode: "SELECT AVG(amount) FROM Orders", solution: "SELECT AVG(amount) as average_amount FROM Orders;", hints: ["Use AVG()"], icon: "🖧", color: "#CC2927" }
    ],
    python: [
        { title: "Two Sum", description: "Return indices of two numbers that add up to target.", difficulty: 1, tags: ["python", "arrays"], starterCode: "def two_sum(nums, target):\n    pass", solution: "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen: return [seen[comp], i]\n        seen[num] = i", hints: ["Use a dictionary"], icon: "🐍", color: "#3776ab" },
        { title: "Reverse String", description: "Reverse a string.", difficulty: 1, tags: ["python", "strings"], starterCode: "def reverse_string(s):\n    pass", solution: "def reverse_string(s):\n    return s[::-1]", hints: ["Use slicing"], icon: "🐍", color: "#3776ab" }
    ],
    java: [
        { title: "Hello World", description: "Print 'Hello, World!'.", difficulty: 1, tags: ["java"], starterCode: "// code here", solution: "System.out.println(\"Hello, World!\");", hints: ["Use System.out.println"], icon: "☕", color: "#f89820" }
    ],
    'c++': [
        { title: "Hello C++", description: "Print 'Hello, C++!' using cout.", difficulty: 1, tags: ["c++"], starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    return 0;\n}", solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}", hints: ["Use iostream", "Use cout"], icon: "🔹", color: "#00599c" },
        { title: "Sum of Two Numbers", description: "Add two integers and print result.", difficulty: 1, tags: ["c++"], starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    return 0;\n}", solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    cout << a + b << endl;\n    return 0;\n}", hints: ["Use + operator"], icon: "🔹", color: "#00599c" }
    ],
    javascript: [
        {
            title: "Array Filter",
            description: "Use the filter() method to get all even numbers from an array. \n\nExample:\nconst numbers = [1, 2, 3, 4, 5, 6];\nOutput: [2, 4, 6]",
            difficulty: 1,
            tags: ["javascript", "arrays"],
            starterCode: "const numbers = [1, 2, 3, 4, 5, 6];\n// Filter even numbers\nconst evens = numbers.filter(/* your code here */);\nconsole.log(evens);",
            solution: "const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(num => num % 2 === 0);\nconsole.log(evens);",
            hints: ["Use arrow function", "Check if num % 2 === 0"],
            icon: "📜",
            color: "#f6e05e"
        }
    ],
    html: [
        { title: "Create a Card", description: "Create a styled card component.", difficulty: 1, tags: ["html", "css"], starterCode: "<div class=\"card\"></div>", solution: "<div class=\"card\"><h3>Title</h3><p>Desc</p></div>", hints: ["Use div"], icon: "🌎", color: "#ed8936" }
    ],
    react: [
        { title: "Counter", description: "Create a counter with useState.", difficulty: 1, tags: ["react"], starterCode: "const Counter = () => {};", solution: "const [count, setCount] = useState(0);", hints: ["Use useState"], icon: "⚛️", color: "#61dafb" }
    ],
    angular: [
        { title: "Angular Interpolation", description: "Display a name variable in the template using interpolation.", difficulty: 1, tags: ["angular"], starterCode: "@Component({\n  selector: 'app-root',\n  template: '<h1>{{ <!-- displayed here --> }}</h1>'\n})\nclass AppComponent {\n  name = 'Angular User';\n}", solution: "@Component({\n  selector: 'app-root',\n  template: '<h1>{{ name }}</h1>'\n})\nclass AppComponent {\n  name = 'Angular User';\n}", hints: ["Use double curly braces"], icon: "🅰️", color: "#dd0031" },
        { title: "Angular Click Event", description: "Bind a click event to a button to call a method.", difficulty: 2, tags: ["angular"], starterCode: "<button (<!-- event -->)=\"doSomething()\">Click</button>", solution: "<button (click)=\"doSomething()\">Click</button>", hints: ["Use (click) parenthesis"], icon: "🅰️", color: "#dd0031" }
    ],
    css: [
        { title: "Flexbox Centering", description: "Center a child element using flexbox.", difficulty: 1, tags: ["css"], starterCode: ".container {\n  display: flex;\n  /* Add centering properties */\n}", solution: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", hints: ["Use justify-content and align-items"], icon: "🎨", color: "#38b2ac" },
        { title: "CSS Grid layout", description: "Create a 3-column grid.", difficulty: 2, tags: ["css"], starterCode: ".grid {\n  display: grid;\n  /* Add columns here */\n}", solution: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}", hints: ["Use grid-template-columns"], icon: "🎨", color: "#38b2ac" }
    ]
};

const seedProblems = async () => {
    try {
        await connectDB();
        console.log('MongoDB Connected...');
        await Problem.deleteMany({});
        console.log('Cleared existing problems...');

        let count = 0;
        for (const [topic, problems] of Object.entries(problemsData)) {
            for (const problem of problems) {
                await Problem.create({ ...problem, topic });
                count++;
            }
        }

        console.log(`Successfully seeded ${count} problems!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding problems:', err);
        process.exit(1);
    }
};

seedProblems();
