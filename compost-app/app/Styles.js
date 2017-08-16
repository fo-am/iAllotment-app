var React = require("react-native");

import {StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontFamily: "ArimaMadurai-Regular",
    fontSize: 30
  },
  normal: {
    textAlign: "center",
    fontFamily: "ArimaMadurai-Regular",
    fontSize: 20
  },
  fakeLink: {
    textDecorationLine: "underline",
    color: "rgb(0, 170, 0)",
    textAlign: "center",
    fontFamily: "ArimaMadurai-Regular",
    fontSize: 20
  },
  background: {
    backgroundColor: "rgb(243, 247, 235)"
  },
  backgroundWithNav: {
    backgroundColor: "rgb(243, 247, 235)",
    paddingTop: Platform.OS === "ios" ? 64 : 54
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
  },
  button: {
    backgroundColor: "rgb(224, 190, 54)"
  }
});

export default styles;