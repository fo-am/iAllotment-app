import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";
import Button from "apsl-react-native-button";
import {Actions} from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";
import ImageScale from "./ImageScale";
import SoilTypeSet from "../src/SoilTypeSet";

export default class SoilTexture extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "ball"};
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
          {renderif(this.state.page === "ball")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/ball.png")}
                  text="Does the soil form a coherent ball?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "easily"})}
              >
                Easily
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "withGreatCare"})}
              >
                With great care
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "sand"})}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.page === "sand")(
            <SoilTypeSet
              soilType="Sand"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "withGreatCare")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/flat.png")}
                  text="Does the soil form a coherent ball?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "easily"})}
              >
                Flattens coherently
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "break"})}
              >
                Breaks up
              </Button>
            </View>
          )}
          {renderif(this.state.page === "break")(
            <SoilTypeSet
              soilType="Sandy Loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "easily")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/cylinder.png")}
                  text="On slight further moistening, can the ball be rolled into a cylinder 5mm thick?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "bend"})}
              >
                Yes
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "loamySand"})}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.page === "loamySand")(
            <SoilTypeSet
              soilType="Loamy Sand"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "bend")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/horseshoe.png")}
                  text="Can the cylinder be bent into a horseshoe without cracking?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "ring"})}
              >
                Yes
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "feelWet"})}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.page === "feelWet")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/smoothOrRough.png")}
                  text="On remodelling with further moisture, what is the general feel of the soil?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "smooth"})}
              >
                Smooth and pasty
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "rough"})}
              >
                Rough and abrasive
              </Button>
            </View>
          )}
          {renderif(this.state.page === "smooth")(
            <SoilTypeSet
              soilType="Silty Loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "rough")(
            <SoilTypeSet
              soilType="Sandy Silty Loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "ring")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/ring.png")}
                  text="Can a ring be formed by joining the two ends of the cylinder, without it cracking?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "polish"})}
              >
                Yes
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "remodel"})}
              >
                No
              </Button>
            </View>
          )}
          {renderif(this.state.page === "remodel")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/feel.png")}
                  text="On remodelling with further water, what is the general feel of the soil?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "gritty"})}
              >
                Very Gritty
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "moderateRough"})}
              >
                Moderately rough
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "doughy"})}
              >
                Doughy
              </Button>
            </View>
          )}
          {renderif(this.state.page === "gritty")(
            <SoilTypeSet
              soilType="Sandy clay loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "moderateRough")(
            <SoilTypeSet
              soilType="Clay loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "doughy")(
            <SoilTypeSet
              soilType="Silty clay loam"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "polish")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/polish.png")}
                  text="On remodelling without further wetting, can the surface be polished with the thumb?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "highPolish"})}
              >
                Yes, a high polish with few noticable particles
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "gittyPolish"})}
              >
                yes, but gritty particles really noticable
              </Button>
            </View>
          )}
          {renderif(this.state.page === "gittyPolish")(
            <SoilTypeSet
              soilType="Sandy clay"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "highPolish")(
            <View>
              <View style={{alignItems: "center"}}>
                <ImageScale
                  image={require("../assets/images/sticky.png")}
                  text="On wetting thoroughly, how strongly does the soil stick your fingers together?"
                  textStyle={styles.normal}
                />
              </View>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "strongly"})}
              >
                Yes, a high polish with few noticable particles
              </Button>
              <Button
                style={{backgroundColor: "rgb(224, 190, 54)"}}
                onPress={() => this.setState({page: "moderatley"})}
              >
                yes, but gritty particles really noticable
              </Button>
            </View>
          )}
          {renderif(this.state.page === "strongly")(
            <SoilTypeSet
              soilType="Clay"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
          {renderif(this.state.page === "moderatley")(
            <SoilTypeSet
              soilType="Silty clay"
              restartPage={() => this.setState({page: "ball"})}
            />
          )}
        </View>
        <View style={{paddingBottom: 50}} />
      </ScrollView>
    );
  }
}
