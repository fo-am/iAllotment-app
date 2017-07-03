var React = require("react-native");

import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 30
  },
  normal: {
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 20
  },
  fakeLink: {
    textDecorationLine: "underline",
    color: "rgb(0, 170, 0)",
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 20
  },
  background: {
    paddingTop: 40,
    backgroundColor: "rgb(243, 247, 235)"
  },
  image: {
    alignSelf: "stretch",
    alignItems: "flex-start"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start"
  }
});

module.exports = styles;
