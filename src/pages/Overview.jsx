import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import PriceHistory from '../components/getPriceHistory';
import ValueCache from '../components/getValueCache';
import MaxMin from '../components/getMinMax';
import Vol from '../components/getVolatility';
import RunAvg from '../components/getAvg';
import RealPrice from '../components/getRealtimePrice';
import PieChart from '../components/getVolPieChart';
import { Header } from '../components';
// import { useStateContext } from '../contexts/ContextProvider';

// const current = new Date();
// const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Overview = () => {
 
// const { currentColor, currentMode } = useStateContext();

  return (

    <div>
      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-3 border-1 border-gray-300">
        <Header category="AquaQ Analytics" title="Web Dev Dashboard" />
        </div>
      </div>
  
       <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4"> 
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl border-1 border-gray-300">
          <ValueCache/> 
        </div>  

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-2 border-1 border-gray-300">
          <RealPrice />
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-3 border-1 border-gray-300">
          <PriceHistory /> 
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-4"> 
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-2 border-1 border-gray-300">
          <MaxMin/>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-2 border-1 border-gray-300">
            <div>
              <PieChart/>
            </div>
        </div>
      </div>


      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-3 border-1 border-gray-300">
          <RunAvg /> 
        </div>
      </div>

    
      <div className="flex ml-16 mr-16 mb-4 grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-xl col-span-3 border-1 border-gray-300">
          <Vol /> 
        </div>
      </div>

    </div>
  );
};

export default Overview;