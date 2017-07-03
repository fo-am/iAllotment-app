import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button} from "react-native";
import {Font, AppLoading, WebBrowser} from "expo";
import {Actions} from "react-native-router-flux";

export default class Splash extends Component {
  state = {
    isReady: false
  };

  componentWillMount() {
    this._cacheResourcesAsync();
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.header}>
          <Text>{"The Allotment Lab\nPrototype"}</Text>
        </Text>
        <Text style={styles.normal}>
          This is a prototype designed to
          demonstrate ideas for the Allotment Lab
        </Text>
        <Text style={styles.normal}>
          Developed by{" "}
          <Text style={styles.fakeLink}>FoAM Kernow</Text>
          on behalf of the{" "}
          <Text style={styles.fakeLink}>SWARM Knowledge Hub</Text>
          , a Rural Develpment Programme for England
          (RDPE) initative managed by{" "}
          <Text style={styles.fakeLink}>
            Duchy College Rural Business School
          </Text>, in partnership with Rothamsted Research North Wyke.
        </Text>
        <View style={{alignItems: "center"}}>
          <Image source={require("./assets/images/logo.png")} />
        </View>
        <Button
          onPress={Actions.main}
          title="Enter the Allotment Lab"
          color="rgb(224, 190, 54)"
          accessibilityLabel="Enter the Allotment Lab"
        />
        <Text style={styles.normal}>
          The Allotment Lab offers information
          for guidance purposes only and is not intended to amount to
          professional advice or opinion. FoAM Kernow, Duchy College,
          and Rothamstead Research North Wyke cannot be held responsible
          for any losses or damage resulting from the use of information
          provided by this app.
        </Text>
      </ScrollView>
    );
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      "aria-madurai": require("./assets/fonts/ArimaMadurai-Regular.ttf")
    });

    this.setState({isReady: true});
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 30
  },
  normal: {
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 20
  },
  fakeLink: {
    textDecorationLine: "underline",
    color: "rgb(0, 170, 0)",
    textAlign: "center",
    fontFamily: "aria-madurai",
    fontSize: 20
  },
  background: {
    paddingTop: 40,
    backgroundColor: "rgb(243, 247, 235)"
  }
});
