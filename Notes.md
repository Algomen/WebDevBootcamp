# Section2: Intro to HTML

## Title
- <h1></h1> There is from h1 to h6
- Use only one h1
- Do not skip levels from h1 to h3 e.g.

## Paregraph
- <p></p>

## Horizontal separator
- <hr />
- You can write it without the slash at the end

## Break element
- <br />
- They go in the middle of a paragraph to break the lines

# Section3: Intermediate HTML

## Unordered lists
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

## Oordered lists
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>

## Anchor element
- HTML attributes
<tag attribute=value attribute2=value>Content</tag>
- Anchor
<a href="https://www.google.com">This is a link to Google</a>$

## Image element
<img src="https://picsum.photos/200" alt="description of the image"/>

# Section 3: Multi_page Websites

# Section 4: The HTML Boilerplate
- You get it automatically by pressing on "!"

-----------------------------------------------------------------------

# Section 5: Intro to CSS
- Inline style: <html style="background: blue"></html> 
- Internal style: 
<head>
    <style>
        html {background: red;}
    </style>
</head>
- External style: 
    - styles.css:
        html {
            background: red;
        }
    - index.html:
        <head>
            <link rel="stylesheet" href="./style.css"/>
        </head>


## Class Selector -> Used for many elements
- styles.css:   .red-text {
                    color: red;
                }
- index.html:   <h2 class="red-text">Red</h2>

## Id Selector -> Used for 1 element -> This one has priority over the others due to CSS specificity
- styles.css:   #main{
                    color:red
                }
- index.html:   <h2 id="main">Red</h2>

## Apply format to all elements of a type:
- styles.css:   p {
                    color: red;
                }

## Attribute Selector
- styles.css:   p[draggable="false"]{
                    color:red
                }
- index.html:   <p draggable="false">Drag me</p>

## Universal Selector -> Selects all
- styles.css:   *{
                    color:red;
                }

------------------------------------------------------------------------------

# Section 6: CSS Properties

## CSS Colors -> colorhunt.co
- color
- background-color
    - red
    - darkseagreen (modern colors)
    - #C58940 (Hex colors)
- Check colorhunt.co

## Font Properties -> fonts.google.com
- font-size: 
    - 20px
    - 15pt (it's like the font in Word)
    - 1 em (100% of the parent size)
    - 1 rem (100% of the root size)
    - xx-large
- font-weight:
    - normal/bold
    - lighter/bolder
    - 100-900 (100 is light and 900 is bold)
- font-family:
    - Helvetica, sans-serif/ "Times New Roman", serif
    - Check fonts.google.com -> You need to add the link in the link tag inside the head tag in the index.html
- text-align: center/ left/ right
- text-transform:
    - capitalize;
    - uppercase;
    - lowercase;

## Inspecting CSS -> ctrl + shift + i in chrome

## The Box Model
- width: 300px;/ 100%;
- height: 300px;

- border: 10px (thickness) solid/dashed (style) black (color); It grows towards outside the box
- border-top: 0px; -> This more specific line needs to be after the previous one and overwrites it
- border-width: 0px (top) 10px (right) 20px (bottom) 30px (left)
- boder-width: 10px (top and bottom) 20px (left and right)

- padding: 20px; -> It pushes the border out by 20px

- margin: 10px; -> Margin outside the border

- Content division element: <div></div>
- Center a div:
    div {
        width: 50%;
        margin-left: 25%;
    }

## Specificity and Inheritance
- Position -> The lower in the code a rule is, the more important it is (4th prio)
- Specificity -> Element < Class < Attribute < Id (3rd prio)
- Type -> External < Internal < Inline (2nd prio)
- Importance -> color: green !important; (1st prio)

## Combining CSS Selectors
- Group -> s, s {}
- Child -> s > s {} //Works only to the direct children
- Descendant -> s s {} //works with not only direct children but all descendant
- Chaining -> ss {} //You can do h1#title.big.heading { }
- Combining combiners -> s ss {} // 

## Positioning
- Static positioning -> It doesnt change anything
- Relative positioning -> The parent will be relative and the children will be absolute
- Absolute positioning -> Position relative to nearest positioned ancestor or top left corner of website. The parent wil be relative
- z-index -> Elements with a higher value will come on top
- Fixed positioning -> Position relative to top left corner of website. It stays there even when you scroll down

- How to make a circle:
    .red-circle {
      background-color: red;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

--------------------------------------------------------------------------------------

# Section 8: Advanced CSS

## CSS Display
- <span>content</span> -> Span tags ususally have a different value for the display property
- display:
    - block -> Takes up the entire full width (by default)
    - inline -> The next element goes to the same line (all elements inline need to go in the same line). All elements go in the same line and you cant change the height
    - inline-block -> They can go in the same line but you can change height and width of elements. Applied to the children
    - none -> Element will disappear

## CSS Float
- Allows us to make text wrap another element
- float:
    - left -> Img goes to the left and text to the right (you apply it on the img)
    - right -> Other way around
- clear: -> Used to clear the float in a specific element e.g. footer
    - left
    - right
    - both

## Making a website responsive
- Media queries:
    - @media (max-width: 600px) {
            /* CSS for screens below or equal to 600px wide */
        }
- CSS Grid
- CSS Flexbox
- External Frameworks e.g. Bootstrap (based on flexbox, 12 columns)

--------------------------------------------------------------------------------------

# Section 9: Flexbox -> See https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Display: Flex
- display: 
    - flex; -> You apply this to the container/ ancestor, usually a div
    - inline-flex -> Occupies the min espace horizontally
- gap: 10px;

## Flex Direction
- flex-direction: -> This is set in the parent element
    - row
    - column
- flex-basis: 50px -> This is set in the child element and sets the size of the element

## Flex Layout
- order: 3; -> Applied to child. By default is 0
- flex-wrap: -> Applied to the container
    - nowwrap; -> Items are pushed out of the screen
    - wrap;
- justify-content: > Applied to the container
    - flex-start; -> Items are on the left
    - flex-end; -> Items are on the right
    - center; -> Horizontally center
    - space-between;
    - space-around;
    - space-evenly;
- align-items: -> You can use it together with height: 70vh; so that items spreach along height
    - flex-start; -> Things to the top
    - flex-end; -> Things to the bottom
    - etc
- align-content: -> Similar to align-items (but you need flex-wrap: wrap;)

## Flex size
order -> Content width < width < flex-basis < min-width/max-width
- flex-basis : 
    - 100px; -> Applied on the child. It's the standard to set the width in flex
    - auto; -> It's the same as flex-basis: 0;
- flex-grow: 1; -> Applied on the child.
- flex-shrink: 1; -> Applied on the child.
- flex: 1 1 0; -> this means grow 1, shrink 1, basis 0 (auto)
- flex: 1; -> Same as flex: 1 1 0;

--------------------------------------------------------------------------------------

# Section 9: Grid

## Display: Grid
In the container:
.container{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}

## Grid Sizing
Shortcut for grid-template-rows and grid-template-columns:
.grid-container {
    display: grid;
    grid-template: 100px 200px / 400px 800px; -> first rows and then columns
}

Auto for extending to the whole width or fits the content vertically
.grid-container {
    display: grid;
    grid-template-rows: 100px auto; -> Fits the content
    grid-template-columns: 200px auto; -> goes to 100% of width
}

Or you can add min and max:
.grid-container {
    display: grid;
    grid-template-rows: 100px auto; -> Fits the content
    grid-template-columns: 200px minmax(400px, 800px); -> goes to 100% of width
}

Shortcut -> grid-template: 60% 40% / 200px 1fr; -> will create a grid with two rows that are 60% and 40%, and one column that is 200 pixels wide.

Repeat function: Instead of writing 20 times 100px, you can type:
- repeat(10, 100px)

For new divs being added that doesnt fit all the columns defined in zhe grid you can use:
- grid-auto-rows: 300px;

## Grid Placement
How to get an item to occupy more than 1 cell?
.item {
    grid-column: span 2; 
}

And if you want to be more specific about wehere to start and end:
.item {
    grid-column-start: 2; -> What we specify with the number is the lines between cells
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

And this is the same as:
.item {
    grid-area: 2 / 2/ 3/ 4 -> grid-row-start / grid-column-start / grid-row-end / grid-column-end;
}

Note: you can overlap divs with grid


--------------------------------------------------------------------------------------

# Section 9: Bootstrap

## What is Bootstrap?
How to use it? Add within the <head> tag:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

If you want to overwrite something add AFTERWARDS the link to your CSS sheet:
<link rel="stylesheet" href="./css/style.css">

## Bootstrap display
Bootstrap uses a 12 column system which means that you can specify the length of your items within a row by the number of columns that occupies
<div class:"container">
    <div class="row">
        <div class="col-2">Hello</div>
        <div class="col-4">Hello</div>
        <div class="col-6">Hello</div>
    </div>
</div>

## Bootstrap Layout
see docs

--------------------------------------------------------------------------------------

# Section 10: Web design

## Color Theory -> Check Adobe color, colorhunt.co
- Red: Love, energy, intensity
- Yellow: Joy, Intellect, Attention
- Green: Freshness, Safety, Growth
- Blue: Stability, Trust, Serenity
- Purple: Royalty, Wealth, Femenity

## Typography
- Serif -> for Serious style
    - Old style
    - Transitional
    - Modern -> More difference in thickness between the thick and narrow part of a letter
- Moods:
    - Serif: Traditional, stable, respectable
    - Sans-serif: Sensible, Simple, Straightforward
    - Script: Personal, creative, elegant
    - Display: Friendly, lous, amusing
    - Modern: Stylish, chic, smart
- Limit to 2 fonts. Suggested:
    - Sans-serif
    - Serif

## User Interface: Managing attention
- Hierarchy: You can use colors and size
- Layout: 40 to 60 characters per line, otherwise it's too short/long
- Alignment: Make sure everything is well aligned
- Withe space: White space to make it cleaner and more professional
- Audience: Think about your audience

## User Experience
- Simplicity

## Web design in practice
- https://www.dailyui.co/
- https://collectui.com/


--------------------------------------------------------------------------------------

# Section 14 & 15: Intro to Javascript and Intermediate Javascript

## Intro to JS
- In Chrome, inspect, Sources, Snippets, New Snippet -> Playground for JS
- Principles of Writing Consistent, Idiomatic JavaScript: https://github.com/rwaldron/idiomatic.js
- alert("Hello world");
- console

## Data Types
- String
- Boolean
- Numbers
- typeof(varName); -> Retrurns the type of the variable

# Javascript Variables
- Var myName = prompt("What is your name?"); -> Prompt function and saves its return into a variable

# Strings
- var = "a" + "b" -> String concatenation
- len = myString.length;
- myString.slice(0,1);  -> It grabs the charachters from 0 (included) to 1 (not included)
- myString = myString.toUpperCase(); -> To capitalize
- myString = myString.toLowerCase(); -> To capitalize

# Numbers
- var e = 9 % 6; -> Gives you the rest
- x++; -> To increment or x--; to decrease
- x+=2;
- Math.floor(x);
- Math.pow(7, 2); -> 7 al cuadrado
- var n = Math.random(); -> It generates a random number between 0 and 0.99999999

# Functions
- function getMilk() {}
- function getMilk(bottles) {} -> With inputs
- function getMilk(money){
    return money % 1.5;
}

# Conditionals
- if (track === "clear") {
    goStright();
} else {
    turnRight()=;
}

- No elseif in JS
 
# Comparatives
- === -> If you use only ==, it will return yes even when data types are different (e.g. number and string)
- !==
- <
- >
- <=
- >=
- && -> AND
- || -> OR
- ! -> NOT

# Arrays
- var guestList = []
- var guestList = ["Angela", "Jack", "Pam", "Lara"];
- gestList.length;
- guestList.includes("Jack");
- guestList.push("Manu"); -> Adds the item to the end of the array
- guestList.pop; -> It will remove the last item from the array

# Loops
- while (i<2>){
    console.log(i);
    i++;
}

- for (var i=0; i<2; i++) {
    console.log(i);
}

- items.forEach((fruit) => {
    console.log(fruit)  
})

# Section 16: The DOM
- Forms of linking js into out web:
    - Inline: <body onload="alert('Hello');">
    - Internal: <script type="text/javascript"> </script>
    - External: <script src="" charset="utf-8"> </script> -> best practice is to put it at the end right before the closing body tag </body>

- DOM
    - document.firstElementChild.firstElementChild; -> Gives you the head
    - document.firstElementChild.lastElementChild; -> Gives you the body
    - var heading = document.firstElementChild.lastElementChild.firstElementChild; -> I can save hmtml elements in a variable and change them
    - heading.innerHTML =""; -> If there is html inside, it returns it
    - heading.textContent = ""; -> Gives you the content of also the html child
    - heading.style.color="red";
    - document.querySelector("button").backgroundColor = "green"

## Selectors
    - document.querySelector("input").click(); -> it only returns the first one it finds
    - document.querySelectorAll("input"); -> returns the array
    - document.getElementsBytagName("li"); -> It returns more than one element in an array
    - document.getElementsBytagName("li")[2].style.color = "purple"; -> To access the array
    - document.getElementsByClassName("btn"); -> Also returns an array
    - document.getElementById("IdName");

## Separation of concerns
- document.querySelector("button").classList.add("invisible"); -> And this class can have associated a new style in the style.css
- document.querySelector("button").classList.remove("invisible");
- document.querySelector("button").classList.toggle("invisible"); -> It applies it if not applied yet and viceversa

## Modifying HTML attributes
- document.querySelector("a").attributes;
- document.querySelector("a").getAttributes("href"); -> Gives you the irl it points to
- document.querySelector("a").setAttributes("href", "https://www.bing.com");

## Events listeners and anynnimous functions
- document.querySelector('.drum').addEventListener('click', handleClick); -> You need to define the function handleClick yourself. Note handleClick goes without parenthesis

document.querySelector('.drum').addEventListener('click', function(){
    alert("I got clicked!);
});

## Higher order functions
you can define funtions in the parameters of another function

## Switch statements
switch (expression){
    case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    default:

}

## Objects in JS
Constructor function
- function HouseKeeper (yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress");
    }
}
- var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"])
- houseKeeper1.clean();

Methods:
- var bellBoy1 = {
    name: "Timy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function () {
        alert("May I take your suitcase?");
        pickupsuitcase();
    }
}

## Identifying elements based on HTML content or events based on key presses
- for (var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        playSound(this.innerHTML);
    });
}

- document.addEventListener('keydown', function(event){
    playSound(event.key);
});

# --------------------------------------------

# Jquery
document.querySelector("h1") is the same as $("h1")
document.querySelectorAll("h1") is the same as $("h1")

## Changing style
- $("h1").css("font-size", "5rem");
- $("h1").addClass("big-title margin-50");
- $("h1").removeClass("big-title");
- $("h1").hasClass("big-title"); -> To check if it has a specific class

## Changing text
- $("h1").text("Bye") -> Same as textContent
- $("h1").html("<em>Bye</em>") -> Same as innerHTML

## Manipulate attributes (e.g. src of an image or href in an a)
- $("img").attr("src", "/path/to/img");
- $("a").attr("href", "https//:new/url");

## Add events listeners
- $("h1").click(function() {        -> This will add the event listener in all h1s 
    $("h1").css("color", "purple");
});
- $("input").keypress(function(event){  -> in html you need to add: <input type="text" name="" value="">
    console.log(event.key);
});
- $(document).keypress(function(event){  -> To check is a booton has been pressed and apply it to the whole document
    console.log(event.key);
});

Another way to add event listeners is through the method .on("typeOfEvent", function)
- $("h1".on("mouse", function(){
    $("h1").css("color", "purple");
}))

## Adding and removing elements with jQuery
To add elements
- $("h1").before("<button>New</button>");
- $("h1").after("<button>New</button>");
- $("h1").prepend("<button>New</button>");  -> gets added inside the h1 before its content
- $("h1").append("<button>New</button>");   -> gets added inside the h1 after its content

to remove elements
- $("button").remove();

## Website animations with jQuery
- $("button").on("click", function() {
    $("h1").hide();                             -> .hide method
});

You also have .show(), .toggle() methods
The same way we have .fadeIn(), .fadeOut() and .fadeToggle() methods
Also .slideUp(), .slideDown() and slideToggle() methods
Also .animate({opacity: 0.5}); allows you to make a custom animation (only works with numeric value)


# The Unix Command Line
- ls
- pwd
- cd
- mkdir
- touch Text2.txt
- start Text2.txt   -> will open with text editor
- code Text2.txt    -> Will open with VS
- rm text2.txt  -> Removes a file
- rm *  -> Removes all in that directory
- rm -r directoryName/  -> Removes everythig 

Shortcuts:
- ctrl + u -> To delete the line
- ctrl + -> or <- to move faster along the line

# Node.js
## Using node
- node -v
- node index.js

## Native node modules
- const fs = require('node:fs'); -> Old way of importing

## NPM packages
- npm init -> Creates the package.json config file
- npm install <something> -> Installs an npm package (npmjs.com) or npm i <something>. If you dont specify the package it will install everything specified in the package.json
- In the package.json file you can add: "type":"module", to refer modules using ECMAScript

## Express
- netstat -ano | findstr "LISTENING" -> To check which ports are already in use
-   import express from 'express';
    const app = express();

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

- Request Vocab
    - GET
    - POST
    - PUT -> Replace
    - PATCH
    - DELETE

- nodemon index.js -> It automatically restarts the server every tieme there is a change
- npm i -g nodemon -> -g stands for global and it is used to install it in all out projects

## HTTP Requests
-   import express from 'express';
    const app = express();

    app.get("/", (req, res) => {
        res.send(<h1>Home Page</h1>);
        res.sendStatus(200);
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

## Middlewares
bodyParser
- app.use(bodyParser.urlencoded({ extended: true})); -> With this one you will be able to access the req object of your callback

Types:
1. Pre-processing e.g. bodyParser
2. Logging e.g. Morgan -> Used to log requests from clients that come into your server
3. Auth
4. Error

## Morgan
- app.use(morgan("combined"));

## Custom middlewares
- function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
- app.use(logger)

## Types of responses
- res.sendFile()
- res.redirect("/")
- res.render("something.ejs")

## EJS Tags
- <%= VARIABLE %> -> JS output
- <% JS code %> -> JS execute
- <%- <h1>Hello</h1> %> -> Render HTML
- <%%  %%> -> Show <% or %>
- <%# This is a comment %> -> For comments
- <%- include("header.ejs") %> -> Insert another EJS file

## How to check from EJS if you re passing data
-   <% if (locals.NameOfVariable) { %>

## Static files
- app.use(express.static("public")); -> Public is the name of the folder where you store all the files

## Partials
- <%- include("header.ejs") %>
- <%- include("footer.ejs") %>
--------------------------------------------------------------------------------------------

# Git And GitHib
- git status
- git add
- git commit -m
- git diff fileName -> Checks the differences
- git checkout fileName -> A modified file which hasnt been commited gets restored to the last commit

## GitHub
- git remote add origin <urlOfYourRepo>
- git push -u origin main -> Origin is the remote name defined in the line above and main is the branch name where we will be pushing to
- git tm --cached -r . ->Removes files from staging area

## Gitignore
Templates for the gitignore can be found here: https://github.com/github/gitignore

## Branching
- git branch new_branch_name -> To create a new branch
- git branch -> To see all branches
- git checkout name_ofbranch -> To switch branch
- git checkout -b [yourbranchname] -> To create a new branch and switch to it
- git merge name_of_branch -> You merge that branch into main

## APIs
Difference between JSON and JS Object is that JSON keys are strings whereas in a js object they are not

- const jsonData = JSON.stringify(data); -> data object is transformed into JSON

- const data = JSON.parse(jsonData); -> Json data is transformed into an object