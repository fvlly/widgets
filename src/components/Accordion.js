import React, { useState } from "react";

const Accordion = ({ sample }) => {
  const [index, setIndex] = useState(null);

  const handleClick = (index) => {
    setIndex(index);
  };

  const renderedSample = sample.map(({ title, content }, i) => {
    const active = index === i ? "active" : "";
    return (
      <div
        key={title}
        onClick={() => handleClick(i)}
        className="accordion-container"
      >
        <div className={`title ${active}`}>{title}</div>

        <div className={`content ${active}`}>{content}</div>
      </div>
    );
  });

  return <>{renderedSample}</>;
};

export default Accordion;
