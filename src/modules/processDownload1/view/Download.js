import {Pressable, StyleSheet, Text, View} from 'react-native';
import Line from './Line';
import Animated, {
  block,
  call,
  Clock,
  cond,
  eq,
  set,
  stopClock,
  useCode,
  useSharedValue,
  useValue,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BORDER_RADIUS,
  fontScale,
  hScale,
  MARGIN_hScale,
  MARGIN_wScale,
  SCREEN_WIDTH,
  wScale,
} from '../../../style/Dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../../style/Colors';
import runTiming from './runTiming';
import {DOWNLOAD_STATUS} from './ProcessDownload1';
import ComponentStyles from '../../../style/ComponentStyles';
import React, {useState} from 'react';
import Fonts from '../../../style/Fonts';

/**
 * rn-animation
 * Created by leduong on 21/12/2020
 */

const CircleIcon = ({children}) => (
  <View
    style={[
      {
        width: wScale(30),
        height: wScale(30),
        borderRadius: wScale(15),
        backgroundColor: 'rgba(128, 128, 128,0.6)',
      },
      ComponentStyles.parentCenter,
    ]}>
    {children}
  </View>
);
const WIDTH_PROCESS = SCREEN_WIDTH * 0.9;

const Download = ({timeProcess, isDownload, setDownload, cancel}) => {
  const processing = useValue(0);

  const [percentDownload, setPercentDownload] = useState(0);
  const transformProcess = useSharedValue(0);

  const clock = new Clock();
  const downloading = useValue(DOWNLOAD_STATUS.PAUSED);

  useCode(() => {
    return call([processing], (process) => {
      const percent = Math.round((process / WIDTH_PROCESS) * 100);
      setPercentDownload(percent);
    });
  }, [processing]);

  // Control download status
  useCode(
    () =>
      block([
        set(
          downloading,
          isDownload ? DOWNLOAD_STATUS.PROCESS : DOWNLOAD_STATUS.PAUSED,
        ),
      ]),
    [isDownload],
  );

  // Control process animation download (PROCESS/PAUSED)
  useCode(
    () =>
      block([
        cond(eq(downloading, DOWNLOAD_STATUS.PROCESS), [
          runTiming(clock, processing, WIDTH_PROCESS, timeProcess),
        ]),
        cond(eq(downloading, DOWNLOAD_STATUS.PAUSED), [stopClock(clock)]),
        // cond(eq(processing, WIDTH_PROCESS), set(processing, 0)),
      ]),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.lineWrapper}>
        <Line transformProcess={transformProcess} />
      </View>

      <Animated.View
        style={[
          styles.processBg,
          {
            transform: [{translateX: processing}],
          },
        ]}
      />

      <View style={styles.processWrapper}>
        <View>
          <Text style={styles.uploadText}>Uploading 3 files</Text>

          <Text style={styles.percentText}>
            {`${percentDownload}% • ${(
              (timeProcess * (1 - percentDownload / 100)) /
              1000
            ).toFixed(0)} seconds left`}
          </Text>
        </View>

        <View />

        <Pressable
          onPress={() => {
            transformProcess.value = withTiming(isDownload ? 1 : 0, {
              duration: 500,
            });
            if (isDownload) {
              setDownload(false);
            } else {
              setDownload(true);
            }
          }}>
          <CircleIcon>
            <Ionicons
              name={isDownload ? 'pause' : 'play'}
              size={wScale(17)}
              color={'#fff'}
            />
          </CircleIcon>
        </Pressable>

        <Pressable
          onPress={() => {
            downloading.setValue(DOWNLOAD_STATUS.PAUSED);
            processing.setValue(0);
            setDownload(false);
            cancel();
          }}>
          <CircleIcon>
            <Fontisto name={'close-a'} size={wScale(12)} color={'#fff'} />
          </CircleIcon>
        </Pressable>

        {/*<AntDesign name={'arrowsalt'} size={wScale(20)}*/}
        {/*           color={Colors.primary.light}/>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue.extraLight,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 15,
    paddingTop: MARGIN_hScale,
    paddingBottom: 80,
    overflow: 'hidden',
  },
  processBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  processWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  uploadText: {
    fontFamily: Fonts.Bold,
    color: Colors.primary.general,
    fontSize: fontScale(17),
  },
  percentText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.primary.light,
    marginTop: hScale(10),
    fontSize: fontScale(15),
  },
  lineWrapper: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: -10,
    right: -10,
    alignItems: 'flex-end',
  },
  btnActive: {
    paddingHorizontal: MARGIN_wScale,
    paddingVertical: hScale(10),
    backgroundColor: Colors.blue.general,
    borderRadius: BORDER_RADIUS,
    alignSelf: 'center',
  },
});

export default Download;
