import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import "../index.css";

const sample = [
  {
    title: "what's your name",
    content: "My name is luqman Adeiza Ibrahim ",
  },
  {
    title: "what are you up to ?",
    content:
      "Not much, just practicing out lectures and exercises from Stephen grider's react course",
  },
  {
    title: "That's nice, and what is your take on the course?",
    content:
      "well, If i totally honest, you can't get a better tutot off the internet.",
  },
];

const options = [
  {
    label: "This color is Red",
    value: "Red",
  },
  {
    label: "This color is Green",
    value: "Green",
  },
  {
    label: "A Shade of blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion sample={sample} /> */}
      {/* <SearchBar /> */}
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      <SearchBar/>
    </div>
  );
};

export default App;
