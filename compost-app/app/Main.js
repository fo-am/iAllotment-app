import React, {Component} from "react";
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
import {Actions} from "react-native-router-flux";
import styles from "./Styles";
import ImageScale from "./ImageScale";

export default class Main extends Component {
  render() {
    this.props.soilType
      ? (this.state = {soilType: this.props.soilType})
      : (this.state = {soilType: "Find soil texture"});
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>Becky's allotment</Text>
        <ImageScale image={require("../assets/images/map.png")} />
        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.normal}>Soil Texture</Text>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={Actions.soilTexture}
              >
                <Text style={styles.normal}>
                  {this.state.soilType}
                </Text>
              </Button>
            </View>
            <View>
              <Text style={styles.normal}>Soil pH</Text>
              <Button
                style={styles.button}
                onPress={Actions.main}
                isDisabled={true}
              >
                <Text style={styles.normal}>Slightly acid</Text>
              </Button>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.normal}>Choose Units</Text>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={Actions.main}
                isDisabled={true}
              >
                <Text style={styles.normal}>Metric</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.normal}>Rainfall</Text>

              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={Actions.main}
                isDisabled={true}
              >
                <Text style={styles.normal}>Low</Text>
              </Button>
            </View>
          </View>
        </View>
        <View><Text style={styles.normal}>1oh hai</Text></View>
        <View><Text style={styles.normal}>2oh hai</Text></View>
        <View><Text style={styles.normal}>3oh hai</Text></View>
        <View><Text style={styles.normal}>4oh hai</Text></View>
        <View><Text style={styles.normal}>5oh hai</Text></View>
        <View><Text style={styles.normal}>6oh hai</Text></View>
      </ScrollView>
    );
  }
}
