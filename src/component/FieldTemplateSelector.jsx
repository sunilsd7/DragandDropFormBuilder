import React from "react";
import { useDrag } from "react-dnd";

const fieldTemplates = [
  { type: "text", name: "name", label: "Full Name" },
  { type: "email", name: "email", label: "Email Address" },
  { type: "password", name: "password", label: "Password" },
  { type: "radio", name: "gender", label: "Gender", options: ["Male", "Female"] },
  { type: "number", name: "age", label: "Age" },
   {type:"number", name: "Number", label: "Number"}
  
];

const FieldTemplateSelector = ({ onSelectTemplate }) => {
  return (
    <div className="p-4 border rounded-md bg-gray-200">
      <h3 className="font-semibold text-lg mb-2">Drag Fields</h3>
      <div className="space-y-2">
        {fieldTemplates.map((field, index) => (
          <DraggableField key={index} field={field} />
        ))}
      </div>
    </div>
  );
};

// Draggable field component
const DraggableField = ({ field }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "field",
    item: field,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 border bg-white rounded-md shadow cursor-grab ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {field.label}
    </div>
  );
};

export default FieldTemplateSelector;
