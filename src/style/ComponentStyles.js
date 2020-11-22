/**
 * @author Lê Quốc Dương on 2/11/20
 */

import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import { fontScale } from './Dimensions';

const ComponentStyles = StyleSheet.create({
  boxShadow: {
    shadowRadius: 8,
    shadowColor: Colors.lightBlue,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  boxShadowRevert: {
    shadowRadius: 8,
    shadowColor: Colors.lightBlue,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: -3 },
    elevation: 6,
  },
  parentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  testBold: {
    fontWeight: '700',
    color: Colors.darkBlue,
    fontFamily: Fonts.NunitoSans,
  },
  textSimple: {
    fontSize: fontScale(16),
    fontFamily: Fonts.NunitoSans,
    fontWeight: '400',
  },
})

export default ComponentStyles
