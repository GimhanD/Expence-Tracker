import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { formatingDate } from "../../util/date";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseID: id });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.rootContainer}>
        <View style={styles.innerContainerOne}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{formatingDate(date)}</Text>
        </View>
        <View style={styles.innerContainerTwo}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 6,
    marginTop: 10,
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainerOne: {},
  innerContainerTwo: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 3,
  },
  description: {
    fontWeight: "bold",
    color: "white",
  },
  date: {
    color: "white",
  },
  amount: {
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
  },
  pressed: {
    opacity: 0.75,
  },
});
