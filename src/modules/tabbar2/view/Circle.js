/**
 * FreeTimeAnimation
 * Created by leduong on 29/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import ComponentStyles from '../../../style/ComponentStyles';

const DOT_SIZE = 5;

class Circle extends PureComponent {

  Dot = () => <View style={{
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#fff',
  }}/>;

  render () {
    const { Dot } = this;

    const WIDTH_LINE = this.props.size * 0.4;

    const width = this.props.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [DOT_SIZE, WIDTH_LINE],
    });

    const translateX0 = this.props.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-DOT_SIZE * 2, 0],
    });

    const rotate0 = this.props.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg'],
    });

    const translateX1 = this.props.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [DOT_SIZE * 2, 0],
    });

    const rotate1 = this.props.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-135deg'],
    });

    return (
      <View style={styles.container}>

        <Animated.View
          style={{
            transform: [
              { rotate: rotate0 },
              { translateX: translateX0 },
            ],
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            ...ComponentStyles.parentCenter,
          }}
        >
          <Animated.View
            style={{
              width,
            }}
          >
            <Dot/>
          </Animated.View>
        </Animated.View>

        <View
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            position: 'absolute',
            borderRadius: DOT_SIZE / 2,
            backgroundColor: '#fff',
          }}
        />

        <Animated.View
          style={{
            transform: [
              { rotate: rotate1 },
              { translateX: translateX1 },
            ],
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            ...ComponentStyles.parentCenter,
          }}
        >
          <Animated.View
            style={{
              width,
            }}
          >
            <Dot/>
          </Animated.View>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...ComponentStyles.parentCenter,
  },
});

export default Circle;
