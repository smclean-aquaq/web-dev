import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from './';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTimeCategory, LineSeries, DateTime, Legend, Tooltip, Category, HiloSeries, CandleSeries, Zoom, ScrollBar, Time } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../contexts/ContextProvider';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;


export default class PriceHistory extends React.Component {


  state = {
    filter:""
  };

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
        "function_name": ".qrest.priceone",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ aapls: res.result });
      console.log('aapl', this.state.aapls);

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
      this.setState({ aigs: res.result });
      console.log('aig', this.state.aigs);

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

  // RDB Price History
  
  getOneDay = () => {
    // axios({
    //   url:URL,
    //   method: 'post', 
    //   headers: {Authorization: authorization}, 
    //   data: {
    //     "function_name": ".qrest.priceone", 
    //     "arguments": {"s": "AAPL"}
    //   }
    // }).then(res => res.data).then(res => res.result[0]).then(res => {this.setState({ date: res.date[0] }); 
    //   console.log('date new', this.state.date);
    //   });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.priceone",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ aapls: res.result });
      console.log('aapl', this.state.aapls);

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
      this.setState({ aigs: res.result });
      console.log('aig', this.state.aigs);

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

  // HDB Previous Day Price History

  getTwoDay = () => {


    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.pricetwo", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ aapls: res.result }); 
      console.log('HDB 3 aapl', res.result);
      });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
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
        "function_name": ".qrest.pricetwo",
        "arguments": {"s":"MSFT"}
      }
    }).then(res => res.data).then(res => {
      console.log('msft', res);
      this.setState({ msfts: res.result});
    });

  };


  // HDB Previous 2 Day Price History

  getThreeDay = () => {

    axios({
      url:URL,
      method: 'post', 
      headers: {Authorization: authorization}, 
      data: {
        "function_name": ".qrest.pricethree", 
        "arguments": {"s": "AAPL"}
      }
    }).then(res => res.data).then(res => {this.setState({ aapls: res.result }); 
      console.log('HDB 5 aapl', res.result);
      });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
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
        "function_name": ".qrest.pricethree",
        "arguments": {"s":"MSFT"}
      }
    }).then(res => res.data).then(res => {
      console.log('msft', res);
      this.setState({ msfts: res.result});
    });

  };

  
  render() {

    return (

      <div>
        {/* <form className="text-sm font-semibold" id="dates"> */}
        <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
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
        <ChartComponent 
          id="charts"
          primaryXAxis={{valueType:"DateTime", enableAutoIntervalOnZooming: true, interval: 12, intervalType:'Hours', rangePadding:'None'}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
          legendSettings={{ visible: true, background: 'white' }}>
          <Inject services={[CandleSeries, DateTime, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
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
          id="charts"
          primaryXAxis={{valueType:"Category", enableAutoIntervalOnZooming: true}}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true}}
          legendSettings={{ visible: true, background: 'white' }}>
          <Inject services={[CandleSeries, DateTime, Category, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
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
        </ChartComponent> */}
      </div>     
    )
  }
}