import React from 'react';
import FormBuilder from './component/FormBuilder';
import './App.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <h1 className='text-center font-bold text-3xl py-5'>Drag-and-Drop form Builder</h1>
      <FormBuilder />
    </div>
    </DndProvider>
  );
};

export default App;
