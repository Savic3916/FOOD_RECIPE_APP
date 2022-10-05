import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { INGRIDIENTS } from '../../data/MyData';
import IngredientItem from './IngredientItem';
import Colors from '../../constants/Colors';


export default function Ingredients({catMealIngredients, recipe}) {
  // list of ingredients
  const particularMealIngredients = catMealIngredients;

  // length of ingredients
  const particularMealIngredientsLength = catMealIngredients.length;

  // an empty array
  let ingredientList = [];
  
  for(let a = 0; a < particularMealIngredientsLength; a++){
    const myIngredients = INGRIDIENTS.filter((ingredients) => ingredients.ingridentsID === particularMealIngredients[a]);
    ingredientList = [...ingredientList, ...myIngredients];
  };


  return (
    <View style={styles.container}>
      <View style={styles.ingredientsContainerOne}> 
      <View style={styles.textContainer}>
         <Text style={styles.ingredientsText}>Ingredients</Text>
      </View>
         <Text style={styles.itemText}> {particularMealIngredientsLength } items </Text>
      </View>
      <View style={styles.ingredientsContainerTwo}> 
        <FlatList 
          data={ingredientList} 
          renderItem={(itemData) => <IngredientItem 
                                        ingredientName={itemData.item.ingridientName}
                                        ingredientPhoto={itemData.item.ingridentsPhotos}
                                        ingredientQuantity={itemData.item.quantity}
                                        />}
          keyExtractor={(item) => item.ingridentsID}
        />
      </View>
      <ScrollView style={{flex: 1}}>
          {recipe.map((element) => 
                                <View style={styles.recipeContainer} key={element}>
                                  <Text style={styles.recipeText}> {element} </Text>
                                </View>
          )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  ingredientsContainerOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientsContainerTwo: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    paddingBottom: 10,
  },
  ingredientsText: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
  },
  textContainer: {
    width: 95,
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    alignItems: 'center',
    padding: 3,
  },
  itemText: {
    color: 'gray',
  },
  recipeContainer: {
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    // alignItems: 'center',
  },
  recipeText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
})