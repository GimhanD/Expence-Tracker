import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

function MangeExpences() {
  return (
    <bottomTab.Navigator>
      <bottomTab.Screen name="AllExpenses" component={AllExpenses} />
      <bottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
    </bottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
       
        <stack.Screen name="MangeExpences" component={MangeExpences} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
