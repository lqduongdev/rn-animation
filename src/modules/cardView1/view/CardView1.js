/**
 * FreeTimeAnimation
 * Created by leduong on 23/11/2020
 */

import React, {PureComponent} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Colors from '../../../style/Colors';
import {SCREEN_WIDTH} from '../../../style/Dimensions';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {DummyDataDateALive} from '../../../assets/DummyData';

export const IMAGE_W = SCREEN_WIDTH / 1.4;
export const IMAGE_H = (IMAGE_W * 16) / 9;
const ITEM_VISIBLE = 5;

class CardView1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.animated = new Animated.Value(0);
    this.activeAnimated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animated, {
      toValue: this.activeAnimated,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  _setCardActive = (index) => {
    this.setState({activeIndex: index});
    this.activeAnimated.setValue(index);
  };

  _renderItem = ({item, index}) => {
    const inputRange = [index - 1, index, index + 1];
    const translateY = this.animated.interpolate({
      inputRange,
      outputRange: [-25, 0, 25],
    });
    const style = {
      top: -IMAGE_H / 2,
      left: -IMAGE_W / 2,
    };

    const opacity = this.animated.interpolate({
      inputRange,
      outputRange: [1 - 1 / ITEM_VISIBLE, 1, 0],
    });

    const scale = this.animated.interpolate({
      inputRange,
      outputRange: [0.96, 1, 1.3],
    });

    return (
      <Animated.View
        style={{
          transform: [{translateY}, {scale}],
          opacity,
          position: 'absolute',
          ...style,
        }}>
        <Pressable
          onPress={() => {
            // this.props.navigation.navigate('CardView1Detail', { item });
            this.props.navigation.goBack();
          }}>
          <SharedElement
            id={`item.${item.key}.image`}
            style={{
              borderRadius: 20,
              width: IMAGE_W,
              height: IMAGE_H,
            }}>
            <Image
              source={item.source}
              style={{
                borderRadius: 20,
                width: IMAGE_W,
                height: IMAGE_H,
              }}
            />
          </SharedElement>

          {/*<SharedElement
          id={`item.${item.key}.text`}
        >
          <Text style={{
            fontSize: fontScale(30),
            color: Colors.primary.dark,
            fontFamily: Fonts.ExtraBold,
            position: 'absolute',
            bottom: MARGIN_hScale,
            left: MARGIN_wScale,
            right: 0,
            fontStyle: 'italic',
            textShadowColor:Colors.primary.white,
            textShadowOffset:{width: 5, height: 5},
            textShadowRadius:4,
          }}>
            {item.key}
          </Text>
        </SharedElement>*/}
        </Pressable>
      </Animated.View>
    );
  };

  _renderCenter = ({style, item, index, children, ...props}) => {
    return (
      <View
        style={[
          {
            zIndex: DummyDataDateALive.length - index,
          },
          style,
        ]}
        {...props}>
        {children}
      </View>
    );
  };

  render() {
    const backgroundColor = this.animated.interpolate({
      inputRange: DummyDataDateALive.map((_, index) => index),
      outputRange: DummyDataDateALive.map((item) => item.color),
    });

    return (
      <FlingGestureHandler
        key={'UP'}
        direction={Directions.UP}
        onHandlerStateChange={(ev) => {
          if (
            ev.nativeEvent.state === State.END &&
            this.state.activeIndex !== DummyDataDateALive.length - 1
          ) {
            this._setCardActive(this.state.activeIndex + 1);
          }
        }}>
        <FlingGestureHandler
          key={'DOWN'}
          direction={Directions.DOWN}
          onHandlerStateChange={(ev) => {
            if (
              ev.nativeEvent.state === State.END &&
              this.state.activeIndex !== 0
            ) {
              this._setCardActive(this.state.activeIndex - 1);
            }
          }}>
          <View style={styles.container}>
            <Animated.View style={[{flex: 1, backgroundColor}]}>
              <FlatList
                keyExtractor={(item, index) => item + index}
                scrollEnabled={false}
                CellRendererComponent={this._renderCenter}
                data={DummyDataDateALive}
                renderItem={this._renderItem}
                contentContainerStyle={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </Animated.View>
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
});

export default CardView1;
