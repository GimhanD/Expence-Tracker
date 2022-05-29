import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
//import { useDispatch } from "react-redux";

import { GlobalStyles } from "../constants/styles";
//import { expenseActions } from "../components/store/ExpenseSlice";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseID;
  const isEditing = !!editedExpenseId;
  //const dispatch = useDispatch();


  function expenseDeleteHandler() {
    //dispatch(expenseActions.deleteExpense(editedExpenseId))
    navigation.goBack();
  }

  function expenseCancelHandler() {
      navigation.goBack();
  }

  function expenseAddHandler() {
    navigation.goBack();
  }

  function expenseUpdateHandler( ) {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.rootContainer}>
      {isEditing && (
        <View>
          <View style={styles.buttonsContainer}>
            <Button title={"cancel"} mode={"flat"} style={styles.button} onPress={expenseCancelHandler} />
            <Button title={"Update"} style={styles.button} onPress={expenseUpdateHandler}/>
          </View>
          <View style={styles.buttonContainer}>
            <IconButton
              icon="trash"
              size={26}
              color="red"
              onPress={expenseDeleteHandler}
            />
          </View>
        </View>
      )}
      {!isEditing && (
        <View style={styles.buttonsContainer}>
          <Button title={"cancel"} mode={"flat"} style={styles.button} onPress={expenseCancelHandler} />
          <Button title={"Add"} style={styles.button}  onPress={expenseAddHandler}/>
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
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
