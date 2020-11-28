/**
 * FreeTimeAnimation
 * Created by leduong on 23/11/2020
 */

import React, { PureComponent } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { fontScale, MARGIN_wScale, SCREEN_HEIGHT, SCREEN_WIDTH, wScale } from '../../../style/Dimensions';
import BackArrowSvg from '../../../assets/svg/BackArrowSvg';
import Fonts from '../../../style/Fonts';
import Colors from '../../../style/Colors';

class CardView1Detail extends PureComponent {
  render () {
    const { item } = this.props.route.params;

    devLog(item);
    return (
      <View style={styles.container}>
        <View style={{}}>
          <SharedElement
            id={`item.${item.key}.image`}
          >
            <Image source={item.source}
                   style={{
                     width: SCREEN_WIDTH,
                     height: SCREEN_HEIGHT,
                   }}
            />
          </SharedElement>
        </View>


        <View style={{
          marginHorizontal: MARGIN_wScale,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
          <SafeAreaView/>

          <Pressable onPress={() => this.props.navigation.goBack()}>
            <BackArrowSvg
              size={wScale(25)}
              color={'#fff'}
            />
          </Pressable>

          <View style={{ flex: 1 }}/>

          <SharedElement
            id={`item.${item.key}.text`}
          >
            <Text style={{
              fontSize: fontScale(50),
              color: Colors.accent.general,
              fontFamily: Fonts.ExtraBold,
            }}>
              {item.key}
            </Text>
          </SharedElement>
          <SafeAreaView/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardView1Detail;
