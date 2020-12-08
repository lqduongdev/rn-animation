/**
 * FreeTimeAnimation
 * Created by leduong on 01/12/2020
 */
import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import color from 'color'
import Colors from '../../../style/Colors'

class Neumorphism extends PureComponent {

  render () {
    const { children } = this.props

    return (
      <View style={styles.morphTop}>
        <View style={styles.morphBottom}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  morphTop: {
    borderRadius: 10,
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    shadowColor: color(Colors.primary.white).darken(0.5).alpha(0.4).toString(),
  },
  morphBottom: {
    borderRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    shadowColor: color(Colors.primary.dark).lighten(0.5).alpha(0.4).toString(),
  },
})

export default Neumorphism
