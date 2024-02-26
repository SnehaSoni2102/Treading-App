// GetSimplePrice.js

import React, { useState, useEffect } from 'react';
import GetSimplePriceService from "../../service/GetSimplePrice"


const GetSimplePrice = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetSimplePriceService.getSimplePrice();
        setCryptoData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {cryptoData !== null && (
        <div>
          <p>INR: {cryptoData.inr}</p>
          <p>INR 24h Change: {cryptoData.inr_24h_change}</p>
          <p>USD: {cryptoData.usd}</p>
          <p>USD 24h Change: {cryptoData.usd_24h_change}</p>
        </div>
      )}
    </div>
  );
};

export default GetSimplePrice;
