// @flow
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import appStyle from '../../style/appStyle';

type PropsType = {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    subscriptions: number;
    description: string;
  };
};

class EventCard extends React.Component<PropsType> {
  renderAvailablePeople = (number: number) => {
    return <Text style={{ color: 'white' }}> {number} pers</Text>;
  };
  render() {
    const { title, date, location, subscriptions, description } = this.props.event;
    return (
      <View style={styles.wrapper}>
        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.eventContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: appStyle.color.secondary,
    height: appStyle.height.cards,
    justifyContent: 'center',
    borderRadius: appStyle.borderRadius.cards,
    borderWidth: appStyle.borderWidth.cards,
    borderColor: appStyle.color.border,
    marginTop: appStyle.margins.betweenCards,
    marginHorizontal: 10,
    flexDirection: 'row',
    flex: 1
  },
  eventContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  dateContainer: {
    flex: 1,
    backgroundColor: appStyle.color.lightPrimary,
    flexDirection: 'row',
    borderRadius: appStyle.borderRadius.cards,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    fontSize: appStyle.font.size.eventDate,
    fontWeight: 'bold',
    color: 'white'
  },
  descriptionText: {
    fontSize: appStyle.font.size.eventDescription,
    fontWeight: 'bold'
  }
});

export default EventCard;
