import React from "react";
import ReactDOM from "react-dom";

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