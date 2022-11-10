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
          "arguments": {"s": "DELL"}
        }
        }).then(res => res.data).then(res => {
            console.log(res);
            this.setState({ instruments: res.result });
        });
    }

    render() {
      return (
        <div>
          {this.state.instruments.map(instrument => (
          <div key={instrument.sym} className="flex justify-between mt-4">
              <div className="flex gap-4">
              <div>
              <p className="text-md font-semibold">{instrument.sym}</p>
              </div>
              </div>
          <p>${instrument.price}</p>
          </div>
          ))}
        </div>
      )
    }
  }