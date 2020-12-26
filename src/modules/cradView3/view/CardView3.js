/**
 * rn-animation
 * Created by leduong on 24/12/2020
 */

import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Colors from '../../../style/Colors';
import Header from '../../../components/Header';
import {DummyCardImage} from '../../../assets/DummyData';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import RenderItemCard from './RenderItemCard';
import ListText from './ListText';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const RenderCenter = ({style, item, index, children, ...props}) => {
  return (
    <View
      style={[
        {
          zIndex: DummyCardImage.length - index,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

const CardView3 = ({navigation}) => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{backgroundColor: Colors.accent.general}} />
      <Header title={'Card View 3'} isColor={true} />

      <ListText scrollX={scrollX} />

      <AnimatedFlatList
        horizontal={true}
        pagingEnabled={true}
        bounce={false}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        data={DummyCardImage}
        renderItem={({item, index}) => (
          <RenderItemCard
            item={item}
            index={index}
            scrollX={scrollX}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => item.key + index}
        CellRendererComponent={RenderCenter}
      />
    </View>
  );
};

export default CardView3;
