import { Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const ratioImage = 2.4;

// develop on iPhone 11
const BASE_WIDTH = 414;
const BASE_HEIGHT = 896;

const wRatio = SCREEN_WIDTH / BASE_WIDTH;
const hRatio = SCREEN_HEIGHT / BASE_HEIGHT;

export const wScale = (size: number, minFactor: number = 0.9) => {
  const minSize = size * minFactor;
  const scaledSize = wp(((100 * size) / BASE_WIDTH) * wRatio);
  return Math.floor(scaledSize > minSize ? scaledSize : minSize);
};

export const hScale = (size: number, minFactor: number = 0.9) => {
  const minSize = size * minFactor;
  const scaledSize = hp(((100 * size) / BASE_HEIGHT) * hRatio);
  return Math.ceil(scaledSize > minSize ? scaledSize : minSize);
};

export const fontScale = (size: number) => {
  const minSize = size * 0.95;
  const scaledSize = size * wRatio;
  return Math.floor(scaledSize > minSize ? scaledSize : minSize);
};

export const MARGIN = 23;
export const MARGIN_hScale = hScale(MARGIN);
export const MARGIN_wScale = wScale(MARGIN);

export const BORDER_RADIUS = 10;
export const BUTTON_HEIGHT = hScale(50, 0.95);

export const HEADER_HEIGHT = hScale(50, 0.95);
