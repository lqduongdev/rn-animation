/**
 * FreeTimeAnimation
 * Created by leduong on 30/11/2020
 */
import React, { PureComponent } from 'react'
import { Animated, SafeAreaView, StyleSheet, View } from 'react-native'
import Colors from '../../../style/Colors'
import Header from '../../../components/Header'
import { DummyCardImage } from '../../../assets/DummyData'
import { BORDER_RADIUS, SCREEN_WIDTH } from '../../../style/Dimensions'
import ComponentStyles from '../../../style/ComponentStyles'
import Neumorphism from './Neumorphism'

const IMAGE_SIZE = SCREEN_WIDTH * 0.7;

class CardView2 extends PureComponent {

  constructor (props) {
    super(props);

    this.scrollX = new Animated.Value(0);
  }

  _renderItem = ({ item, index }) => {

    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];
    const outputRange = [-IMAGE_SIZE, 0, IMAGE_SIZE];

    const translateX = this.scrollX.interpolate({
      inputRange,
      outputRange,
    });

    return <View style={{
      flex: 1,
      width: SCREEN_WIDTH,
      ...ComponentStyles.parentCenter,
    }}>
      <Neumorphism>
        <View style={{
          borderColor: '#545454',
          borderRadius: BORDER_RADIUS * 2,
          borderWidth: 10,
        }}>

          <View style={{
            borderRadius: BORDER_RADIUS,
            width: IMAGE_SIZE,
            height: IMAGE_SIZE * 16 / 9,
            alignItems: 'center',
            overflow: 'hidden',
          }}
          >
            <Animated.Image
              resizeMode={'cover'}
              style={{
                transform: [{ translateX }],
                width: SCREEN_WIDTH,
                height: IMAGE_SIZE * 16 / 9,
              }}
              source={item.source}
            />
          </View>
        </View>
      </Neumorphism>
    </View>;
  };

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: Colors.accent.general }}/>
        <Header title={'Card View2'}
                isColor={true}
        />

        <Animated.FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: true },
          )}
          data={DummyCardImage}
          style={{ flex: 1 }}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.key + index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <SafeAreaView/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
  },
});

export default CardView2;
