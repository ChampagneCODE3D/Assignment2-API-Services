require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const EXCHANGE_API_KEY = process.env.EXCHANGE_API_KEY;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/weather", async (_req, res) => {
  if (!WEATHER_API_KEY) {
    return res.status(500).json({ error: "WEATHER_API_KEY is not configured in .env" });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Calgary,CA&units=metric&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Weather API request failed" });
    }

    const data = await response.json();

    res.json({
      city: data.name,
      temperatureC: data.main.temp,
      description: data.weather?.[0]?.description || "Unknown",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
});

app.get("/api/exchange", async (req, res) => {
  if (!EXCHANGE_API_KEY) {
    return res.status(500).json({ error: "EXCHANGE_API_KEY is not configured in .env" });
  }

  const { from, to, amount } = req.query;
  const parsedAmount = Number(amount || 1);

  if (!from || !to || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
    return res.status(400).json({ error: "Please provide valid from, to, and amount values" });
  }

  try {
    const url = `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/${encodeURIComponent(from)}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Exchange API request failed" });
    }

    const data = await response.json();
    const rate = data?.conversion_rates?.[to];

    if (!rate) {
      return res.status(400).json({ error: "Currency pair not available" });
    }

    res.json({
      from,
      to,
      amount: parsedAmount,
      rate,
      converted: Number((parsedAmount * rate).toFixed(2)),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch exchange data" });
  }
});

app.listen(PORT, () => {
  console.log(`Assignment 2 app running at http://localhost:${PORT}`);
});
