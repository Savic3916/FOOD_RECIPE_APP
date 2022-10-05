import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({children, style}) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
       
    }
})