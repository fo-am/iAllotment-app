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
                onPress={() => this.setState({ compostLabPage: "dry" })}
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
          {renderif(this.state.compostLabPage === "dry")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_2.png")}
                  text="Is your compost dry or fibrous with little rotting?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "dryAllThrough" })}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "ratsOrFlys" })}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.compostLabPage === "ratsOrFlys")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_6.png")}
                  text="Do you have a problem with flies or rats?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "flies" })}
              >
                Flies
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "rats" })}
              >
                Rats
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "unknown" })}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.compostLabPage === "flies")(
            <CompostProblem
              Problem="Too many flies"
              Solution="Flies are a normal part of composting. If the numbers are troublesome, make sure the compost bin is not completely sealed, so they can escape."
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
          {renderif(this.state.compostLabPage === "rats")(
            <CompostProblem
              Problem="Rats"
              Solution="Avoid putting cooked food, fish or meat on your compost."
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
          {renderif(this.state.compostLabPage === "unknown")(
            <CompostProblem
              Problem="Unknown problem"
              Solution="We do not have your problem on our list yet, sorry!"
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
          {renderif(this.state.compostLabPage === "dryAllThrough")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_3.png")}
                  text="Is your compost dry or fibrous with little rotting all the way through?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "tooLittleMoisture" })}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "dryEdges" })}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.compostLabPage === "tooLittleMoisture")(
            <CompostProblem
              Problem="There is probably too little moisture or too much brown material."
              Solution="(I) If it is winter, wait until summer and see if the problem resolves. (II) Add more green materials, kitchen waste, grass clippings or leafy plant matter. (III) Add an activator- comfrey leaves/liquid, dried blood, lime (ground limestone), nettle leaves, poultry manure or urine."
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
          {renderif(this.state.compostLabPage === "dryEdges")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_4.png")}
                  text="Is your compost dry around the edges but ok otherwise?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "tooMuchVentilation" })}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "dryTop" })}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.compostLabPage === "tooMuchVentilation")(
            <CompostProblem
              Problem="There may be too much ventilation."
              Solution="If possible, try to make the sides of the compost bin solid."
              restartPage={() => this.setState({ compostLabPage: "wetSlimy" })}
            />
          )}
          {renderif(this.state.compostLabPage === "dryTop")(
            <View>
              <View style={{ alignItems: "center" }}>
                <ImageScale
                  image={require("../assets/images/compost_5.png")}
                  text="Is your compost dry or fibrous with little rotting on the top, but otherwise ok?"
                  textStyle={styles.header}
                />
              </View>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() =>
                  this.setState({ compostLabPage: "tooMuchVentilation" })}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: "rgb(224, 190, 54)" }}
                onPress={() => this.setState({ compostLabPage: "ratsOrFlys" })}
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
