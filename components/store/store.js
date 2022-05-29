import { configureStore } from "@reduxjs/toolkit";

import { expenseReducer } from "./ExpenseSlice";

const store = configureStore({
  reducer: { expenseReducer: expenseReducer },
});

export default store;
