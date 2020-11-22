/**
 * FreeTimeAnimation
 * Created by leduong on 22/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import dummyData from '../dummyData';
import { HEADER_HEIGHT, SCREEN_WIDTH, wScale } from '../../../style/Dimensions';

const SIZE = wScale(14);

class Indicator extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        {
          dummyData.listAnimal.map((_, index) => {

              const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH];
              const scale = this.props.scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 1, 0.6],
                extrapolate: 'clamp',
              });

              const opacity = this.props.scrollX.interpolate({
                inputRange,
                outputRange: [0.4, 0.9, 0.4],
                extrapolate: 'clamp',
              });

              return <Animated.View
                key={`indicator-${index}`}
                style={{
                  width: SIZE,
                  height: SIZE,
                  borderRadius: SIZE / 2,
                  backgroundColor: '#fff',
                  marginHorizontal: 6,
                  opacity,
                  transform: [{
                    scale,
                  }],
                }}
              >
              </Animated.View>;
            },
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    bottom: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Indicator;
