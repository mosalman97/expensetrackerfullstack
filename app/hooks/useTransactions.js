import { useCallback, useState } from "react";
import { Alert } from "react-native";

export const API_URL = "http:localhost:5001/api";

export const useTransactions = (userId) => {
	const [transactions, setTransactions] = useState([]);
	const [summery, setSummery] = useState({
		balance: 0,
		income: 0,
		expense: 0,
	});
	const [isLoading, setIsLoading] = useState(false);

	const fetchTransactions = useCallback(async () => {
		try {
			const response = await fetch(`${API_URL}/transactions/${userId}`, {
				method: "GET",
			});
			const data = await response.json();
			setTransactions(data);
		} catch (error) {
			console.log(error, "error fetching transactions");
		}
	}, [userId]);

	const fetchSummery = useCallback(async () => {
		try {
			const response = await fetch(
				`${API_URL}/transactions/summery/${userId}`,
				{
					method: "GET",
				}
			);
			const data = await response.json();
			setSummery(data);
		} catch (error) {
			console.log(error, "error fetching summery");
		}
	}, [userId]);

	const fetchAll = useCallback(async () => {
		if (!userId) return;

		setIsLoading(true);
		try {
			await Promise.all([fetchTransactions(), fetchSummery()]);
		} catch (error) {
			console.error("Error loading data:", error);
		} finally {
			setIsLoading(false);
		}
	}, [fetchSummery, fetchTransactions, userId]);

	const deleteTransaction = async (id) => {
		try {
			const response = await fetch(`${API_URL}/transactions/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Failed to delete transaction");
			}
			fetchAll();
			Alert.alert("Success", "Transaction deleted successfully");
		} catch (error) {
			console.log(error, "error deleting transaction");
		}
	};

	return {
		isLoading,
		transactions,
		summery,
		deleteTransaction,
		fetchAll,
	};
};
