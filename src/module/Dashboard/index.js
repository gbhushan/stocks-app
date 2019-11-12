import React, { Component } from "react";
import axios from "axios";
import { VictoryChart, VictoryCandlestick } from "victory";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  componentDidMount() {}
  fetchStocksData = async () => {
    const API_KEY = "";
    const api = axios.create({
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json"
      }
    });
    const res = await api.get(
      "https://sandbox.tradier.com/v1/markets/history?symbol=AAPL&interval=daily&start=2019-05-01&end=2019-05-05"
    );
    console.log(res.data.quotes);
    this.setState({
      data: res.data.quotes
    });
    console.log(res.data.quotes);
  };
  render() {
    return (
      <div>
        <input
          onClick={this.fetchStocksData}
          type="button"
          value="Fetch Data"
        />
        <VictoryChart>
          <VictoryCandlestick
            data={[
              {
                x: new Date(2016, 6, 1),
                open: 154.89,
                high: 158.85,
                low: 154.23,
                close: 157.92
              },
              {
                x: new Date(2016, 6, 2),
                open: 143.98,
                high: 145.72,
                low: 142.0,
                close: 142.19
              },
              {
                x: new Date(2016, 6, 3),
                open: 144.53,
                high: 148.5499,
                low: 143.8,
                close: 148.26
              }
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Dashboard;
