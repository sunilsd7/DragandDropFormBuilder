
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableField = ({ field }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'field',
    item: { field },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`border p-2 mb-4 ${isDragging ? 'opacity-50' : ''}`}
      style={{ cursor: 'move' }}
    >
      {field.label}
    </div>
  );
};

export default DraggableField; 