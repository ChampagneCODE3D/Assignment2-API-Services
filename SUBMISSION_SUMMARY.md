# Assignment 2 Submission Summary

## Project
- Standalone repo: `c:\Users\jorda\repos\assignment2-api-services`
- Live local site: `http://localhost:8080`

## GitHub remotes
- Jordan profile: `https://github.com/jordantchampagne-sudo/Assignment2-API-Services-with-Public.git`
- Champagne profile: `https://github.com/ChampagneCODE3D/Assignment2-API-Services.git`

## Latest commit
- `480cddc` — Clean submission package and remove stale old frontend files

## Key files
- `server.js` - Express backend and API proxy
- `public/index.html` - site markup
- `public/app.js` - weather and currency logic
- `public/styles.css` - styling
- `.env.example` - sample API key config

## What was verified
- The app is running locally at `http://localhost:8080`
- Weather loads correctly in the browser
- Currency conversion works with live exchange data
- The repo was cleaned of stale legacy files

## Setup instructions
1. Copy `.env.example` to `.env`
2. Add API keys:
   - `OPENWEATHER_API_KEY=your_key_here`
   - `EXCHANGERATE_API_KEY=your_key_here`
   - `PORT=8080`
3. Install dependencies:
   - `npm install`
4. Start the server:
   - `npm start`
5. Open `http://localhost:8080`

## Notes
- `.env` is excluded from git
- `README.md` is updated for the final submission
- The live app has been tested in two browsers for weather and conversion
