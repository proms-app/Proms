// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EventCard from '../../../components/EventCard';
import NewsfeedSubHeader from './components/NewsfeedSubHeader';
import { getEvents } from '../../../modules/api';

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
        <NewsfeedSubHeader />

        {events.map(elem => (
          <EventCard event={elem} />
        ))}
      </ScrollView>
    );
  }
}
