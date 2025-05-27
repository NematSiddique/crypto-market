export const getCoinIdBySymbol = (symbol: string): string | null => {
  const lowerSymbol = symbol.toLowerCase();
  if (lowerSymbol === 'btcusdt') return 'bitcoin';
  if (lowerSymbol === 'ethusdt') return 'ethereum';
  if (lowerSymbol === 'bnbusdt') return 'binancecoin';
  if (lowerSymbol === 'xrpusdt') return 'ripple';
  if (lowerSymbol === 'adausdt') return 'cardano';
  if (lowerSymbol === 'solusdt') return 'solana';
  return null;
};
