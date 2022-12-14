import React from 'react';

import { AiOutlineLineChart } from 'react-icons/ai';

const Header = ({ category, title}) => (
  <div className="flex flex-row justify-between">
    <div className="basis-1/2">
      <p className="text-lg text-gray-400">
        {category}
      </p>
      <p className="text-2xl font-semibold tracking-tight text-slate-800">
        {title}      
      </p>
    </div>
    <img src="logo.png" width="150px" height="15px"></img>
  </div>
);

export default Header;