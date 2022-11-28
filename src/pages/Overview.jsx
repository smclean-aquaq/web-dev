import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CurrentPrices from '../components/getCurrentPrices';
import PriceHistory from '../components/getPriceHistory';
import MaxVolume from '../components/getMaxVol';
import ValueCache from '../components/getValueCache';
import MaxMin from '../components/getMinMax';
import Vol from '../components/getVolatility';
import RunAvg from '../components/getAvg';
import BarChart from '../components/getMaxVolChart';

// import { BsCurrencyDollar } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { IoIosMore } from 'react-icons/io';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { ChartsHeader } from '../components';



const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Overview = () => {
 
const { currentColor, currentMode } = useStateContext();

  return (
    <div>
      
       <div className="flex m-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4"> 

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Value Cache Table</p>
          </div>
          <div className="mt-5 w-72 md:w-400 w-full">
            <ValueCache/> 
          </div>
        </div>  

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-2">
          <ChartsHeader category="Price History" />
          <PriceHistory className="col-span-2"/>
        </div>

      </div>

      <div className="flex gap-4 m-4 flex-wrap justify-left w-full"> 
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Highest Traded Instrument</p>
          </div>
          <div className="mt-5 w-72 md:w-400">
            <MaxVolume/>
          </div>
          <div className="mt-5 w-72 md:w-400">
            <BarChart/>
          </div>
      </div>
      </div>

      <div className="flex m-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4"> 

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Min Max Price</p>
          </div>
          <div className="mt-5 w-72 md:w-400 w-full">
          <MaxMin/>
          </div>
        </div>  

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-2">
          <ChartsHeader category="Running Average" />
          <RunAvg className="col-span-2"/>
        </div>

      </div>

    

      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Volatility Graph" />
      <div className="w-full">
        <Vol /> 
      </div>
      </div>

    </div>
  );
};

export default Overview;