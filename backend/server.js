const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.get("/api/photo-gallery-feed", async (req, res) => {
  try {
    console.log("req.query.page",req.query.page);
    let response = await fetch(
      `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${req.query.page}`
    );
    let data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
