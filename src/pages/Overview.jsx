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
import RealPrice from '../components/getRealtimePrice';
import PieChart from '../components/getVolPieChart';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { ChartsHeader } from '../components';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Overview = () => {
 
const { currentColor, currentMode } = useStateContext();

  return (

    <div>
      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-3">
        <Header category="AquaQ Analytics" title="Web Dev Dashboard" />
        </div>
      </div>
  
       <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4"> 
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <ValueCache/> 
        </div>  

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-2">
          <RealPrice />
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-3">
          <PriceHistory /> 
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-4"> 
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-2">
          <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Min Max Price</p>
          </div>
          <div className="mt-5 md:w-400 w-full">
          <MaxMin/>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Volume Distribution</p>
            </div>
            <div>
              <PieChart/>
            </div>
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-3">
          <RunAvg /> 
        </div>
      </div>

    
      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl col-span-3">
          <Vol /> 
        </div>
      </div>

    </div>
  );
};

export default Overview;