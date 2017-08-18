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

export default class CompostLab extends Component {
  render() {
    return (
      <ScrollView style={styles.backgroundWithNav}>
        <Text style={styles.header}>Compost Lab</Text>
        <Text style={styles.normal}>Your compost bins</Text>
        <View style={{ marginBottom: "3%" }}>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Add new bin</Text>
          </Button>
        </View>
        <View style={{ marginBottom: 100 }}>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.leftBin}
          >
            <Text style={styles.normal}>Left bin</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Middle bin</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Right bin</Text>
          </Button>
          <View
            style={{
              position: "absolute",
              top: 130
            }}
          >
            <FrogAnimation />
          </View>
        </View>
        <Text style={styles.normal}>Composting tips</Text>
        <View>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={this.clickCompost}
          >
            <Text style={styles.normal}>Compost troubleshooting</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Types of compost bin</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>What can be composted</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Compost maintenance</Text>
          </Button>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.main}
            isDisabled={true}
          >
            <Text style={styles.normal}>Using compost</Text>
          </Button>
        </View>
        <RobinAnimation />
        <Button
          style={{ backgroundColor: "rgb(224, 190, 54)" }}
          onPress={Actions.main}
        >
          <Text style={styles.normal}>Back</Text>
        </Button>
      </ScrollView>
    );
  }
  clickCompost() {
    Actions.compostTroubleShoot({ compostLabPage: "dry" });
  }
}
