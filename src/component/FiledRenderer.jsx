// src/components/FormBuilder/FieldRenderer.jsx
import React from 'react';

const FieldRenderer = ({ field }) => {
  switch (field.type) {
    case 'text':
      return <input type="text" name={field.name} placeholder={field.label} />;
    case 'email':
      return <input type="email" name={field.name} placeholder={field.label} />;
    case 'password':
      return <input type="password" name={field.name} placeholder={field.label} required/>;
    case 'radio':
      return (
        <div>
          {field.options.map((option, index) => (
            <label key={index}>
              <input type="radio" name={field.name} value={option} /> {option}
            </label>
          ))}
        </div>
      );
    case 'number':
      return <input type="number" name={field.name} placeholder={field.label} />;
    case 'textarea':
      return <textarea name={field.name} placeholder={field.label} />;
    case 'button':
      return <button type="submit">{field.label}</button>;
    default:
      return null;
  }

};

export default FieldRenderer;