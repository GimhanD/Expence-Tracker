import { createSlice } from "@reduxjs/toolkit";

import { DUMMY_EXPENSES } from "../../data/dummy_data";

const ExpenseSlice = createSlice({
    name: "ExpenseSlice",
    initialState: {DUMMY_EXPENSES},
    reducers: {
        deleteExpense(state, actions) {
            const id = actions.payload;
            return state.DUMMY_EXPENSES.filter(item => item.id !== id);
        },
        UpdateExpense() {

        },
        addExpense() {

        }

    }
})

export const expenseReducer = ExpenseSlice.reducer;
export const expenseActions = ExpenseSlice.actions;