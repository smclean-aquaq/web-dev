import React from 'react';
import axios from 'axios';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
export default class PieChart extends React.Component {

  state = {
    piechart: [],
  };

  state = {
    instruments: [],
  };

  constructor() {
    super(...arguments);
    this.palette = ['#9e0243',"#d53e51", '#fcaf61', "#f56c42", "#fdae61", '#e7f699', '#abdda0', '#64c1a4', '#3287bd', '#5f50a3'];
    
    this.datalabel={ visible: true, name:'sym', position:'Outside', font:{fontWeight: '400', size:'16'}, border: { width: 1, color: 'transparent' },
    margin: {left: 10, right: 10, top: 10, bottom: 10}
    };
  }

  componentDidMount() {

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.piechartone",
        "arguments": {}
      }
    }).then(res => res.data).then(res => {
      this.setState({ piechart: res.result});
      console.log('Pie Chart', this.state.piechart);
    });
  }
  
  getOneDay = () => {

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.piechartone",
        "arguments": {}
      }
    }).then(res => res.data).then(res => {
      this.setState({ piechart: res.result });
      console.log('1 DAY', this.state.piechart);

    });

  };

  getTwoDay = () => {

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.piecharttwo",
        "arguments": {}
      }
    }).then(res => res.data).then(res => {
      this.setState({ piechart: res.result });
      console.log('3 DAY', this.state.piechart);

    });

  };

  getThreeDay = () => {

    axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
        "function_name": ".qrest.piechartthr",
        "arguments": {}
        }
    }).then(res => res.data).then(res => {
        this.setState({ piechart: res.result });
        console.log('5 DAY', this.state.piechart);
    });

  };

  getFiveDay = () => {

    axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
        "function_name": ".qrest.piechartfiv",
        "arguments": {}
        }
    }).then(res => res.data).then(res => {
        this.setState({ piechart: res.result });
        console.log('5 DAY', this.state.piechart);
    });

  };

  getFourDay = () => {     
        
    axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
        "function_name": ".qrest.piechartfour",
        "arguments": {}
        }
    }).then(res => res.data).then(res => {
        this.setState({ piechart: res.result });
        console.log('5 DAY', this.state.piechart);
    });

  };

  render() { 
    return (
    <div>
        <p className="text-xl font-semibold mb-8 mt-2 text-slate-800">Volume Distribution</p>
        <div className="flex justify-between items-center mb-4 mt-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getOneDay} id="piechart" type="radio" value="" name="pie" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="piechart" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1D </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getTwoDay} id="piechart" type="radio" value="" name="pie" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="piechart" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">2D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getThreeDay} id="piechart" type="radio" value="" name="pie" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="piechart" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">3D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getFourDay} id="piechart" type="radio" value="" name="pie" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="piechart" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">4D</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getFiveDay} id="piechart" type="radio" value="" name="pie" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="piechart" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">5D</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className='mt-8 justify-between items-center'>
        <AccumulationChartComponent
            enableSmartLabels='true'
            chartArea={{ border: { width: 0 } }}
            height="565px"
            tooltip={{ enable: true }}
            legendSettings={{ visible: false, background: 'white', position: "Bottom", shapeHeight:14, shapeWidth:16, toggleVisibility:false}}
            palettes={this.palette}>
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}></Inject>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={this.state.piechart} xName="sym" yName="sumvol" name="Volume" explode explodeOffset='10%' dataLabel={this.datalabel}>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
        </div>
    </div> 
    )
  }
}