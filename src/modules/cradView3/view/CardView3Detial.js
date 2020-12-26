/**
 * rn-animation
 * Created by leduong on 26/12/2020
 */
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {
  fontScale,
  MARGIN_wScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  wScale,
} from '../../../style/Dimensions';
import {SharedElement} from 'react-navigation-shared-element';
import Colors from '../../../style/Colors';
import BackArrowSvg from '../../../assets/svg/BackArrowSvg';
import Fonts from '../../../style/Fonts';

const CardView3Detail = ({route, navigation}) => {
  return (
    <View>
      <SharedElement id={`itemPhoto.${route.params.item.key}`}>
        <Image
          source={route.params.item.source}
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
            },
          ]}
        />
      </SharedElement>

      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <SafeAreaView />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: MARGIN_wScale,
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSvg size={wScale(25)} color={Colors.secondary.light} />
          </Pressable>

          <Text
            style={{
              color: Colors.secondary.light,
              fontFamily: Fonts.ExtraBold,
              fontSize: fontScale(25),
              marginHorizontal: MARGIN_wScale,
            }}>
            {route.params.item.key}
          </Text>
        </View>
      </View>
    </View>
  );
};

CardView3Detail.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [`itemPhoto.${item.key}`];
};

export default CardView3Detail;
