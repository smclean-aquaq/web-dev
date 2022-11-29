import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
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
      this.setState({ aigsAvg: resAvg.result});
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
      this.setState({ amdsAvg: resAvg.result});
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
      this.setState({ dellsAvg: resAvg.result});
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
      this.setState({ dowsAvg: resAvg.result});
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
      this.setState({ googsAvg: resAvg.result});
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
      this.setState({ hpqsAvg: resAvg.result});
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
      this.setState({ ibmsAvg: resAvg.result});
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
      this.setState({ intcsAvg: resAvg.result});
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
      this.setState({ msftsAvg: resAvg.result});
    });


  };

  render() { 
    return (
      
      <div id='runAvgChart'>

        <div>
        <ChartComponent 
          height="420px"
          primaryXAxis={{valueType:"Category", title: "Time", enableAutoIntervalOnZooming: true, rangePadding:'None'}}
          primaryYAxis={{title: "Dollar Price ($)"}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "X"}}
          legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
          <Inject services={[LineSeries, Category, Legend, Tooltip, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.aaplsAvg} xName="time" yName="runavg" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.aigsAvg} xName="time" yName="runavg" name="AIG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.amdsAvg} xName="time" yName="runavg" name="AMD"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dellsAvg} xName="time" yName="runavg" name="DELL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dowsAvg} xName="time" yName="runavg" name="DOW"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.googsAvg} xName="time" yName="runavg" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.hpqsAvg} xName="time" yName="runavg" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.ibmsAvg} xName="time" yName="runavg" name="IBM"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.intcsAvg} xName="time" yName="runavg" name="INTC"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.msftsAvg} xName="time" yName="runavg" name="MSFT"></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
        </div>

      </div>
    )
  }
}