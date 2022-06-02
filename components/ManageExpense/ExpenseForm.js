import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChnageHandler() {}
  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          style={styles.rowInputItem}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChnageHandler,
          }}
        />
        <Input
          style={styles.rowInputItem}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize: 'none',
          //autoCorrect: false default is
        }}
      />
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 80,
    marginBottom: 40
  },


});
