import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

 
  export default class PriceHistory extends React.Component {


    state = {
      instruments: [],
    };

    componentDidMount() {
      axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
          "function_name": ".qrest.priceone", 
          "arguments": {"s": "AAPL"}
        }
        }).then(res => res.data).then(res => {
            this.setState({ instruments: res.result }); console.log('price history', this.state.instruments);
        });
    }

    render() {
      return (
        <div>
          <thead className='p-4'>  
            <tr>  
              {/* <th>Time</th>   */}
              <th>Price</th>  
              <th>Size</th>  
              <th>Side</th>  
            </tr>  
          </thead>  
          {this.state.instruments.map(instrument => (
            <tbody className='p-4'>  
              <tr>  
                {/* <td>{instrument.time}</td>   */}
                <td>{instrument.price}</td>  
                <td>{instrument.size}</td>  
                <td>{instrument.side}</td>  
              </tr>  
            </tbody>  
          ))}
        </div>
      )
    }
  }