// CryptoService.js

import axios from 'axios';

class GetTrendingCoinService {
  async getTrendingCoin() {
    try {
      const url = `https://api.coingecko.com/api/v3/search/trending`;

      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default new GetTrendingCoinService();
