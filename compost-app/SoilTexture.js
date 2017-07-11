import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Button from "apsl-react-native-button";
import { Font, AppLoading, WebBrowser } from "expo";
import { Actions } from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";
import ImageScale from "./ImageScale";
import SoilTypeSet from "./src/SoilTypeSet";

export default class SoilTexture extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "ball" };
  }
  render() {
    return (
      <ScrollView style={styles.background}>
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
          {renderif(this.state.page === "ball")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("./assets/images/ball.png")}
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
          {renderif(this.state.page === "sand")(
            <SoilTypeSet
              soilType="Sand"
              restartPage={() => this.setState({ page: "ball" })}
            />
          )}
          {renderif(this.state.page === "withGreatCare")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("./assets/images/flat.png")}
                  text="Does the soil form a coherent ball?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ page: "coherent" })}
              >
                Flattens coherently
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ page: "break" })}
              >
                Breaks up
              </Button>
            </View>
          )}
          {renderif(this.state.page === "easily")(
            <SoilTypeSet
              soilType="Sand"
              restartPage={() => this.setState({ page: "ball" })}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}
