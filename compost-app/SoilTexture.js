import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button} from "react-native";
import {Font, AppLoading, WebBrowser} from "expo";
import {Actions} from "react-native-router-flux";
import styles from "./Styles";
import renderif from "./RenderIf";

export default class SoilTexture extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "one"};
  }
  render() {
    return (
      <View>
        {renderif(this.state.page === "one")(
          <ScrollView style={styles.background}>

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
              title="This is a button to one"
              onPress={() => this.setState({page: "one"})}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
