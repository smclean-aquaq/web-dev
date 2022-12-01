import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
export default class RunAvg extends React.Component {

  state = {
    runavg: [],
  };

  componentDidMount() {

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"AAPL"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ aaplAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"AIG"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ aigAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"AMD"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ amdAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"DELL"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ dellAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"DOW"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ dowAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"GOOG"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ googAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"HPQ"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ hpqAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"IBM"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ ibmAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"INTC"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ intcAvg: resAvg.result});
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.avg",
        "arguments": {"s":"MSFT"}
      }
    }).then(resAvg => resAvg.data).then(resAvg => {
      this.setState({ msftAvg: resAvg.result});
    });


  };

  render() { 
    return (
      <div>
      <p className="text-xl font-semibold mt-2 text-slate-800">Running Average</p>
      <div className='mt-8'>
        <ChartComponent 
          primaryXAxis={{valueType:"Category", title: "Time", interval: 20, enableAutoIntervalOnZooming: true, rangePadding:'None'}}
          primaryYAxis={{title: "Dollar Price ($)"}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "X"}}
          legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:14, shapeWidth:26 }}>
          <Inject services={[LineSeries, Category, Legend, Tooltip, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.aaplAvg} xName="time" yName="runavg" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.aigAvg} xName="time" yName="runavg" name="AIG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.amdAvg} xName="time" yName="runavg" name="AMD"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dellAvg} xName="time" yName="runavg" name="DELL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dowAvg} xName="time" yName="runavg" name="DOW"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.googAvg} xName="time" yName="runavg" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.hpqAvg} xName="time" yName="runavg" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.ibmAvg} xName="time" yName="runavg" name="IBM"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.intcAvg} xName="time" yName="runavg" name="INTC"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.msftAvg} xName="time" yName="runavg" name="MSFT"></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      </div>
    )
  }
}