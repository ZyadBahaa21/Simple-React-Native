import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackGroundImg from "./backGroundImg";
import Button from "./Button";
import { darkGreen } from "./Container";

export default function Home(props) {
  return (
    <BackGroundImg>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 30 }}>Let's start with</Text>
        <Text style={{ color: "white", fontSize: 40 }}>Our new APP</Text>
        <Button
          bgColor={darkGreen}
          textColor={"white"}
          btnlabel={"Login"}
          press={() => {
            props.navigation.navigate("Login");
          }}
        />
        <Button
          bgColor={"white"}
          textColor={darkGreen}
          btnlabel={"Sign Up"}
          press={() => {
            props.navigation.navigate("Signup");
          }}
        />
      </View>
    </BackGroundImg>
  );
}

const styles = StyleSheet.create({});
