// import { useState } from 'react';
import './App.css'
import Canvas from './components/Canvas'
import Controls from './components/Controls'

function App() {
  // const [state, setState] = useState([]);

  return (
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
  )
}

export default App
