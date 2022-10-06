import React from 'react';
import { AveragesInterface } from '../interfaces/interfaces';

const CardAverages: React.FC<AveragesInterface> = ({ average }) => {
  const title : string = average.title;
  const val : number = average.val;
  return (
  <div className="text-center w-30 rounded-lg border-solid h-40 bg-gradient-to-r from-style_blue/30 to-style_green/30 drop-shadow-lg">
    <div className="mt-8">
      <p className="font-medium text-2xl">{title}</p>
      <p className={val >= 0 ? "mt-5 text-md font-light" : "mt-5 text-md font-light text-style_red"}
        >{val}</p>
    </div>
  </div>
  )
}

export default CardAverages;