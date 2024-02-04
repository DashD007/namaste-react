import React from "react";
import ReactDom from "react-dom";

let heading = React.createElement("h1",{id:"heading"},"This is h1 tag from React!!");
let root = ReactDom.createRoot(document.querySelector("#root"));
root.render(heading);
