import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Translate from "./Translate";
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



const App = () => {


  return (
    <div>
      {/* <Accordion sample={sample} /> */}
      {/* <SearchBar /> */}
     
      {/* <SearchBar/> */}
      <Translate />
    </div>
  );
};

export default App;
