// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type PropsType = {
  navigation: NavigationType;
};

export default class Profile extends Component<PropsType> {
  render() {
    return (
    <View style = {styles.mainContainer}>
      <View style = {styles.headContainer}>
           <Text style = {styles.headTitle}>NOM Prénom</Text>
      </View>
      <View style = {styles.profileContainer}>
           <Text style = {styles.profileTitle}>Bucque</Text>
           <Text style = {styles.profileText}>Abc</Text>
           <Text style = {styles.profileTitle}>Num's</Text>
           <Text style = {styles.profileText}>000</Text>
           <Text style = {styles.profileTitle}>Adresse</Text>
           <Text style = {styles.profileText}>Tabagn's de Birse</Text>
           <Text style = {styles.profileTitle}>N° de téléphone</Text>
           <Text style = {styles.profileText}>0600000000</Text>
      </View>
      <View style={styles.logoutContainer}>
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('auth')}}
          style={styles.logoutButton}>
          <Text style={{fontWeight:'bold', color:'white', fontSize: 18}}>Se déconnecter</Text>
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
    marginHorizontal: 10
  },
  profileContainer: {
    flex: 4,
    marginVertical: 15,
    marginHorizontal: 10,
    justifyContent: 'space-around'
  },
  profileTitle: {
    fontSize: 20,
    color: '#D1E3DE'
  },
  profileText: {
    fontSize: 25
  },
  logoutContainer:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  logoutButton:{
    width: 200,
    height: 70,
    backgroundColor: '#89E894',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
