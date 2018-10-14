// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EventCard from '../../../components/EventCard';
import { getEvents } from '../../../modules/api';

const SUB_HEADER_HEIGHT = 140;

type EventType = {
  id: string;
  title: string;
  date: string;
  location: string;
  subscriptions: number;
  description: string;
};

type PropsType = {
  // events: Array<EventType>;
};

export default class Newsfeed extends Component<PropsType> {
  render() {
    const events = getEvents();
    return (
      <ScrollView>
        <View style={styles.subHeader} />

        {events.map(elem => (
          <EventCard event={elem} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subHeader: {
    height: SUB_HEADER_HEIGHT,
  },
});
