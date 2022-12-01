import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTimeCategory, LineSeries, DateTime, Legend, Tooltip, Category, HiloSeries, CandleSeries, Zoom, ScrollBar, Time } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

export default class PriceHistory extends React.Component {
  


  state = {
    filter:""
  };

  state = {
    instruments: [],
  };

  state = {
    rdb:false,
  };


  constructor() {  
    super();  
    this.state = {selectValue: ''};  // initial state value
  }

  handleChange = (e) => {
    this.setState({sym: e.target.value});
    console.log(`${this.state.sym}`);
  } 

  componentDidMount() {

    this.state.rdb=true;
    this.state.sym="AAPL"

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('aapl on startup', this.state.prices);

    });

  };

  // RDB Price History
  
  getOneDay = () => {

    this.state.rdb=true;
    
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('1 DAY', this.state.prices);

    });

  };

  // HDB Previous Day Price History

  getTwoDay = () => {

    this.state.rdb=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricetwo",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('3 DAY', this.state.prices);

    });

  };


  // HDB Previous 2 Day Price History

  getThreeDay = () => {

    this.state.rdb=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricethree",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('5 DAY', this.state.prices);

    });

  };

  render() {

    return (

    <div>
      <p className="text-xl font-semibold mb-8">Price History</p>
      <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
      <select onChange={this.handleChange} onClick={this.getOneDay} id="syms"
      className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
        <option value="AAPL">AAPL</option>
        <option value="IBM">IBM</option>
        <option value="GOOG">GOOG</option>
        <option value="AMD">AMD</option>
        <option value="DELL">DELL</option>
        <option value="DOW">DOW</option>
        <option value="HPQ">HPQ</option>
        <option value="INTC">INTC</option>
        <option value="MSFT">MSFT</option>
        <option value="AIG">AIG</option>
      </select>
      
        {/* <button onClick={this.getOneDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          1D
        </button>
        <button onClick={this.getTwoDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          3D
        </button>
        <button onClick={this.getThreeDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          5D
        </button> */}

        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getOneDay} id="pricehistory" type="radio" value="" name="history" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="pricehistory" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1D </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getTwoDay} id="pricehistory" type="radio" value="" name="history" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="pricehistory" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">3D</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getThreeDay} id="pricehistory" type="radio" value="" name="history" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="pricehistory" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">5D</label>
                        </div>
                    </li>
                </ul>
      </div>



      <div> {this.state.rdb ==  true ? (

      <ChartComponent 
        id="charts"
        primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming: true, interval: 1, intervalType:'Hours', rangePadding:'None'}}
        primaryYAxis={{title:"Price"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
        legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
        
        <Inject services={[CandleSeries, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
        <SeriesCollectionDirective>
        <SeriesDirective type="Candle" dataSource={this.state.prices} xName="time" low='low' high="high" open="open" close="close" name={`${this.state.sym}`}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
      
      ) : (

      <ChartComponent 
        id="charts"
        primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming: true, interval: 0.5, intervalType:'Days', rangePadding:'None'}}
        primaryYAxis={{title:"Price"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
        legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>

        <Inject services={[CandleSeries, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
        <SeriesCollectionDirective>
        <SeriesDirective type="Candle" dataSource={this.state.prices} xName="time" low='low' high="high" open="open" close="close" name={`${this.state.sym}`}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>

      )}

      </div>
    </div> 
        
    )
  }
}