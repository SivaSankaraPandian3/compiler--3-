const fs = require('fs');
const path = require('path');

const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'interview_prep_data.json'), 'utf-8'));

const newProblems = [
    // Javascript (11-20)
    {
        "topic": "javascript",
        "title": "Array Map",
        "description": "Double each number in [1, 2, 3] using .map() and log the result.",
        "difficulty": 1,
        "tags": ["arrays", "map"],
        "starterCode": "const arr = [1, 2, 3];\n// your code here",
        "solution": "const arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Array Filter",
        "description": "Filter even numbers from [1, 2, 3, 4] and log the result.",
        "difficulty": 1,
        "tags": ["arrays", "filter"],
        "starterCode": "const arr = [1, 2, 3, 4];\n// your code here",
        "solution": "const arr = [1, 2, 3, 4];\nconsole.log(arr.filter(x => x % 2 === 0));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Find Element",
        "description": "Find the first number greater than 10 in [5, 12, 8, 130, 44] and log it.",
        "difficulty": 1,
        "tags": ["arrays", "find"],
        "starterCode": "const arr = [5, 12, 8, 130, 44];\n// your code here",
        "solution": "const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.find(x => x > 10));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Reduce Sum",
        "description": "Calculate the sum of [1, 2, 3, 4] using .reduce() and log it.",
        "difficulty": 2,
        "tags": ["arrays", "reduce"],
        "starterCode": "const arr = [1, 2, 3, 4];\n// your code here",
        "solution": "const arr = [1, 2, 3, 4];\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "String Includes",
        "description": "Check if 'hello world' includes 'world' and log the boolean result.",
        "difficulty": 1,
        "tags": ["strings"],
        "starterCode": "const s = 'hello world';\n// your code here",
        "solution": "const s = 'hello world';\nconsole.log(s.includes('world'));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Object Keys",
        "description": "Log the keys of object {a: 1, b: 2}.",
        "difficulty": 1,
        "tags": ["objects"],
        "starterCode": "const obj = {a: 1, b: 2};\n// your code here",
        "solution": "const obj = {a: 1, b: 2};\nconsole.log(Object.keys(obj));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Math Random",
        "description": "Log a random number between 0 and 1 (simulated).",
        "difficulty": 1,
        "tags": ["math"],
        "starterCode": "// your code here",
        "solution": "console.log(Math.random());",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "SetTimeout Basic",
        "description": "Log 'Done' after 100ms (simulated).",
        "difficulty": 2,
        "tags": ["async"],
        "starterCode": "// your code here",
        "solution": "setTimeout(() => console.log('Done'), 100);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Arrow function",
        "description": "Create an arrow function sum(a, b) that returns a+b and log sum(10, 5).",
        "difficulty": 1,
        "tags": ["functions"],
        "starterCode": "// your code here",
        "solution": "const sum = (a, b) => a + b;\nconsole.log(sum(10, 5));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Truthy Check",
        "description": "Log the boolean value of an empty string.",
        "difficulty": 1,
        "tags": ["basics"],
        "starterCode": "// your code here",
        "solution": "console.log(Boolean(''));",
        "testCases": []
    },

    // Python (11-20)
    {
        "topic": "python",
        "title": "List Comprehension",
        "description": "Create a list of squares for 1 to 5 using list comprehension and print it.",
        "difficulty": 2,
        "tags": ["lists", "comprehension"],
        "starterCode": "# your code here",
        "solution": "print([x**2 for x in range(1, 6)])",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Dict Keys",
        "description": "Print keys of {'x': 1, 'y': 2}.",
        "difficulty": 1,
        "tags": ["dictionaries"],
        "starterCode": "d = {'x': 1, 'y': 2}\n# your code here",
        "solution": "d = {'x': 1, 'y': 2}\nprint(d.keys())",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Default Args",
        "description": "Define a function greet(name='User') that prints 'Hello ' + name. Call it without args.",
        "difficulty": 1,
        "tags": ["functions"],
        "starterCode": "# your code here",
        "solution": "def greet(name='User'):\n    print('Hello ' + name)\ngreet()",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Simple Class",
        "description": "Create a class Dog with a name attribute. Instantiate and print the name.",
        "difficulty": 2,
        "tags": ["oop"],
        "starterCode": "# your code here",
        "solution": "class Dog:\n    def __init__(self, name):\n        self.name = name\nd = Dog('Buddy')\nprint(d.name)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Exception Handling",
        "description": "Try to divide 1 by 0 and print 'Error' in the except block.",
        "difficulty": 2,
        "tags": ["basics"],
        "starterCode": "# your code here",
        "solution": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "F-String",
        "description": "Print 'Age: 25' using an f-string with variable age = 25.",
        "difficulty": 1,
        "tags": ["strings"],
        "starterCode": "age = 25\n# your code here",
        "solution": "age = 25\nprint(f'Age: {age}')",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Lambda Function",
        "description": "Create a lambda to double a number and print double(10).",
        "difficulty": 2,
        "tags": ["functions"],
        "starterCode": "# your code here",
        "solution": "double = lambda x: x * 2\nprint(double(10))",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Zip Usage",
        "description": "Zip [1, 2] and ['a', 'b'] and print the list of tuples.",
        "difficulty": 2,
        "tags": ["basics"],
        "starterCode": "# your code here",
        "solution": "print(list(zip([1, 2], ['a', 'b'])))",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Enumerate",
        "description": "Loop through ['a', 'b'] using enumerate and print index, value.",
        "difficulty": 2,
        "tags": ["loops"],
        "starterCode": "l = ['a', 'b']\n# your code here",
        "solution": "l = ['a', 'b']\nfor i, v in enumerate(l):\n    print(i, v)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Set Operations",
        "description": "Print the intersection of {1, 2} and {2, 3}.",
        "difficulty": 2,
        "tags": ["sets"],
        "starterCode": "s1 = {1, 2}\ns2 = {2, 3}\n# your code here",
        "solution": "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1 & s2)",
        "testCases": []
    },

    // HTML (11-20)
    {
        "topic": "html",
        "title": "Blockquote",
        "description": "Create a blockquote with 'To be or not to be'.",
        "difficulty": 1,
        "tags": ["tags"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <blockquote>To be or not to be</blockquote>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Checkbox",
        "description": "Create a checkbox input labeled 'Accept Terms'.",
        "difficulty": 1,
        "tags": ["forms"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <input type=\"checkbox\" id=\"terms\" />\n  <label for=\"terms\">Accept Terms</label>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Radio Buttons",
        "description": "Create two radio buttons for Gender (Male/Female) with the same name.",
        "difficulty": 1,
        "tags": ["forms"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n  <input type=\"radio\" name=\"gender\" value=\"female\"> Female\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Selection Menu",
        "description": "Create a select dropdown with options 'A', 'B'.",
        "difficulty": 1,
        "tags": ["forms"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <select>\n    <option>A</option>\n    <option>B</option>\n  </select>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Textarea",
        "description": "Create a textarea element.",
        "difficulty": 1,
        "tags": ["forms"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <textarea></textarea>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Fieldset",
        "description": "Create a fieldset with a legend 'Personal Info'.",
        "difficulty": 1,
        "tags": ["forms"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <fieldset>\n    <legend>Personal Info</legend>\n  </fieldset>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Iframe",
        "description": "Add an iframe with src 'https://example.com'.",
        "difficulty": 2,
        "tags": ["embed"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <iframe src=\"https://example.com\"></iframe>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Video Tag",
        "description": "Add a video tag with a source 'movie.mp4'.",
        "difficulty": 2,
        "tags": ["media"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <video>\n    <source src=\"movie.mp4\" type=\"video/mp4\">\n  </video>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Audio Element",
        "description": "Add an audio tag with source 'song.mp3'.",
        "difficulty": 2,
        "tags": ["media"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <audio src=\"song.mp3\" controls></audio>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Details Tag",
        "description": "Create a details/summary element.",
        "difficulty": 1,
        "tags": ["interactivity"],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <details>\n    <summary>Click to show</summary>\n    <p>Hidden content</p>\n  </details>\n</div>",
        "testCases": []
    },

    // Java (11-20)
    {
        "topic": "java",
        "title": "While Loop",
        "description": "Print 'Hi' once using a while loop.",
        "difficulty": 1,
        "tags": ["loops"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while(i < 1) {\n            System.out.println(\"Hi\");\n            i++;\n        }\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Switch Statement",
        "description": "Use switch case for int day = 1 and print 'Mon'.",
        "difficulty": 2,
        "tags": ["logic"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int day = 1;\n        // switch code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int day = 1;\n        switch(day) {\n            case 1: System.out.println(\"Mon\"); break;\n        }\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Method Definition",
        "description": "Define a static method sayHello() that prints 'Hello'. Call it.",
        "difficulty": 2,
        "tags": ["methods"],
        "starterCode": "public class Main {\n    // sayHello here\n    public static void main(String[] args) {\n        // call here\n    }\n}",
        "solution": "public class Main {\n    static void sayHello() { System.out.println(\"Hello\"); }\n    public static void main(String[] args) {\n        sayHello();\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Constructor",
        "description": "Create a class Person with name and a constructor. Instantiate it.",
        "difficulty": 2,
        "tags": ["oop"],
        "starterCode": "// class Person here\npublic class Main {\n    public static void main(String[] args) {\n        // instantiate here\n    }\n}",
        "solution": "class Person {\n    String name;\n    Person(String n) { name = n; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"John\");\n        System.out.println(p.name);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Math Sqrt",
        "description": "Print the square root of 16.",
        "difficulty": 1,
        "tags": ["math"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Math.sqrt(16));\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "String Concat",
        "description": "Print 'A' + 'B' result.",
        "difficulty": 1,
        "tags": ["strings"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"A\" + \"B\");\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Boolean OR",
        "description": "Print result of true || false.",
        "difficulty": 1,
        "tags": ["logic"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(true || false);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Type Casting",
        "description": "Cast double 9.5 to int and print it.",
        "difficulty": 2,
        "tags": ["basics"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        double d = 9.5;\n        // cast and print\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        double d = 9.5;\n        int i = (int) d;\n        System.out.println(i);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Final Variable",
        "description": "Create a final int PI = 3 and print it.",
        "difficulty": 1,
        "tags": ["basics"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        final int PI = 3;\n        System.out.println(PI);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Modulo Op",
        "description": "Print 10 % 3.",
        "difficulty": 1,
        "tags": ["math"],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 % 3);\n    }\n}",
        "testCases": []
    },

    // C++ (11-20)
    {
        "topic": "c++",
        "title": "While Loop",
        "description": "Print 'Count' once using while.",
        "difficulty": 1,
        "tags": ["loops"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int i=0; // loop here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int i=0;\n    while(i<1) { cout << \"Count\" << endl; i++; }\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Switch Case",
        "description": "Switch on int x=1, print 'One'.",
        "difficulty": 2,
        "tags": ["logic"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int x=1; // switch here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int x=1;\n    switch(x) { case 1: cout << \"One\" << endl; }\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "CPP Function",
        "description": "Define greet() function and call it.",
        "difficulty": 2,
        "tags": ["functions"],
        "starterCode": "#include <iostream>\nusing namespace std;\n// function here\nint main() {\n  // call here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nvoid greet() { cout << \"Hi\" << endl; }\nint main() {\n    greet();\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Array Iteration",
        "description": "Iterate over {1, 2} and print them. (Simulated)",
        "difficulty": 2,
        "tags": ["arrays"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int arr[] = {1, 2};\n  // loop\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2};\n    for(int x : arr) cout << x << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "String Concat",
        "description": "Concat 'Hello ' and 'World'.",
        "difficulty": 1,
        "tags": ["strings"],
        "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string s1 = \"Hello \", s2 = \"World\";\n  // print concat\n  return 0;\n}",
        "solution": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s1 = \"Hello \", s2 = \"World\";\n    cout << s1 + s2 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Math Abs",
        "description": "Print abs(-10).",
        "difficulty": 1,
        "tags": ["math"],
        "starterCode": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    cout << abs(-10) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Logic AND",
        "description": "Print result of (true && true).",
        "difficulty": 1,
        "tags": ["logic"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << (true && true) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Logic OR",
        "description": "Print result of (true || false).",
        "difficulty": 1,
        "tags": ["logic"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << (true || false) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Float Output",
        "description": "Print 7.5.",
        "difficulty": 1,
        "tags": ["basics"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << 7.5 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Const Int",
        "description": "Define const int K=10 and print.",
        "difficulty": 1,
        "tags": ["basics"],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    const int K = 10;\n    cout << K << endl;\n    return 0;\n}",
        "testCases": []
    },

    // Angular (11-20)
    {
        "topic": "angular",
        "title": "NgClass demo",
        "description": "Use [ngClass] to apply 'active' class.",
        "difficulty": 2,
        "tags": ["directives"],
        "starterCode": "@Component({\n  selector: 'app-root', template: '<div [ngClass]=\"/* ... */\">Test</div>'\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root', template: '<div [ngClass]=\"\\'active\\'\">Test</div>'\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "NgStyle demo",
        "description": "Use [ngStyle] to set color red.",
        "difficulty": 2,
        "tags": ["directives"],
        "starterCode": "@Component({\n  selector: 'app-root', template: '<div [ngStyle]=\"/* ... */\">Test</div>'\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root', template: '<div [ngStyle]=\"{color: \\'red\\'}\">Test</div>'\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Uppercase Pipe",
        "description": "Apply uppercase pipe to variable 'text'.",
        "difficulty": 1,
        "tags": ["pipes"],
        "starterCode": "@Component({\n  selector: 'app-root', template: '{{ text | /* pipe */ }}'\n})\nexport class AppComponent { text = 'low'; }",
        "solution": "@Component({\n  selector: 'app-root', template: '{{ text | uppercase }}'\n})\nexport class AppComponent { text = 'low'; }",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Date Pipe",
        "description": "Apply date pipe.",
        "difficulty": 1,
        "tags": ["pipes"],
        "starterCode": "@Component({\n  selector: 'app-root', template: '{{ today | /* pipe */ }}'\n})\nexport class AppComponent { today = new Date(); }",
        "solution": "@Component({\n  selector: 'app-root', template: '{{ today | date }}'\n})\nexport class AppComponent { today = new Date(); }",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "OnInit Hook",
        "description": "Implement OnInit and log 'Start'.",
        "difficulty": 2,
        "tags": ["lifecycle"],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnInit {\n  // implement here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnInit {\n  ngOnInit() { console.log('Start'); }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "OnDestroy Hook",
        "description": "Implement OnDestroy.",
        "difficulty": 2,
        "tags": ["lifecycle"],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnDestroy {\n  // implement here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnDestroy {\n  ngOnDestroy() { console.log('End'); }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Event Emitter",
        "description": "Define an @Output event emitter.",
        "difficulty": 3,
        "tags": ["events"],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent {\n  // output here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent {\n  @Output() myEvent = new EventEmitter();\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "ViewChild",
        "description": "Use ViewChild to get a reference.",
        "difficulty": 3,
        "tags": ["basics"],
        "starterCode": "@Component({ selector: 'app-root', template: '<div #box></div>' })\nexport class AppComponent {\n  // ViewChild here\n}",
        "solution": "@Component({ selector: 'app-root', template: '<div #box></div>' })\nexport class AppComponent {\n  @ViewChild('box') box: any;\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Service Inject",
        "description": "Inject a mock MyService in constructor.",
        "difficulty": 3,
        "tags": ["di"],
        "starterCode": "@Component({ ... })\nexport class AppComponent {\n  constructor(/* inject */) {}\n}",
        "solution": "@Component({ ... })\nexport class AppComponent {\n  constructor(private myService: MyService) {}\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Safe Nav Operator",
        "description": "Use ? to safely access user?.name.",
        "difficulty": 1,
        "tags": ["basics"],
        "starterCode": "@Component({ ... template: '{{ user?.name }}' })\nexport class AppComponent { user = null; }",
        "solution": "@Component({ ... template: '{{ user?.name }}' })\nexport class AppComponent { user = null; }",
        "testCases": []
    },

    // CSS (11-20)
    {
        "topic": "css",
        "title": "Border Radius",
        "description": "Set border radius to 50% for class 'circle'.",
        "difficulty": 1,
        "tags": ["shaping"],
        "starterCode": ".circle {\n  /* code here */\n}",
        "solution": ".circle {\n  border-radius: 50%;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Box Shadow",
        "description": "Add a box shadow 5px 5px 5px grey.",
        "difficulty": 2,
        "tags": ["effects"],
        "starterCode": ".card {\n  /* code here */\n}",
        "solution": ".card {\n  box-shadow: 5px 5px 5px grey;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Opacity",
        "description": "Set opacity to 0.5.",
        "difficulty": 1,
        "tags": ["effects"],
        "starterCode": ".ghost {\n  /* code here */\n}",
        "solution": ".ghost {\n  opacity: 0.5;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Display None",
        "description": "Hide class 'hidden' using display property.",
        "difficulty": 1,
        "tags": ["layout"],
        "starterCode": ".hidden {\n  /* code here */\n}",
        "solution": ".hidden {\n  display: none;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Z-Index",
        "description": "Set z-index to 999.",
        "difficulty": 2,
        "tags": ["layout"],
        "starterCode": ".modal {\n  /* code here */\n}",
        "solution": ".modal {\n  z-index: 999;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Transition",
        "description": "Set transition to all 2s.",
        "difficulty": 2,
        "tags": ["animations"],
        "starterCode": "button {\n  /* code here */\n}",
        "solution": "button {\n  transition: all 2s;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Cursor",
        "description": "Set cursor to pointer for class 'btn'.",
        "difficulty": 1,
        "tags": ["interactivity"],
        "starterCode": ".btn {\n  /* code here */\n}",
        "solution": ".btn {\n  cursor: pointer;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Overflow",
        "description": "Hide overflow for class 'container'.",
        "difficulty": 1,
        "tags": ["layout"],
        "starterCode": ".container {\n  /* code here */\n}",
        "solution": ".container {\n  overflow: hidden;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Flex Wrap",
        "description": "Set flex wrap to wrap.",
        "difficulty": 2,
        "tags": ["flexbox"],
        "starterCode": ".flex-container {\n  /* code here */\n}",
        "solution": ".flex-container {\n  flex-wrap: wrap;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Position Absolute",
        "description": "Set position to absolute.",
        "difficulty": 1,
        "tags": ["layout"],
        "starterCode": ".overlay {\n  /* code here */\n}",
        "solution": ".overlay {\n  position: absolute;\n}",
        "testCases": []
    },

    // SQL (14-20)
    {
        "topic": "sql",
        "title": "Inner Join",
        "description": "Join Customers and Orders on customer_id.",
        "difficulty": 2,
        "tags": ["joins"],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers INNER JOIN Orders ON Customers.customer_id = Orders.customer_id",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Left Join",
        "description": "Join Customers and Orders using LEFT JOIN.",
        "difficulty": 2,
        "tags": ["joins"],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Group By",
        "description": "Count customers per country.",
        "difficulty": 2,
        "tags": ["grouping"],
        "starterCode": "-- write query here",
        "solution": "SELECT country, count(*) FROM Customers GROUP BY country",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Having Clause",
        "description": "Select countries with more than 5 customers.",
        "difficulty": 3,
        "tags": ["grouping"],
        "starterCode": "-- write query here",
        "solution": "SELECT country, count(*) FROM Customers GROUP BY country HAVING count(*) > 5",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Update Record",
        "description": "Update customer name to 'John' where id=1.",
        "difficulty": 2,
        "tags": ["dml"],
        "starterCode": "-- write query here",
        "solution": "UPDATE Customers SET customer_name = 'John' WHERE customer_id = 1",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Delete Record",
        "description": "Delete customer where id=10.",
        "difficulty": 2,
        "tags": ["dml"],
        "starterCode": "-- write query here",
        "solution": "DELETE FROM Customers WHERE customer_id = 10",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Insert Into",
        "description": "Insert a new customer (ID=100, Name='New').",
        "difficulty": 2,
        "tags": ["dml"],
        "starterCode": "-- write query here",
        "solution": "INSERT INTO Customers (customer_id, customer_name) VALUES (100, 'New')",
        "testCases": []
    }
];

const finalData = existingData.concat(newProblems);
fs.writeFileSync(path.join(__dirname, 'interview_prep_data.json'), JSON.stringify(finalData, null, 4));
console.log('Successfully added ' + newProblems.length + ' problems.');
