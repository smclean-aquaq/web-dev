import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { dropdownDate, dropdownSym } from '../data/dummy';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, HiloSeries, CandleSeries, Zoom, ScrollBar, Time } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

// const DropDownDate = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownSym} popupHeight="220px" popupWidth="120px" />
//   </div>
// );
 

// const DropDownSym = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent 
//     id="time" 
//     fields={{ text: 'sym', value: 'sym' }} 
//     style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} 
//     value="1" 
//     dataSource={dropdownSym} 
//     popupHeight="220px" 
//     popupWidth="120px" />
//   </div>
// );

// const lineCustomSeries = [
//   { dataSource: this.state.instruments,
//     xName: 'time',
//     yName: 'price',
//     name: 'AAPL',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line' }
// ]

export default class PriceHistory extends React.Component {


  state = {
    filter:""
  };

  state = {
    instruments: [],
  };

  lineCustomSeries = [
    { dataSource: this.state.instruments,
      xName: 'time',
      yName: 'price',
      name: 'AAPL',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' }
  ];

  handleChange=(e)=>{
    this.setState({
      filter: e.target.value
    })
  }

    
  getOneDay = () => {
    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.priceone", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('rdb price history', res.result);
      });
  };

  getTwoDay = () => {
    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.pricetwo", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('2 day history', res.result);
      });
  };

  getThreeDay = () => {
    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.pricethree", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('3 day history', res.result);
      });
  };


  
  render() {
    return (
      <div>
        <form className="text-sm font-semibold" id="dates">
            <input type="radio" value="1day" id="1day"
              onChange={this.handleChange} name="filter" onClick={this.getOneDay}/>
            <label for="1day">1 Day</label>

            <input type="radio" value="2day" id="2day"
              onChange={this.handleChange} name="filter" onClick={this.getTwoDay}/>
            <label for="2day">2 Day</label>

            <input type="radio" value="3day" id="3day"
              onChange={this.handleChange} name="filter" onClick={this.getThreeDay}/>
            <label for="3day">3 Day</label>
        </form>
        <ChartComponent 
          id="charts"
          primaryXAxis={{valueType:"Category", enableAutoIntervalOnZooming: true}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
          legendSettings={{ visible: true, background: 'white' }}>
          <Inject services={[CandleSeries, Category, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Candle" dataSource={this.state.instruments} xName="time" low='low' high="high" open="open" close="close" name="AAPL"></SeriesDirective>
            
          </SeriesCollectionDirective>
        </ChartComponent>
        {/* <ChartComponent 

        <SeriesDirective type="Hilo" dataSource={this.state.instruments} xName="time" yName="low" high="open" low="close" name="AAPL"></SeriesDirective>
        NEXT TASK!!!



          id="line-chart"
          height="420px"
          primaryXAxis={{valueType:"Category", title: "Time"}}
          primaryYAxis={{title: "Price History"}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ visible: true, background: 'white' }}>
          <Inject services={[LineSeries, Category, Tooltip, Legend]}></Inject>
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            <SeriesDirective type="Line" dataSource={this.state.instruments} xName="time" yName="price" name='AAPL'></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent> */}
      </div>     
    )
  }
}