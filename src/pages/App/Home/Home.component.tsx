// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type PropsType = {
  user: UserType | {};
  loading: boolean;
  hasError: boolean;
  navigation: NavigationType;
};

export default class Home extends Component<PropsType> {
  render() {
    const { hasError, loading } = this.props;

    if (loading) return <Text>Loading...</Text>;
    // if (hasError) return <Text>Error in fetching data</Text>;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Li 213</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('auth');
          }}
        >
          <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 18 }}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
