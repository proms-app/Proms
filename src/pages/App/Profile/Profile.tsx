// @flow
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { UserField } from "./components/userField";
import { useMyStore } from "../../../modules/me/me.hooks";

type PropsType = {
  navigation: NavigationType;
};

const ChampList = [
  { title: "Bucque", apiValue: "bucque" },
  { title: "Nums", apiValue: "nums" },
  { title: "Email", apiValue: "email" },
  { title: "Adresse", apiValue: "lieu" }
];

export const Profile = (props: PropsType) => {
  const { me, logout } = useMyStore();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headTitle}>
          {me.nom} {me.prenom}
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          {ChampList.map(item => {
            return <UserField title={item.title} value={me[item.apiValue]} />;
          })}
        </View>
        <View style={styles.modifContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("profilemodif");
            }}
          >
            <Text style={styles.modifButtonText}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("auth");
            logout();
          }}
          style={styles.logoutButton}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Se déconnecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  headContainer: {
    flex: 1,
    backgroundColor: "#EBEDF0",
    justifyContent: "center"
  },
  headTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  profileContainer: {
    flex: 4,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: "row"
  },
  profileTitle: {
    fontSize: 20,
    color: "#D1E3DE"
  },
  profileText: {
    fontSize: 25
  },
  userContainer: {
    flex: 3,
    justifyContent: "space-around"
  },
  modifContainer: {
    marginVertical: 5,
    flex: 1
  },
  modifButtonText: {
    color: "#59FFAF",
    fontSize: 15
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoutButton: {
    width: 180,
    height: 60,
    backgroundColor: "#68E8B7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});
