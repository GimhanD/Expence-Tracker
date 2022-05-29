import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    console.log(expensesSum)

  return (
    <View style={styles.rootCpntainer}>
      <Text style={styles.periodName}>{periodName}</Text>
      <Text style={styles.expeSum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles  = StyleSheet.create({
    rootCpntainer: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10     
    },
    periodName: {
        color: GlobalStyles.colors.primary200,
    },
    expeSum: {
        color: GlobalStyles.colors.primary700,
        fontWeight: 'bold'
    }

})
