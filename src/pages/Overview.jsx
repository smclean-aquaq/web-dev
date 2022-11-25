import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CurrentPrices from '../components/getCurrentPrices';
import PriceHistory from '../components/getPriceHistory';
import MaxVolume from '../components/getMaxVol';
import ValueCache from '../components/getValueCache';
import MaxMin from '../components/getMinMax';

// import { BsCurrencyDollar } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { IoIosMore } from 'react-icons/io';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
// import { earningData, medicalproBranding, weeklyStats, dropdownDate, dropdownSym, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
// import product9 from '../data/product9.jpg';
import { ChartsHeader } from '../components';

// const DropDown = () => (
//   <div className="w-28 border-1 border-color px-3 py-2 rounded-md text-sm font-medium">
//     <DropDownListComponent fields={{ text: 'sym' }} style={{ border: 'none' }} value="1" dataSource={dropdownSym} popupHeight="220px" popupWidth="120px" />
//   </div>
// );

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Overview = () => {
 
const { currentColor, currentMode } = useStateContext();

  return (
    <div>
      <div className="flex gap-4 m-4 flex-wrap justify-left w-full">
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
      </div>  
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl ">
        <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Value Cache Table</p>
      </div>
      <div className="mt-5 w-72 md:w-400 w-full">
        <ValueCache/> 
      </div>
      </div>  

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Highest Traded Instrument</p>
      </div>
      <div className="mt-5 w-72 md:w-400">
        <MaxVolume/>
      </div>
      </div>   

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Highest Traded Instrument</p>
      </div>
      <div className="mt-5 w-72 md:w-400">
        <MaxMin/>
      </div>
      </div>    
      </div>

      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Price History" />
      <div className="w-full">
      <PriceHistory />
      </div>
      </div>
    </div>
  );
};

export default Overview;