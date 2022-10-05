import { StyleSheet, Pressable } from 'react-native'
import React from 'react'


export default function IconButton({children, onPress}){

  return (
    <Pressable style={({pressed}) => pressed? [styles.pressable, styles.pressed]: styles.pressable} onPress={onPress}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressable: {
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.5,
    },
})