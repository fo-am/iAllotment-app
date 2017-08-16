import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import resolveAssetSource from "resolveAssetSource";

export default class FrogAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.imagesNormal = [
      require("../assets/images/forg_0.png"),
      require("../assets/images/forg_1.png")
    ];
    this.imagesSpice = [
      require("../assets/images/forg_t0.png"),
      require("../assets/images/forg_t1.png"),
      require("../assets/images/forg_t2.png")
    ];
    this.images = [];

    this.state = { index: 0 };
  }

  componentDidMount() {
    this.images = this.imagesNormal;
    setTimeout(() => this.changeToSpice(), 2000);
    this.next();
  }
  changeToSpice() {
    this.images = this.imagesSpice;
    setTimeout(() => this.changeToSpice(), this.randomIntBetween(4000, 10000));
  }
  next() {
    setTimeout(() => {
      this.setState({ index: (this.state.index + 1) % this.images.length });
      if (this.state.index + 1 === this.images.length) {
        this.images = this.imagesNormal;
      }
      this.next();
    }, this.getTimeout());
  }

  getTimeout() {
    if (this.state.index === 0) {
      return this.randomIntBetween(2000, 4000);
    } else return this.randomIntBetween(100, 150);
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
            height: 120,
            width: 200
          }}
          source={this.images[this.state.index]}
        />
      </View>
    );
  }
}