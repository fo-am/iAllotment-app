var React = require("react-native");

import { StyleSheet, Platform } from "react-native";

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
  normalButton: {
    textAlign: "center",
    fontFamily: "ArimaMadurai-Regular",
    fontSize: 20,
    paddingLeft: "1%",
    paddingRight: "1%"
  }, 
  fakeLink: {
    textDecorationLine: "underline",
    color: "rgb(0, 170, 0)",
    textAlign: "center",
    fontFamily: "ArimaMadurai-Regular",
    fontSize: 20
  },
  background: {
    backgroundColor: "rgb(243, 247, 235)",
    padding: 20
  },
  backgroundWithNav: {
    backgroundColor: "rgb(243, 247, 235)",
    marginTop: Platform.OS === "ios" ? 64 : 54,
    padding: 20
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
