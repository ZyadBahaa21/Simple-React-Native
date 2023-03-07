import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackGroundImg from "./backGroundImg";
import { darkGreen } from "./Container";
import Input from "./Input";
import Button from "./Button";
import Login from "./Login";

export default function Signup(props) {
  return (
    <BackGroundImg>
      <Text
        style={{
          color: "white",
          fontSize: 45,
          fontWeight: "bold",
          marginVertical: 10,
          marginLeft: 110,
        }}
      >
        Register
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          marginLeft: 90,
          marginBottom: 10,
        }}
      >
        Create a New Account
      </Text>
      <View style={{ alignItems: "center", width: 500 }}>
        <View
          style={{
            backgroundColor: "white",
            height: 780,
            width: 500,
            borderRadius: 130,
            alignItems: "center",
            // paddingTop: 100,
          }}
        >
          <View style={{ marginTop: 70, width: "100%", marginLeft: 100 }}>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input
              placeholder="Email / Username"
              keyboardType="email-address"
            />
            <Input placeholder="Contact Number" keyboardType={"numeric"} />
            <Input placeholder="Password" secureTextEntry={true} />
            <Input placeholder="Confirm Password" secureTextEntry={true} />
          </View>

          <View style={{ marginRight: 100, marginTop: 60 }}>
            <Button
              bgColor={darkGreen}
              textColor={"white"}
              btnlabel={"Signup"}
              press={() => {
                alert("Your Account Created Succssefully");
                props.navigation.navigate("Login");
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "bold" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 70,
                  fontSize: 14,
                  fontWeight: "bold",
                  color: darkGreen,
                }}
                onPress={() => props.navigation.navigate("Login")}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BackGroundImg>
  );
}
