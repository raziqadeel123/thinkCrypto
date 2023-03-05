/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import axios from "axios";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

export const getCoin = async (coinId) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMarketData= async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };


  export const getMarketChart = async (coinId) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=chf&days=1&interval=hourly`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };


  export  const getWatchListData = async (updatedCoinId) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${updatedCoinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
      );
         return response.data;
    } catch (error) {
      console.log(error);
    }
  }
/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/
