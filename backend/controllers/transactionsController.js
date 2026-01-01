import { sql } from "../config/db.js";

export const getTransactionsByUserId = async (req, res) => {
	try {
		const { userId } = req.params;
		const transactions = await sql`
    SELECT * from transactions WHERE user_id  = ${userId} ORDER BY created_at DESC
    `;
		res.status(200).json(transactions);
	} catch (error) {
		console.log("Error getting in transactions", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const createTransaction = async (req, res) => {
	try {
		const { title, amount, category, user_id } = req.body;
		if (!title || !category || !user_id || amount === undefined) {
			return res.status(400).json({ message: "All fields required" });
		}
		const transcation = await sql`
      INSERT INTO transactions(user_id,title,amount,category)
      VALUES (${user_id},${title},${amount},${category})
        RETURNING *
      `;
		res.status(200).json({
			message: "new transaction created!",
			data: {
				title: title,
				amount: amount,
				category: category,
			},
		});
	} catch (error) {
		console.log("Error createing in transactions", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteTransaction = async (req, res) => {
	try {
		const { id } = req.params;
		if (isNaN(parseInt(id))) {
			return res.status(400).json({
				message: "invalid id",
			});
		}
		const result = await sql`
      DELETE FROM transactions WHERE id = ${id} RETURNING *
      `;
		if (result.length === 0) {
			return res.status(404).json({ message: "transaftion not found" });
		}
		res.status(200).json({
			message: "transaction delete successfully",
		});
	} catch (error) {
		console.log("Error deleting in transaction", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getUserSummery = async (req, res) => {
	try {
		const { userid } = req.params;
		const balanceResult = await sql`
    SELECT COALESCE(SUM(amount),0) as balance FROM transactions WHERE user_id = ${userid}
    `;
		const incomeResult = await sql`
      SELECT COALESCE(SUM(amount),0) as income FROM transactions WHERE user_id = ${userid} AND amount > 0
    `;
		const expenseResult = await sql`
      SELECT COALESCE(SUM(amount),0) as expense FROM transactions WHERE user_id = ${userid} AND amount < 0
    `;
		res.status(200).json({
			balance: balanceResult[0].balance,
			income: incomeResult[0].income,
			expense: expenseResult[0].expense,
		});
	} catch (error) {
		console.log("Error getting in summery", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
