import axios from 'axios';
import React from "react";

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
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
                // console.log('value cache', res.result);
                });
        }, 1000);
        }

        render() {
            return (

            <div>

            <div className="flex justify-between mt-8 p-1">
                <div className="flex gap-4">
                <p className="text-md font-semibold text-#1a97f5 w-28">Sym</p>
                </div>
                <p className="text-md font-semibold text-#1a97f5 w-24">Price</p>
                <div>
                <p className="text-md font-semibold text-#1a97f5 w-28"></p>
                </div>
            </div >
    
            {this.state.instruments.map(instrument => (
            <div key={instrument.sym} className="flex justify-between mt-2 p-1">
                <div className="flex gap-4">
                <div>
                <p className='w-28'>{instrument.sym}</p>
                </div>
                </div>
                <p className={`text-${instrument.pcColor} text-md font-semibold w-24`}>$ {instrument.lastprice.toFixed(2) && instrument.lastprice.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <p className='w-28'><a>
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
                </p>
            </div>
            ))}
                
            </div>
            

            // <div className="table w-full p-2">
            //     <table className="w-full border">
            //         <thead>
            //             <tr className="bg-gray-50 border-b ">
            //                 <th className="border-r p-2">Sym</th>
            //                 <th className="border-r p-2">Price</th>
            //                 <th className="border-r p-2"></th>
            //             </tr>
            //         </thead>
            //         {this.state.instruments.map(instrument => (
            //         <tbody>
            //             <tr className="bg-gray-50 items-center transition duration-150 ease-in-out hover:bg-gray-100">
            //                 <td className="p-2 border-r text-md font-semibold">{instrument.sym}</td>
            //                 <td className={`text-${instrument.pcColor} p-2 border-r text-md font-semibold`}>${instrument.lastprice.toFixed(2) && instrument.lastprice.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
            //                 <td className="p-2 border-r">
            //                     <a>
            //                         <svg 
            //                         xmlns="http://www.w3.org/2000/svg" 
            //                         class={`icon icon-tabler icon-tabler-arrow-big-${instrument.arrowClass}`} 
            //                         width="16" 
            //                         height="16" 
            //                         viewBox="0 0 24 24" 
            //                         stroke-width="2" 
            //                         stroke={`${instrument.arrowStroke}`} 
            //                         fill="none" 
            //                         stroke-linecap="round" 
            //                         stroke-linejoin="round">
            //                             <path 
            //                             stroke="none" 
            //                             d="M0 0h24v24H0z" 
            //                             fill="none"/>
            //                             <path 
            //                             d={`${instrument.arrowD}`} />
            //                         </svg>
            //                     </a>
            //                 </td>
            //             </tr>
            //         </tbody>
            //         ))}
            //     </table>
            // </div>
            )
            }
        }