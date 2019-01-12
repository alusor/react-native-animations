import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Spring, animated } from 'react-spring';

const AnimatedView = animated(View);
class Tab extends Component {
  state = {

  }
  openMenu = () => alert('hey')
  render() {
    return(
      <View style={styles.navBar}>
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <Spring native from={{ x: this.state.one }} to={{  x: this.state.position || this.state.one }}>
          {({ x }) =>
          <TouchableWithoutFeedback>
            <AnimatedView style={{ ...styles.circle, position: 'absolute', left: x, top: -16 }}>
              
            </AnimatedView>
          </TouchableWithoutFeedback>
          }
        </Spring>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          one: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2) 
        })} onPress={() => this.setState({ position: this.state.one })}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          two: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2)
        })} onPress={() => this.setState({ position: this.state.two })}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          three: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2)
        })} onPress={() => this.setState({ position: this.state.three })}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#f44336',
    alignSelf: 'flex-end',
    flex: 1
  },
  circle: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor:  '#f44336',
  }
});

export default Tab;