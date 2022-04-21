// rfce react boiler plate
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, language, onSelectedChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setIsOpen(false);
    };
    document.body.addEventListener("click", handleBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", handleBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    //   handing selected item(removing from dropdown)
    if (option.value === language.value) {
      // null in react mans don't render anything
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form container">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`ui selection dropdown {${isOpen ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{language.label}</div>
          <div className={`menu ${isOpen ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
