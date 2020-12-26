import React from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../../style/Colors';
import {interpolatePath, mixColor, parse} from 'react-native-redash';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const ArrayPointAc = parse(
  'M1 54.8306C13.1481 47.3462 42.1122 25.9417 115.577 25.9417C208.65 25.9417 204.142 79 316.683 79C451.247 79 439.564 2.00001 548.171 2C647.412 1.99999 616.306 79 728.443 79C856.278 79 876 54.8306 876 54.8306',
);

const ArrayPointInAc = parse(
  'M1 6.77808C135.634 6.77812 66.6174 6.77819 135.634 6.77813C231.134 6.77804 196.562 7.38038 304.642 6.7786C433.871 6.05906 422.184 6.12413 526.486 5.54339C621.793 5.01273 614.605 8.14054 722.296 7.54092C845.064 6.85736 859.147 6.77895 859.147 6.77895',
);

const Line = ({transformProcess}) => {
  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(
      transformProcess.value,
      [0, 1],
      [ArrayPointAc, ArrayPointInAc],
    );

    const stroke = mixColor(
      transformProcess.value,
      Colors.accent.general,
      Colors.primary.light,
    );
    return {
      d,
      stroke: stroke,
    };
  });

  return (
    <Svg height="100%" width="100%" viewBox="0 0 875 104">
      <AnimatedPath animatedProps={animatedProps} strokeWidth={5} />
    </Svg>
  );
};

export default React.memo(Line);
