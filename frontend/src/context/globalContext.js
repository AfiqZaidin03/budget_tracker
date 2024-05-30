import axios from 'axios';
import React, { useContext, useState } from 'react';

const BASE_URL = "http://localhost:5000/api/v1";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // Incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
            getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome;
    }

    // Expenses
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
            getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}/get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense= async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpenses()
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount
        })
        return totalExpense;
    }

    // Calculate total balance
    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    // View transaction
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }



    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense, 
            totalBalance,
            transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}