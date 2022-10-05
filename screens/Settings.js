import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Settings({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Settings',
        })
    }, [navigation])
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({})