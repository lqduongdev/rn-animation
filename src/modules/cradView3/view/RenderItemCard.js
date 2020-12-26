import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {
  MARGIN_wScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  wScale,
} from '../../../style/Dimensions';
import {View} from 'react-native';
import React from 'react';

/**
 * rn-animation
 * Created by leduong on 26/12/2020
 */
const WIDTH_IMAGE = SCREEN_WIDTH * 0.7;
const ITEM_VISIBLE = 3;

const CARD_MARGIN = wScale(50);

const RenderItemCard = ({item, index, scrollX}) => {
  const itemAnimationStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const zeroPosition = -index * SCREEN_WIDTH + scrollX.value;

    const translateX = interpolate(scrollX.value, inputRange, [
      zeroPosition + CARD_MARGIN,
      zeroPosition - MARGIN_wScale,
      zeroPosition - SCREEN_WIDTH,
    ]);

    const opacity = interpolate(scrollX.value, inputRange, [
      1 - 1 / ITEM_VISIBLE,
      1,
      0.9,
    ]);
    const scale = interpolate(scrollX.value, inputRange, [0.75, 1, 1]);

    return {
      opacity,
      transform: [
        {
          translateX: translateX,
        },
        {scale},
      ],
    };
  });

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}>
      <Animated.Image
        source={item.source}
        style={[
          {
            width: WIDTH_IMAGE,
            height: (WIDTH_IMAGE * 16) / 9,
            borderRadius: 10,
            marginLeft: CARD_MARGIN,
          },
          itemAnimationStyle,
        ]}
      />
    </View>
  );
};

export default RenderItemCard;
