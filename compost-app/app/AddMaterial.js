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

export default class AddMaterial extends Component {
  render() {
    return (
      <ScrollView style={styles.backgroundWithNav}>
        <Text style={styles.header}>Add material</Text>
        <Text style={styles.normal}>
          Use a jam jar or bucket to measure the amount of material added. The
          size doesn't matter as long as the amount is reasonably consistent.
        </Text>
        <Text style={styles.normal}>Material added</Text>

        <Button
          style={{ backgroundColor: "rgb(224, 190, 54)" }}
          onPress={Actions.main}
          isDisabled={true}
        >
          <Text style={styles.normal}>Paper</Text>
        </Button>
        <Text style={styles.normal}>Number of container full</Text>
        <Button
          style={{ backgroundColor: "rgb(224, 190, 54)" }}
          onPress={Actions.main}
          isDisabled={true}
        >
          <Text style={styles.normal}>0.5</Text>
        </Button>
        <Text style={styles.normal}>
          Carbon:Nitrogen ratio of this material
        </Text>
        <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
          <Text style={styles.header}>300</Text>
        </View>
        <View style={{ marginTop: "2%" }}>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.leftBin}
          >
            <Text style={styles.header}>Save</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}
