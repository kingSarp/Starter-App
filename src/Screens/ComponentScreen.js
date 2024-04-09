import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = "loceee";
  return (
    <View>
      <Text style={styles.textStyle}>CScreen</Text>
      <Text style={styles.subHeaderStyle}>CScreen</Text>
      <Text>my name {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 10,
  },
  

});

export default ComponentScreen;
