import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React element(JS Object) => render as HTML element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

//JSX => Transpiled by Babel to React.createElement => React element(JS Object) => render as HTML element
const heading = (<h1 id='heading'>Hello World from React using JSX</h1>)

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from TitleComponent
  </h1>
)

const titleElement = (
  <h1 className="head" tabIndex="5">
    Namaste React from titleElement
  </h1>
)

//Component composition 
const HeadingComponent = () => (
  <div id='container'>
    <TitleComponent />
    {titleElement}
    <h1 id='heading'>Hello World from React using HeadingComponent</h1>
  </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
