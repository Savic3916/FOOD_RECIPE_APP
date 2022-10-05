import { StyleSheet, FlatList, View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'

import ArticleItem from '../components/article/ArticleItem';
import { ARTICLES } from '../data/MyData';

export default function Articles({navigation}) {
  
  const renderItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('ReadableArticle', {title: itemData.item.name, text: itemData.item.text})
    };
    return(
      <ArticleItem Pressed={pressHandler} title={itemData.item.name} text={itemData.item.text}/>
  )}

  useLayoutEffect(() => {
    navigation.setOptions({
     
      headerTitle: 'Articles',
    })
  }, [navigation]);


  return (
    <View style={styles.container}>
      <FlatList 
        data={ARTICLES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})