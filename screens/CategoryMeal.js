import { StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react';

import { CATEGORYMEAL } from '../data/MyData';
import MyFeedItem from '../components/MyFeedItem';
import Colors from '../constants/Colors';

export default function CategoryMeal({navigation, route}) {
   const catID = route.params.myCategoryID;
   const catName = route.params.myCategoryName;
   const background = route.params.backgroundPhoto;

//    getting all items belonging to a category
   const categoryMeals = CATEGORYMEAL.filter((category) => category.categoryID === catID);  

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
 
    useLayoutEffect(() => {
        navigation.setOptions({
            title: catName,
            headerStyle: {backgroundColor: Colors.primary100},
            headerTitleAlign: 'center',
        })
    }, [navigation]);

  return (
    <View style={styles.screen}>
      <ImageBackground 
            style={styles.imageBackground} 
            resizeMode='cover' source={{uri: background}} 
            imageStyle={styles.image}
      >
        <View style={styles.container}>
          <FlatList 
            data={categoryMeals}
            renderItem={renderCategoryMeal}
            keyExtractor={(item) => item.categoryMealID}
            numColumns={2}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageBackground: {
      flex: 1,
    },
    image: {
      opacity: 0.2,
    },
    container: {
       alignItems: 'center',
       flex: 1,
       marginVertical: 15,
       margingHorizontal: 10,
    },
    feedItem: {
      width: 160,
      height: 160,
    },
    textViewStyle: {
      backgroundColor: Colors.primary100,
     
    },
    textStyle: {
      color: 'green',
    }
})