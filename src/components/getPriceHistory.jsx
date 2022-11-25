import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTimeCategory, LineSeries, DateTime, Legend, Tooltip, Category, HiloSeries, CandleSeries, Zoom, ScrollBar, Time } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

export default class PriceHistory extends React.Component {
  


  state = {
    filter:""
  };

  state = {
    instruments: [],
  };

  state = {
    rdb:false,
  };


  constructor() {  
    super();  
    this.state = {selectValue: ''};  // initial state value
  }

  handleChange = (e) => {
    this.setState({sym: e.target.value});
    console.log(`${this.state.sym}`)
  } 

  componentDidMount() {

    this.state.rdb=true;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('aapl on startup', this.state.prices);

    });

  };

  // RDB Price History
  
  getOneDay = () => {

    this.state.rdb=true;
    

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('1 DAY', this.state.prices);

    });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"AIG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   this.setState({ aigs: res.result });
    //   console.log('aig', this.state.aigs);

    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"AMD"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('amd', res);
    //   this.setState({ amds: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"DELL"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dell', res);
    //   this.setState({ dells: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"DOW"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dow', res);
    //   this.setState({ dows: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"GOOG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('goog', res);
    //   this.setState({ googs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"HPQ"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('hpq', res);
    //   this.setState({ hpqs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"IBM"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('ibm', res);
    //   this.setState({ ibms: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"INTC"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('intc', res);
    //   this.setState({ intcs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.priceone",
    //     "arguments": {"s":"MSFT"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('msft', res);
    //   this.setState({ msfts: res.result});
    // });

  };

  // HDB Previous Day Price History

  getTwoDay = () => {

    this.state.rdb=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricetwo",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('3 DAY', this.state.prices);

    });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"AIG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('aig', res);
    //   this.setState({ aigs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"AMD"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('amd', res);
    //   this.setState({ amds: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"DELL"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dell', res);
    //   this.setState({ dells: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"DOW"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dow', res);
    //   this.setState({ dows: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"GOOG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('goog', res);
    //   this.setState({ googs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"HPQ"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('hpq', res);
    //   this.setState({ hpqs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"IBM"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('ibm', res);
    //   this.setState({ ibms: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"INTC"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('intc', res);
    //   this.setState({ intcs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricetwo",
    //     "arguments": {"s":"MSFT"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('msft', res);
    //   this.setState({ msfts: res.result});
    // });

  };


  // HDB Previous 2 Day Price History

  getThreeDay = () => {

    this.state.rdb=false;

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricethree",
        "arguments": {"s":`${this.state.sym}`}
      }
    }).then(res => res.data).then(res => {
      this.setState({ prices: res.result });
      console.log('5 DAY', this.state.prices);

    });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"AIG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('aig', res);
    //   this.setState({ aigs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"AMD"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('amd', res);
    //   this.setState({ amds: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"DELL"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dell', res);
    //   this.setState({ dells: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"DOW"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('dow', res);
    //   this.setState({ dows: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"GOOG"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('goog', res);
    //   this.setState({ googs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"HPQ"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('hpq', res);
    //   this.setState({ hpqs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"IBM"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('ibm', res);
    //   this.setState({ ibms: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"INTC"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('intc', res);
    //   this.setState({ intcs: res.result});
    // });

    // axios({
    //   url:URL,
    //   method: 'post',
    //   headers: {Authorization: authorization},
    //   data: {
    //     "function_name": ".qrest.pricethree",
    //     "arguments": {"s":"MSFT"}
    //   }
    // }).then(res => res.data).then(res => {
    //   console.log('msft', res);
    //   this.setState({ msfts: res.result});
    // });

  };

  

  render() {

    return (

    <div>
      <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
      {/* <DropDown />  */}

      <select onChange={this.handleChange} onClick={this.getOneDay} id="syms"
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
      
        <button onClick={this.getOneDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          1D
        </button>
        <button onClick={this.getTwoDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          3D
        </button>
        <button onClick={this.getThreeDay} type="button" 
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          5D
        </button>
      </div>



      <div> {this.state.rdb ==  true ? (

      <ChartComponent 
        id="charts"
        primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming: true, interval: 1, intervalType:'Hours', rangePadding:'None'}}
        primaryYAxis={{title:"Price"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
        legendSettings={{ visible: true, background: 'white' }}>
        <Inject services={[CandleSeries, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
        <SeriesCollectionDirective>
        <SeriesDirective type="Candle" dataSource={this.state.prices} xName="time" low='low' high="high" open="open" close="close" name={`${this.state.sym}`}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
      
      ) : (

      <ChartComponent 
        id="charts"
        primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming: true, interval: 0.5, intervalType:'Days', rangePadding:'None'}}
        primaryYAxis={{title:"Price"}}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
        legendSettings={{ visible: true, background: 'white' }}>
        <Inject services={[CandleSeries, DateTime, Tooltip, Zoom, ScrollBar]}></Inject>
        <SeriesCollectionDirective>
        <SeriesDirective type="Candle" dataSource={this.state.prices} xName="time" low='low' high="high" open="open" close="close" name={`${this.state.sym}`}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>

      )}

      </div>
    </div> 
        
    )
  }
}