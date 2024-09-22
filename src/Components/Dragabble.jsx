import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import toast, { Toaster } from 'react-hot-toast';
const containerClasses = 'bg-yellow-200 w-3/4 h-1/2 flex justify-center m-auto text-center';
const boxClasses = 'bg-red-300 w-full h-full flex justify-center items-center';
const titleClasses = 'cursor-pointer text-2xl font-bold';
const notify = () => toast('Here is your toast.');

function DraggableResizableComponent() {
  const [size, setSize] = useState({ width: 200, height: 100 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [title, setTitle] = useState("Welcome to My Website"); // Title state
  const [isEditing, setIsEditing] = useState(false); // Editing state
  const [save,setSave] = useState(false)
  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update title text as user types
  };

  const handleDoubleClick = () => {
    if(!save){
        toast("select edit")``
        return
    }
    setIsEditing(true); // Enable editing on double-click
  };

  const handleBlur = () => {
    setIsEditing(false); 
  };
  return (
    <div className="App">
        <Toaster />

        <button onClick={()=>setSave(!save) }>{save ?"Save":"edit"}</button>
      <header className="w-screen h-screen">
        {/* This is the canvas divv which we use as parent to restrict the child movement*/}
        <div className={containerClasses}>
          <Rnd
            size={{ width: size.width, height: size.height }}
            position={{ x: position.x, y: position.y }}
            onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
              setSize({
                width: ref.style.width,
                height: ref.style.height,
              });
              setPosition(position); // Update position after resize
            }}
            bounds="parent" // Limit movement within the canvas
            minWidth={100}
            minHeight={50}
            maxWidth={500}
            maxHeight={300}
          >
            <div className="bg-red-300 w-full h-full flex justify-center items-center overflow-hidden">
              {isEditing ? (
                <input
                  className="text-center  w-full bg-transparent outline-none"
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={handleBlur} // Save and exit editing when input loses focus
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditing(false); 
                    }
                  }}
                  autoFocus
                />
              ) : (
                <h1 onDoubleClick={handleDoubleClick} className="cursor-pointer ">
                  {title}
                </h1>
              )}
            </div>
          </Rnd>
        </div>
      </header>
    </div>
  );
}

export default DraggableResizableComponent;
