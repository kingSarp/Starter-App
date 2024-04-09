import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = ({ color, onIncrease, onDecrease }) => {
    console.log( color);
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ColorScreen;
