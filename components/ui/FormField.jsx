import React, { useState } from "react";

const FormField = ({
  label,
  name,
  placeholder,
  error,
  textarea,
  select,
  options,
  value,
  onChange,
  required,
  ...props
}) => {
  // Render form field based on the prop types
  if (!textarea && !select && options) {
    console.error("Options can only be used with a select field.");
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-1 relative">
      <label htmlFor={name} className="ml-2 mb-0.5 text-sm">
        {label} {required && "*"}
      </label>

      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={10}
          className="!outline-none focus:border-cDark4 placeholder:text-cGray resize-none bg-cDark border border-cBorder rounded-md px-4 py-3 text-base"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      ) : select ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="!outline-none focus:border-cDark4 bg-cDark border border-cBorder rounded-md px-4 py-3 text-base"
          required={required}
          {...props}
        >
          <option value="" disabled className="text-cGray">
            {placeholder}
          </option>
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="!outline-none focus:border-cDark4 placeholder:text-cGray bg-cDark border border-cBorder rounded-md px-4 py-3 text-base"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      )}

      <small className="text-cRed text-xs p-1 absolute top-full left-0 w-full text-right">
        {error}
      </small>
    </div>
  );
};

export default FormField;
