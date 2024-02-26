// CryptoService.js

import axios from 'axios';

class GetSimplePriceService {
  async getSimplePrice() {
    try {
      const apiKey = "CG-FRLs6QtupHKG5T3MpXv9zPb4"; // Replace with your actual API key
      const cryptoId = "bitcoin";
      const vsCurrencies = "inr,usd";
      const include24hrChange = "true";

      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrencies}&include_24hr_change=${include24hrChange}&key=${apiKey}`;

      const response = await axios.get(url);

      if (response.status === 200) {
        return response.data[cryptoId];
      } else {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default new GetSimplePriceService();
