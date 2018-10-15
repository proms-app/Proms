// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
const SUB_HEADER_HEIGHT = 140;

type PropsType = {};

export default class NewsfeedSubHeader extends Component<PropsType> {
  render() {
    return <View style={styles.subHeader} />;
  }
}

const styles = StyleSheet.create({
  subHeader: {
    height: SUB_HEADER_HEIGHT,
  },
});
