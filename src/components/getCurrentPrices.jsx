import React from 'react';
import axios from 'axios';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
  export default class CurrentPrices extends React.Component {

    state = {
      instruments: [],
    };

    componentDidMount() {
      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.price", 
          "arguments": {}
        }
        }).then(res => res.data).then(res => {this.setState({ instruments: res.result });
        console.log('current price', res.result);
        });
    }

    render() {
      return (
        <div>
          {this.state.instruments.map(instrument => (
          <div key={instrument.price} className="flex justify-between mt-4">
              <div className="flex gap-4">
              <div>
              <p className="text-md font-semibold">{instrument.sym}</p>
              {/* <p className="text-sm text-gray-400">Full Company Name Here</p> */}
              </div>
              </div>
          <p>$ {instrument.price}</p>
          </div>
          ))}
        </div>
        // <div class="table w-full p-2">
        //   <table class="w-full border">
        //     <thead>
        //       <tr class="bg-gray-50 border-b text-center">
        //         <th class="border-r p-2">Sym</th>
        //         <th class="border-r p-2">Price</th>
        //       </tr>
        //     </thead>
        //     {this.state.instruments.map(instrument => (
        //     <tbody>
        //       <tr class="bg-gray-50 text-center">
        //         <td class="p-2 border-r">{instrument.sym}</td>
        //         <td class="p-2 border-r">${instrument.price}</td>
        //       </tr>
        //     </tbody>
        //     ))}
        //   </table>
        // </div>
      )
    }
  }