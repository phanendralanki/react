# React

## Introduction to react

1. Creating Hello world using HTML 
<div id="container">
        <!-- <h1>Hello World!</h1> -->
</div>


2. Hello world from Javascript
    <div id="root">
            
    </div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript!";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>


3. Hello world from React

i.Copy the Development cdn's from react official website.
ii.write the React code after the cdn links.

<div id="root">

</div>


const heading = React.createElement("h1", {id:"heading"}, "Hello world from React! ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


4. Learn how to create nested structure using react 

// Nested structure/elsements

/* 
    <div id="parent">
        <div id="child">
            <h1 id="heading">I am h1 tag</h1>
        </div>
    </div>
*/

/* 
    ReactElement(Object) => HTML (Browser understands)
*/

### code:
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am an h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

- To overcome the problem of the complex code, jsx is introduced.
