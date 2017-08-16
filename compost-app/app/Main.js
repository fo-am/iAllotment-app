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

export default class Main extends Component {
  render() {
    this.props.soilType
      ? (this.state = { soilType: this.props.soilType })
      : (this.state = { soilType: "Find soil texture" });
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>Becky's allotment</Text>
        <ImageScale image={require("../assets/images/map.png")} />
        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.normal}>Soil Texture</Text>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
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
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.main}
                isDisabled={true}
              >
                <Text style={styles.normal}>Metric</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.normal}>Rainfall</Text>

              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={Actions.main}
                isDisabled={true}
              >
                <Text style={styles.normal}>Low</Text>
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Button
            style={{ backgroundColor: "rgb(224, 190, 54)" }}
            onPress={Actions.compostLab}
          >
            <Text style={styles.normal}>Go to my compost lab</Text>
          </Button>
        </View>
        <View>
          <Text style={styles.normal}>
            Recommended crops for your soil type
          </Text>
        </View>
        <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
          <Text style={styles.normal}>
            Roots - carrots, parsnips, beetroot, fennel, celery, parsley.
          </Text>
          <Text style={styles.normal}>
            Alliums - garlic, onion, leeks, shallots, chives.
          </Text>
        </View>
        <View>
          <Image
            style={{ left: "20%" }}
            source={require("../assets/images/speech.png")}
          />
        </View>
        <View>
          <RobinAnimation />
        </View>
        <View>
          <Text style={styles.normal}>Things to do</Text>
        </View>
        <View style={{ backgroundColor: "rgb(176, 209, 193)" }}>
          <Text style={styles.normal}>
            Plant garlic bulbs now for harvesting in summer.
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
      </ScrollView>
    );
  }
}
