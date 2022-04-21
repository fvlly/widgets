import React, { useState, } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hungarian",
    value: "hu",
  },
  {
    label: "igbo",
    value: "ig",
  },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <input
          style={{ width: "80%", paddingInline: "2rem", marginInline: "auto" }}
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text to translate"
        />
        <Dropdown
          label="select a Language"
          language={language}
          onSelectedChange={setLanguage}
          options={options}
        />
        <Convert text={text} language={language} />
      </div>
    </>
  );
}
