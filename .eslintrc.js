module.exports = {
  root: true,
  extends: ["bambi", "@react-native-community"],
  rules: {
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-undef": "off",
    "promise/avoid-new": "off"
  }
};
module.exports = {};
