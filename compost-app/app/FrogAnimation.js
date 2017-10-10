import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import resolveAssetSource from "resolveAssetSource";
var timer1;
var timer2;
var timer3;
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
    this.images = [require("../assets/images/forg_0.png")];
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.images = this.imagesNormal;
    this.timer3 = setTimeout(
      () => this.changeToSpice(),
      this.randomIntBetween(9000, 15000)
    );
    this.next();
  }
  changeToSpice() {
    this.images = this.imagesSpice;
    this.timer2 = setTimeout(
      () => this.changeToSpice(),
      this.randomIntBetween(9000, 15000)
    );
  }
  next() {
    this.timer1 = setTimeout(() => {
      this.setState({ index: (this.state.index + 1) % this.images.length });
      if (this.state.index + 1 === this.images.length) {
        this.images = this.imagesNormal;
      }
      this.next();
    }, this.getTimeout());
  }

  getTimeout() {
    if (this.state.index === 0) {
      return this.randomIntBetween(1000, 4000);
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
            height: 100,
            width: 166.66
          }}
          source={this.images[this.state.index]}
        />
      </View>
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    clearTimeout(this.timer3);
  }
}
