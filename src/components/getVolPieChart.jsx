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

        <div className="flex justify-between items-center mb-4 mt-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={this.getFiveDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                1D
                </button>
                <button onClick={this.getOneDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                2D
                </button>
                <button onClick={this.getTwoDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                3D
                </button>
                <button onClick={this.getThreeDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                4D
                </button>
                <button onClick={this.getFourDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                5D
                </button>
            </div>
        </div>

        <div className='mt-8 justify-between items-center'>
        <AccumulationChartComponent
            chartArea={{ border: { width: 0 } }}
            height="565px"
            tooltip={{ enable: true }}
            legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}></Inject>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={this.state.piechart} xName="sym" yName="sumvol" name="Volume" explode explodeOffset='10%'
                dataLabel={{ visible: true, name:'pervol', position:'Outside', font:{fontWeight: '400', size:'16'}, border: { width: 1, color: 'transparent' },
                margin: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }}}>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
        </div>
    </div> 
    )
  }
}