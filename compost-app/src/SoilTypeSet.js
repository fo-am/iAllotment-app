import React, {Component} from "react";
import {StyleSheet, Text, Image, View} from "react-native";
import Button from "apsl-react-native-button";
import resolveAssetSource from "resolveAssetSource";
import {Actions} from "react-native-router-flux";
import styles from "../Styles";
export default class SoilTypeSet extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.normal}>
          Your allotment soil is: {this.props.soilType}
        </Text>
        <Button
          style={{backgroundColor: "rgb(224, 190, 54)"}}
          onPress={() =>
            Actions.main({soilType: this.props.soilType, type: "reset"})}
        >
          Done
        </Button>
        <Button
          style={{backgroundColor: "rgb(224, 190, 54)"}}
          onPress={this.props.restartPage}
        >
          Start again
        </Button>
      </View>
    );
  }
}
