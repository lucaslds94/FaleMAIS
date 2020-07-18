import React from "react";
import { uuid } from "uuidv4";

import "./styles.css";

function Select({ options, label }) {
  return (
    <select id={label} className="select">
      {options.map((option) => (
        <option key={uuid()} className="select-option" value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
