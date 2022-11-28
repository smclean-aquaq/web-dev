import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
export default class RunAvg extends React.Component {

  state = {
    runavg: [],
  };

  symValue = {
    symUser: "",
  };

  constructor() {  
    super();  
    this.symValue = {selectValue: ''};  // initial state value
  }

  symChange = (e) => {
    this.setState({symUser: e.target.value});
    console.log(`${this.symValue.symUser}`)
  } 

  componentDidMount() {

    this.symValue.symUser="AAPL";

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"AAPL"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ runavg: resAvg.result});
      console.log('Running Average', this.state.runavg);
    });

  }

  getAvg = () => {


    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":`${this.symValue.symUser}`}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ runavg: resAvg.result});
      console.log('Running Average', this.state.runavg);
    });

  };

  render() { 
    return (
      
      <div>

        <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
          <select onChange={this.symChange} onClick={this.getAvg} id="symUsers"
            className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
            <option value="AAPL">AAPL</option>
            <option value="IBM">IBM</option>
            <option value="GOOG">GOOG</option>
            <option value="AIG">AIG</option>
            <option value="AMD">AMD</option>
            <option value="DELL">DELL</option>
            <option value="DOW">DOW</option>
            <option value="HPQ">HPQ</option>
            <option value="INTC">INTC</option>
            <option value="MSFT">MSFT</option>
          </select>
        </div>

        <div id='runAvgChart'>
        <ChartComponent 
          id="line-chart"
          height="420px"
          primaryXAxis={{valueType:"Category", title: "Time", enableAutoIntervalOnZooming: true, rangePadding:'None'}}
          primaryYAxis={{title: "Dollar Price ($)"}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "X"}}
          legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
          <Inject services={[LineSeries, Category, Tooltip, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.runavg} xName="time" yName="runavg" name={`${this.symValue.symUser}`}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
        </div>

      </div>
    )
  }
}