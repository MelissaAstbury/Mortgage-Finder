import React from "react";

const Input = ({ label, type, value, setValue }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        minLength="1"
        required
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </label>
  );
};

export default Input;
