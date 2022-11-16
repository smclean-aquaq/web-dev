import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ChartsHeader } from '../components';

import Vol from '../components/getVolatility';

const Volatility = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Volatility Graph" />
    <div className="w-full">
      <Vol /> 
    </div>
  </div>
);

export default Volatility;