// Coding problems data organized by topic
// Each problem includes: id, title, description, difficulty, tags, starter code, test cases, and solution

export const problemsData = {
    sql: {
        title: "SQL Problems",
        icon: "💾",
        color: "#4a5568",
        totalProblems: 10,
        problems: [
            {
                id: 1,
                title: "The Neighborhood Pet Registry",
                description: `You are managing a pet registry database for a neighborhood. The database has a table called 'pets' with the following columns:
        
- pet_id (INT) - Primary key
- pet_name (VARCHAR)
- pet_type (VARCHAR) - e.g., 'Dog', 'Cat', 'Bird'
- owner_name (VARCHAR)
- age (INT)
- color (VARCHAR)

Write a SQL query to select all pets that are dogs and are older than 3 years.`,
                difficulty: 3,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM pets`,
                testCases: [
                    {
                        input: "SELECT * FROM pets WHERE pet_type = 'Dog' AND age > 3",
                        expectedOutput: "Query should return all dogs older than 3 years",
                        pass: true
                    }
                ],
                solution: `SELECT * FROM pets WHERE pet_type = 'Dog' AND age > 3;`,
                hints: ["Use WHERE clause to filter", "Combine conditions with AND"]
            },
            {
                id: 2,
                title: "High Spenders",
                description: `Find all customers who have spent more than 1000 in total.`,
                difficulty: 2,
                tags: ["sql"],
                starterCode: `-- Write your SQL query here
SELECT * FROM customers`,
                solution: `SELECT * FROM customers WHERE total_purchases > 1000;`,
                hints: ["Use WHERE clause"]
            },
            {
                id: 3,
                title: "TechCorp's Employee Management System",
                description: `An employee database has a table 'employees' with:
        
- emp_id (INT)
- emp_name (VARCHAR)
- department (VARCHAR)
- salary (DECIMAL)
- hire_date (DATE)

Write a query to select all employees from the 'IT' department ordered by salary in descending order.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM employees`,
                solution: `SELECT * FROM employees WHERE department = 'IT' ORDER BY salary DESC;`,
                hints: ["Filter by department", "Use ORDER BY for sorting"]
            },
            {
                id: 4,
                title: "Gadget Grove's Inventory and Sales Tracking",
                description: `A gadget store has two tables:

**products** table:
- product_id (INT)
- product_name (VARCHAR)
- category (VARCHAR)
- price (DECIMAL)

**sales** table:
- sale_id (INT)
- product_id (INT)
- quantity_sold (INT)
- sale_date (DATE)

Write a query to find the total quantity sold for each product. Display product_name and total_quantity.`,
                difficulty: 3,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT p.product_name, SUM(s.quantity_sold) as total_quantity
FROM products p
JOIN sales s ON p.product_id = s.product_id`,
                solution: `SELECT p.product_name, SUM(s.quantity_sold) as total_quantity
FROM products p
JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_name;`,
                hints: ["Use JOIN to combine tables", "Use SUM and GROUP BY"]
            },
            {
                id: 5,
                title: "Evergreen High School's Academic Database",
                description: `A school database has a 'students' table:
        
- student_id (INT)
- student_name (VARCHAR)
- grade_level (INT)
- gpa (DECIMAL)
- enrollment_year (INT)

Write a query to find all students in grade 10 or above with a GPA greater than 3.5.`,
                difficulty: 3,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM students`,
                solution: `SELECT * FROM students WHERE grade_level >= 10 AND gpa > 3.5;`,
                hints: ["Use >= for grade level", "Combine conditions with AND"]
            },
            {
                id: 6,
                title: "Reliance Mart Shopping Database",
                description: `A shopping database has a 'customers' table:
        
- customer_id (INT)
- customer_name (VARCHAR)
- city (VARCHAR)
- total_purchases (DECIMAL)
- membership_type (VARCHAR)

Write a query to select all 'VIP' members from 'Mumbai' who have made purchases over ₹50,000.`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM customers`,
                solution: `SELECT * FROM customers WHERE membership_type = 'VIP' AND city = 'Mumbai' AND total_purchases > 50000;`,
                hints: ["Filter by three conditions", "Use AND to combine"]
            },
            {
                id: 7,
                title: "The Adventure Bookstore",
                description: `A bookstore has an 'orders' table:
        
- order_id (INT)
- customer_name (VARCHAR)
- book_title (VARCHAR)
- order_date (DATE)
- quantity (INT)

Write a query to count the total number of orders placed.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT COUNT(*) FROM orders`,
                solution: `SELECT COUNT(*) as total_orders FROM orders;`,
                hints: ["Use COUNT(*) function", "Give it an alias"]
            },
            {
                id: 8,
                title: "Employee Database Management",
                description: `An 'employees' table has:
        
- emp_id (INT)
- emp_name (VARCHAR)
- position (VARCHAR)
- salary (DECIMAL)
- department (VARCHAR)

Write a query to find the average salary of employees in the 'Sales' department.`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT AVG(salary) FROM employees`,
                solution: `SELECT AVG(salary) as average_salary FROM employees WHERE department = 'Sales';`,
                hints: ["Use AVG() function", "Filter by department"]
            },
            {
                id: 9,
                title: "Tech Haven Electronics",
                description: `An electronics store has a 'products' table:
        
- product_id (INT)
- product_name (VARCHAR)
- brand (VARCHAR)
- price (DECIMAL)
- warranty_years (INT)

Write a query to select all products from 'Samsung' brand with a warranty of at least 2 years, ordered by price.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM products`,
                solution: `SELECT * FROM products WHERE brand = 'Samsung' AND warranty_years >= 2 ORDER BY price;`,
                hints: ["Filter by brand and warranty", "Use ORDER BY"]
            },
            {
                id: 10,
                title: "Customer Orders Analysis",
                description: `An e-commerce database has 'orders' table:
        
- order_id (INT)
- customer_id (INT)
- order_amount (DECIMAL)
- order_status (VARCHAR)
- order_date (DATE)

Write a query to find the maximum order amount from all completed orders (status = 'Completed').`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT MAX(order_amount) FROM orders`,
                solution: `SELECT MAX(order_amount) as max_order FROM orders WHERE order_status = 'Completed';`,
                hints: ["Use MAX() function", "Filter by status"]
            }
        ]
    },

    mysql: {
        title: "MySQL Problems",
        icon: "🐬",
        color: "#00758F",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Customer Countries",
                description: `Write a MySQL query to find all unique countries where your customers are from.`,
                difficulty: 1,
                tags: ["mysql", "basics"],
                starterCode: `-- Write your MySQL query here
SELECT DISTINCT country FROM CustomersArchive`,
                solution: `SELECT DISTINCT country FROM CustomersArchive;`,
                hints: ["Use DISTINCT keyword"]
            },
            {
                id: 2,
                title: "Young Customers",
                description: `Find all customers who are younger than 25.`,
                difficulty: 1,
                tags: ["mysql"],
                starterCode: `-- Write your MySQL query here
SELECT * FROM CustomersArchive`,
                solution: `SELECT * FROM CustomersArchive WHERE age < 25;`,
                hints: ["Use WHERE age < 25"]
            }
        ]
    },

    postgresql: {
        title: "PostgreSQL Problems",
        icon: "🐘",
        color: "#336791",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Item Search",
                description: `Write a PostgreSQL query to find all orders for 'Keyboard'.`,
                difficulty: 1,
                tags: ["postgresql", "basics"],
                starterCode: `-- Write your PostgreSQL query here
SELECT * FROM OrdersArchive`,
                solution: `SELECT * FROM OrdersArchive WHERE item = 'Keyboard';`,
                hints: ["Filter by item name"]
            },
            {
                id: 2,
                title: "Major Orders",
                description: `Find all orders with an amount greater than 500.`,
                difficulty: 2,
                tags: ["postgresql"],
                starterCode: `-- Write your PostgreSQL query here
SELECT * FROM OrdersArchive`,
                solution: `SELECT * FROM OrdersArchive WHERE amount > 500;`,
                hints: ["Use WHERE amount > 500"]
            }
        ]
    },

    sqlserver: {
        title: "SQL Server Problems",
        icon: "🖧",
        color: "#CC2927",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Shipping Status",
                description: `Write a SQL Server query to find all pending shippings.`,
                difficulty: 1,
                tags: ["sqlserver", "basics"],
                starterCode: `-- Write your SQL Server query here
SELECT * FROM ShippingsArchive`,
                solution: `SELECT * FROM ShippingsArchive WHERE status = 'Pending';`,
                hints: ["Filter by status"]
            },
            {
                id: 2,
                title: "High Amount Orders",
                description: `Find the average amount of all orders.`,
                difficulty: 2,
                tags: ["sqlserver"],
                starterCode: `-- Write your SQL Server query here
SELECT AVG(amount) FROM OrdersArchive`,
                solution: `SELECT AVG(amount) as average_amount FROM OrdersArchive;`,
                hints: ["Use AVG() function"]
            }
        ]
    },

    python: {
        title: "Python Problems",
        icon: "🐍",
        color: "#3776ab",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Two Sum",
                description: `Given an array of integers and a target sum, return the indices of two numbers that add up to the target.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9`,
                difficulty: 1,
                tags: ["python", "arrays", "easy"],
                starterCode: `def two_sum(nums, target):
    # Write your code here
    pass

# Test
print(two_sum([2, 7, 11, 15], 9))`,
                solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
                hints: ["Use a dictionary to store seen numbers", "Check if complement exists"]
            },
            {
                id: 2,
                title: "Reverse String",
                description: `Write a function that reverses a string.

Example:
Input: "hello"
Output: "olleh"`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def reverse_string(s):
    # Write your code here
    pass

# Test
print(reverse_string("hello"))`,
                solution: `def reverse_string(s):
    return s[::-1]`,
                hints: ["Use string slicing", "[::-1] reverses a string"]
            },
            {
                id: 3,
                title: "Palindrome Check",
                description: `Write a function to check if a string is a palindrome (reads the same forwards and backwards).

Example:
Input: "racecar"
Output: True

Input: "hello"
Output: False`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def is_palindrome(s):
    # Write your code here
    pass

# Test
print(is_palindrome("racecar"))
print(is_palindrome("hello"))`,
                solution: `def is_palindrome(s):
    return s == s[::-1]`,
                hints: ["Compare string with its reverse", "Use slicing"]
            },
            {
                id: 4,
                title: "FizzBuzz",
                description: `Write a program that prints numbers from 1 to n. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".

Example for n=15:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`,
                difficulty: 1,
                tags: ["python", "loops", "easy"],
                starterCode: `def fizzbuzz(n):
    # Write your code here
    pass

# Test
fizzbuzz(15)`,
                solution: `def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`,
                hints: ["Check divisibility by 15 first", "Use modulo operator %"]
            },
            {
                id: 5,
                title: "Find Maximum in Array",
                description: `Write a function to find the maximum number in an array.

Example:
Input: [3, 7, 2, 9, 1]
Output: 9`,
                difficulty: 1,
                tags: ["python", "arrays", "easy"],
                starterCode: `def find_max(arr):
    # Write your code here
    pass

# Test
print(find_max([3, 7, 2, 9, 1]))`,
                solution: `def find_max(arr):
    return max(arr)`,
                hints: ["Use built-in max() function", "Or iterate through array"]
            },
            {
                id: 6,
                title: "Count Vowels",
                description: `Write a function to count the number of vowels (a, e, i, o, u) in a string.

Example:
Input: "hello world"
Output: 3`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def count_vowels(s):
    # Write your code here
    pass

# Test
print(count_vowels("hello world"))`,
                solution: `def count_vowels(s):
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)`,
                hints: ["Create a vowels string", "Use list comprehension"]
            },
            {
                id: 7,
                title: "Fibonacci Sequence",
                description: `Write a function to generate the first n numbers of the Fibonacci sequence.

Example:
Input: n = 7
Output: [0, 1, 1, 2, 3, 5, 8]`,
                difficulty: 2,
                tags: ["python", "recursion", "medium"],
                starterCode: `def fibonacci(n):
    # Write your code here
    pass

# Test
print(fibonacci(7))`,
                solution: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`,
                hints: ["Start with [0, 1]", "Each number is sum of previous two"]
            },
            {
                id: 8,
                title: "Prime Number Checker",
                description: `Write a function to check if a number is prime.

Example:
Input: 7
Output: True

Input: 10
Output: False`,
                difficulty: 2,
                tags: ["python", "math", "medium"],
                starterCode: `def is_prime(n):
    # Write your code here
    pass

# Test
print(is_prime(7))
print(is_prime(10))`,
                solution: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True`,
                hints: ["Check divisibility up to square root", "Handle edge cases"]
            }
        ]
    },

    java: {
        title: "Java Problems",
        icon: "☕",
        color: "#f89820",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Hello World",
                description: `Write a Java program that prints "Hello, World!" to the console.`,
                difficulty: 1,
                tags: ["java", "basics", "easy"],
                starterCode: `// Write your code here
System.out.println("Hello, World!");`,
                solution: `System.out.println("Hello, World!");`,
                hints: ["Use System.out.println()"]
            },
            {
                id: 2,
                title: "Sum of Two Numbers",
                description: `Write code to calculate and print the sum of two numbers.

Example:
int a = 5;
int b = 10;
Output: 15`,
                difficulty: 1,
                tags: ["java", "arithmetic", "easy"],
                starterCode: `int a = 5;
int b = 10;
// Calculate and print sum
`,
                solution: `int a = 5;
int b = 10;
int sum = a + b;
System.out.println(sum);`,
                hints: ["Create a sum variable", "Use + operator"]
            },
            {
                id: 3,
                title: "Even or Odd",
                description: `Write code to check if a number is even or odd.

Example:
int num = 7;
Output: "Odd"`,
                difficulty: 1,
                tags: ["java", "conditionals", "easy"],
                starterCode: `int num = 7;
// Check if even or odd
`,
                solution: `int num = 7;
if (num % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}`,
                hints: ["Use modulo operator %", "Use if-else"]
            },
            {
                id: 4,
                title: "Factorial Calculator",
                description: `Write code to calculate the factorial of a number.

Example:
int n = 5;
Output: 120 (5! = 5*4*3*2*1)`,
                difficulty: 2,
                tags: ["java", "loops", "medium"],
                starterCode: `int n = 5;
int factorial = 1;
// Calculate factorial
`,
                solution: `int n = 5;
int factorial = 1;
for (int i = 1; i <= n; i++) {
    factorial *= i;
}
System.out.println(factorial);`,
                hints: ["Use a for loop", "Multiply each number"]
            },
            {
                id: 5,
                title: "Array Sum",
                description: `Write code to calculate the sum of all elements in an array.

Example:
int[] arr = {1, 2, 3, 4, 5};
Output: 15`,
                difficulty: 1,
                tags: ["java", "arrays", "easy"],
                starterCode: `int[] arr = {1, 2, 3, 4, 5};
int sum = 0;
// Calculate sum
`,
                solution: `int[] arr = {1, 2, 3, 4, 5};
int sum = 0;
for (int num : arr) {
    sum += num;
}
System.out.println(sum);`,
                hints: ["Use enhanced for loop", "Add each element to sum"]
            },
            {
                id: 6,
                title: "String Reversal",
                description: `Write code to reverse a string.

Example:
String str = "hello";
Output: "olleh"`,
                difficulty: 2,
                tags: ["java", "strings", "medium"],
                starterCode: `String str = "hello";
// Reverse the string
`,
                solution: `String str = "hello";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);`,
                hints: ["Use StringBuilder", "Call reverse() method"]
            },
            {
                id: 7,
                title: "Find Largest Number",
                description: `Write code to find the largest number in an array.

Example:
int[] numbers = {3, 7, 2, 9, 1};
Output: 9`,
                difficulty: 1,
                tags: ["java", "arrays", "easy"],
                starterCode: `int[] numbers = {3, 7, 2, 9, 1};
// Find largest number
`,
                solution: `int[] numbers = {3, 7, 2, 9, 1};
int max = numbers[0];
for (int num : numbers) {
    if (num > max) {
        max = num;
    }
}
System.out.println(max);`,
                hints: ["Start with first element", "Compare each element"]
            },
            {
                id: 8,
                title: "Count Characters",
                description: `Write code to count the number of characters in a string (excluding spaces).

Example:
String text = "hello world";
Output: 10`,
                difficulty: 2,
                tags: ["java", "strings", "medium"],
                starterCode: `String text = "hello world";
// Count characters
`,
                solution: `String text = "hello world";
int count = 0;
for (char c : text.toCharArray()) {
    if (c != ' ') {
        count++;
    }
}
System.out.println(count);`,
                hints: ["Convert to char array", "Skip spaces"]
            }
        ]
    },

    'c++': {
        title: "C++ Problems",
        icon: "🔹",
        color: "#00599c",
        totalProblems: 3,
        problems: [
            {
                id: 1,
                title: "Hello C++",
                description: `Write a C++ program that prints "Hello, C++!" using cout.`,
                difficulty: 1,
                tags: ["c++", "basics", "easy"],
                starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print Hello, C++!\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
                hints: ["Use #include <iostream>", "Use cout for printing"]
            },
            {
                id: 2,
                title: "Sum of Two Numbers",
                description: `Write code to add two integers and print the result.`,
                difficulty: 1,
                tags: ["c++", "arithmetic", "easy"],
                starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    // Calculate sum\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    cout << a + b << endl;\n    return 0;\n}`,
                hints: ["Use + operator"]
            }
        ]
    },

    javascript: {
        title: "JavaScript Problems",
        icon: "📜",
        color: "#f6e05e",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Array Filter",
                description: `Use the filter() method to get all even numbers from an array.

Example:
const numbers = [1, 2, 3, 4, 5, 6];
Output: [2, 4, 6]`,
                difficulty: 1,
                tags: ["javascript", "arrays", "easy"],
                starterCode: `const numbers = [1, 2, 3, 4, 5, 6];
// Filter even numbers
const evens = numbers.filter(/* your code here */);
console.log(evens);`,
                solution: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);`,
                hints: ["Use arrow function", "Check if num % 2 === 0"]
            },
            {
                id: 2,
                title: "Object Manipulation",
                description: `Create an object representing a person with name and age properties, then add a method to greet.

Example Output:
"Hello, my name is John and I am 25 years old"`,
                difficulty: 2,
                tags: ["javascript", "objects", "medium"],
                starterCode: `const person = {
    // Add properties and method here
};

console.log(person.greet());`,
                solution: `const person = {
    name: "John",
    age: 25,
    greet() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old\`;
    }
};

console.log(person.greet());`,
                hints: ["Use template literals", "Use 'this' keyword"]
            },
            {
                id: 3,
                title: "DOM Manipulation",
                description: `Write code to change the text content of an element with id "demo" to "Hello, JavaScript!".

Note: This assumes an HTML element exists: <p id="demo">Original text</p>`,
                difficulty: 2,
                tags: ["javascript", "dom", "medium"],
                starterCode: `// Change text of element with id "demo"
`,
                solution: `document.getElementById("demo").textContent = "Hello, JavaScript!";`,
                hints: ["Use getElementById()", "Set textContent property"]
            },
            {
                id: 4,
                title: "Event Handling",
                description: `Write code to add a click event listener to a button that logs "Button clicked!" to the console.

Note: Assumes a button element exists: <button id="myButton">Click me</button>`,
                difficulty: 1,
                tags: ["javascript", "events", "easy"],
                starterCode: `// Add click event listener
`,
                solution: `document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});`,
                hints: ["Use addEventListener()", "First parameter is 'click'"]
            },
            {
                id: 5,
                title: "Async/Await Practice",
                description: `Create an async function that simulates fetching data with a 1-second delay.

Output: "Data fetched!" (after 1 second)`,
                difficulty: 3,
                tags: ["javascript", "async", "hard"],
                starterCode: `async function fetchData() {
    // Simulate delay and return data
}

fetchData().then(data => console.log(data));`,
                solution: `async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Data fetched!";
}

fetchData().then(data => console.log(data));`,
                hints: ["Use Promise with setTimeout", "Return the data"]
            },
            {
                id: 6,
                title: "Array Methods",
                description: `Use map() to double all numbers in an array.

Example:
const numbers = [1, 2, 3, 4, 5];
Output: [2, 4, 6, 8, 10]`,
                difficulty: 1,
                tags: ["javascript", "arrays", "easy"],
                starterCode: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(/* your code here */);
console.log(doubled);`,
                solution: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
                hints: ["Use arrow function", "Multiply by 2"]
            },
            {
                id: 7,
                title: "String Manipulation",
                description: `Write a function to capitalize the first letter of each word in a string.

Example:
Input: "hello world"
Output: "Hello World"`,
                difficulty: 1,
                tags: ["javascript", "strings", "easy"],
                starterCode: `function capitalizeWords(str) {
    // Your code here
}

console.log(capitalizeWords("hello world"));`,
                solution: `function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeWords("hello world"));`,
                hints: ["Split by space", "Use charAt() and toUpperCase()"]
            },
            {
                id: 8,
                title: "Calculator Function",
                description: `Create a calculator function that takes two numbers and an operator (+, -, *, /) and returns the result.

Example:
calculate(10, 5, '+') → 15
calculate(10, 5, '*') → 50`,
                difficulty: 2,
                tags: ["javascript", "functions", "medium"],
                starterCode: `function calculate(a, b, operator) {
    // Your code here
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));`,
                solution: `function calculate(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'Invalid operator';
    }
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));`,
                hints: ["Use switch statement", "Handle each operator"]
            }
        ]
    },

    html: {
        title: "HTML/CSS Problems",
        icon: "🌎",
        color: "#ed8936",
        totalProblems: 6,
        problems: [
            {
                id: 1,
                title: "Create a Card Component",
                description: `Create an HTML card component with:
- A title
- An image
- A description
- A button

Style it with CSS to look like a modern card with shadow and hover effect.`,
                difficulty: 1,
                tags: ["html", "css", "easy"],
                starterCode: `<div class="card">
    <h3>Card Title</h3>
    <p>Card description goes here...</p>
    <button onclick="showAlert()">Click Me</button>
</div>

<style>
.card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background: white;
    max-width: 250px;
    transition: transform 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
}
</style>

<script>
function showAlert() {
    console.log("Button clicked!");
    alert("Hello from JavaScript!");
}
</script>`,
                solution: `<div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card image">
    <h3>Card Title</h3>
    <p>This is a description of the card content.</p>
    <button>Learn More</button>
</div>

<style>
.card {
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: white;
    overflow: hidden;
    transition: transform 0.3s;
}
.card:hover { transform: translateY(-5px); }
.card img { width: 100%; height: auto; }
.card h3, .card p { padding: 10px 20px; }
.card button { width: 100%; padding: 10px; border: none; background: #007bff; color: white; cursor: pointer; }
</style>`,
                hints: ["Use div for container", "Add img, h3, p, and button"]
            },
            {
                id: 2,
                title: "Responsive Navigation Bar",
                description: `Create a horizontal navigation bar with:
- Logo on the left
- Menu items on the right
- Hover effects
- Responsive design (stack vertically on mobile)`,
                difficulty: 2,
                tags: ["html", "css", "medium"],
                starterCode: `<!-- HTML -->
<nav class="navbar">
    <!-- Add your navigation here -->
</nav>`,
                solution: `<nav class="navbar">
    <div class="logo">MyLogo</div>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: #333; color: white; }
.nav-menu { display: flex; list-style: none; gap: 20px; }
.nav-menu a { color: white; text-decoration: none; transition: color 0.3s; }
.nav-menu a:hover { color: #ed8936; }
@media (max-width: 600px) {
    .navbar { flex-direction: column; }
    .nav-menu { flex-direction: column; align-items: center; }
}
</style>`,
                hints: ["Use flexbox for layout", "Add media queries"]
            },
            {
                id: 3,
                title: "Flexbox Layout",
                description: `Create a 3-column layout using Flexbox:
- Each column should be equal width
- Add some padding and background colors
- Make it responsive (stack on mobile)`,
                difficulty: 2,
                tags: ["html", "css", "flexbox", "medium"],
                starterCode: `<!-- HTML -->
<div class="container">
    <!-- Add your columns here -->
</div>`,
                solution: `<div class="container">
    <div class="column">Column 1</div>
    <div class="column">Column 2</div>
    <div class="column">Column 3</div>
</div>

<style>
.container { display: flex; gap: 20px; padding: 20px; }
.column { flex: 1; padding: 20px; background: #f0f0f0; border: 1px solid #ddd; text-align: center; }
@media (max-width: 768px) {
    .container { flex-direction: column; }
}
</style>`,
                hints: ["Use display: flex", "Use flex: 1 for equal width"]
            },
            {
                id: 4,
                title: "Grid Gallery",
                description: `Create a photo gallery using CSS Grid:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Equal spacing between items`,
                difficulty: 2,
                tags: ["html", "css", "grid", "medium"],
                starterCode: `<!-- HTML -->
<div class="gallery">
    <!-- Add your images here -->
</div>`,
                solution: `<div class="gallery">
    <img src="https://via.placeholder.com/300" alt="Image 1">
    <img src="https://via.placeholder.com/300" alt="Image 2">
    <img src="https://via.placeholder.com/300" alt="Image 3">
    <img src="https://via.placeholder.com/300" alt="Image 4">
    <img src="https://via.placeholder.com/300" alt="Image 5">
    <img src="https://via.placeholder.com/300" alt="Image 6">
</div>

<style>
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 15px;
}
@media (max-width: 900px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .gallery { grid-template-columns: 1fr; } }
.gallery img { width: 100%; border-radius: 8px; }
</style>`,
                hints: ["Use display: grid", "Use grid-template-columns"]
            },
            {
                id: 5,
                title: "Form Styling",
                description: `Create a styled contact form with:
- Name input
- Email input
- Message textarea
- Submit button
- Modern styling with focus effects`,
                difficulty: 1,
                tags: ["html", "css", "forms", "easy"],
                starterCode: `<!-- HTML -->
<form class="contact-form">
    <input type="text" placeholder="Name" />
    <button type="submit">Send</button>
</form>

<style>
/* Add your CSS here */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
}
</style>

<script>
// Add your JavaScript here
console.log("Form component initialized");
</script>`,
                solution: `<form class="contact-form">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
</form>

<style>
.contact-form { display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: auto; padding: 20px; }
.contact-form input, .contact-form textarea { padding: 10px; border: 1px solid #ccc; border-radius: 4px; transition: border-color 0.3s; }
.contact-form input:focus, .contact-form textarea:focus { border-color: #007bff; outline: none; }
.contact-form button { padding: 10px; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer; }
</style>`,
                hints: ["Use input and textarea", "Add placeholder text"]
            },
            {
                id: 6,
                title: "Animation Effects",
                description: `Create a button with:
- Smooth hover animation
- Scale effect on hover
- Color transition
- Box shadow on hover`,
                difficulty: 3,
                tags: ["html", "css", "animations", "hard"],
                starterCode: `<!-- HTML -->
<button class="animated-btn">Hover Me</button>`,
                solution: `<button class="animated-btn">Hover Me</button>

<style>
.animated-btn {
    padding: 15px 30px;
    font-size: 18px;
    background: #6a11cb;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.animated-btn:hover {
    transform: scale(1.1);
    background: #2575fc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>`,
                hints: ["Use transition property", "Use transform: scale()"]
            }
        ]
    },

    css: {
        title: "CSS Problems",
        icon: "🎨",
        color: "#38b2ac",
        totalProblems: 3,
        problems: [
            {
                id: 1,
                title: "Center Div",
                description: `Center the inner div both horizontally and vertically inside the container using Flexbox.`,
                difficulty: 1,
                tags: ["css", "flexbox", "easy"],
                starterCode: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    /* Add properties below */
    
}

.box {
    width: 100px;
    height: 100px;
    background-color: #667eea;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
</style>`,
                solution: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #667eea;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
</style>`,
                hints: ["Use justify-content: center", "Use align-items: center"]
            },
            {
                id: 2,
                title: "Grid Layout",
                description: `Create a 3-column grid layout where each item has spacing between them.`,
                difficulty: 2,
                tags: ["css", "grid", "medium"],
                starterCode: `<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>

<style>
.grid-container {
    display: grid;
    /* Add grid columns and gap here */
}

.item {
    background: #764ba2;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}
</style>`,
                solution: `<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.item {
    background: #764ba2;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}
</style>`,
                hints: ["Use grid-template-columns", "Use gap for spacing"]
            },
            {
                id: 3,
                title: "Custom Button",
                description: `Create a professional button with hover effects and transitions.`,
                difficulty: 1,
                tags: ["css", "buttons", "easy"],
                starterCode: `<button class="my-button">Hover Me</button>

<style>
.my-button {
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    /* Add transition and hover effects below */
}
</style>`,
                solution: `<button class="my-button">Hover Me</button>

<style>
.my-button {
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.my-button:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>`,
                hints: ["Use transition: all 0.3s", "Use :hover selector"]
            }
        ]
    },

    angular: {
        title: "Angular Problems",
        icon: "🅰️",
        color: "#dd0031",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Angular Interpolation",
                description: `Display a name variable in the template using interpolation.`,
                difficulty: 1,
                tags: ["angular", "basics"],
                starterCode: `@Component({
  selector: 'app-root',
  template: '<h1>{{ <!-- displayed here --> }}</h1>'
})
class AppComponent {
  name = 'Angular User';
}`,
                solution: `@Component({
  selector: 'app-root',
  template: '<h1>{{ name }}</h1>'
})
class AppComponent {
  name = 'Angular User';
}`,
                hints: ["Use double curly braces"]
            },
            {
                id: 2,
                title: "Angular Click Event",
                description: `Bind a click event to a button to call a method.`,
                difficulty: 2,
                tags: ["angular", "events"],
                starterCode: `<button (<!-- event -->)="doSomething()">Click</button>`,
                solution: `<button (click)="doSomething()">Click</button>`,
                hints: ["Use (click) parenthesis"]
            }
        ]
    },

    react: {
        title: "React Problems",
        icon: "⚛️",
        color: "#61dafb",
        totalProblems: 6,
        problems: [
            {
                id: 1,
                title: "Counter Component",
                description: `Create a counter component with:
- Display current count
- Increment button
- Decrement button
- Reset button

Use useState hook to manage the count state.`,
                difficulty: 1,
                tags: ["react", "hooks", "easy"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`,
                hints: ["Use useState(0)", "Update state with setCount"]
            },
            {
                id: 2,
                title: "Todo List",
                description: `Create a todo list component with:
- Input field to add new todos
- List of todos
- Delete button for each todo
- Use useState to manage todos array`,
                difficulty: 2,
                tags: ["react", "hooks", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };
    
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    
    return (
        <div>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`,
                hints: ["Use array spread operator", "Use filter to delete"]
            },
            {
                id: 3,
                title: "Form Validation",
                description: `Create a form with validation:
- Email input
- Password input (min 6 characters)
- Show error messages
- Disable submit if invalid`,
                difficulty: 2,
                tags: ["react", "forms", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const FormValidation = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<FormValidation />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const FormValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        const newErrors = {};
        if (!email.includes('@')) {
            newErrors.email = 'Invalid email';
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be 6+ characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted!');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}
            
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {errors.password && <p>{errors.password}</p>}
            
            <button type="submit">Submit</button>
        </form>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<FormValidation />);`,
                hints: ["Validate on submit", "Store errors in state"]
            },
            {
                id: 4,
                title: "API Data Fetching",
                description: `Create a component that fetches and displays data:
- Use useEffect to fetch data on mount
- Show loading state
- Display the data
- Handle errors

Use: https://jsonplaceholder.typicode.com/users`,
                difficulty: 3,
                tags: ["react", "hooks", "api", "hard"],
                starterCode: `import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const DataFetcher = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<DataFetcher />);`,
                solution: `import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<DataFetcher />);`,
                hints: ["Use useEffect with empty dependency array", "Handle loading and error states"]
            },
            {
                id: 5,
                title: "State Management",
                description: `Create a component with multiple state values:
- Name (string)
- Age (number)
- isStudent (boolean)
- Display all values
- Buttons to update each`,
                difficulty: 2,
                tags: ["react", "state", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const StateManagement = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<StateManagement />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const StateManagement = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);
    
    return (
        <div>
            <p>Name: {name}</p>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            
            <p>Student: {isStudent ? 'Yes' : 'No'}</p>
            <button onClick={() => setIsStudent(!isStudent)}>Toggle</button>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<StateManagement />);`,
                hints: ["Use multiple useState hooks", "Update each independently"]
            },
            {
                id: 6,
                title: "Component Props",
                description: `Create a reusable Card component that accepts props:
- title
- description
- imageUrl

Then use it to display multiple cards.`,
                difficulty: 1,
                tags: ["react", "props", "easy"],
                starterCode: `import React from "react";
import { createRoot } from "react-dom/client";

const Card = (props) => {
    // Add your code here
};

const App = () => {
    return (
        <div>
            {/* Use Card component here */}
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
                solution: `import React from "react";
import { createRoot } from "react-dom/client";

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card 
                title="Card 1"
                description="This is card 1"
                imageUrl="https://via.placeholder.com/150"
            />
            <Card 
                title="Card 2"
                description="This is card 2"
                imageUrl="https://via.placeholder.com/150"
            />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
                hints: ["Destructure props", "Reuse component with different props"]
            }
        ]
    }
};

// Helper functions
export const getCustomProblems = (topic) => {
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    return customProblems[topic] || [];
};

export const addCustomProblem = (topic, problem) => {
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    if (!customProblems[topic]) {
        customProblems[topic] = [];
    }
    customProblems[topic].push(problem);
    localStorage.setItem('customProblems', JSON.stringify(customProblems));
};

export const deleteProblem = (topic, problemId) => {
    // Check if it's a custom problem
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    if (customProblems[topic]) {
        const initialLength = customProblems[topic].length;
        customProblems[topic] = customProblems[topic].filter(p => p.id !== problemId);

        if (customProblems[topic].length < initialLength) {
            localStorage.setItem('customProblems', JSON.stringify(customProblems));
            return; // Deleted from custom, we are done
        }
    }

    // If not custom, assume it's static and add to deleted list
    const deletedStatic = JSON.parse(localStorage.getItem('deletedStaticProblems') || '{}');
    if (!deletedStatic[topic]) {
        deletedStatic[topic] = [];
    }
    if (!deletedStatic[topic].includes(problemId)) {
        deletedStatic[topic].push(problemId);
        localStorage.setItem('deletedStaticProblems', JSON.stringify(deletedStatic));
    }
};

export const getAllTopics = () => {
    return Object.keys(problemsData).map(key => {
        const customCount = getCustomProblems(key).length;
        return {
            id: key,
            title: problemsData[key].title,
            icon: problemsData[key].icon,
            color: problemsData[key].color,
            totalProblems: problemsData[key].totalProblems + customCount,
            solvedCount: getSolvedCount(key)
        };
    });
};

export const getProblemsByTopic = (topic) => {
    const data = problemsData[topic];
    if (!data) return null;

    const customProblems = getCustomProblems(topic);

    // Get deleted static problems
    const deletedStatic = JSON.parse(localStorage.getItem('deletedStaticProblems') || '{}');
    const deletedIds = deletedStatic[topic] || [];

    // Filter static problems
    const visibleStaticProblems = data.problems.filter(p => !deletedIds.includes(p.id));

    return {
        ...data,
        problems: [...visibleStaticProblems, ...customProblems],
        totalProblems: visibleStaticProblems.length + customProblems.length
    };
};

export const getProblemById = (topic, problemId) => {
    const topicData = getProblemsByTopic(topic);
    if (!topicData) return null;
    return topicData.problems.find(p => p.id === parseInt(problemId));
};

export const getSolvedCount = (topic) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    return solved[topic]?.length || 0;
};

export const markProblemSolved = (topic, problemId) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    if (!solved[topic]) {
        solved[topic] = [];
    }
    if (!solved[topic].includes(problemId)) {
        solved[topic].push(problemId);
        localStorage.setItem('solvedProblems', JSON.stringify(solved));
    }
};

export const isProblemSolved = (topic, problemId) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    return solved[topic]?.includes(problemId) || false;
};

export const saveUserCode = (topic, problemId, code) => {
    const userCode = JSON.parse(localStorage.getItem('userCode') || '{}');
    if (!userCode[topic]) {
        userCode[topic] = {};
    }
    userCode[topic][problemId] = code;
    localStorage.setItem('userCode', JSON.stringify(userCode));
};

export const getUserCode = (topic, problemId) => {
    const userCode = JSON.parse(localStorage.getItem('userCode') || '{}');
    return userCode[topic]?.[problemId] || null;
};
