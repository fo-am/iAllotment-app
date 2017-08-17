import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Button from "apsl-react-native-button";
import { Actions } from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";
import ImageScale from "./ImageScale";
import SoilTypeSet from "../src/SoilTypeSet";

export default class CompostTroubleShoot extends Component {
  constructor(props) {
    super(props);
    this.state = { compostLabPage: "ball" };
  }
  render() {
    return (
      <ScrollView style={styles.backgroundWithNav}>
        <Text style={styles.header}>Soil texture lab</Text>
        <Text style={styles.normal}>
          Follow this guide to find out your soil texture. This will make it
          easier to choose suitable plants.
        </Text>
        <View
          style={{
            borderTopColor: "black",
            borderTopWidth: StyleSheet.hairlineWidth,
            backgroundColor: "rgb(176, 209, 193)"
          }}
        >
          {renderif(this.state.compostLabPage === "ball")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/ball.png")}
                  text="Does the soil form a coherent ball?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ page: "easily" })}
              >
                Easily
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ page: "withGreatCare" })}
              >
                With great care
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ page: "sand" })}
              >
                No
              </Button>
            </View>
          )}
        </View>
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    );
  }
}
