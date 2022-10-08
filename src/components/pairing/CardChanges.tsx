import Toggle from "../pairing/Toggle";
import { useState } from 'react';
import { Changes } from '../../interfaces/interfaces'

interface Props {
  change: Changes;
  idx: number;
}

const CardChanges: React.FC<Props> = ({ change, idx }) => {
  const [ title ] = useState<string>(change.title || "");
  const [ val ] = useState<number[]>(change.val || []);
  
  const [ showingPercent , setShowingPercent ] = useState<boolean>(true);


  const handleToggle = (): void => {
    setShowingPercent(!showingPercent);
  }

  return (
  <div key={`change-${title}${idx}`} className=" w-30 rounded-lg border-solid h-48 bg-gradient-to-r from-style_blue/30 to-style_green/30 drop-shadow-lg">
    <div className="text-right my-4 mr-4">
      <Toggle handleChange={handleToggle} idx={idx}/>
    </div>
    <div className="mt-4 text-center">
      <p className="font-medium text-2xl">{title}</p>
      {
        showingPercent ? 
          <p className={val[0] >= 0 ? "mt-5 text-md font-light" : "mt-5 text-md font-light text-style_red"}>{val[0]} %</p> :
          <p className="mt-5 text-md font-light">{val[1]}</p> 
      }
    </div>
  </div>
  )
}

export default CardChanges;