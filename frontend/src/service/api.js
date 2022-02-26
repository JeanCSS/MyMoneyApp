import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.103:3333',
});

const apiB3 = axios.create({
  baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&interval=5min&apikey=WTRBJJUOAN89HOSW',
});
export default api;