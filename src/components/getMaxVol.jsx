import React from 'react';
import axios from 'axios';

const URL = 'https://homer.aquaq.co.uk:8050/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 
export default class MaxVolume extends React.Component {

state = {
    instruments: [],
};

componentDidMount() {
    axios({
    url:URL,
    method: 'post', 
    headers: {Authorization: authorization}, 
    data: {
        "function_name": ".qrest.maxvolone", 
        "arguments": {},
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result });
    console.log('Max Volume Traded', res.result);
    });
}

getOneDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxvolone", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('Max Volume Traded', res.result);
    });
}

getTwoDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxvoltwo", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('Max Volume Traded', res.result);
    });
}

getThreeDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxvolthree", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('Max Volume Traded', res.result);
    });
}

getFourDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxvolfour", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('Max Volume Traded', res.result);
    });
}

getFiveDay = () => {
    axios({
    url:URL,
    method: 'post',
    headers: {Authorization: authorization},
    data: {
        "function_name": ".qrest.maxvolfive", 
        "arguments": {}
    }
    }).then(res => res.data).then(res => {this.setState({ instruments: res.result }); 
    console.log('Max Volume Traded', res.result);
    });
}

    render() {
        return (
        <div >

            <div className="flex justify-between items-center mb-8 mt-8">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button onClick={this.getOneDay} type="button" 
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                    1D
                    </button>
                    <button onClick={this.getTwoDay} type="button" 
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                    2D
                    </button>
                    <button onClick={this.getThreeDay} type="button" 
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                    3D
                    </button>
                    <button onClick={this.getFourDay} type="button" 
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                    4D
                    </button>
                    <button onClick={this.getFiveDay} type="button" 
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-#1a97f5 focus:z-10 focus:ring-2 focus:ring-#1a97f5 focus:text-#1a97f5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-#1a97f5 dark:focus:text-white">
                    5D
                    </button>
                </div>
            </div>

            <div className="flex gap-24 p-1 mb-2">
                <div className="flex gap-4">
                <p className="text-md font-semibold text-#1a97f5 w-12">Sym</p>
                </div>
                <p className="text-md font-semibold text-#1a97f5 w-32">Volume Traded</p>
            </div >

            {this.state.instruments.map(instrument => (
            <div key={instrument.vol} className="flex gap-24 p-1">
                <div className="flex gap-4">
                <div>
                <p className='w-12'>{instrument.sym}</p>
                </div>
                </div>
            <p className='w-32'>{instrument.vol.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
            </div>
            ))}

        </div>
        )
    }
}