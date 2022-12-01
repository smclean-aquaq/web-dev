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
        <p className="text-xl font-semibold mb-8 mt-2 text-slate-800">Minimum and Maximum Prices</p>
        <div className="flex justify-between items-center mb-4 mt-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getOneDay} id="maxmin" type="radio"  name="tab" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="maxmin" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1D </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getTwoDay} id="maxmin" type="radio" name="tab" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="maxmin" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">2D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getThreeDay} id="maxmin" type="radio" name="tab" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="maxmin" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">3D</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getFourDay} id="maxmin" type="radio" name="tab" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="maxmin" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">4D</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="w-20 flex items-center pl-3">
                            <input onClick={this.getFiveDay} id="maxmin" type="radio" value="" name="tab" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="maxmin" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">5D</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
          <div className="table w-full p-2">
          <table className="w-full ">
              <thead>
                  <tr className="text-slate-800">
                      <th className="text-slate-800">Sym</th>
                      <th className="p-2 text-md text-right text-slate-800">Minimum Price</th>
                      <th className="p-2 text-md text-right text-slate-800">Maximum Price</th>
                  </tr>
              </thead>
              {this.state.instruments.map(instrument => (
              <tbody key={instrument.minprice}>
                  <tr className="bg-gray-50 transition duration-150 ease-in-out hover:bg-gray-100">
                      <td className="text-md">{instrument.sym}</td>
                      <td className='p-2 text-md text-right'>${instrument.minprice.toFixed(2)}</td>
                      <td className='p-2 text-md text-right'>$ {instrument.maxprice.toFixed(2)}</td>
                  </tr>
              </tbody>
              ))}
          </table>
          </div>  
          </div>  
        )
      }
  }
