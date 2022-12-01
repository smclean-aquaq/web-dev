import React from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';


const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
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
  
  getFourDay = () => {
      axios({
      url:URL,
      method: 'post',
      headers: {Authorization: authorization},
      data: {
          "function_name": ".qrest.maxminthree", 
          "arguments": {}
      }
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('max min', res.result);
      });
  }

  getFiveDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxminfour", 
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
            {/* <div className="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={this.getOneDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border rounded-l-lg border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                1D
                </button>
                <button onClick={this.getTwoDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                2D
                </button>
                <button onClick={this.getThreeDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                3D
                </button>
                <button onClick={this.getFourDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                4D
                </button>
                <button onClick={this.getFiveDay} type="button" 
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                5D
                </button>
             </div> */}
             <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input onClick={this.getOneDay} id="horizontal-list-radio-license" type="radio" value="" name="maxminbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1D </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input onClick={this.getTwoDay} id="horizontal-list-radio-id" type="radio" value="" name="maxminbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">2D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input onClick={this.getThreeDay} id="horizontal-list-radio-millitary" type="radio" value="" name="maxminbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">3D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input onClick={this.getFourDay} id="horizontal-list-radio-millitary" type="radio" value="" name="maxminbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">4D</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input onClick={this.getFiveDay} id="horizontal-list-radio-passport" type="radio" value="" name="maxminbutton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="horizontal-list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">5D</label>
                        </div>
                    </li>
                </ul>
        </div>
          <div className="table w-full p-2">
          <table className="w-full ">
              <thead>
                  <tr className="bg-gray-50">
                      <th>Sym</th>
                      <th className="p-2 text-md text-right">Minimum Price</th>
                      <th className="p-2 text-md text-right">Maximum Price</th>
                  </tr>
              </thead>
              {this.state.instruments.map(instrument => (
              <tbody>
                  <tr className="bg-gray-50 transition duration-150 ease-in-out hover:bg-gray-100">
                      <td className="text-md">{instrument.sym}</td>
                      <td className='p-2 text-md font-semibold text-right'>${instrument.minprice.toFixed(2)}</td>
                      <td className='p-2 text-md font-semibold text-right'>$ {instrument.maxprice.toFixed(2)}</td>
                  </tr>
              </tbody>
              ))}
          </table>
          </div>  
          </div>  
        )
      }
  }
