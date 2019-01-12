import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Tab from './tab';


class App extends Component {

  render() {
    return (
      <View style={styles.container}>
       <View style={{ flex: 1, }}>
          <Text>Hola</Text>
       </View>
       <Tab></Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});


const AppNavigator = createStackNavigator({
  App
});

export default createAppContainer(AppNavigator)