import React, {Component} from "react";
import {StyleSheet, Text, Image, View} from "react-native";
import resolveAssetSource from "resolveAssetSource";

export default class ImageScale extends React.Component {
  componentWillMount() {
    let source = resolveAssetSource(this.props.image);
    this.setState({ratio: source.height / source.width});
  }
  render() {
    return (
      <View onLayout={event => this._measureView(event)}>
        <Image
          style={{
            width: this.state.width,
            height: this.state.height * this.state.ratio
          }}
          source={this.props.image}
        >
          <Text style={this.props.textStyle}>{this.props.text}</Text>
        </Image>
      </View>
    );
  }
  _measureView(event) {
    this.setState({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.width
    });
  }
}
