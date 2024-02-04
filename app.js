// let heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// making nested elements
/*
<div id="parent">
    <div id="Child">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"I am h1 tag!"),React.createElement("h2",{id:"heading"},"I am h2 tag!")]));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent)