/**
 * KTcity App
 * Created by leduong on 22/11/2020
 */

import React, { PureComponent } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  BUTTON_HEIGHT,
  fontScale,
  HEADER_HEIGHT,
  hScale,
  MARGIN_hScale,
  MARGIN_wScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  wScale,
} from '../../../style/Dimensions';
import dummyData from '../dummyData';
import Fonts from '../../../style/Fonts';
import Indicator from './Indicator';
import Colors from '../../../style/Colors';

class Login1 extends PureComponent {

  constructor (props, context) {
    super(props, context);

    this.scrollX = new Animated.Value(0);

    this.MAGIC = Animated.modulo(
      Animated.divide(
        Animated.modulo(this.scrollX, SCREEN_WIDTH),
        new Animated.Value(SCREEN_WIDTH),
      ),
      1,
    );
  }

  _renderItem = ({ item }) => (
    <View style={{
      flex: 1,
    }}>
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {item.Icon}
      </View>
      <View style={{
        width: SCREEN_WIDTH - MARGIN_wScale * 2,
        marginHorizontal: MARGIN_wScale,
      }}>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: Fonts.ExtraBold,
            fontSize: fontScale(26),
            color: '#fff',
          }}>
          {item.title}
        </Text>
        <Text
          numberOfLines={4}
          style={{
            marginTop: hScale(10),
            fontFamily: Fonts.SemiBold,
            fontSize: fontScale(15),
            color: '#fff',
          }}>
          {item.descriptions}
        </Text>
      </View>
    </View>
  );

  _renderBackDrop = () => {

    const backgroundColor = this.scrollX.interpolate({
      inputRange: dummyData.listAnimal.map((_, index) => index * SCREEN_WIDTH),
      outputRange: dummyData.listAnimal.map(item => item.color),
    });

    return <Animated.View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor,
    }}/>;
  };

  _renderSquare = () => {
    const rotate = this.MAGIC.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['35deg', '0deg', '35deg'],
    });
    const translateX = this.MAGIC.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -SCREEN_HEIGHT, 0],
    });

    return <Animated.View
      style={{
        height: SCREEN_HEIGHT,
        width: SCREEN_HEIGHT,
        backgroundColor: '#fff',
        borderRadius: 80,
        position: 'absolute',
        top: -SCREEN_HEIGHT * 0.6,
        left: -SCREEN_HEIGHT * 0.35,
        transform: [
          { rotate },
          { translateX },
        ],
      }}
    />;
  };

  render () {
    return (
      <View style={styles.container}>
        {this._renderBackDrop()}

        {this._renderSquare()}

        <Animated.FlatList
          contentContainerStyle={{ marginBottom: MARGIN_hScale * 2 }}
          data={dummyData.listAnimal}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={this._renderItem}
          keyExtractor={((item, index) => String(index))}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: false },
          )}

        />
        <View style={{
          flexDirection: 'row',
          marginBottom: HEADER_HEIGHT + MARGIN_hScale,
          justifyContent: 'center',
        }}>

          <Pressable style={styles.btnWrapper}
                     onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.textWrapper}>
              Login
            </Text>
          </Pressable>

          <Pressable style={styles.btnWrapper}
                     onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.textWrapper}>
              Create Account
            </Text>
          </Pressable>


        </View>
        <Indicator scrollX={this.scrollX}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnWrapper: {
    height: BUTTON_HEIGHT,
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MARGIN_wScale,
    marginHorizontal: wScale(10),
    borderRadius: 10,
  },
  textWrapper: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(18),
    color: Colors.primary.dark,
  },
});

export default Login1;
