import card from "../assets/card.png";
import TextBox from "./TextBox";
import { fontContext, sizeContext, colorContext, textContext } from "../context/MyContexts";
import { useContext, useState } from "react";


const Canvas = () => {
  const { font, setFont } = useContext(fontContext);
  const { size, setSize } = useContext(sizeContext);
  const { color, setColor } = useContext(colorContext);
  const { text, setText } = useContext(textContext);
  const [textBoxes, setTextBoxes] = useState([]);

  return (
    <div className="relative">
      <img src={card} className='object-contain mx-auto h-full' aria-placeholder="Shadi-ka-card"></img>
      {
        textBoxes.map((index, box) => {
          return (
            <TextBox
              key={index}
              text={box.text}
              font={box.font}
              color={box.color}
              size={box.size}
            />
          );
        })
      }
    </div>
  )
}

export default Canvas