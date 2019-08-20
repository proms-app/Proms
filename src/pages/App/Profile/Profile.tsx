// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { UserField } from './components/userField';

type PropsType = {
  navigation: NavigationType;
};

const ChampList = [
  { title: 'Bucque', value: 'Abc' },
  { title: 'Nums', value: '000' },
  { title: 'Email', value: 'abc@xyz' },
  { title: 'Adresse', value: 'Tabagns' }
];
export default class Profile extends Component<PropsType> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.headTitle}>NOM Prénom</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.userContainer}>
            {ChampList.map(item => {
              return <UserField title={item.title} value={item.value} />;
            })}
          </View>
          <View style={styles.modifContainer}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('profilemodif')
            }}>
              <Text style={styles.modifButtonText}>Modifier</Text>
            </TouchableOpacity> 
            
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('auth');
            }}
            style={styles.logoutButton}
          >
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headContainer: {
    flex: 1,
    backgroundColor: '#EBEDF0',
    justifyContent: 'center',
  },
  headTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  profileContainer: {
    flex: 4,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  profileTitle: {
    fontSize: 20,
    color: '#D1E3DE',
  },
  profileText: {
    fontSize: 25,
  },
  userContainer: {
    flex: 3,
    justifyContent: 'space-around'
  },
  modifContainer: {
    marginVertical: 5,
    flex:1
  },
  modifButtonText:{
    color: '#59FFAF',
    fontSize: 15
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutButton: {
    width: 180,
    height: 60,
    backgroundColor: '#68E8B7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
