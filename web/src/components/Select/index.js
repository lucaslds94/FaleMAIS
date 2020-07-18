import React from "react";
import { uuid } from "uuidv4";

import "./styles.css";

function Select({ options, label, placeholder, onChange, value }) {
  return (
    <select
      id={label}
      className="select"
      onChange={onChange}
      value={value}
      defaultValue={"DEFAULT"}
    >
      <option disabled value="DEFAULT">
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={uuid()} className="select-option" value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
