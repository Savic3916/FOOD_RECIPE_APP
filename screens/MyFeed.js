import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import React, {useLayoutEffect} from 'react';
import { StatusBar } from 'expo-status-bar';

import Colors from '../constants/Colors'
import TextInputs from '../components/TextInputs';
import MyFeedItem from '../components/MyFeedItem';
import { CATEGORIES } from '../data/MyData';

export default function MyFeed({navigation}) {

    const renderFeedItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('CategoryMeal', 
                {
                myCategoryID: itemData.item.id, 
                myCategoryName: itemData.item.name, 
                backgroundPhoto: itemData.item.illustrativePhoto
            });
        };
        return <MyFeedItem 
                    visualDisplay={itemData.item.illustrativePhoto} 
                    categoryName={itemData.item.name} 
                    categoryID = {itemData.item.id}
                    onPress={pressHandler}
                />
    }
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true, 
        });
    }, [navigation])
  return (
    <>
    <StatusBar style='dark'/>
    <View style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.welcomeText}>  HELLO SAVIC, </Text>
            <Text style={styles.text}>    What do you want to cook today? </Text>
            <View style={styles.textInputView}>
                <TextInputs style={styles.textInput} placeholder='Search Recipes' placeholderColor='#D3D3D3'/>
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.recipeContainer}>
                    <Pressable 
                        style={({pressed}) => pressed? [styles.pressableConainer, styles.pressed]: styles.pressableConainer}
                        onPress={() => navigation.navigate('TrendingRecipe')}
                        >
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/recipeImage.png')} style={styles.image}/>
                        </View>
                        <View style={styles.recipeTextContainer}>
                            <Text style={styles.recipeText}> You have 9 recipes that {'\n'} you haven't tried yet {'\n'}
                                <View style={styles.innerRecipeTextContainer}>
                                    <Text style={styles.recipeText1}> See Recipe </Text>
                                </View>
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.categoryView}>
                <Text style={styles.categoryText}> Categories </Text>
                <FlatList 
                    data={CATEGORIES}
                    renderItem={renderFeedItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor100,
    },
    container: {
        marginTop: 30,
        padding: 15,
        paddingBottom: 0,
        flex: 1,
    },
    pressableConainer: {
        flexDirection: 'row',
        padding: 10,
    },
    pressed: {
        opacity: 0.5,
    },
    recipeContainer: {
        backgroundColor: Colors.primary100,
        width: '94%',
        height: 100,
        marginBottom: 5,
        alignItems: 'center',
        borderRadius: 12,
        overflow: 'hidden'
    },
    categoryView: {
        marginLeft: 8,
        flex: 1,
    },
    imageContainer: {
        height: '100%',
        width: 100,
    },
    image: {
        height: 90,
        width: 95,
    },
    welcomeText: {
        color: Colors.primary400,
        fontSize: 30,
        fontFamily: 'Roboto-Bold',
   },
    text: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoryText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25
    },
    textInputView: {
        marginTop: 10,
        alignItems: 'center'
    },
    textInput: {
        borderColor: '#F6F7FC',
        backgroundColor: '#F6F7FC',
        width: '94%',
        height: 40,
        color: 'green'
    },
    recipeTextContainer: {
        justifyContent: 'center',
    },
    innerRecipeTextContainer: {
        borderBottomColor: Colors.primary400,
        borderBottomWidth: 2,
    },
    recipeText: {
        marginLeft: 20,
        color: 'gray',
    },
    recipeText1: {
        color: Colors.primary400,
        fontWeight: 'bold',
        fontSize: 15,
    }
})