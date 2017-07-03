import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button} from "react-native";
import {Font, AppLoading, WebBrowser} from "expo";
import {Actions} from "react-native-router-flux";
import styles from "./Styles";

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
