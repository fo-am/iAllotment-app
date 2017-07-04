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
import styles from "./Styles";
import ImageScale from "./ImageScale";

export default class Main extends Component {
  constructor(props) {
    super(props);
    props.soilType
      ? (this.state = {soilType: props.soilType})
      : (this.state = {soilType: "lol type"});
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>
          Becky's allotment
        </Text>

        <ImageScale image={require("./assets/images/map.png")} />
        <View>
          <View style={styles.row}>
            <View>
              <Text>Soil Texture</Text>
              <Button
                onPress={Actions.soilTexture}
                title={this.state.soilType}
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
