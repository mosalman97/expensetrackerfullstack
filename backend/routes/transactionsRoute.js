import express from "express";
import {
	getTransactionsByUserId,
	createTransaction,
	deleteTransaction,
	getUserSummery,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.post("/", createTransaction);
router.get("/:userId", getTransactionsByUserId);
router.delete("/:id", deleteTransaction);
router.get("/summery/:userid", getUserSummery);

export default router;
