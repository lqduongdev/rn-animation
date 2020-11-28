/**
 * FreeTimeAnimation
 * Created by leduong on 23/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../../style/Colors';
import { fontScale, MARGIN_hScale, MARGIN_wScale, SCREEN_WIDTH } from '../../../style/Dimensions';
import Fonts from '../../../style/Fonts';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';

export const IMAGE_W = SCREEN_WIDTH / 1.4;
export const IMAGE_H = IMAGE_W * 16 / 9;
const ITEM_VISIBLE = 5;

const arrayData = [
  {
    key: 'Deep Ocean',
    source: require('../images/deep_ocean.jpg'),
    color: 'rgba(59,157,157,0.5)',
  },

  {
    key: 'Sun Sets',
    source: require('../images/sun_sets.jpg'),
    color: 'rgba(134,59,148,0.5)',
  },
  {
    key: 'Lake',
    source: require('../images/lake.jpg'),
    color: 'rgba(53,106,124,0.5)',
  },
  {
    key: 'Ocean',
    source: require('../images/ocean.jpg'),
    color: 'rgba(31,110,172,0.5)',
  },
  {
    key: 'City',
    source: require('../images/city.jpg'),
    color: 'rgba(164,113,81,0.5)',
  },
  {
    key: 'Coconut Tree',
    source: require('../images/coconut_tree.jpg'),
    color: 'rgba(161,151,133,0.6)',
  },
  {
    key: 'Summer',
    source: require('../images/summer.jpg'),
    color: 'rgba(162,124,145,0.5)',

  },

  {
    key: 'Spring',
    source: require('../images/spring.jpg'),
    color: 'rgba(135,168,201,0.5)',
  },
];

class CardView1 extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.animated = new Animated.Value(0);
    this.activeAnimated = new Animated.Value(0);
  }

  componentDidMount () {
    Animated.timing(this.animated, {
      toValue: this.activeAnimated,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  _setCardActive = index => {
    this.setState({ activeIndex: index });
    this.activeAnimated.setValue(index);
  };

  _renderItem = ({ item, index }) => {
    const inputRange = [index - 1, index, index + 1];
    const translateY = this.animated.interpolate({
      inputRange,
      outputRange: [-25, 0, 25],
    });
    const style = {
      top: -IMAGE_H / 2,
      left: -IMAGE_W / 2,
    };

    const opacity = this.animated.interpolate({
      inputRange,
      outputRange: [1 - 1 / ITEM_VISIBLE, 1, 0],
    });

    const scale = this.animated.interpolate({
      inputRange,
      outputRange: [0.96, 1, 1.3],
    });

    return <Animated.View style={{
      transform: [{ translateY }, { scale }],
      opacity,
      position: 'absolute',
      ...style,
    }}>
      <Pressable onPress={() => {
        // this.props.navigation.navigate('CardView1Detail', { item });
      }}>
        <SharedElement
          id={`item.${item.key}.image`}
          style={{
            borderRadius: 20,
            width: IMAGE_W,
            height: IMAGE_H,
          }}
        >
          <Image source={item.source}
                 style={{
                   borderRadius: 20,
                   width: IMAGE_W,
                   height: IMAGE_H,
                 }}
          />
        </SharedElement>

        <SharedElement
          id={`item.${item.key}.text`}
        >
          <Text style={{
            fontSize: fontScale(30),
            color: 'rgba(255,255,255,0.9)',
            fontFamily: Fonts.Bold,
            position: 'absolute',
            bottom: MARGIN_hScale,
            left: MARGIN_wScale,
            fontStyle: 'italic',
          }}>
            {item.key}
          </Text>
        </SharedElement>
      </Pressable>
    </Animated.View>;
  };

  _renderCenter = ({ style, item, index, children, ...props }) => {
    return <View style={[{
      zIndex: arrayData.length - index,
    }, style]} {...props}>
      {children}
    </View>;
  };

  render () {

    const backgroundColor = this.animated.interpolate({
      inputRange: arrayData.map((_, index) => index),
      outputRange: arrayData.map(item => item.color),
    });

    return (
      <FlingGestureHandler
        key={'UP'}
        direction={Directions.UP}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END && this.state.activeIndex !== arrayData.length - 1) {
            this._setCardActive(this.state.activeIndex + 1);
            devLog('asdasd');

          }
        }}
      >
        <FlingGestureHandler
          key={'DOWN'}
          direction={Directions.DOWN}
          onHandlerStateChange={ev => {
            if (ev.nativeEvent.state === State.END && this.state.activeIndex !== 0) {
              this._setCardActive(this.state.activeIndex - 1);
            }
          }}
        >
          <View style={styles.container}>
            <Animated.View style={[{ flex: 1, backgroundColor }]}>
              <FlatList
                scrollEnabled={false}
                CellRendererComponent={this._renderCenter}
                data={arrayData}
                renderItem={this._renderItem}
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              />
            </Animated.View>
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
});

export default CardView1;
