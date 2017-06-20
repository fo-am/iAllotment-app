import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo'


export default class App extends Component {
  state = {
    fontLoaded: false,
  };
async componentDidMount() {
    await Font.loadAsync({
      'aria-madurai': require('./assets/fonts/ArimaMadurai-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
render() {
    return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'aria-madurai', fontSize: 56 }}>
      Hello, world!
      </Text>
    ) : null
  }
</View>
    );
  }
}

