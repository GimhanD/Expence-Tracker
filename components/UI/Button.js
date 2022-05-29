import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ title, mode, style, onPress }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View
          style={[
            styles.buttonContainer,
            mode === "flat" && styles.flatContainer,
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 5,
    
  },
  buttonText: {
    color: "white",
  },
  flatContainer: {
    backgroundColor: "transparency",
  },
  flatText: {
    color: GlobalStyles.colors.primary100,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 5
    
  },
});
