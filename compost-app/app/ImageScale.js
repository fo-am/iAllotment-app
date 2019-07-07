import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, Image, View } from "react-native";
import resolveAssetSource from "resolveAssetSource";

export default class ImageScale extends React.Component {
  constructor(props) {
    super(props);

    let source = resolveAssetSource(this.props.image);
    ratio = source.height / source.width;

    this.state = { ratio: ratio };
  }

  render() {
    return (
      <View
        style={{ alignSelf: "stretch" }}
        onLayout={event => this._measureView(event)}
      >
        <Text style={this.props.textStyle}>{this.props.text}</Text>
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 1
          }}
          source={this.props.image}
        />
      </View>
    );
  }
  _measureView(event) {
    this.setState({
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").width
    });
  }
}
