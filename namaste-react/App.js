import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" , key: "child1"}, [
    React.createElement("h1", {key: "heading1"}, "I am h1 tag"),
    React.createElement("h2", {key: "heading2"}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" , key: "child2"}, [
    React.createElement("h1", {key: "heading3"}, "I am h1 tag"),
    React.createElement("h2", {key: "heading4"}, "I am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
