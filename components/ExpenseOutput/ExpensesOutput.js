import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
//import { useSelector } from "react-redux";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  //const expensesData = useSelector((state) => state.expenseReducer.DUMMY_EXPENSES)

  let content = <Text style={styles.fallBackText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallBackText: {
    color: 'white',
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 30
  }

});
