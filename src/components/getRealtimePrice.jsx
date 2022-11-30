import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

export default class RealPrice extends React.Component {
  

  state = {
    currprices: [],
  };

  componentDidMount() {

    const interval = setInterval(() => {
      axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.realprice",
        "arguments": {"s":"AAPL"}
      }
      }).then(res => res.data).then(res => {this.setState({ curraapl: res.result });
      // console.log('AAPL Current Prices', this.state.curraapl)
      });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"GOOG"}
        }
        }).then(res => res.data).then(res => {this.setState({ currgoog: res.result });
        // console.log('GOOG Current Prices', this.state.currgoog)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"IBM"}
        }
        }).then(res => res.data).then(res => {this.setState({ curribm: res.result });
        // console.log('IBM Current Prices', this.state.curribm)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"MSFT"}
        }
        }).then(res => res.data).then(res => {this.setState({ currmsft: res.result });
        // console.log('MSFT Current Prices', this.state.currmsft)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"DOW"}
        }
        }).then(res => res.data).then(res => {this.setState({ currdow: res.result });
        // console.log('DOW Current Prices', this.state.currdow)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"AIG"}
        }
        }).then(res => res.data).then(res => {this.setState({ curraig: res.result });
        // console.log('AIG Current Prices', this.state.curraig)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"INTC"}
        }
        }).then(res => res.data).then(res => {this.setState({ currintc: res.result });
        // console.log('INTC Current Prices', this.state.currintc)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"DELL"}
        }
        }).then(res => res.data).then(res => {this.setState({ currdell: res.result });
        // console.log('DELL Current Prices', this.state.currdell)
        });

      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"AMD"}
        }
        }).then(res => res.data).then(res => {this.setState({ curramd: res.result });
        // console.log('AMD Current Prices', this.state.curramd)
        });
      
      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.realprice",
          "arguments": {"s":"HPQ"}
        }
        }).then(res => res.data).then(res => {this.setState({ currhpq: res.result });
        // console.log('HPQ Current Prices', this.state.currhpq)
        });

    }, 1000);
    

  };
  

  render() {
    return (
    <div>
      <p className="text-xl font-semibold mb-8">Realtime Price</p>
      <ChartComponent 
        primaryXAxis={{valueType:"Category", title: "Time", enableAutoIntervalOnZooming: true, interval: 30, intervalType:'Hours', rangePadding:'None'}}
        primaryYAxis={{title:"Price"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
        marker={{
          visible: true,
          height: 10, width: 10,
          shape: 'Pentagon',
          dataLabel: { visible: true }
        }}
        legendSettings={{ visible: true, background: 'white', position: "Bottom", shapeHeight:10, shapeWidth:12 }}>
        <Inject services={[LineSeries, Category, DateTime, Tooltip, Zoom, ScrollBar, DataLabel, Legend]}></Inject>
        <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={this.state.curraapl} xName="time" yName="price" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.curraig} xName="time" yName="price" name="AIG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.curramd} xName="time" yName="price" name="AMD"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currdell} xName="time" yName="price" name="DELL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currdow} xName="time" yName="price" name="DOW"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currgoog} xName="time" yName="price" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currhpq} xName="time" yName="price" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.curribm} xName="time" yName="price" name="IBM"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currintc} xName="time" yName="price" name="INTC"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.currmsft} xName="time" yName="price" name="MSFT"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>  
    )
  }
}