import { useState } from 'react';
import './App.css'
import Canvas from './components/Canvas'
import Controls from './components/Controls'
import { fontContext, sizeContext, colorContext, textContext } from './context/MyContexts';


function App() {
  // const [state, setState] = useState([]);
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState(14);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");

  return (
    <fontContext.Provider value={{ font, setFont }}>
      <sizeContext.Provider value={{ size, setSize }}>
        <colorContext.Provider value={{ color, setColor }}>
          <textContext.Provider value={{ text, setText }}>
            <div className='h-screen flex flex-col'>
              <div className='flex justify-center items-center gap-8 p-2'>
                <button className='bg-purple-600 hover:bg-purple-500 rounded px-4 py-2 text-white'>UNDO</button>
                <button className='bg-purple-600 hover:bg-purple-500 rounded px-4 py-2 text-white'>REDO</button>
              </div>
              <div className='flex flex-1'>
                <div className='basis-2/3'>
                  <Canvas />
                </div>
                <div className='flex-1'>
                  <Controls />
                </div>
              </div>
            </div>
          </textContext.Provider>
        </colorContext.Provider>
      </sizeContext.Provider>
    </fontContext.Provider>
  )
}

export default App
