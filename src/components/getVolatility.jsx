import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
export default class Vol extends React.Component {

    state = {
      instruments: [],
    };

    state = {
      filter:""
    };
  
    handleChange=(e)=>{
      this.setState({
        filter: e.target.value
      })
    }

  dells = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s": "DELL"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  aapls = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

   ibms = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"IBM"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  dows = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"DOW"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  googs = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"GOOG"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  intcs = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"INTC"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  aigs = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"AIG"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  amds = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"AMD"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  msfts = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"MSFT"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };

  hpqs = () => {
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolatility",
        "arguments": {"s":"HPQ"}
      }
    }).then(res => res.data).then(res => {
      console.log(res);
      this.setState({ instruments:res.result});
    });
  };


  render() {
    return (
      <div>

        <form className="text-sm font-semibold" id="syms">
            <input type="radio" value="DELL" id="DELL"
              onChange={this.handleChange} name="filter" onClick={this.dells}/>
            <label for="1day">DELL</label>

            <input type="radio" value="AAPL" id="AAPL"
              onChange={this.handleChange} name="filter" onClick={this.aapls}/>
            <label for="2day">AAPL</label>

            <input type="radio" value="IBM" id="IBM"
              onChange={this.handleChange} name="filter" onClick={this.ibms}/>
            <label for="3day">IBM</label>

            <input type="radio" value="DOW" id="DOW"
              onChange={this.handleChange} name="filter" onClick={this.dows}/>
            <label for="3day">DOW</label>

            <input type="radio" value="GOOG" id="GOOG"
              onChange={this.handleChange} name="filter" onClick={this.googs}/>
            <label for="3day">GOOG</label>

            <input type="radio" value="INTC" id="INTC"
              onChange={this.handleChange} name="filter" onClick={this.intcs}/>
            <label for="3day">INTC</label>

            <input type="radio" value="AIG" id="AIG"
              onChange={this.handleChange} name="filter" onClick={this.aigs}/>
            <label for="3day">AIG</label>

            <input type="radio" value="AMD" id="AMD"
              onChange={this.handleChange} name="filter" onClick={this.amds}/>
            <label for="3day">AMD</label>

            <input type="radio" value="HPQ" id="HPQ"
              onChange={this.handleChange} name="filter" onClick={this.hpqs}/>
            <label for="3day">HPQ</label>

            <input type="radio" value="MSFT" id="MSFT"
              onChange={this.handleChange} name="filter" onClick={this.msfts}/>
            <label for="3day">MSFT</label>
        </form>

        {/* <form className="text-sm font-semibold" id="dates">
            <input type="radio" value="0" id="1day"
              onChange={this.handleChange} name="filter" onClick={this.test}/>
            <label for="1day">1 Day</label>

            <input type="radio" value="1" id="2day"
              onChange={this.handleChange} name="filter" onClick={this.test}/>
            <label for="2day">2 Day</label>

            <input type="radio" value="2" id="3day"
              onChange={this.handleChange} name="filter" onClick={this.test}/>
            <label for="3day">3 Day</label>
        </form> */}

        <ChartComponent 
            id="line-chart"
            height="420px"
            primaryXAxis={{valueType:"Category", title: "Time", enableAutoIntervalOnZooming:true}}
            primaryYAxis={{title: "Standard Deviation"}}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "XY"}}
            legendSettings={{ visible: true, background: 'white' }}>
        
            <Inject services={[LineSeries, Category, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
            <SeriesCollectionDirective>
            <SeriesDirective type="Line" Palette="red\" dataSource={this.state.instruments} xName="curtime" yName="std" name="Volatility"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.instruments} xName="curtime" yName="dailystd" name="Average Daily Deviation"></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    )
  }
}