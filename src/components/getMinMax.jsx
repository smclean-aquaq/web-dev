import React from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';


const URL = 'https://homer.aquaq.co.uk:8008/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
  export default class MaxMin extends React.Component {

    state = {
      instruments: [],
    };

    componentDidMount() {
      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.maxmin", 
          "arguments": {}
        }
        }).then(res => res.data).then(res => {this.setState({ instruments: res.result });
        console.log('max min', res.result);
        });
      }


      
    getOneDay = () => {
      axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
          "function_name": ".qrest.maxmin", 
          "arguments": {}
      }
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('max min', res.result);
      });
  }
  
  getTwoDay = () => {
      axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
          "function_name": ".qrest.maxminone", 
          "arguments": {}
      }
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('max min', res.result);
      });
  }
  
  getThreeDay = () => {
      axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
          "function_name": ".qrest.maxmintwo", 
          "arguments": {}
      }
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('max min', res.result);
      });
  }

  getOneHour = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxmin1hr", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('max min', res.result);
    });
  }

    getThreeHour = () => {
      axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
          "function_name": ".qrest.maxmin3hr", 
          "arguments": {}
      }
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('max min', res.result);
      });
    }
  
  render() {
    return (
    <div>
        <div className="flex justify-between items-center mb-10">
            <div className="inline-flex rounded-md shadow-sm" role="group">
            <button onClick={this.getOneHour} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                1hr
                </button>
                <button onClick={this.getThreeHour} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                3hr
                </button>
                <button onClick={this.getOneDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
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
        </div>
        <div className="flex justify-between mt-8">
            <div className="flex gap-4">
            <p className="text-md font-semibold text-#1a97f5">Sym</p>
            </div>
            <p className="text-md font-semibold text-#1a97f5">Minimum Price</p>
            <div>
            <p className="text-md font-semibold text-#1a97f5">Maximum Price</p>
            </div>
        </div >

        {this.state.instruments.map(instrument => (
        <div key={instrument.maxprice} className="flex justify-between mt-4">
            <div className="flex gap-4">
            <div>
            <p>{instrument.sym}</p>
            </div>
            </div>
        <p>$ {instrument.minprice}</p>
        <p>$ {instrument.maxprice}</p>
        </div>
        ))}
    </div>
    )
}
}