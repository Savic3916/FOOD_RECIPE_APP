import { StyleSheet, Text, View, ImageBackground, Image, } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/favourites';
import ProfilePhoto from '../components/ProfilePhoto';
import Ingredients from '../components/Ingredients/Ingredients';
import IconButton from '../components/IconButton';

export default function CategoryMealRecipe({navigation, route}) {

    const categoryMealID = route.params.categoryMealID;
    const categoryMealPhoto = route.params.categoryMealPhoto;
    const categoryMealName = route.params.categoryMealName;
    const categoryMealIngredients = route.params.categoryMealsIngredients
    const timeToCook = route.params.timeToCook;
    const recipe = route.params.recipe;

    const favouriteMealIDs = useSelector((state) => state.favouriteMeal.favID);
    const dispatch = useDispatch();

    // check if meal is favourite or not
    const mealIsFavourite = favouriteMealIDs.includes(categoryMealID);

    const addFav = (id) => {
        dispatch(addFavourite([...favouriteMealIDs, id]));
    };
    const remFav = (id) => {
        dispatch(removeFavourite(favouriteMealIDs.filter((favId) => favId !== id)));
    }

    const iconPressHandler = () => {
        if(mealIsFavourite){
            remFav(categoryMealID);
        }else{
            addFav(categoryMealID);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerTransparent: true,
            headerRight: () => {
                return (
                <IconButton onPress={iconPressHandler}>
                    <Ionicons name={mealIsFavourite? 'bookmark' : 'bookmark-outline'} size={24} color="green" />
                </IconButton>
                )}
        })
    }, [navigation, iconPressHandler]);

  

  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: categoryMealPhoto}} resizeMode='cover'>
                <View style={styles.imageView} >
                    <ProfilePhoto>
                         <Image source={require('../assets/images/savic.png')} resizeMode='cover' style={styles.profilePhotoImage} />
                    </ProfilePhoto>
                    <View style={styles.textView}>
                        <Text style={styles.imageText1}>  Designed by {'\n'}
                            <Text style={styles.imageText2}> Savic</Text>
                        </Text>
                    </View>
                    <View style={styles.iconView}>
                        <IconButton onPress={iconPressHandler}>
                            <AntDesign  name='arrowright' size={20} color='#90ee90'/>
                        </IconButton>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.secondContainer}>
                <Text style={styles.text}> {categoryMealName} </Text>
                <Text style={{marginLeft: 6, color: 'gray'}}> {timeToCook} | 1 serving </Text>
                <Ingredients catMealIngredients={categoryMealIngredients} recipe={recipe}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    secondContainer: {
        flex: 2,
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
    },
    image:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconImage: {
        width: 20,
        height: 50,
    },
    profilePhotoImage: {
        height: 58,
        width: 50,
    },
    imageView: {
        flexDirection: 'row',
        backgroundColor: 'black',
        opacity: 0.8,
        width: '90%',
        height: 80,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    textView: {
        paddingLeft: 10,
        paddingRight: 90,
    },
    imageText1:{
            color: 'gray',
            fontWeight: 'bold',
            fontSize: 13,
            
    },
    imageText2: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Helvetica-Bold',
    },
    iconView: {
        borderWidth: 2,
        borderColor: '#90ee90',
        borderRadius: 10,
        width: 40,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})
