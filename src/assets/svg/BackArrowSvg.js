import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { wScale } from '../../style/Dimensions';

function BackArrowSvg ({ size = wScale(25), color = '#fff' }) {
  return (
    <Svg width={size} height={size * 19 / 25} viewBox="0 0 25 19" fill={'none'}>
      <Path
        d="M10.185 2.533l-7.639 7.6 7.64 6.967M5.208 10.556h14.584"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrowSvg;
