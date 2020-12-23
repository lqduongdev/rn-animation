/**
 * KTcity App
 * Created by leduong on 22/11/2020
 */

import React, {PureComponent} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../../components/Header';
import Colors from '../../../style/Colors';
import Fonts from '../../../style/Fonts';
import {MARGIN_hScale, MARGIN_wScale} from '../../../style/Dimensions';

const listAnimation = [
  {
    key: 'processDownload1',
    route: 'ProcessDownload1',
    title: 'Process Download 1',
  },
  {
    key: 'cardView2',
    route: 'CardView2',
    title: 'Card View 2',
  },
  {
    key: 'tabbar2',
    route: 'Tabbar2',
    title: 'Tab bar 2',
  },
  {
    key: 'tabbar1',
    route: 'Tabbar1',
    title: 'Tab bar 1',
  },
  {
    key: 'login1',
    route: 'Login1',
    title: 'Login Screen 1',
  },
  {
    key: 'cardView1',
    route: 'CardView1',
    title: 'Card View 1',
  },
]

class Home extends PureComponent {

  _renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => this.props.navigation.navigate(item.route)}
      style={styles.wrapper}>
      <Text style={styles.titleText}>
        {'#' + (index + 1) + '. ' + item.title}
      </Text>
    </Pressable>
  )

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView style={{ backgroundColor: Colors.accent.general }}/>
        <Header title={'React Native Animation'}
                isColor={true}
                isLeft={false}
        />

        <FlatList data={listAnimation} renderItem={this._renderItem}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.accent.extraLight,
  },
  titleText: {
    paddingLeft: MARGIN_wScale,
    color: Colors.primary.general,
    fontFamily: Fonts.Bold,
    fontSize: 20,
    paddingVertical: MARGIN_hScale,
  },
})

export default Home
