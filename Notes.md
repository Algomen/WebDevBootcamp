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
    - block -> Takes up the entire full width
    - inline -> The next element goes to the same line (all elements inline need to go in the same line). All elements go in the same line and you cant change the height
    - inline-block -> They can go in the same line but you can change height and width of elements
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
- flex-basis: 50px -> This is set in the child element

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

