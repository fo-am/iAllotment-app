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
      <ScrollView style={styles.background}>

        <Text style={styles.header}>
          <Text>
            The Allotment Lab
          </Text>
          <Text>
            Prototype
          </Text>
          </Text>
         <Text style={styles.normal}>This is a prototype designed to
            demonstrate ideas for the Allotment Lab</Text>
         <Text style={styles.normal}>Developed by FoAM Kernow on behalf
            of the SWARM Knowledge Hub, a Rural Develpment Programme for England
             (RDPE) initative managed by DuchyCollege Rural Business School, 
             in partnership with Rothamsted Research North Wyke.</Text>
   
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
    textAlign: 'center',
    fontFamily: 'aria-madurai',
    fontSize: 40,
  },
  normal: {
    textAlign: 'center',
    fontFamily: 'aria-madurai',
   fontSize: 20,
  },
  background: {
    
    backgroundColor: 'rgb(243, 247, 235)',
  }
});
