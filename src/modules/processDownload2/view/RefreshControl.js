/**
 * rn-animation
 * Created by leduong on 28/12/2020
 */
import {View} from 'react-native';
import React from 'react';
import Colors from '../../../style/Colors';
import {REFRESH_HEIGHT} from './ProcessDownload2';
import {SCREEN_WIDTH} from '../../../style/Dimensions';
import {interpolatePath, parse} from 'react-native-redash';
import Svg, {Path} from 'react-native-svg';
import Animated, {useAnimatedProps} from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const PATH_LINE = parse(
  'M1000 .5c0 .398-52.678.78-146.447 1.06C759.785 1.843 632.608 2 500 2s-259.785-.158-353.553-.44C52.678 1.28 0 .899 0 .5h1000z',
);
const PATH_ELLIPSE = parse(
  'M1000 0c0 53.043-52.678 103.914-146.447 141.421C759.785 178.929 632.608 200 500 200s-259.785-21.071-353.553-58.579C52.678 103.914 0 53.043 0 0h1000z',
);

const RefreshControl = ({scrollY}) => {
  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(
      scrollY.value,
      [-REFRESH_HEIGHT / 2, -REFRESH_HEIGHT - REFRESH_HEIGHT / 2],
      [PATH_LINE, PATH_ELLIPSE],
    );

    return {
      d,
    };
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.accent.extraLight,
          height: REFRESH_HEIGHT / 2,
        }}
      />
      <View>
        <Svg
          height={(SCREEN_WIDTH * 2) / 10}
          width={SCREEN_WIDTH}
          viewBox={[0, 0, 1000, 200].join(' ')}>
          <AnimatedPath
            animatedProps={animatedProps}
            strokeWidth={5}
            stroke={Colors.accent.extraLight}
            fill={Colors.accent.extraLight}
          />
        </Svg>

        <View style={{flex: 1}} />
      </View>
    </View>
  );
};

export default RefreshControl;
