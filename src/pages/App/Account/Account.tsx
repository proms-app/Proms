// @flow
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { useMyStore } from "../../../modules/me/me.hooks";
import Svg from "react-native-svg";
import * as shape from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";

type PropsType = {};

const { Path } = Svg;
const d3 = {
  shape
};

const { width } = Dimensions.get("window");
const height = 200;

const data = [
  { x: new Date(2019, 9, 1), y: 0 },
  { x: new Date(2019, 9, 16), y: 0 },
  { x: new Date(2019, 9, 17), y: 200 },
  { x: new Date(2019, 10, 1), y: 200 },
  { x: new Date(2019, 10, 2), y: 300 },
  { x: new Date(2019, 10, 4), y: 300 }
];

const scaleX = scaleTime()
  .domain([new Date(2019, 9, 1), new Date(2019, 10, 4)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height, 0]);
const line = d3.shape
  .line()
  .x(d => scaleX(d.x))
  .y(d => scaleY(d.y))
  .curve(d3.shape.curveBasis)(data);

export const Account = (props: PropsType) => {
  const { me } = useMyStore();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sal's {me.bucque}</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>{me.solde}</Text>
      </View>
      <View style={styles.chartContainer}>
        <Svg {...{ width, height }}>
          <Path d={line} />
        </Svg>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcomeText: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "600"
  },
  welcomeContainer: {
    marginTop: 10,
    flex: 1
  },
  balanceContainer: {
    flex: 1
  },
  balanceText: {
    fontSize: 80,
    textAlign: "center",
    fontWeight: "800"
  },
  chartContainer: {
    flex: 3,
    width
  }
});
