import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });
  //this recent expense logic is not working properly. therefore we have to fix that

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} fallBackText={'No any Expenses fund in 7 Days!'} />
  );
}

export default RecentExpenses;
