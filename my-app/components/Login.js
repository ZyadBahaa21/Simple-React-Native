import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackGroundImg from "./backGroundImg";
import { darkGreen } from "./Container";
import Input from "./Input";
import Button from "./Button";
import Signup from "./Signup";

export default function Login(props) {
  return (
    <BackGroundImg>
      <Text
        style={{
          color: "white",
          fontSize: 45,
          fontWeight: "bold",
          marginVertical: 20,
          marginLeft: 140,
        }}
      >
        Login
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
          <Text
            style={{
              fontSize: 30,
              color: darkGreen,
              fontWeight: "bold",
              marginTop: 100,
              marginRight: 80,
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "gray",
              fontWeight: "bold",
              marginRight: 80,
              marginVertical: 10,
            }}
          >
            Login In your Account
          </Text>
          <Input placeholder="Email / Username" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry={true} />
          <View style={{ alignItems: "flex-end", width: "75%" }}>
            <Text
              style={{
                color: darkGreen,
                fontSize: 16,
                fontWeight: "bold",
                marginRight: 100,
              }}
            >
              Forget Password?
            </Text>
          </View>
          <View style={{ marginRight: 100, marginTop: 200 }}>
            <Button
              bgColor={darkGreen}
              textColor={"white"}
              btnlabel={"Login"}
              press={() => alert("Logged in")}
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
              Don't have an account ?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 70,
                  fontSize: 14,
                  fontWeight: "bold",
                  color: darkGreen,
                }}
                onPress={() => props.navigation.navigate("Signup")}
              >
                {" "}
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BackGroundImg>
  );
}
