import React from "react";

/**
 * Props for the FormField component.
 * - label: The label text for the form field.
 * - required: Whether the field is required (adds a * if true).
 * - children: The input, select, or textarea element to render.
 * - className: Optional additional CSS classes for custom styling.
 */
type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

/**
 * FormField
 * A reusable component for form fields with a label and optional required indicator.
 * Wraps input elements to ensure consistent layout and accessibility.
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  children,
  className = "",
}) => (
  <div className={`form-group ${className}`}>
    <label>
      {label}
      {required && <span className="required">*</span>}
    </label>
    {children}
  </div>
);

export default FormField;