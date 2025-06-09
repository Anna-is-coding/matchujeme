import React from 'react';

export const OptionItem = ({ name, value, label, checked, onChange }) => (
  <label className="option-label">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);
