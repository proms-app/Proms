// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SignUpForm } from "./SignUpForm";
import { SignUpFormType } from "./SignUp.type.ts";
import { ReturnButton } from "../../components/returnButton/ReturnButton";
import appStyle from "../../style/appStyle";

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: "#68E8B7"
  },
  card: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 120,
    backgroundColor: appStyle.color.secondary,
    opacity: 0.9,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 10
  }
});
export class SignUp extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate("signIn");
  };

  onCreateAccountPress = (values: SignUpFormType) => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <ReturnButton />
        <View style={styles.card}>
          <SignUpForm onSubmit={this.onCreateAccountPress} />
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
