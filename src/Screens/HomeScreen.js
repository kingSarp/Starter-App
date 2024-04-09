import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  //
  return (
    <View>
      <Button
        title="Go to Component Page"
        onPress={() => navigation.navigate("Component")}
      />
      <Button
        title="Go to List Page"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Page"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go to Counter Page"
        onPress={() => navigation.navigate("Counter")}
      />
       <Button
        title="Go to Color Page"
        onPress={() => navigation.navigate("Color")}
      />
       <Button
        title="Go to Square Page"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Page"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
