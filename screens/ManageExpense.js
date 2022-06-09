import { useContext } from "react";
import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
//import { useDispatch } from "react-redux";

import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
//import { expenseActions } from "../components/store/ExpenseSlice";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseID;
  const isEditing = !!editedExpenseId;
  //const dispatch = useDispatch();

  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  function expenseDeleteHandler() {
    //dispatch(expenseActions.deleteExpense(editedExpenseId))
    expensesCtx.deleteExpense(editedExpenseId);

    navigation.goBack();
  }

  function expenseCancelHandler() {
    navigation.goBack();
  }

  function expenseConfirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm
        onCancel={expenseCancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={expenseConfirmHandler}
        defaultInputData={selectedExpense}
      />

      {isEditing && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="trash"
            size={26}
            color="red"
            onPress={expenseDeleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    marginTop: 16,
    borderTopColor: "white",
    borderTopWidth: 2,
    paddingTop: 8,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
