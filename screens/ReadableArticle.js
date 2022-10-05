import { StyleSheet, Text, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Colors from '../constants/Colors';

export default function ReadableArticle({navigation, route}) {
  
  const text = route.params?.text;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {backgroundColor: Colors.primary100},
    })
  }, [navigation])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})