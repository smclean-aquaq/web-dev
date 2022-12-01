import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
export default class Vol extends React.Component {

    state = {
      vol: [],
    };

    state = {
      todaydate:false,
    };

    constructor() {  
      super();  
      this.symValue = {selectValue: ''};  // initial state value
    }
  
    handleChange = (e) => {
      this.setState({symbol: e.target.value});
      console.log(`${this.state.symbol}`)
    } 

  componentDidMount() {
    
    this.state.todaydate=true;
    this.state.symbol="AAPL"

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.volatilityone",
        "arguments": {"s": "AAPL"}
      }
    }).then(resVol => resVol.data).then(resVol => {
      this.setState({vol:resVol.result});
      console.log('1D Volatility Startup', this.state.vol);
    });
    
  }; 

  oneDay = () => {

    this.state.todaydate=true;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.volatilityone",
        "arguments": {"s":`${this.state.symbol}`}
      }
    }).then(resVol => resVol.data).then(resVol => {
      this.setState({ vol: resVol.result });
      console.log('1D Volatility', this.state.vol);

    });

  };

  threeDay = () => {

    this.state.todaydate=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.volatilitythree",
        "arguments": {"s":`${this.state.symbol}`}
      }
    }).then(resVol => resVol.data).then(resVol => {
      this.setState({ vol: resVol.result });
      console.log('3D Volatility', this.state.vol);

    });
  
  };

  fiveDay = () => {

    this.state.todaydate=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.volatilityfive",
        "arguments": {"s":`${this.state.symbol}`}
      }
    }).then(resVol => resVol.data).then(resVol => {
      this.setState({ vol: resVol.result });
      console.log('5D Volatility', this.state.vol);

    });

  };

  render() {
    return (
      <div id='volatilityChart'>
        <p className="text-xl font-semibold mb-8">Volatility</p>

        <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
          <select onChange={this.handleChange} onClick={this.oneDay} id="symbols"
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

          {/* <button onClick={this.oneDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          1D
          </button>
          <button onClick={this.threeDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          3D
          </button>
          <button onClick={this.fiveDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          5D
          </button> */}

<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.oneDay} id="horizontal-list-radio-license" type="radio" value="" name="volbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1D </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.threeDay} id="horizontal-list-radio-id" type="radio" value="" name="volbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">3D</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.fiveDay} id="horizontal-list-radio-passport" type="radio" value="" name="volbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">5D</label>
                        </div>
                    </li>
                </ul>
        </div>
        
        <div>
          {this.state.todaydate === true ? (
            <ChartComponent 
            height="420px"
            primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming:true, intervalType:"Hours", interval:1}}
            primaryYAxis={{title: "Standard Deviation"}}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "X"}}
            legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
        
            <Inject services={[LineSeries, Category, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
            <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.vol} xName="time" yName="std" name={`${this.state.symbol}`}></SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>
            
          ) : (

            <ChartComponent 
            height="420px"
            primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming:true, interval:0.5, intervalType:'Days'}}
            primaryYAxis={{title: "Standard Deviation"}}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "XY"}}
            legendSettings={{ visible: true, background: 'white' }}>
            <Inject services={[LineSeries, Category, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
            <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.vol} xName="time" yName="std" name={`${this.state.symbol}`}></SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>
        )}
        </div>
      </div>
    )
  }
}