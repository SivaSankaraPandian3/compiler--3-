const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quiz = require('../models/Quiz');
const connectDB = require('../config/db');

dotenv.config({ path: './.env' });

const quizData = {
    python: {
        title: "Python Programming",
        icon: "🐍",
        color: "#3776ab",
        levels: {
            beginner: [
                { id: 1, question: "What is the correct way to print 'Hello World' in Python?", options: ["echo('Hello World')", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"], correctAnswer: 1, explanation: "In Python, we use the print() function to display output." },
                { id: 2, question: "Which of the following is a valid variable name in Python?", options: ["2variable", "variable-name", "variable_name", "variable name"], correctAnswer: 2, explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain spaces/hyphens." },
                { id: 3, question: "What does the len() function do?", options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Returns the type of object"], correctAnswer: 0, explanation: "The len() function returns the number of items in an object." }
            ],
            medium: [
                { id: 1, question: "What is the output of: print(type([]))", options: ["<class 'tuple'>", "<class 'dict'>", "<class 'list'>", "<class 'set'>"], correctAnswer: 2, explanation: "[] denotes a list in Python." },
                { id: 2, question: "How do you handle exceptions in Python?", options: ["try/catch", "try/except", "do/catch", "try/rescue"], correctAnswer: 1, explanation: "Python uses try/except blocks for error handling." },
                { id: 3, question: "Which keyword is used for defining a function?", options: ["func", "def", "function", "define"], correctAnswer: 1, explanation: "The 'def' keyword is used to define functions in Python." }
            ],
            hard: [
                { id: 1, question: "What is a decorator in Python?", options: ["A function that modifies another function", "A class for styling", "A variable type", "A database connector"], correctAnswer: 0, explanation: "Decorators allow you to modify the behavior of a function or class." },
                { id: 2, question: "What is the Global Interpreter Lock (GIL)?", options: ["A security feature", "A mutex that allows only one thread to execute", "A database lock", "A memory manager"], correctAnswer: 1, explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once." }
            ]
        }
    },
    java: {
        title: "Java Programming",
        icon: "☕",
        color: "#f89820",
        levels: {
            beginner: [
                { id: 1, question: "What is the correct syntax to output 'Hello World' in Java?", options: ["print('Hello World');", "System.out.println('Hello World');", "Console.WriteLine('Hello World');", "echo 'Hello World';"], correctAnswer: 1, explanation: "System.out.println() is used to print to the console." },
                { id: 2, question: "Which keyword is used to create a class?", options: ["class", "Class", "new", "create"], correctAnswer: 0, explanation: "The 'class' keyword defines a new class." }
            ],
            medium: [
                { id: 1, question: "What is the parent class of all classes in Java?", options: ["Main", "Object", "Class", "Super"], correctAnswer: 1, explanation: "The Object class is the root of the class hierarchy." },
                { id: 2, question: "Which collection stores unique elements?", options: ["List", "Map", "Set", "Array"], correctAnswer: 2, explanation: "A Set is a collection that contains no duplicate elements." }
            ],
            hard: [
                { id: 1, question: "What is 'reflection' in Java?", options: ["A graphics library", "Examining/modifying runtime behavior", "A memory management technique", "A multi-threading tool"], correctAnswer: 1, explanation: "Reflection allows code to inspect other code in the same system at runtime." }
            ]
        }
    },
    'c++': {
        title: "C++ Programming",
        icon: "🔹",
        color: "#00599c",
        levels: {
            beginner: [{ id: 1, question: "Which header file is needed for cout?", options: ["<stdio.h>", "<stdlib.h>", "<iostream>", "<string>"], correctAnswer: 2, explanation: "iostream header is used for input/output operations." }],
            medium: [{ id: 1, question: "What is a pointer?", options: ["A variable that stores memory address", "A loop type", "A class", "None"], correctAnswer: 0, explanation: "Pointers store the memory address of another variable." }],
            hard: [{ id: 1, question: "What is the rule of three?", options: ["Destructor, Copy Constructor, Copy Assignment", "Public, Private, Protected", "Compile, Link, Run", "None"], correctAnswer: 0, explanation: "If a class needs a destructor, it likely needs a copy constructor and copy assignment operator." }]
        }
    },
    html: {
        title: "HTML & Web Development",
        icon: "🌎",
        color: "#ed8936",
        levels: {
            beginner: [{ id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correctAnswer: 0, explanation: "HTML stands for Hyper Text Markup Language." }],
            medium: [{ id: 1, question: "Which attribute is used to provide an alternate text for an image?", options: ["title", "alt", "src", "href"], correctAnswer: 1, explanation: "The alt attribute specifies an alternate text for an image." }],
            hard: [{ id: 1, question: "What is the purpose of the <canvas> tag?", options: ["To display database records", "To draw graphics via scripting", "To play video", "To format text"], correctAnswer: 1, explanation: "<canvas> is used to draw graphics, on the fly, via scripting (usually JavaScript)." }]
        }
    },
    sql: {
        title: "SQL & Databases",
        icon: "💾",
        color: "#4a5568",
        levels: {
            beginner: [{ id: 1, question: "Select command?", options: ["GET", "FETCH", "SELECT", "RETRIEVE"], correctAnswer: 2, explanation: "SELECT retrieves data." }],
            medium: [{ id: 1, question: "JOIN type?", options: ["INNER", "OUTER", "LEFT", "All"], correctAnswer: 3, explanation: "SQL supports multiple join types." }],
            hard: [{ id: 1, question: "ACID property?", options: ["Atomicity", "Consistency", "Isolation", "All of above"], correctAnswer: 3, explanation: "ACID properties ensure database transaction reliability." }]
        }
    },
    react: {
        title: "React Framework",
        icon: "⚛️",
        color: "#61dafb",
        levels: {
            beginner: [{ id: 1, question: "What is React?", options: ["Library", "Framework", "Database", "OS"], correctAnswer: 0, explanation: "React is a JS library." }],
            medium: [{ id: 1, question: "useEffect usage?", options: ["State", "Side effects", "Routing", "Styling"], correctAnswer: 1, explanation: "useEffect handles side effects." }],
            hard: [{ id: 1, question: "Custom Hook prefix?", options: ["get", "set", "use", "make"], correctAnswer: 2, explanation: "Custom hooks must start with 'use'." }]
        }
    },
    javascript: {
        title: "JavaScript Basics",
        icon: "📜",
        color: "#f6e05e",
        levels: {
            beginner: [{ id: 1, question: "Declare var?", options: ["var/let/const", "int/str", "dim", "val"], correctAnswer: 0, explanation: "Use var, let, or const." }],
            medium: [{ id: 1, question: "Closure?", options: ["Function w/ lexical scope", "Loop", "Object", "Error"], correctAnswer: 0, explanation: "A closure gives access to an outer function's scope." }],
            hard: [{ id: 1, question: "Event Loop?", options: ["Handles async", "Draws UI", "Compiles code", "None"], correctAnswer: 0, explanation: "Event loop handles asynchronous callbacks." }]
        }
    },
    css: {
        title: "CSS Styling",
        icon: "🎨",
        color: "#2965f1",
        levels: {
            beginner: [{ id: 1, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Control Style Series"], correctAnswer: 0, explanation: "CSS stands for Cascading Style Sheets." }],
            medium: [{ id: 1, question: "Property for text color?", options: ["font-color", "color", "text-color", "style"], correctAnswer: 1, explanation: "Use the color property." }],
            hard: [{ id: 1, question: "Selector for id?", options: [".", "#", "*", "@"], correctAnswer: 1, explanation: "# is used to select by ID." }]
        }
    },
    angular: {
        title: "Angular Framework",
        icon: "🅰️",
        color: "#dd0031",
        levels: {
            beginner: [{ id: 1, question: "What is Angular?", options: ["Library", "Framework", "OS", "Language"], correctAnswer: 1, explanation: "Angular is a development platform/framework." }],
            medium: [{ id: 1, question: "CLI command for new component?", options: ["ng new", "ng generate component", "ng add", "ng run"], correctAnswer: 1, explanation: "ng generate component (or ng g c) creates a new component." }],
            hard: [{ id: 1, question: "Main decorator?", options: ["@React", "@Component", "@Build", "@Main"], correctAnswer: 1, explanation: "@Component defines an Angular component." }]
        }
    }
};

const seedQuizzes = async () => {
    try {
        await connectDB();
        console.log('MongoDB Connected...');

        // Clear existing quizzes
        await Quiz.deleteMany({});
        console.log('Cleared existing quizzes...');

        let count = 0;
        for (const [topic, data] of Object.entries(quizData)) {
            await Quiz.create({
                topic,
                ...data
            });
            count++;
        }

        console.log(`Successfully seeded ${count} quiz topics!`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedQuizzes();
