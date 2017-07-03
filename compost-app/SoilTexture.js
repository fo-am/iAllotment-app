import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button} from "react-native";
import {Font, AppLoading, WebBrowser} from "expo";
import {Actions} from "react-native-router-flux";

export default class SoilTexture extends Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>
          <Text>{"The Allotment Lab\nPrototype"}</Text>
        </Text>
        <Text style={styles.normal}>
          This is a prototype designed to
          demonstrate ideas for the Allotment Lab
        </Text>

      </ScrollView>
    );
  }
}

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
  }
});
