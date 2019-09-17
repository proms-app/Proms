const color = {
  green: "#68E8B7",
  lightGreen: "#A3FFC8",
  white: "rgb(255,255,255)",
  red: "rgb(210,20,20)"
};

const appStyle = {
  unit: 5,
  color: {
    primary: color.green,
    secondary: color.white,
    border: color.green,
    lightPrimary: color.lightGreen,
    error: color.red
  },
  margins: {
    betweenCards: 10,
    standardTitle: 5,
    standardSubtitle: 15
  },
  borderRadius: {
    cards: 4
  },
  borderWidth: {
    cards: 1
  },
  height: {
    cards: 80
  },
  font: {
    size: {
      itemTitle: 16,
      description: 10
    }
  }
};

export default appStyle;
