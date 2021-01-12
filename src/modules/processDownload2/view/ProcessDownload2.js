/**
 * rn-animation
 * Created by leduong on 26/12/2020
 */
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Colors from '../../../style/Colors';
import Header from '../../../components/Header';
import {fontScale, hScale, MARGIN_wScale} from '../../../style/Dimensions';
import {DummyCardImage} from '../../../assets/DummyData';
import Fonts from '../../../style/Fonts';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useValue,
  withTiming,
} from 'react-native-reanimated';
import RefreshControl from './RefreshControl';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const REFRESH_HEIGHT = hScale(150);

const RenderItem = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: MARGIN_wScale,
        backgroundColor: '#fff',
      }}>
      <Image
        source={item.source}
        style={{
          borderRadius: 10,
          width: 100,
          height: 100,
          backgroundColor: Colors.primary.light,
        }}
      />
      <View>
        <Text
          style={{
            color: Colors.primary.dark,
            fontFamily: Fonts.ExtraBold,
            fontSize: fontScale(30),
            marginHorizontal: MARGIN_wScale,
          }}>
          {item.key}
        </Text>
        <Text
          style={{
            color: Colors.primary.dark,
            fontFamily: Fonts.SemiBold,
            fontSize: fontScale(16),
            marginHorizontal: MARGIN_wScale,
          }}>
          {item.key}
        </Text>
      </View>
    </View>
  );
};

const ProcessDownload2 = () => {
  const scrollRef = useRef();

  const scrollAnimated = useSharedValue(0);

  const [refreshing, setRefreshing] = useState(false);
  const scrollY = useSharedValue(0);

  const onRefresh = useCallback(
    (refresh = true) => {
      setRefreshing(refresh);
      scrollAnimated.value = withTiming(refresh ? 1 : 0, {
        duration: 100,
      });
    },
    [scrollAnimated.value],
  );

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const scrollAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollAnimated.value, [0, 1], [1, 0]),
    };
  });

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView style={{backgroundColor: Colors.accent.general}} />
      <Header title={'Process Download 2'} isColor={true} />

      <View style={{flex: 1}}>
        <RefreshControl scrollY={scrollY} />

        <AnimatedFlatList
          ref={scrollRef}
          scrollEnabled={!refreshing}
          // ListHeaderComponent={
          //   <View style={{height: refreshing ? REFRESH_HEIGHT : 0}} />
          // }
          onScrollEndDrag={({nativeEvent}) => {
            if (nativeEvent.contentOffset.y < -REFRESH_HEIGHT) {
              onRefresh(true);
            }
          }}
          style={[
            {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            },
            scrollAnimationStyle,
          ]}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          data={DummyCardImage}
          renderItem={RenderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
};

export default ProcessDownload2;
