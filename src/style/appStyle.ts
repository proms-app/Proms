const color = {
  green: 'rgb(50,150,50)',
  lightGreen: 'rgba(50,200,150, 0.5)',
  white: 'rgb(255,255,255)',
};

const appStyle = {
  unit: 5,
  color: {
    primary: color.green,
    secondary: color.white,
    border: color.green,
    lightPrimary: color.lightGreen,
  },
  margins: {
    betweenCards: 10,
    standardTitle: 5,
    standardSubtitle: 15,
  },
  borderRadius: {
    cards: 4,
  },
  borderWidth: {
    cards: 1,
  },
  height: {
    cards: 80,
  },
  font: {
    size: {
      itemTitle: 16,
      description: 10,
    },
  },
};

export default appStyle;
