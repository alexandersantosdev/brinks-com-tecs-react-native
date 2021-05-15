import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  const [palavra, setPalavra] = useState("");

  const handleREverse = (word) => {
    const p = word.split("").reverse().join("");
    setPalavra(p);
  };
  return (
    <HideKeyboard onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>ReverseWords</Text>
        <TextInput
          placeholder="Digite a palavra"
          placeholderTextColor="#fff"
          style={styles.palavra}
          onChangeText={(e) => handleREverse(e)}
        />
        <Text style={styles.reverseWord}>{palavra}</Text>
      </View>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27ae60",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: "#fff",
  },
  palavra: {
    width: "90%",
    height: 45,
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
  },
  reverseWord: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 40,
    color: "red",
  },
});
