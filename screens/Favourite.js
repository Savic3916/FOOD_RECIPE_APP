import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useSelector } from 'react-redux';
import { CATEGORYMEAL } from '../data/MyData';
import MyFeedItem from '../components/MyFeedItem';

export default function Favourite({navigation}) {

  const favouriteMealIDs = useSelector((state) => state.favouriteMeal.favID);

  const favouriteMeal = CATEGORYMEAL.filter((meals) => favouriteMealIDs.includes(meals.categoryMealID));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Favourite',
    })
  }, [navigation]);

  
  const renderCategoryMeal = (itemData) => {

    const pressHandler = () => {
      navigation.navigate('CategoryMealRecipe', {
                            categoryMealID: itemData.item.categoryMealID, 
                            categoryMealPhoto: itemData.item.illustrativePhoto,
                            categoryMealName: itemData.item.name,
                            categoryMealsIngredients: itemData.item.ingredients,
                            timeToCook: itemData.item.timeToCook,
                            recipe: itemData.item.recipe,
                          })
    };

    return(
    <MyFeedItem 
      style={styles.feedItem} 
      visualDisplay={itemData.item.illustrativePhoto} 
      categoryName={itemData.item.name}
      textViewStyle={styles.textViewStyle}
      textStyle={styles.textStyle}
      onPress={pressHandler}
    />
    )
   }
 

  if(favouriteMeal.length === 0){
    return(
      <View style={styles.container1}>
          <ImageBackground 
            source={{uri: 'https://i1.wp.com/shewearsmanyhats.com/wp-content/uploads/2014/10/lasagna-2.jpg'}} 
            resizeMode='cover' 
            style={styles.image}
            imageStyle={styles.imageStyle}
            >
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}> You have no favourite meal yet </Text>
              </View>    
        </ImageBackground>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
         <FlatList
            data={favouriteMeal}
            renderItem={renderCategoryMeal}
            keyExtractor={(item) => item.categoryMealID}
            numColumns={2}
          />
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  feedItem: {
      width: 160,
      height: 160,
  },
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: 'green',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    opacity: 0.5,
  }
})