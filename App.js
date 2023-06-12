const parent = React.createElement("div", { id: "parent"},[
    React.createElement("h1",{id:"first"}, "I am first sibling"),
    React.createElement("h2", {id: "second"}, "I am second sibling"),
]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);