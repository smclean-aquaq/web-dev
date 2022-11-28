import React from 'react';
import axios from 'axios';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

const URL = 'https://homer.aquaq.co.uk:8025/executeFunction';
const authorization = `Basic dXNlcjpwYXNz`;
 
  export default class BarChart extends React.Component {

    state = {
      instruments: [],
    };

    componentDidMount() {
      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.maxvolchart",
          "arguments": {}
        }
      }).then(res => res.data).then(res => {
        console.log('Highest Traded 1D', res);
        this.setState({ one: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.maxvoltwochart",
          "arguments": {}
        }
      }).then(res => res.data).then(res => {
        console.log('Highest Traded 2D', res);
        this.setState({ two: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.maxvolthreechart",
          "arguments": {}
        }
      }).then(res => res.data).then(res => {
        console.log('Highest Traded 3D', res);
        this.setState({ three: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.maxvolfourchart",
          "arguments": {}
        }
      }).then(res => res.data).then(res => {
        console.log('Highest Traded 4D', res);
        this.setState({ four: res.result});
      });

      axios({
        url:URL,
        method: 'post',
        headers: {Authorization: authorization},
        data: {
          "function_name": ".qrest.maxvolfivechart",
          "arguments": {}
        }
      }).then(res => res.data).then(res => {
        console.log('Highest Traded 5D', res);
        this.setState({ five: res.result});
      });

  }

  render() { 
    return (
      <div>
        <ChartComponent 
        id="chart"
        primaryXAxis = {{
            valueType:"Category", 
            interval: 1, 
            majorGridLines: { width: 0 },
            labelStyle: { color: 'transparent' }, 
        }}
        primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title:"Volume (millions)",
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}>

          <Inject services={[ColumnSeries, Category, Tooltip, Legend]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Column" dataSource={this.state.one} xName="sym" yName="vol" name="1D"></SeriesDirective>
            <SeriesDirective type="Column" dataSource={this.state.two} xName="sym" yName="vol" name="2D"></SeriesDirective>
            <SeriesDirective type="Column" dataSource={this.state.three} xName="sym" yName="vol" name="3D"></SeriesDirective>
            <SeriesDirective type="Column" dataSource={this.state.four} xName="sym" yName="vol" name="4D"></SeriesDirective>
            <SeriesDirective type="Column" dataSource={this.state.five} xName="sym" yName="vol" name="5D"></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    )
  }
}