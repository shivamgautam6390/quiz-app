// Questions for each category
const questionsByCategory = {
    // questions for the HTML category
    HTML: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Tool Markup Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML tag is used to create a line break?",
            options: ["<br>", "<hr>", "<h1>", "<break>"],
            answer: "<br>"
        },
        {
            question: "What is the correct HTML tag for inserting an image?",
            options: ["<image src='image.jpg'>", "<img href='image.jpg'>", "<img src='image.jpg'>", "<picture src='image.jpg'>"],
            answer: "<img src='image.jpg'>"
        },
        {
            question: "How do you create a numbered list in HTML?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            answer: "<ol>"
        },
        {
            question: "Which HTML tag is used to create an unordered list?",
            options: ["<ul>", "<list>", "<ol>", "<li>"],
            answer: "<ul>"
        },
        {
            question: "Which attribute is used to provide a unique identifier for an HTML element?",
            options: ["id", "class", "style", "name"],
            answer: "id"
        },
        {
            question: "What is the correct HTML tag for creating a table?",
            options: ["<table>", "<tab>", "<tr>", "<td>"],
            answer: "<table>"
        },
        {
            question: "What is the correct HTML tag for creating a link to an external page?",
            options: ["<a href='http://www.example.com'>", "<link href='http://www.example.com'>", "<url href='http://www.example.com'>", "<hyperlink href='http://www.example.com'>"],
            answer: "<a href='http://www.example.com'>"
        },
        {
            question: "What is the correct HTML tag for creating a form?",
            options: ["<form>", "<input>", "<button>", "<field>"],
            answer: "<form>"
        },
        {
            question: "What is the correct HTML tag for creating a checkbox?",
            options: ["<checkbox>", "<input type='checkbox'>", "<input type='radio'>", "<input type='button'>"],
            answer: "<input type='checkbox'>"
        }
    ],

    // questions for the CSS category
    CSS: [
        {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"

        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            options: ["background-color", "color", "font-size", "text-align"],
            answer: "background-color"
        },  
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["color", "background-color", "font-size", "text-align"],
            answer: "color"
        },
        {
            question: "Which CSS property is used to change the text size of an element?",
            options: ["font-size", "background-color", "color", "text-align"],
            answer: "font-size"
        },
        {
            question: "Which CSS property is used to center an element horizontally?",
            options: ["text-align", "font-size", "background-color", "color"],
            answer: "text-align"        
        },
        {
            question: "Which CSS property is used to center an element vertically?",
            options: ["text-align", "font-size", "background-color", "color"],
            answer: "text-align"
        },
        {
            question: "Which CSS property is used to add a border to an element?",
            options: ["border", "font-size", "background-color", "color"],
            answer: "border"
        },
        {
            question: "Which CSS property is used to add a margin to an element?",
            options: ["margin", "font-size", "background-color", "color"],
            answer: "margin"
        },
        {   
            question: "Which CSS property is used to add a padding to an element?",
            options: ["padding", "font-size", "background-color", "color"],
            answer: "padding"
        },
        {
            question: "Which CSS property is used to add a background color to an element?",
            options: ["background", "font-size", "background-color", "color"],        
            answer: "background-color"
        }
    ],
        

    // questions for the JavaScript category
    JavaScript: [
        {
            question: "What is JavaScript?",
            options: ["A programming language", "A database", "A web browser", "A programming framework"],
            answer: "A programming language"

        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "variable"],
            answer: "var"

        },
        {
            question: "What is the purpose of the 'console.log()' function in JavaScript?",
            options: ["To display output in the console", "To create a loop", "To declare a variable", "To add a comment"],
            answer: "To display output in the console"
        },
        {
            question: "What is the correct way to comment out a single line in JavaScript?",
            options: ["// This is a comment", "/* This is a comment */", "-- This is a comment", "# This is a comment"],
            answer: "// This is a comment"
        },
        {
            question: "What is the correct way to declare a function in JavaScript?",
            options: ["function myFunction()", "myFunction()", "var myFunction = function()", "function = myFunction()"],
            answer: "function myFunction()"
        },
        {
            question: "What is the correct way to call a function in JavaScript?",
            options: ["myFunction()", "call myFunction()", "function myFunction", "myFunction"],
            answer: "myFunction()"
        },
        {
            question: "What is the correct way to declare a variable that cannot be reassigned in JavaScript?",
            options: ["var myVariable", "let myVariable", "const myVariable", "variable myVariable"],
            answer: "const myVariable"
        },
        {
            question: "What is the correct way to check if a variable is equal to a specific value in JavaScript?",
            options: ["if (myVariable == value)", "if (myVariable = value)", "if (myVariable === value)", "if (myVariable !== value)"],
            answer: "if (myVariable === value)"
        },
        {
            question: "What is the correct way to concatenate two strings in JavaScript?",
            options: ["string1 + string2", "string1.concat(string2)", "string1.join(string2)", "string1.append(string2)"],
            answer: "string1 + string2"
        },
        {
            question: "What is the correct way to create an array in JavaScript?",
            options: ["var myArray = [1, 2, 3]", "var myArray = (1, 2, 3)", "var myArray = {1, 2, 3}", "var myArray = {1, 2, 3}"],
            answer: "var myArray = [1, 2, 3]"
        }
    ],

    // questions for the Git category
    Reactjs: [
        {    
            question: "What is ReactJS?",
            options: ["A programming language", "A database", "A web browser", "A programming framework"],
            answer: "A programming language"
        },
        {
            question: "Which keyword is used to declare a variable in ReactJS?",
            options: ["var", "let", "const", "variable"],
            answer: "var"
        },
        {
            question: "What is the purpose of the 'console.log()' function in ReactJS?",
            options: ["To display output in the console", "To create a loop", "To declare a variable", "To add a comment"],
            answer: "To display output in the console"
        },
        {   
            question: "What is the correct way to comment out a single line in ReactJS?",
            options: ["// This is a comment", "/* This is a comment */", "-- This is a comment", "# This is a comment"],            
            answer: "// This is a comment"
        },  
        {
            question: "What is the correct way to declare a function in ReactJS?",
            options: ["function myFunction()", "myFunction()", "var myFunction = function()", "function = myFunction()"],
            answer: "function myFunction()"
        },
        {
            question: "What is the correct way to call a function in ReactJS?",
            options: ["myFunction()", "call myFunction()", "function myFunction", "myFunction"],
            answer: "myFunction()"
        },
        {
            question: "What is the correct way to declare a variable that cannot be reassigned in ReactJS?",
            options: ["var myVariable", "let myVariable", "const myVariable", "variable myVariable"],
            answer: "const myVariable"
        },
        {
            question: "What is the correct way to check if a variable is equal to a specific value in ReactJS?",
            options: ["if (myVariable == value)", "if (myVariable = value)", "if (myVariable === value)", "if (myVariable !== value)"],
            answer: "if (myVariable === value)"
        },
        {
            question: "What is the correct way to concatenate two strings in ReactJS?",
            options: ["string1 + string2", "string1.concat(string2)", "string1.join(string2)", "string1.append(string2)"],
            answer: "string1 + string2"
        },
        {
            question: "What is the correct way to create an array in ReactJS?",
            options: ["var myArray = [1, 2, 3]", "var myArray = (1, 2, 3)", "var myArray = {1, 2, 3}", "var myArray = {1, 2, 3}"],
            answer: "var myArray = [1, 2, 3]"
        }

    ]
    // Add more categories and questions as needed
};