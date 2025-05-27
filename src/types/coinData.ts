export interface CoinData {
  market_cap_rank: number;
  id: string;
  name: string;
  circulating_supply: number;
  max_supply: number | null; // <-- ADD THIS
  symbol: string;
  image: string;
  market_cap: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  current_price: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
}