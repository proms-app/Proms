// @flow
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useMyStore } from "../../../modules/me/me.hooks";

type PropsType = {
  navigation: NavigationType;
};

export const Home = (props: PropsType) => {
  const { logout } = useMyStore();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Li 213</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("auth");
          logout();
        }}
      >
        <Text style={{ fontWeight: "bold", color: "green", fontSize: 18 }}>
          Se déconnecter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
