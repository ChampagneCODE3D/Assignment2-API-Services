# Assignment 2: Utilizing External API Services

This project includes two pages:
- Currency converter (`public/index.html`)
- Calgary weather widget (`public/weather.html`)

## Features
- Uses two external APIs:
  - OpenWeatherMap for current Calgary weather
  - ExchangeRate-API for conversion rates
- Displays weather temperature, description, and timestamp
- Converts currency with amount, from, and to selections (12 currencies)
- Shows exchange rate line (example: 1 USD = 1.3642 CAD)
- Uses localStorage for cache persistence and sessionStorage for rate limiting state
- Applies API call cooldown (10 seconds) and cache TTL windows

## Setup
1. Install dependencies:
   - `npm install`
2. Create a `.env` file from `.env.example`
3. Add your API keys in `.env`
4. Run the app:
   - `npm start`
5. Open:
   - `http://localhost:3000/index.html`
   - `http://localhost:3000/weather.html`

## Security
- `.env` is ignored by git via `.gitignore`
- API keys are read server-side and are not exposed in repository files

## AI Declaration
GitHub Copilot was used to help draft code, explain parts of the assignment by drawing parallels to PLC programming and robotics principles, and help fix errors and refine the code.
Technical background: PLC programming and robotics systems.
