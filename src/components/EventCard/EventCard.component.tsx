// @flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyle from "../../style/appStyle";

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
    return <Text style={{ color: "white" }}> {number} pers</Text>;
  };
  render() {
    const { title, date, subscriptions, description } = this.props.event;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.subscriptionsWrapper}>
            {this.renderAvailablePeople(subscriptions)}
          </View>
        </View>
        <View style={styles.subWrapper}>
          <View style={styles.eventIconWrapper}>
            <View style={styles.fakeIcon} />
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          <View style={styles.dateWrapper}>
            <Text>{date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: appStyle.color.secondary,
    height: appStyle.height.cards,
    justifyContent: "center",
    borderRadius: appStyle.borderRadius.cards,
    borderWidth: appStyle.borderWidth.cards,
    borderColor: appStyle.color.border,
    marginTop: appStyle.margins.small
  },
  subWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  topWrapper: {
    flex: 1,
    backgroundColor: appStyle.color.lightPrimary,
    flexDirection: "row"
  },
  dateWrapper: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  eventIconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subscriptionsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appStyle.color.lightPrimary
  },
  fakeIcon: {
    backgroundColor: appStyle.color.primary,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  titleWrapper: {
    flex: 3,
    justifyContent: "center",
    marginLeft: appStyle.margins.tiny
  },
  titleText: {
    fontSize: appStyle.font.size.itemTitle,
    color: appStyle.color.primary
  },
  descriptionWrapper: {
    flex: 5,
    justifyContent: "center"
  },
  descriptionText: {
    fontSize: appStyle.font.size.description
  }
});

export default EventCard;
