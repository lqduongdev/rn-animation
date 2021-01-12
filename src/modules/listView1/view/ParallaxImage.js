/**
 * rn-animation
 * Created by leduong on 08/01/2021
 */

import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {DummyDataDateALive} from '../../../assets/DummyData';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  fontScale,
  MARGIN_wScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../../style/Dimensions';
import Colors from '../../../style/Colors';
import Fonts from '../../../style/Fonts';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ParallaxImageItem = ({item, index, scrollY, heightImage, heightText}) => {
  const animationImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [heightImage * index, heightImage * (index + 1)],
            [0, heightImage],
          ),
        },
      ],
    };
  });

  return (
    <View style={{}}>
      <View
        style={{
          overflow: 'hidden',
          height: heightImage,
        }}>
        <Animated.Image
          source={item.source}
          style={[{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}, animationImage]}
        />
      </View>
      {index !== 0 && index !== DummyDataDateALive.length && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            padding: MARGIN_wScale,
            height: heightText,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontScale(20),
              color: Colors.accent.dark,
              fontFamily: Fonts.ExtraBold,
            }}>
            {item.decs}
          </Text>
        </View>
      )}
    </View>
  );
};

const ParallaxImage = ({heightImage, heightText, heightView}) => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <View style={{flex: 1}}>
      <AnimatedFlatList
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        data={DummyDataDateALive}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <ParallaxImageItem
            index={index}
            item={item}
            scrollY={scrollY}
            heightImage={heightImage}
            heightText={heightText}
            heightView={heightView}
          />
        )}
      />
    </View>
  );
};

export default ParallaxImage;
