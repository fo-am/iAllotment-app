import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Font, AppLoading } from 'expo'


export default class App extends Component {
  state = {
    isReady: false,
  };

  componentWillMount() {
    this._cacheResourcesAsync();
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <ScrollView>

        <Text style={styles.header}>
          <Text>
            The Allotment Lab
          </Text>
          <Text>
            Prototype
          </Text>
        </Text>
      </ScrollView>
    );
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      'aria-madurai': require('./assets/fonts/ArimaMadurai-Regular.ttf'),
    });

    this.setState({ isReady: true });
  }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'aria-madurai',
    fontSize: 50,
  },
});
