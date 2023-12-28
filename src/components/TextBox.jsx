// eslint-disable-next-line react/prop-types
const TextBox = ({text, font, color, size}) => {
  return (
    <div className={`absolute top-0 left-0 border-dotted border-2 text-[${size}px] text-[${color}] font-[${font}]`}>
      {text}
    </div>
  )
}

export default TextBox