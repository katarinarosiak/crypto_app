import React from 'react';
import { Averages } from '../../interfaces/interfaces';

interface Props {
  average: Averages;
  idx: number;
}

const CardAverages: React.FC<Props> = ({ average, idx }) => {
  const title : string = average.title;
  const val : number = average.val;

  return (
  <div key={`average-${title}-${idx}`} className="text-center w-30 rounded-lg border-solid h-40 bg-gradient-to-r from-style_blue/30 to-style_green/30 drop-shadow-lg">
    <div className="mt-8" data-testid={`${title}${idx}`}>
      <p className="font-medium text-2xl">{title}</p>
      <p className={val >= 0 ? "mt-5 text-md font-light" : "mt-5 text-md font-light text-style_red"}
        >{val}</p>
    </div>
  </div>
  )
}

export default CardAverages;