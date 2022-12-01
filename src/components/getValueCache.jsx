import axios from 'axios';
import React from "react";

const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


export default class ValueCache extends React.Component {

state = {
    instruments: [],
};

componentDidMount() {
    const interval = setInterval(() => {
        axios({
        url:URL,
        method: 'post', 
        headers: {Authorization: authorization}, 
        data: {
            "function_name": ".qrest.valcache", 
            "arguments": {}
        }
        }).then(res => res.data).then(res => {this.setState({ instruments: res.result });
        });
}, 1000);
}

render() {
    return (
        <div className="table w-full p-2">
            <p className="text-xl font-semibold mb-8 text-slate-800">Current Instrument Prices</p>
            <table className="w-full ">
                <thead>
                    <tr className="text-slate-800">
                        <th className='text-slate-800'>Sym</th>
                        <th className="p-2 flex justify-end text-slate-800">Price</th>
                        <th className="p-2"></th>
                    </tr>
                </thead>
                {this.state.instruments.map(instrument => (
                <tbody key={instrument.sym}>
                    <tr className="bg-gray-50 items-center transition duration-150 ease-in-out hover:bg-gray-100">
                        <td className="text-md">{instrument.sym}</td>
                        <td className={`text-${instrument.pcColor} p-2 text-md flex justify-end font-semibold`}>${instrument.lastprice.toFixed(2)}</td>
                        <td className="p-2">
                            <a >
                                <svg 
                                // xmlns="http://www.w3.org/2000/svg" 
                                className={`icon icon-tabler icon-tabler-${instrument.arrowClass}`} 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke={`${instrument.arrowStroke}`} 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">
                                    <path 
                                    stroke="none" 
                                    d="M0 0h24v24H0z" 
                                    fill="none"/>
                                    <path 
                                    d={`${instrument.arrowD}`} />
                                </svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>        
        )
    }
}