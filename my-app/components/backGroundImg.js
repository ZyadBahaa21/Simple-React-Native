import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

export default function BackGroundImg({ children }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/pic.jpg")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
