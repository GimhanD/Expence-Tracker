import { View, TextInput, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style }) {

     const inputStyles = [styles.textInput]

     if ( textInputConfig && textInputConfig.multiline) {
         inputStyles.push(styles.inputMultiline)
     }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        margin: 5,
        padding: 3,
    },
    labelText: {
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    textInput: {
        borderRadius: 7,
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 5,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }

})
