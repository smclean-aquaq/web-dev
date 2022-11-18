import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Category, Zoom, ScrollBar, getElement } from '@syncfusion/ej2-react-charts';


const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
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

  componentDidMount() {
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s": "DELL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({dells:res.result});
        console.log('dell', this.state.dells);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AAPL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aapls:res.result});
        console.log('aapl', this.state.aapls);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"IBM"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ ibms:res.result});
        console.log('ibm', this.state.ibms);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"DOW"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ dows:res.result});
        console.log('dow',this.state.dows);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"GOOG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ googs:res.result});
        console.log('goog',this.state.googs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"INTC"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ intcs:res.result});
        console.log('intc',this.state.intcs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AIG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aigs:res.result});
        console.log('aig',this.state.aigs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AMD"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ amds:res.result});
        console.log('amd',this.state.amds);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"MSFT"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ msfts:res.result});
        console.log('msft',this.state.msfts);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"HPQ"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ hpqs:res.result});
        console.log('hpq',this.state.hpqs);
      });

  };

  oneDay = () => {

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s": "DELL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({dells:res.result});
        console.log('dell', this.state.dells);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AAPL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aapls:res.result});
        console.log('aapl', this.state.aapls);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"IBM"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ ibms:res.result});
        console.log('ibm', this.state.ibms);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"DOW"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ dows:res.result});
        console.log('dow',this.state.dows);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"GOOG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ googs:res.result});
        console.log('goog',this.state.googs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"INTC"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ intcs:res.result});
        console.log('intc',this.state.intcs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AIG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aigs:res.result});
        console.log('aig',this.state.aigs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"AMD"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ amds:res.result});
        console.log('amd',this.state.amds);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"MSFT"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ msfts:res.result});
        console.log('msft',this.state.msfts);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolone",
          "arguments": {"s":"HPQ"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ hpqs:res.result});
        console.log('hpq',this.state.hpqs);
      });
  

  };

  threeDay = () => {

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s": "DELL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({dells:res.result});
        console.log('dell',this.state.dells);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"AAPL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aapls:res.result});
        console.log('aapl',this.state.aapls);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"IBM"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ ibms:res.result});
        console.log('ibm',this.state.ibms);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"DOW"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ dows:res.result});
        console.log('dow',this.state.dows);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"GOOG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ googs:res.result});
        console.log('goog',this.state.googs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"INTC"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ intcs:res.result});
        console.log('intc',this.state.intcs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"AIG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aigs:res.result});
        console.log('aig',this.state.aigs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"AMD"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ amds:res.result});
        console.log('amd',this.state.amds);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"MSFT"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ msfts:res.result});
        console.log('msft',this.state.msfts);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolthr",
          "arguments": {"s":"HPQ"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ hpqs:res.result});
        console.log('hpq',this.state.hpqs);
      });
  
  };

  fiveDay = () => {

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s": "DELL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({dells:res.result});
        console.log('dell',this.state.dells);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"AAPL"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aapls:res.result});
        console.log('aapl',this.state.aapls);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"IBM"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ ibms:res.result});
        console.log('ibm',this.state.ibms);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"DOW"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ dows:res.result});
        console.log('dow',this.state.dows);
      });
    
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"GOOG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ googs:res.result});
        console.log('goog',this.state.googs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"INTC"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ intcs:res.result});
        console.log('intc',this.state.intcs);
      });
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"AIG"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ aigs:res.result});
        console.log('aig',this.state.aigs);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"AMD"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ amds:res.result});
        console.log('amd',this.state.amds);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"MSFT"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ msfts:res.result});
        console.log('msft',this.state.msfts);
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.getvolfive",
          "arguments": {"s":"HPQ"}
        }
      }).then(res => res.data).then(res => {
        this.setState({ hpqs:res.result});
        console.log('hpq',this.state.hpqs);
      });
  

  };

  sevenDay = () => {

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s": "DELL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({dells:res.result});
      console.log('dell',this.state.dells);
    });
  
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"AAPL"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ aapls:res.result});
      console.log('aapl',this.state.aapls);
    });
  
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"IBM"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ ibms:res.result});
      console.log('ibm',this.state.ibms);
    });
  
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"DOW"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ dows:res.result});
      console.log('dow',this.state.dows);
    });
  
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"GOOG"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ googs:res.result});
      console.log('goog',this.state.googs);
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"INTC"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ intcs:res.result});
      console.log('intc',this.state.intcs);
    });
    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"AIG"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ aigs:res.result});
      console.log('aig',this.state.aigs);
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"AMD"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ amds:res.result});
      console.log('amd',this.state.amds);
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"MSFT"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ msfts:res.result});
      console.log('msft',this.state.msfts);
    });

    axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
        "function_name": ".qrest.getvolsev",
        "arguments": {"s":"HPQ"}
      }
    }).then(res => res.data).then(res => {
      this.setState({ hpqs:res.result});
      console.log('hpq',this.state.hpqs);
    });


};

  

  render() {
    return (
      <div>

        <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
          <button onClick={this.oneDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          1D
          </button>
          <button onClick={this.threeDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          3D
          </button>
          <button onClick={this.fiveDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          5D
          </button>
          <button onClick={this.sevenDay} type="button" 
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
          7D
          </button>
        </div>

        <ChartComponent 
            id="line-chart"
            height="420px"
            primaryXAxis={{valueType:"DateTime", title: "Time", enableAutoIntervalOnZooming:true, interval:1, intervalType:'Days'}}
            primaryYAxis={{title: "Standard Deviation"}}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            zoomSettings={{enableSelectionZooming: true, enablePan:true, enableScrollbar: true, mode: "XY"}}
            legendSettings={{ visible: true, background: 'white' }}>
        
            <Inject services={[LineSeries, Category, DateTime, Tooltip, Legend, Zoom, ScrollBar]}></Inject>
            <SeriesCollectionDirective>
            
            <SeriesDirective type="Line" dataSource={this.state.tests} xName="time" yName="std" name="STDvsTIME"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.googs} xName="time" yName="std" name="GOOG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.googs} xName="time" yName="dailystd" name="GOOG Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.msfts} xName="time" yName="std" name="MSFT"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.msfts} xName="time" yName="dailystd" name="MSFT Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.ibms} xName="time" yName="std" name="IBM"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.ibms} xName="time" yName="dailystd" name="IBM Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.hpqs} xName="time" yName="std" name="HPQ"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.hpqs} xName="time" yName="dailystd" name="HPQ Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.aigs} xName="time" yName="std" name="AIG"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.aigs} xName="time" yName="dailystd" name="AIG Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.intcs} xName="time" yName="std" name="INTC"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.intcs} xName="time" yName="dailystd" name="INTC Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.amds} xName="time" yName="std" name="AMD"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.amds} xName="time" yName="dailystd" name="AMD Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.dows} xName="time" yName="std" name="DOW"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dows} xName="time" yName="dailystd" name="DOW Average"></SeriesDirective>

            <SeriesDirective type="Line" dataSource={this.state.dells} xName="time" yName="std" name="DELL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.dells} xName="time" yName="dailystd" name="DELL Average"></SeriesDirective>

            <SeriesDirective type="Line"  dataSource={this.state.aapls} xName="time" yName="std" name="AAPL"></SeriesDirective>
            <SeriesDirective type="Line" dataSource={this.state.aapls} xName="time" yName="dailystd" name="AAPL Average"></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    )
  }
}