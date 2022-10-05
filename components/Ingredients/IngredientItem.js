import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProfilePhoto from '../ProfilePhoto'

export default function IngredientItem({ingredientName, ingredientPhoto, ingredientQuantity}) {
  return (

      <View style={styles.container}>
        <ProfilePhoto style={styles.profileFrame}>
          <Image source={ingredientPhoto} style={styles.image} resizeMode='contain'/>
        </ProfilePhoto>
        <Text style={styles.ingredientNameText}> {ingredientName} </Text>
        <Text style={styles.ingredientQuantityText}> {ingredientQuantity} </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  profileFrame: {
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0,
    backgroundColor: '#F6F7FC',
    // marginRight: 40,
  },
  image: {
    width: 38,
    height: 38,
  },
  ingredientNameText: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  ingredientQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})