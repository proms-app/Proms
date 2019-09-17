// @flow
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMyStore } from "../../../modules/me/me.hooks";

type PropsType = {};

export const Account = (props: PropsType) => {
  const { me } = useMyStore();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sal's {me.bucque}</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}> {me.solde} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcomeText: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "600"
  },
  welcomeContainer: {
    marginTop: 80
  },
  balanceContainer: {
    flex: 5
  },
  balanceText: {
    fontSize: 80,
    textAlign: "center",
    fontWeight: "800"
  }
});
