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
import RobinAnimation from "./RobinAnimation";
import FrogAnimation from "./FrogAnimation";

export default class LeftBin extends Component {
  render() {
    return (
      <ScrollView style={styles.backgroundWithNav}>
        <Text style={styles.header}>Left bin</Text>
        <View>
          <View>
            <Button style={{ backgroundColor: "rgb(224, 190, 54)" }}>
              <Text style={styles.normal}>Add to compost</Text>
            </Button>
          </View>
          <View>
            <Text style={styles.normal}>
              The ideal Carbon:Nitrogen ratio of compost is 30. About two thirds
              of Carbon is lost as Carbon Dioxide through the composting
              process.
            </Text>
          </View>
          <View>
            <Text style={styles.normal}>
              Current approximate Carbon:Nitrogen ratio of your compost
            </Text>
          </View>
          <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
            <Text style={styles.header}>300</Text>
          </View>
          <View>
            <Text style={styles.normal}>
              Approximate Carbon:Nitrogen ratio of your compost once it has
              fully composted
            </Text>
          </View>
          <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
            <Text style={styles.header}>100</Text>
          </View>
          <View>
            <Text style={styles.normal}>To improve your compost</Text>
          </View>
          <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
            <Text style={styles.header}>
              Add more green material like kitchen waste, leafy plant matter of
              grass clippings.
            </Text>
          </View>
          <View>
            <Image
              style={{ left: "70%" }}
              source={require("../assets/images/speech2.png")}
            />
          </View>
          <View>
            <FrogAnimation />
          </View>
        </View>
      </ScrollView>
    );
  }
}
