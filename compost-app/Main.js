import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Dimensions
} from "react-native";
import resolveAssetSource from "resolveAssetSource";
import {Actions} from "react-native-router-flux";

export default class Main extends Component {
  measureView(event) {
    this.setState({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.width
    });
  }
  componentWillMount() {
    let source = resolveAssetSource(require("./assets/images/map.png"));
    this.setState({ratio: source.height / source.width});
  }
  render() {
    return (
      <ScrollView
        style={styles.background}
        onLayout={event => this.measureView(event)}
      >
        <Text style={styles.header}>
          Becky's allotment
        </Text>

        <Image
          style={{
            width: this.state.width,
            height: this.state.height * this.state.ratio
          }}
          resizeMode="contain"
          source={require("./assets/images/map.png")}
        />

        <Text>
          {" "}
          Here is some exciting content about mud.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "stretch"
  },
  header: {
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 30
  },
  background: {
    paddingTop: 40,
    backgroundColor: "rgb(243, 247, 235)"
  }
});
