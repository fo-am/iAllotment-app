import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import Button from "apsl-react-native-button";
import resolveAssetSource from "resolveAssetSource";
import { Actions } from "react-native-router-flux";
import styles from "./Styles";
import ImageScale from "./ImageScale";

export default class Main extends Component {
  constructor(props) {
    super(props);
    props.soilType
      ? (this.state = { soilType: props.soilType })
      : (this.state = { soilType: "Find soil texture" });
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>Becky's allotment</Text>

        <ImageScale image={require("./assets/images/map.png")} />
        <View>
          <View style={styles.row}>
            <View>
              <Text>Soil Texture</Text>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.soilTexture}
              >
                {this.state.soilType}
              </Button>
            </View>
            <View>
              <Text>Soil pH</Text>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.main}
              >
                Slightly acid
              </Button>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text>Choose Units</Text>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.main}
              >
                Metric
              </Button>
            </View>
            <View>
              <Text>Rainfall</Text>

              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.main}
              >
                Low
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
