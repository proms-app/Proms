// @flow
import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SignUpForm } from "./SignUpForm";
import { SignUpFormType } from "./SignUp.type.ts";

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: "#68E8B7"
  },
  returnText: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "white"
  },
  card: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 50,
    backgroundColor: "white",
    opacity: 0.9,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 10
  }
});
export class SignUp extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate("auth");
  };

  onCreateAccountPress = (values: SignUpFormType) => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <TouchableOpacity onPress={this.goBack}>
          <Text style={styles.returnText}>Retour</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <SignUpForm onSubmit={this.onCreateAccountPress} />
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
