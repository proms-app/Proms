import React from "react";
import { Icon } from "../../components/Icon";

export const ReturnButton = props => (
  <Icon.Button
    name="leftcircleo"
    color="white"
    onPress={props.navigation.goBack()}
  >
    Retour
  </Icon.Button>
);
