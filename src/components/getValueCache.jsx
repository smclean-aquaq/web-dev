import axios from 'axios';
import React from "react";

const URL = 'https://homer.aquaq.co.uk:8020/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;


    export default class ValueCache extends React.Component {

        state = {
            instruments: [],
        };
    
        componentDidMount() {
            axios({
            url:URL,
            method: 'post', 
            headers: {Authorization: authorization}, 
            data: {
                "function_name": ".qrest.valcache", 
                "arguments": {}
            }
            }).then(res => res.data).then(res => {this.setState({ instruments: res.result });
            console.log('value cache', res.result);
            });
        }
    
        render() {
        return (
        <div className="table w-full p-2">
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="border-r p-2">Sym</th>
                        <th className="border-r p-2">Price</th>
                    </tr>
                </thead>
                {this.state.instruments.map(instrument => (
                <tbody className='w-full'>
                    <tr className="bg-gray-50 items-center transition duration-150 ease-in-out hover:bg-gray-100 display:inline-block">
                        <td className="p-2 border-r text-md font-semibold">{instrument.sym}</td>
                        <td className={`text-${instrument.pcColor} p-2 border-r text-md font-semibold`}>${instrument.lastprice}
                        <a href="#">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class={`icon icon-tabler icon-tabler-arrow-big-${instrument.arrowClass}`} 
                                display="inline-block"
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                stroke-width="2" 
                                stroke={`${instrument.arrowStroke}`} 
                                fill="none" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                                    <path 
                                    stroke="none" 
                                    d="M0 0h24v24H0z" 
                                    fill="none"/>
                                    <path 
                                    d={`${instrument.arrowD}`} />
                                </svg>
                        </a></td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
        )
        }
    }