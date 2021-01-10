import React from "react";

export default function NumberSelector({ value, option, postfix, onChange }) {
  return (
    <>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          onChange(value);
        }}
        value={value}
      >
        {option.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {postfix}
    </>
  );
}
