// @flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyle from "../../style/appStyle";

const CARD_HEIGHT = 120;
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

export class EventCard extends React.Component<PropsType> {
  renderAvailablePeople = (number: number) => {
    return <Text style={{ color: "white" }}> {number} pers</Text>;
  };
  render() {
    const { date, description } = this.props.event;
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
    height: CARD_HEIGHT,
    justifyContent: "center",
    borderRadius: appStyle.borderRadius.large,
    borderWidth: 1,
    borderColor: appStyle.color.primary,
    marginTop: appStyle.margins.small,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    flex: 1
  },
  eventContainer: {
    flex: 3,
    flexDirection: "row"
  },
  dateContainer: {
    flex: 1,
    backgroundColor: appStyle.color.primary,
    flexDirection: "row",
    borderRadius: appStyle.borderRadius.large,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  dateText: {
    fontSize: appStyle.font.size.eventDate,
    fontWeight: "bold",
    color: "white"
  },
  descriptionText: {
    fontSize: appStyle.font.size.eventDescription,
    fontWeight: "bold"
  }
});
