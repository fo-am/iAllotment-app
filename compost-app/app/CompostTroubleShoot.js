import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Button from "apsl-react-native-button";
import { Actions } from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";
import ImageScale from "./ImageScale";
import CompostProblem from "../src/CompostProblem";

export default class CompostTroubleShoot extends Component {
  constructor(props) {
    super(props);
    this.state = { compostLabPage: "wetSlimy" };
  }
  render() {
    return (
      <ScrollView style={styles.backgroundWithNav}>
        <Text style={styles.header}>Compost troubleshooting</Text>
        <Text style={styles.normal}>
          Follow this guide to identify composting problems and solutions
        </Text>
        <View
          style={{
            borderTopColor: "black",
            borderTopWidth: StyleSheet.hairlineWidth,
            backgroundColor: "rgb(176, 209, 193)"
          }}
        >
          {renderif(this.state.compostLabPage === "wetSlimy")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_1.png")}
                  text="Is your compost wet, slimy or strong smelling?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "tooMuchWater" })}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "withGreatCare" })}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.compostLabPage === "tooMuchWater")(
            <CompostProblem
              Problem="There is probably too much water and too little air."
              Solution="(I) Add more brown materials - scrunched paper, card (particularly egg boxes and toilet rolls), or chopped woody material. (II) Cover to keep the compost more dry."
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
        </View>
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    );
  }
}
