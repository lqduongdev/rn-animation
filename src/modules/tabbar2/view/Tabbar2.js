/**
 * FreeTimeAnimation
 * Created by leduong on 29/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, Pressable, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { MARGIN_wScale, SCREEN_WIDTH, wScale } from '../../../style/Dimensions';
import BackArrowSvg from '../../../assets/svg/BackArrowSvg';
import Colors from '../../../style/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ComponentStyles from '../../../style/ComponentStyles';
import Circle from './Circle';

const SIZE_CIRCLE = wScale(70);
const HEIGHT_TABBAR = SIZE_CIRCLE * 0.7;
const WIDTH_TABBAR = SCREEN_WIDTH * 0.8;
const ICON_SIZE = wScale(26);

class Tabbar2 extends PureComponent {

  constructor (props) {
    super(props);

    this.animate = new Animated.Value(0);
    this.animateIcon = new Animated.Value(0);
    this.isShowIcon = false;
  }

  onClick = () => {

    Animated.parallel([
      Animated.timing(this.animateIcon, {
        toValue: this.isShowIcon ? 1 : 0,
        duration: 300,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.animate, {
        toValue: this.isShowIcon ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => this.isShowIcon = !this.isShowIcon);

  };

  renderTabbar = () => {

    const scaleX = this.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const opacity = this.animateIcon.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const scale = this.animateIcon.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const opacity2 = this.animateIcon.interpolate({
      inputRange: [0.8, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const scale2 = this.animateIcon.interpolate({
      inputRange: [0.8, 1],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    });

    return <View style={{
      height: SIZE_CIRCLE,
      width: SCREEN_WIDTH,
      ...ComponentStyles.parentCenter,
    }}>

      <Animated.View style={{
        width: WIDTH_TABBAR,
        backgroundColor: Colors.red.general,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: HEIGHT_TABBAR,
        borderRadius: HEIGHT_TABBAR / 2,
        transform: [{ scaleX }],
      }}>
        <Animated.View style={[styles.wrapperIcon, {
          opacity: opacity2,
          transform: [{ scale: scale2 }],
        }]}>
          <FontAwesome name={'heart'} color={'#fff'} size={ICON_SIZE}/>
        </Animated.View>


        <Animated.View style={[styles.wrapperIcon, {
          opacity,
          transform: [{ scale }],
        }]}>
          <Ionicons name={'md-chatbubble-sharp'} color={'#fff'} size={ICON_SIZE}/>
        </Animated.View>

        <View style={{
          width: SIZE_CIRCLE,
          height: HEIGHT_TABBAR,
        }}/>

        <Animated.View style={[styles.wrapperIcon, {
          opacity,
          transform: [{ scale }],
        }]}>
          <Entypo name={'arrow-bold-down'} color={'#fff'} size={ICON_SIZE}/>
        </Animated.View>

        <Animated.View style={[styles.wrapperIcon, {
          opacity: opacity2,
          transform: [{ scale: scale2 }],
        }]}>
          <Entypo name={'share'} color={'#fff'} size={ICON_SIZE}/>
        </Animated.View>
      </Animated.View>

      <View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        ...ComponentStyles.parentCenter,
      }}>
        <Pressable
          onPress={this.onClick}
          style={styles.circle}>
          <Circle size={SIZE_CIRCLE}
                  animated={this.animate}
          />
        </Pressable>
      </View>
    </View>;
  };

  render () {
    return (
      <Animated.View style={{
        flex: 1,
        backgroundColor: Colors.primary.white,
      }}>
        <StatusBar barStyle={'dark-content'}/>
        <SafeAreaView/>

        <Pressable
          style={{ marginHorizontal: MARGIN_wScale }}
          onPress={() => this.props.navigation.goBack()}>
          <BackArrowSvg
            size={wScale(25)}
            color={Colors.red.general}
          />
        </Pressable>

        <View style={{ flex: 1 }}/>

        {this.renderTabbar()}

        <SafeAreaView/>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  circle: {
    width: SIZE_CIRCLE,
    height: SIZE_CIRCLE,
    borderRadius: SIZE_CIRCLE / 2,
    backgroundColor: Colors.red.general,
    shadowRadius: 4,
    shadowColor: Colors.red.dark,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  wrapperIcon: {},
});

export default Tabbar2;
