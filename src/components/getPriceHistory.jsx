import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

// const DropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//   </div>
// );
 
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
      }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
      console.log('price history', res.result);
      });
  }

  render() {
    return (
       <div>
        <thead className='p-4 mr-3'>  
          <tr>  
            <th className='mr-3'>Time</th>  
            <th className='mr-3'>Price</th>  
            <th className='mr-3'>Size</th>  
            <th className='mr-3'>Side</th> 
            <th className='mr-3'>Exchange</th>   
          </tr>  
        </thead>  
        <tbody className='p-4 mt-1'>  
        {this.state.instruments.map(instrument => (
          <tr>  
            <td>{instrument.time}</td>  
            <td>{instrument.price}</td>  
            <td>{instrument.size}</td>  
            <td>{instrument.side}</td>  
            <td>{instrument.ex}</td>  
          </tr>  
        ))}
        </tbody>  
      </div>
    )
  }
}