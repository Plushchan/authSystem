import React from "react";

function TextInput({ label, value, handler }) {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handler} />
    </div>
  );
}

export default TextInput;
