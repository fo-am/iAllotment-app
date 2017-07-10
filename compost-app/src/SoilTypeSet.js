import React, { Component } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import resolveAssetSource from "resolveAssetSource";
import { Actions } from "react-native-router-flux";
import styles from "../Styles";
export default class SoilTypeSet extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <View>
        <Text style={styles.normal}>Your allotment soil is: Sand</Text>
        <Button
          color="rgb(224, 190, 54)"
          title="Done"
          onPress={() =>
            Actions.main({ soilType: this.props.soilType, type: "reset" })}
        />
        <Button
          color="rgb(224, 190, 54)"
          title="Start again"
          onPress={this.props.restartPage}
        />
      </View>
    );
  }
}
