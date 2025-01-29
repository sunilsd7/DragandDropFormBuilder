import React from "react";
import { useDrop } from "react-dnd";
import FieldRenderer from "./FiledRenderer";

const DropArea = ({ fields, setFields }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "field",
    drop: (item) => setFields((prevFields) => [...prevFields, item]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-4 border border-dashed rounded-md min-h-[200px] ${
        isOver ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <h3 className="font-semibold text-xl mb-2">Drop Fields Here</h3>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="border p-4 rounded-md bg-white shadow">
            <FieldRenderer field={field} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropArea;
