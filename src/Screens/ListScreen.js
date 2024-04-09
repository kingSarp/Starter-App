import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friends #1", Age: 20 },
    { name: "friends #2", Age: 22 },
    { name: "friends #3", Age: 24 },
    { name: "friends #4", Age: 26 },
    { name: "friends #5", Age: 27 },
    { name: "friends #6", Age: 28 },
    { name: "friends #7", Age: 29 },
    { name: "friends #8", Age: 30 },
    { name: "friends #9", Age: 32 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
  },
});

export default ListScreen;
