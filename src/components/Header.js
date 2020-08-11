import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { w, BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: BLUE,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 90
      }
    )
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 75,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 40
      }
    )
  },
  iconLeftStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 40
      }
    ),
    fontSize: 35
  },
  iconRightStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 44
      }
    ),
    fontSize: 30,
    marginRight: 3
  }
})

const Header = ({ iconLeft, iconRight, colorLeft, colorRight, title, onPressLeft, onPressRight }) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {title}
      </Text>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight }]} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export { Header }
