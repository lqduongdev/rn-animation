/**
 * KTcity App
 * Created by leduong on 4/20/20
 */

import { withNavigation } from '@react-navigation/compat';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../style/Colors';
import Fonts from '../style/Fonts';
import { fontScale, HEADER_HEIGHT, MARGIN, wScale } from '../style/Dimensions';
import BackArrowSvg from '../assets/svg/BackArrowSvg';

const Header = ({ style, title, titleStyle, navigation, right, isLeft = true, optionCall, left, isDisabledPress = false, isColor = true }) => {

  return <View style={[styles.container, { backgroundColor: isColor ? Colors.accent.general : 'transparent' }, style]}>
    <TouchableOpacity
      hitSlop={{ top: 10, left: 15, bottom: 10, right: 15 }}
      disabled={!(isLeft && !isDisabledPress)}
      onPress={() => {
        if (typeof optionCall === 'function') {
          optionCall();
        }
        navigation.goBack();
      }}
      style={[styles.leftButton, {
        opacity: isLeft ? 1 : 0,
      }]}
    >
      {
        left ? left : <BackArrowSvg
          size={wScale(25)}
          color={isColor ? '#fff' : Colors.accent.general}
        />
      }
    </TouchableOpacity>

    <View style={styles.containerTitle}>
      <Text
        numberOfLines={2}
        style={[styles.title, { color: isColor ? '#fff' : Colors.accent.general }, titleStyle]}>
        {title}
      </Text>
    </View>

    <View style={styles.rightButton}>
      {right}
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
  },
  leftButton: {
    flex: 1,
    paddingLeft: MARGIN,
    justifyContent: 'center',
  },
  containerTitle: {
    flex: 4, justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: fontScale(18),
    fontFamily: Fonts.ExtraBold,
    textAlign: 'center',
  },
  rightButton: { flex: 1, paddingRight: MARGIN, justifyContent: 'center' },
});

export default withNavigation(Header);
