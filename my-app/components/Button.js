import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Button({ bgColor, btnlabel, textColor, press }) {
  return (
    <TouchableOpacity
      onPress={press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 300,
        paddingVertical: 7,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {btnlabel}
      </Text>
    </TouchableOpacity>
  );
}
