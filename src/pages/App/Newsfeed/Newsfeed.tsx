// @flow
import React from "react";
import { ScrollView } from "react-native";
import EventCard from "../../../components/EventCard";
import NewsfeedSubHeader from "./components/NewsfeedSubHeader";
import { getEvents, getUser } from "../../../modules/api";

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

export const Newsfeed = (props: PropsType) => {
  const events = getEvents();
  const text = getUser();
  console.log(text);
  return (
    <ScrollView>
      <NewsfeedSubHeader />

      {events.map(elem => (
        <EventCard key={`${elem.id}`} event={elem} />
      ))}
    </ScrollView>
  );
};
