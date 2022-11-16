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

    
  componentDidMount(){
    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.priceone", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ aapls: res.result }); 
      console.log('rdb price history', res.result);
      });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
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
        "function_name": ".qrest.priceone",
        "arguments": {"s":"MSFT"}
      }
    }).then(res => res.data).then(res => {
      console.log('msft', res);
      this.setState({ msfts: res.result});
    });

    
  };

  // getTwoDay = () => {
  //   axios({
  //     url:URL,
  //     method: 'post', 
  //     headers: {Authorization: authorization}, 
  //     data: {
  //       "function_name": ".qrest.pricetwo", 
  //       "arguments": {"s": "AAPL"}
  //     }
  //   }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
  //     console.log('2 day history', res.result);
  //     });
  // };

  // getThreeDay = () => {
  //   axios({
  //     url:URL,
  //     method: 'post', 
  //     headers: {Authorization: authorization}, 
  //     data: {
  //       "function_name": ".qrest.pricethree", 
  //       "arguments": {"s": "AAPL"}
  //     }
  //   }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
  //     console.log('3 day history', res.result);
  //     });
  // };


  
  render() {
    return (
      <div>
        {/* <form className="text-sm font-semibold" id="dates">
            <input type="radio" value="1day" id="1day"
              onChange={this.handleChange} name="filter" onClick={this.getOneDay}/>
            <label for="1day">1 Day</label>

            <input type="radio" value="2day" id="2day"
              onChange={this.handleChange} name="filter" onClick={this.getTwoDay}/>
            <label for="2day">2 Day</label>

            <input type="radio" value="3day" id="3day"
              onChange={this.handleChange} name="filter" onClick={this.getThreeDay}/>
            <label for="3day">3 Day</label>
        </form> */}
        <ChartComponent 
          id="charts"
          primaryXAxis={{valueType:"Category", enableAutoIntervalOnZooming: true}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
          legendSettings={{ visible: true, background: 'white' }}>
          <Inject services={[CandleSeries, Category, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Candle" dataSource={this.state.aapls} xName="time" low='low' high="high" open="open" close="close" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.aigs} xName="time" low='low' high="high" open="open" close="close" name="AIG"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.amds} xName="time" low='low' high="high" open="open" close="close" name="AMD"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.dells} xName="time" low='low' high="high" open="open" close="close" name="DELL"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.dows} xName="time" low='low' high="high" open="open" close="close" name="DOW"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.googs} xName="time" low='low' high="high" open="open" close="close" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.hpqs} xName="time" low='low' high="high" open="open" close="close" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.ibms} xName="time" low='low' high="high" open="open" close="close" name="IBM"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.intcs} xName="time" low='low' high="high" open="open" close="close" name="INTCS"></SeriesDirective>
            <SeriesDirective type="Candle" dataSource={this.state.msfts} xName="time" low='low' high="high" open="open" close="close" name="MSFT"></SeriesDirective>
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