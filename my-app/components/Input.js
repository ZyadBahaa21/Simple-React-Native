import React from "react";
import { View, Text, TextInput } from "react-native";
import { darkGreen } from "./Container";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: "60%",
        backgroundColor: "rgb(220,220,220)",
        paddingVertical: 7,
        marginRight: 100,
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
}
