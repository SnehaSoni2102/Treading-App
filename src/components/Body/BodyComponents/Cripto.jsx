// GetSimplePrice.js

import React, { useState, useEffect } from 'react';
import GetSimplePriceService from "../../service/GetSimplePrice"


const GetSimplePrice = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetSimplePriceService.getSimplePrice();
        setCryptoData(data);
      } catch (error) {
        console.log(error,"sd")
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs once when the component mounts

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
