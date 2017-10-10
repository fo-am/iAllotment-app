import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Button from "apsl-react-native-button";
import resolveAssetSource from "resolveAssetSource";
import { Actions } from "react-native-router-flux";
import styles from "../app/Styles";

export default class CompostProblem extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
          <Text style={styles.header}>
            {this.props.Problem}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20
          }}
        >
          <Text style={styles.normal}>Suggested solution</Text>
        </View>
        <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
          <Text style={styles.header}>
            {this.props.Solution}
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "rgb(224, 190, 54)",
            marginTop: 20
          }}
          onPress={() => Actions.compostLab({ type: "replace" })}
        >
          Done
        </Button>
        <Button
          style={{ backgroundColor: "rgb(224, 190, 54)" }}
          onPress={this.props.restartPage}
        >
          Start again
        </Button>
      </View>
    );
  }
}
