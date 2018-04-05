import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import ajax from './ajax';
import rawDataFormater from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    ajax.get((coinData) => {
      this.setState({
        data: rawDataFormater(coinData),
      });
    });
  }
  render() {
    return (
      <div id="main">
        <h1>Cryptocurrency Charting Tool</h1>
        {this.state.data ? <Line data={this.state.data} /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
