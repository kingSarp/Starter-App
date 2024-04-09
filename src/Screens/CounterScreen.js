import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const NUMBER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, number: state.number + action.payload };
    case "decrement":
      return { ...state, number: state.number - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  //state === {number:number}
  //action === { type: 'increment' || 'decrement', payload\}

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: NUMBER_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: NUMBER_INCREMENT });
        }}
      />
      <Text>Current Count: {state.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
