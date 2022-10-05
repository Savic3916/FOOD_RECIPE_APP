import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function ProfilePhoto({style, children}) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 65,
        borderRadius: 65,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
})