import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { UserFieldModif } from './components/userFieldModif/userFieldModif.component'

type PropsType = {
    navigation: NavigationType;
  };
  
  const ChampList = [
    { label: 'Bucque'},
    { label: 'Nums'},
    { label: 'Email'},
    { label: 'Adresse'}
  ];
  export default class ProfileModif extends Component<PropsType> {
    render() {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.headTitle}>NOM Prénom</Text>
          </View>
          <View style={styles.profileContainer}>
            <View style={styles.userContainer}>
              {ChampList.map(item => {
                return <UserFieldModif label={item.label} />;
              })}
            </View>
            <View style={styles.modifContainer}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('profile')}}>
                <Text style={styles.modifButtonText}>Valider</Text>
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
      flex:1
    },
    modifButtonText:{
      color: '#59FFAF'
    },
    logoutContainer: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    logoutButton: {
      width: 180,
      height: 60,
      backgroundColor: '#59FFAF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  });

