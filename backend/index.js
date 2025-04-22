require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Allow JSON body parsing

const PORT = process.env.PORT || 5000;
console.log("Backend API Key:", process.env.TRIPADVISOR_API_KEY); 

// API to fetch hotels from TripAdvisor
app.get("/api/hotels", async (req, res) => {
    try {
        const response = await axios.get("https://travel-advisor.p.rapidapi.com/hotels/list", {
            params: {
                location_id: "28953",  // New York City
                adults: "1",  // Keep it 1 for testing
                nights: "1",  // Reduce to 1 for more results
                currency: "USD",
                limit: "10",
                lang: "en_US",  // Ensure English response
                checkin: "2025-04-05",  // Provide a future date
                rooms: "1",  // Ensure at least 1 room is requested
                offset: "0",  // Start from first result
                order: "price"  // Sort by price to avoid empty responses
            },
            headers: {
                "X-RapidAPI-Key": process.env.TRIPADVISOR_API_KEY,
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching hotels:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch hotel data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
