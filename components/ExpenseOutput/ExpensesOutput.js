import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
//import { useSelector } from "react-redux";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { DUMMY_EXPENSES } from '../../data/dummy_data'



function ExpensesOutput({expenses, expensesPeriod}) {
   //const expensesData = useSelector((state) => state.expenseReducer.DUMMY_EXPENSES) 

  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles  = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})
