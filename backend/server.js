import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import { rateLimiter } from "./middleware/rateLimter.js";
import transactionRoute from "./routes/transactionsRoute.js";
dotenv.config();

const app = express();

// middleware
app.use(rateLimiter);
app.use(express.json());
app.use("/api/transactions", transactionRoute);

const PORT = process.env.PORT || 5002;

app.get("/health", (req, res) => {
	res.status(200).json({
		message: "server is working live healthy server",
	});
});

initDB().then(() => {
	app.listen(PORT, () => {
		console.log(`server is running under PORT:${PORT}`);
	});
});
