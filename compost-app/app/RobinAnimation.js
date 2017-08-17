import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import resolveAssetSource from "resolveAssetSource";

var timer1;

export default class RobinAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      require("../assets/images/robin_0.png"),
      require("../assets/images/robin_1.png"),
      require("../assets/images/robin_2.png")
    ];

    this.state = { index: 0 };
  }

  componentDidMount() {
    this.next();
  }

  next() {
    this.timer1 = setTimeout(() => {
      this.setState({ index: (this.state.index + 1) % 3 });
      this.next();
    }, this.getTimeout());
  }

  getTimeout() {
    if (this.state.index === 0) {
      return this.randomIntBetween(1000, 10000);
    } else return this.randomIntBetween(200, 300);
  }

  randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    return (
      <View>
        <Image
          style={{
            alignSelf: "center",
            height: 200,
            width: 200
          }}
          source={this.images[this.state.index]}
        />
      </View>
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer1);
  }
}
