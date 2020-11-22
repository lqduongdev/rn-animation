/**
 * KTcity App
 * Created by leduong on 22/11/2020
 */

import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from '../../../components/Header';

class Home extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
        <SafeAreaView/>
        <Header title={'THÔNG TIN CÁ NHÂN'}
                isColor={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default Home;
