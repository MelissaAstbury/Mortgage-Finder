import React from "react";

const Input = ({ label, value, type, setValue }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </label>
  );
};

export default Input;
