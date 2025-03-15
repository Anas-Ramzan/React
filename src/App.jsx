import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen flex justify-center items-center duration-200" 
         style={{ backgroundColor: color }}>
      
      {/* Heading in the Center */}
      <h1 className="absolute top-1/3 text-4xl font-bold text-white shadow-md bg-black bg-opacity-50 px-4 py-2 rounded-lg">
        Background Changer
      </h1>

      {/* Color Buttons at the Bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white px-4 py-3 rounded-xl justify-center gap-3 shadow-lg">
          <button onClick={() => setcolor("Red")}
            className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "Red" }}>
            Red
          </button>
          <button onClick={() => setcolor("Green")}
            className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "Green" }}>
            Green
          </button>
          <button onClick={() => setcolor("Blue")}
            className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "Blue" }}>
            Blue
          </button>
          <button onClick={() => setcolor("Black")}
            className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "Black" }}>
            Black
          </button>
          <button onClick={() => setcolor("gray")}
            className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "gray" }}>
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
