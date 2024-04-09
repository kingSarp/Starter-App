import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  //
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/forest.jpg")}
        score={7}

      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={10}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
