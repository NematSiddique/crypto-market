# Crypto Market

Crypto Market is a cryptocurrency market overview application that provides live data on cryptocurrency prices, market caps, and other key metrics. It integrates real-time price updates using Binance WebSocket and fetches additional market data from the CoinGecko REST API. The application also uses Redux for state management.

---

## Features

- **Live Cryptocurrency Prices**: Real-time price updates using Binance WebSocket.
- **Market Overview**: Fetch market cap, volume, and price changes from the CoinGecko REST API.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: Tailwind CSS, Styled Components
- **Data Visualization**: Recharts
- **WebSocket Integration**: Native WebSocket API

### APIs
- **Binance WebSocket**: For real-time cryptocurrency prices
- **CoinGecko REST API**: For additional market data like market caps, volumes, and historical data

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NematSiddique/crypto-market.git
   cd crypto-market
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   API_URL=https://api.coingecko.com/api/v3
   NEXT_PUBLIC_BINANCE_WS=wss://stream.binance.com:9443/ws
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Core Implementations

### Binance WebSocket
- **Why Used**: Binance WebSocket provides ultra-low latency, real-time cryptocurrency price updates, which is crucial for a financial application where even a few seconds delay matters.
- **Implementation**:
  - Connects to Binance's WebSocket server.
  - Subscribes to `@ticker` streams for selected coins.

### CoinGecko REST API
- **Why Used**: CoinGecko API provides comprehensive, structured cryptocurrency data including market cap, supply, volume, and historical prices, which Binance WebSocket does not provide.
- **Implementation**:
  - Fetches static data (market cap, supply, etc.) using server-side rendering (`getServerSideProps`) for SEO and faster page loads.

### Responsive Design
- **Why This Design is Better**:
  - Built with Tailwind CSS and mobile-first principles.
  - Automatically adapts to different screen sizes, ensuring accessibility on mobile, tablet, and desktop.
  - Eliminates the need for separate mobile apps, saving development time and costs.
  - Provides an optimal user experience by adjusting layouts, typography, and interaction patterns based on screen size.

---

## Folder Structure

```
crypto-market/
├── public/                # Static assets (favicon, logos)
├── src/
|   ├── app/
│   ├── components/        # Reusable components (Navbar, Tables, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Next.js pages
│   ├── styled/            # Global styles (Tailwind + custom)
│   ├── theme/             # Theme provider and context
├── .env                   # Environment variables
├── .gitignore             # Ignored files
├── package.json           # Project dependencies
├── README.md              # Project documentation
```

---

## Available Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build the application.
- `npm run start`: Start the production server.
- `npm run lint`: Run code quality checks.

---

## Acknowledgments

- [CoinGecko API](https://coingecko.com/en/api)
- [Binance WebSocket](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

> Built with passion for real-time crypto tracking.
