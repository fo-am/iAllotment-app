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

var styles = require("./Styles.js");

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
        <View>
          <View style={styles.row}>
            <View>
              <Text>Soil Texture</Text>
              <Button
                onPress={Actions.soilTexture}
                title="Find soil texture"
                color="rgb(224, 190, 54)"
              />
            </View>
            <View>
              <Text>Soil pH</Text>
              <Button
                onPress={Actions.main}
                title="Slightly acid"
                color="rgb(224, 190, 54)"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text>Choose Units</Text>
              <Button
                onPress={Actions.main}
                title="Metric"
                color="rgb(224, 190, 54)"
              />
            </View>
            <View>
              <Text>Rainfall</Text>
              <Button
                onPress={Actions.main}
                title="Low"
                color="rgb(224, 190, 54)"
              />
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
