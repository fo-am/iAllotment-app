import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button} from "react-native";
import {Font, AppLoading, WebBrowser} from "expo";
import {Actions} from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";
import ImageScale from "./ImageScale";

export default class SoilTexture extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "ball"};
  }
  render() {
    return (
      <View>
        <Text style={styles.header}>
          Soil texture lab
        </Text><Text style={styles.normal}>
          Follow this guide to find out your soil texture. This will make it easier to choose suitable plants.
        </Text>
        {renderif(this.state.page === "ball")(
          <ScrollView style={styles.background}>
            <View style={{alignItems: "center"}}>
              <ImageScale
                image={require("./assets/images/ball.png")}
                text="Does the soil form a coherent ball?"
              />
            </View>
            <Text style={styles.header}>
              <Text>{"Page one"}</Text>
            </Text>
            <Text style={styles.normal}>
              This is page one
            </Text>
            <Button
              title="This is a button to two"
              onPress={() => this.setState({page: "two"})}
            />
          </ScrollView>
        )}
        {renderif(this.state.page === "two")(
          <ScrollView style={styles.background}>
            <Text style={styles.header}>
              <Text>{"Page two"}</Text>
            </Text>
            <Text style={styles.normal}>
              This is page two
            </Text>
            <Button
              title="return to one"
              onPress={() => this.setState({page: "one"})}
            />
            <Button
              title="Your option is GOLD!"
              onPress={() => Actions.main({soilType: "Gold", type: "reset"})}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
