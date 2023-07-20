import React, { useState } from 'react'

const ButtonColorChange = () => {
    const [chageColor,setChangeColor] = useState('#451252');



    const handleClick = ()=>{
        const randomColor = '#'+ Math.random().toString(16).slice(2,8)
        setChangeColor(randomColor);
    }
  return (
    <div 
    style={{backgroundColor:`${chageColor}`}}
    className="flex justify-center items-center w-screen h-screen">
      <button
      
      className="bg-cyan-800 text-white p-2 px-4 text-xl rounded-lg" 
      onClick={handleClick}
      >
        click me
      </button>
    </div>
  );
}

export default ButtonColorChange;
