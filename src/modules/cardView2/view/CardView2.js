/**
 * FreeTimeAnimation
 * Created by leduong on 30/11/2020
 */
import React, { PureComponent } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Colors from '../../../style/Colors';
import Header from '../../../components/Header';

class CardView2 extends PureComponent {

  _renderItem = () => {

    return <View>

    </View>;
  };

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: Colors.accent.general }}/>
        <Header title={'Card View2'}
                isColor={true}
        />

        <FlatList data={[]}
                  renderItem={this._renderItem}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default CardView2;
