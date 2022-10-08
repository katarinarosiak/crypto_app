import React from "react";


interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  idx: number;
}

const Toggle: React.FC<Props> = ({ handleChange, idx }) => {


  return (
    <div className="flex flex-wrap">
      <p className="text-xs pt-1 mx-2">Percent</p>
      <label >
        <input type="checkbox" onChange={handleChange} data-tested={`toggle-switch${idx}`} className="toggle-switch relative cursor-pointer h-7 w-14 rounded-full appearance-none bg-white/50 checked:bg-style_blue transition duration-200"/>
      </label>
      <p className='text-xs pt-1 mx-2'>Price</p>
    </div>
  )
}

export default Toggle;