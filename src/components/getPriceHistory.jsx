import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownDate, dropdownSym } from '../data/dummy';


const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

const DropDownSym = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownDate} popupHeight="220px" popupWidth="120px" />
  </div>
);

const DropDownDate = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownSym} popupHeight="220px" popupWidth="120px" />
  </div>
);
 
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
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
      <div className="flex justify-between items-center gap-2 mb-10">
      {/* {this.state.instruments.map(instrument => (<p className="text-xl font-semibold">Price History for {instrument.sym}</p>))} */}
        <p className="text-xl font-semibold">Price History for AAPL</p>
        <DropDownDate/>
        <DropDownSym/>

      </div>
      <div className="md:w-full overflow-auto">
        <thead>  
          <tr>  
            <th>Date &emsp;</th>  
            <th>Time &emsp;</th>  
            <th>Price &emsp;</th>  
            <th>Size &emsp;</th>  
            <th>Side &emsp;</th> 
            <th>Exchange</th>   
          </tr>  
        </thead>  
        <tbody>  
        {this.state.instruments.map(instrument => (
          <tr>
            <td>{instrument.date}&emsp;</td>  
            <td>{instrument.time}&emsp;</td>  
            <td>{instrument.price}&emsp;</td>  
            <td>{instrument.size}&emsp;</td>  
            <td>{instrument.side}&emsp;</td>  
            <td>{instrument.ex}</td>  
          </tr>  
        ))}
        </tbody> 
      </div>
      </div>
    )
  }
}