import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Spring, animated } from 'react-spring';
import styled from 'styled-components';

const Text = styled.Text`
  color: white;
  font-weight: bold;
`;

const AnimatedView = animated(View);
class Tab extends Component {
  state = {
    color: 'rgb(3, 169, 244)'
  }
  openMenu = () => alert('hey')
  render() {
    return(
      <Spring native from={{ x: this.state.one, color: 'rgb(3, 169, 244)' }} to={{  x: this.state.position || this.state.one, color: this.state.color }}>
       {({ x, color }) =>
      <AnimatedView style={{ ...styles.navBar, backgroundColor: color }}>
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        
         
          <TouchableWithoutFeedback>
            <AnimatedView style={{ ...styles.circle, position: 'absolute', left: x, top: -16, backgroundColor: color }}>
              
            </AnimatedView>
          </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          one: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2) 
        })} onPress={() => this.setState({ position: this.state.one, color: 'rgb(3, 169, 244)'})}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          two: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2)
        })} onPress={() => this.setState({ position: this.state.two, color: 'rgb(255, 87, 34)' })}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLayout={event => this.setState({
          three: event.nativeEvent.layout.x- (event.nativeEvent.layout.width/2)
        })} onPress={() => this.setState({ position: this.state.three, color: 'rgb(139, 195, 74)' })}>
        <Text>Hola</Text>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </AnimatedView>
    }

      </Spring>

    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'rgb(3, 169, 244)',
    width: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  circle: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor:  '#f44336',
  }
});

export default Tab;