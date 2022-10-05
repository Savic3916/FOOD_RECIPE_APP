import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { CATEGORYMEAL } from '../data/MyData';
import MyFeedItem from '../components/MyFeedItem';
import Colors from '../constants/Colors';

export default function TrendingRecipe({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: Colors.primary100},
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
       };
     

        /*
        trending recipe codes
        finding 12 random meals
    */

        
      let allArray = [];
      let randomNumbers = [];
       
      for(let a = 0; a < 9; a++){
           // get random number between 1 and 33
           let randomNumber = Math.ceil(Math.random() * 33);
          //  check if random number has already been created
          if(randomNumbers.includes(randomNumber)){
            randomNumber = Math.ceil(Math.random() * 33);
            randomNumbers.push(randomNumber);
          }else{
            randomNumbers.push(randomNumber);
          }
       };

       for(let b = 0; b < randomNumbers.length; b++){
         // fix the letter 'm' in front of the random number to depict each category meal
         let categoryMeal = 'm' + randomNumbers[b];
         // filter based on the categorymeal ID
         let eachCategoryMealItem = CATEGORYMEAL.filter((meal) => meal.categoryMealID === categoryMeal);

         allArray = [...allArray, ...eachCategoryMealItem];
       }

       
  return (
    <View style={styles.container}>
      <FlatList 
        data={allArray}
        renderItem={renderCategoryMeal}
        keyExtractor={(item) => item.categoryMealID}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    }
})