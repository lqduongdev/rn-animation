/**
 * rn-animation
 * Created by leduong on 04/01/2021
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Colors from '../../../style/Colors';
import Header from '../../../components/Header';
import ParallaxImage from './ParallaxImage';
import {hScale, SCREEN_HEIGHT} from '../../../style/Dimensions';

const HEIGHT_IMAGE = SCREEN_HEIGHT * 0.8;
const HEIGHT_TEXT = hScale(150);
const HEIGHT_VIEW = HEIGHT_IMAGE + HEIGHT_TEXT;

const ListView1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary.general}}>
      <SafeAreaView style={{backgroundColor: Colors.accent.general}} />
      <Header title={'List View 1'} isColor={true} />

      <ParallaxImage
        heightImage={HEIGHT_IMAGE}
        heightText={HEIGHT_TEXT}
        heightView={HEIGHT_VIEW}
      />
    </View>
  );
};

export default ListView1;
