import React from "react";
import ReactDOM from "react-dom";

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"H1 Tag🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX - HTML Like syntax, it is not HTML.

//JSX (transpiled before it reaches the JS) - Parcel - Babel

//Babel converts jsx to React.createElement

//JSX => React.createElement => React Element = JS Object => HTMLElement(render)

// const jsxHeading = <h1 id="heading">Hello World🚀</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Element or jsx
/*
const heading = (
    <h1 className="head">
        Hello React🚀
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

//React Component
// Class Based component - OLD
// Functional Components - NEW

//React Functional Component - Just a normal JS Function which returns JSX
const HeadingComponent = () => {
  return <h1>Hello React🚀</h1>;
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// Component Composition

const Title = () => {
  return (
    <div>
      <HeadingComponent />
      {/* {normalFunction} - if it is normal jsx func  */}
      <h1>Component Composition😂✅</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
