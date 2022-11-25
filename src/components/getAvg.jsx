import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
  export default class RunAvg extends React.Component {

    state = {
      instruments: [],
    };

    handleChange=(e)=>{
      this.setState({
        filter: e.target.value
      })
    }

    componentDidMount() {
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"AAPL"}
        }
      }).then(res => res.data).then(res => {
        console.log('aapl', res);
        this.setState({ aapls: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"AIG"}
        }
      }).then(res => res.data).then(res => {
        console.log('aig', res);
        this.setState({ aigs: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"AMD"}
        }
      }).then(res => res.data).then(res => {
        console.log('amd', res);
        this.setState({ amds: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"DELL"}
        }
      }).then(res => res.data).then(res => {
        console.log('dell', res);
        this.setState({ dells: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"DOW"}
        }
      }).then(res => res.data).then(res => {
        console.log('dow', res);
        this.setState({ dows: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"GOOG"}
        }
      }).then(res => res.data).then(res => {
        console.log('goog', res);
        this.setState({ googs: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"HPQ"}
        }
      }).then(res => res.data).then(res => {
        console.log('hpq', res);
        this.setState({ hpqs: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"IBM"}
        }
      }).then(res => res.data).then(res => {
        console.log('ibm', res);
        this.setState({ ibms: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"INTC"}
        }
      }).then(res => res.data).then(res => {
        console.log('intc', res);
        this.setState({ intcs: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.avg",
          "arguments": {"s":"MSFT"}
        }
      }).then(res => res.data).then(res => {
        console.log('msft', res);
        this.setState({ msfts: res.result});
      });

  }

  render() { 
    return (
      <div>
        <ChartComponent 
        id="line-chart"
        height="420px"
        primaryXAxis={{valueType:"Category", title: "Time", enableAutoIntervalOnZooming: true, interval: 12, intervalType:'Hours', rangePadding:'None'}}
        primaryYAxis={{title: "Dollar Price ($)"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "X"}}
        legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>

          <Inject services={[LineSeries, Category, DateTime, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.aapls} xName="curtime" yName="runavg" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.aigs} xName="curtime" yName="runavg" name="AIG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.amds} xName="curtime" yName="runavg" name="AMD"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dells} xName="curtime" yName="runavg" name="DELL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dows} xName="curtime" yName="runavg" name="DOW"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.googs} xName="curtime" yName="runavg" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.hpqs} xName="curtime" yName="runavg" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.ibms} xName="curtime" yName="runavg" name="IBM"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.intcs} xName="curtime" yName="runavg" name="INTC"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.msfts} xName="curtime" yName="runavg" name="MSFT"></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    )
  }
}