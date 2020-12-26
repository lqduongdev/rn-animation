/**
 * rn-animation
 * Created by leduong on 26/12/2020
 */

import {FlatList, Text, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {
  fontScale,
  HEADER_HEIGHT,
  MARGIN_hScale,
  MARGIN_wScale,
  SCREEN_WIDTH,
} from '../../../style/Dimensions';
import {DummyCardImage} from '../../../assets/DummyData';
import Colors from '../../../style/Colors';
import Fonts from '../../../style/Fonts';
import React from 'react';

const Item = ({item, index, scrollX}) => {
  const animateStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const outputRange = [
      -(index - 1) * HEADER_HEIGHT,
      -index * HEADER_HEIGHT,
      -(index + 1) * HEADER_HEIGHT,
    ];

    const opacity = interpolate(scrollX.value, inputRange, [0.5, 1, 0.5]);
    return {
      opacity,
      transform: [
        {translateY: interpolate(scrollX.value, inputRange, outputRange)},
      ],
    };
  });

  return (
    <Animated.View style={[{height: HEADER_HEIGHT}, animateStyle]}>
      <Text
        adjustsFontSizeToFit={true}
        style={{
          color: Colors.primary.dark,
          fontFamily: Fonts.ExtraBold,
          fontSize: fontScale(30),
          marginHorizontal: MARGIN_wScale,
        }}>
        {item.key}
      </Text>
    </Animated.View>
  );
};

const ListText = ({scrollX}) => {
  return (
    <View style={{height: HEADER_HEIGHT, marginVertical: MARGIN_hScale}}>
      <FlatList
        initialNumToRender={DummyCardImage.length}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={DummyCardImage}
        renderItem={({item, index}) => (
          <Item item={item} index={index} scrollX={scrollX} />
        )}
      />
    </View>
  );
};

export default ListText;
