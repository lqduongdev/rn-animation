/**
 * rn-animation
 * Created by leduong on 09/12/2020
 */

import React, {useCallback, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../style/Colors';
import Header from '../../../components/Header';
import ComponentStyles from '../../../style/ComponentStyles';
import {
  BORDER_RADIUS,
  BUTTON_HEIGHT,
  fontScale,
  hScale,
  MARGIN_wScale,
} from '../../../style/Dimensions';
import Fonts from '../../../style/Fonts';
import Download from './Download';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const TIME = 10 * 1000;

export const DOWNLOAD_STATUS = {
  PROCESS: 1,
  PAUSED: 0,
};

const ProcessDownload1 = () => {
  const [isDownload, setDownload] = useState(false);

  const startAnimation = useSharedValue(0);

  const downloadAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: startAnimation.value,
    };
  });

  const btnAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(startAnimation.value, [0, 1], [1, 0]),
    };
  });

  const start = useCallback(() => {
    setDownload(true);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary.light,
      }}>
      <SafeAreaView style={{backgroundColor: Colors.accent.general}} />
      <Header title={'Process Download 1'} isColor={true} />

      <View
        style={[
          {
            flex: 1,
          },
          ComponentStyles.parentCenter,
        ]}>
        <Animated.View style={downloadAnimationStyle}>
          <Download
            timeProcess={TIME}
            isDownload={isDownload}
            setDownload={setDownload}
            cancel={() => {
              startAnimation.value = withTiming(0, {
                duration: 300,
              });
            }}
          />
        </Animated.View>
      </View>

      <Animated.View style={[{height: BUTTON_HEIGHT * 2}, btnAnimationStyle]}>
        <Pressable
          onPress={() => {
            startAnimation.value = withTiming(
              1,
              {
                duration: 300,
              },
              (isFinished) => {
                if (isFinished) {
                  runOnJS(start)();
                }
              },
            );
          }}
          style={styles.btnActive}>
          <Text style={[styles.uploadText, {color: '#fff'}]}>
            Create download
          </Text>
        </Pressable>
      </Animated.View>

      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  uploadText: {
    fontFamily: Fonts.Bold,
    color: Colors.primary.general,
    fontSize: fontScale(17),
  },
  btnActive: {
    paddingHorizontal: MARGIN_wScale,
    paddingVertical: hScale(10),
    backgroundColor: Colors.blue.general,
    borderRadius: BORDER_RADIUS,
    alignSelf: 'center',
  },
});

export default ProcessDownload1;
