import React, { FC } from "react";
import "./form.css";

interface FormProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: string) => void;
  value?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  label?: string;
  error?: string;
  errorClass?: string;
}

const FormField: FC<FormProps> = ({
  type = "text",
  placeholder,
  required = false,
  onChange,
  value,
  disabled,
  label,
 /*  error,
  errorClass, */
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor="name"> {label} </label>}
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default FormField;
