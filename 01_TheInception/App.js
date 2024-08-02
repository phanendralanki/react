// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React! "
// );

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

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
