import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultInputData,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultInputData ? defaultInputData.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultInputData
        ? defaultInputData.date.toISOString().slice(0, 10)
        : "",
      isValid: true,
    },
    description: {
      value: defaultInputData ? defaultInputData.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmmountValid || !isDateValid || !isDescriptionValid) {
      //Alert.alert("Invalid Input!", "Please Check your Input Again");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: isAmmountValid },
          date: { value: curInputs.date.value, isValid: isDateValid },
          description: {
            value: curInputs.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          style={styles.rowInputItem}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInputItem}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          //autoCapitalize: 'none',
          //autoCorrect: false default is
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}

      <View style={styles.buttonsContainer}>
        <Button mode={"flat"} style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  rowInput: {
    flexDirection: "row",
  },
  rowInputItem: {
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 80,
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
