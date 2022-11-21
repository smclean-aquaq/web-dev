import axios from 'axios';
import React from "react";

const URL = 'https://homer.aquaq.co.uk:8020/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;


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
                console.log('value cache', res.result);
                });
        }, 1000);
        }

        render() {
            return (
            <div class="table w-full p-2">
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-50 border-b ">
                            <th class="border-r p-2">Sym</th>
                            <th class="border-r p-2">Price</th>
                            <th class="border-r p-2"></th>
                        </tr>
                    </thead>
                    {this.state.instruments.map(instrument => (
                    <tbody>
                        <tr class="bg-gray-50 items-center transition duration-150 ease-in-out hover:bg-gray-100">
                            <td class="p-2 border-r text-md font-semibold">{instrument.sym}</td>
                            <td class={`text-${instrument.pcColor} p-2 border-r text-md font-semibold`}>${instrument.lastprice.toFixed(2)}</td>
                            <td class="p-2 border-r">
                                <a href="#">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class={`icon icon-tabler icon-tabler-arrow-big-${instrument.arrowClass}`} 
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