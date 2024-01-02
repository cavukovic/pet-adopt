import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // the name of the tag
    {}, // attributes that we are handing down (example: id: or class: etc)
    [
      React.createElement("h1", {}, "Adopt a Pet"), // children
      React.createElement(Pet, {
        name: "Oscar",
        animal: "Dog",
        breed: "Pug",
      }),
      React.createElement(Pet, {
        name: "Mary",
        animal: "Cat",
        breed: "Persian",
      }),
      React.createElement(Pet, {
        name: "Rose",
        animal: "Bird",
        breed: "Parrot",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); // children and attr are optional
