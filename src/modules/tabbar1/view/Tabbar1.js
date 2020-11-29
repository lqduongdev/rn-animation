/**
 * FreeTimeAnimation
 * Created by leduong on 28/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  BORDER_RADIUS,
  fontScale,
  HEADER_HEIGHT,
  hScale,
  MARGIN_wScale,
  SCREEN_WIDTH,
  wScale,
} from '../../../style/Dimensions';
import Colors from '../../../style/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ComponentStyles from '../../../style/ComponentStyles';
import Fonts from '../../../style/Fonts';
import BackArrowSvg from '../../../assets/svg/BackArrowSvg';

const ICON_SIZE = wScale(24);
const listTab = [
  {
    key: 'Home',
    color: Colors.accent.general,
    bk: Colors.accent.extraLight,
    Icon: ({ color }) => <Fontisto name={'home'} color={color} size={ICON_SIZE}/>,
  },
  {
    key: 'Like',
    color: Colors.red.general,
    bk: Colors.red.extraLight,
    Icon: ({ color }) => <FontAwesome name={'heart'} color={color} size={ICON_SIZE}/>,
  },
  {
    key: 'Chat',
    color: Colors.green.dark,
    bk: Colors.green.extraLight,
    Icon: ({ color }) => <Ionicons name={'md-chatbubble-sharp'} color={color} size={ICON_SIZE}/>,

  },
  {
    key: 'Setting',
    color: Colors.blue.dark,
    bk: Colors.blue.extraLight,
    Icon: ({ color }) => <Ionicons name={'settings'} color={color} size={ICON_SIZE}/>,
  },

];

class Tabbar1 extends PureComponent {

  constructor (props) {
    super(props);

    this.state = {
      indexSelected: 0,
    };

    this.aniamte = new Animated.Value(0);
    this.actionAniamte = new Animated.Value(0);

  }

  componentDidMount () {
    Animated.timing(this.aniamte, {
      toValue: this.actionAniamte,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }

  onChangeTabbar = (index) => {
    this.setState({ indexSelected: index });
    this.actionAniamte.setValue(index);
  };

  _renderItem = ({ item, index }) => {
    const { Icon } = item;

    const inputRange = [index - 1, index, index + 1];

    const width = this.aniamte.interpolate({
      inputRange,
      outputRange: [0, wScale(80), 0],
      extrapolate: 'clamp',
    });

    const bkColor = this.aniamte.interpolate({
      inputRange,
      outputRange: ['#fff', item.bk, '#fff'],
      extrapolate: 'clamp',
    });

    return <Animated.View
      style={{
        height: HEADER_HEIGHT,
        borderRadius: HEADER_HEIGHT / 2,
        backgroundColor: bkColor,
        ...ComponentStyles.parentCenter,
      }}>
      <Pressable
        hitSlop={{ top: 10, left: 15, bottom: 10, right: 15 }}
        style={{
          marginHorizontal: wScale(15),
          flexDirection: 'row',
        }}
        onPress={() => this.onChangeTabbar(index)}>

        <Icon color={this.state.indexSelected === index ? item.color : Colors.grey.dark}/>

        <Animated.View style={{
          overflow: 'hidden',
          width: width,
        }}>
          {this.state.indexSelected === index && <Text style={{
            textAlign: 'center',
            width: wScale(70),
            fontFamily: Fonts.ExtraBold,
            color: item.color,
            fontSize: fontScale(18),
          }}>
            {item.key}
          </Text>}
        </Animated.View>

      </Pressable>
    </Animated.View>;
  };

  render () {

    const backgroundColor = this.aniamte.interpolate({
      inputRange: listTab.map((_, index) => index),
      outputRange: listTab.map(item => item.color),
    });

    return (
      <Animated.View style={{
        flex: 1,
        backgroundColor,
      }}>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView/>

        <Pressable
          style={{ marginHorizontal: MARGIN_wScale }}
          onPress={() => this.props.navigation.goBack()}>
          <BackArrowSvg
            size={wScale(25)}
            color={'#fff'}
          />
        </Pressable>

        <View style={{ flex: 1 }}/>

        <View style={{
          backgroundColor: '#fff',
          borderRadius: BORDER_RADIUS * 2,
          alignItems: 'center',
          width: SCREEN_WIDTH * 0.85,
          alignSelf: 'center',
        }}>

          <FlatList data={listTab}
                    contentContainerStyle={{ marginVertical: hScale(15) }}
                    scrollEnabled={false}
                    horizontal={true}
                    renderItem={this._renderItem}
                    extraData={this.state.indexSelected}
          />
        </View>

        <SafeAreaView/>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.light,
  },
});

export default Tabbar1;
