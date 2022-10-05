import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import Buttons from '../components/Buttons'

export default function HomeScreen({navigation, route}) {

    const loginPageHandler = () => {
        navigation.navigate('Login')
    };
    const signupPageHandler = () => {
        navigation.navigate('SignUp')
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])

  return (
   <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/images/homescreenbackground.jpg')}
        resizeMode='cover'
        style={styles.image}
      >
           <LinearGradient colors={['transparent', 'transparent', '#080402', '#010101']} style={styles.gradient}>
               <View style={styles.container}>
                    <Text style={styles.largeText}> Cooking a {'\n'} Delicious Food {'\n'} Easily</Text>
                    <Text style={styles.smallText}> Discover more than 100 foods {'\n'} recipes in your hands and cooking  {'\n'} it easily. </Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}><Buttons style={styles.button} onPress={loginPageHandler}> Login </Buttons></View>
                        <View style={styles.buttonView}><Buttons style={styles.button} onPress={signupPageHandler}> Sign Up </Buttons></View>
                    </View>
                
               </View>
            </LinearGradient>
      </ImageBackground>
   </View>

  )
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    gradient: {
         flex: 1, 
    },
    container: {
        flex: 1,
        marginTop: screenHeight < 700? 140 : 280,
        marginHorizontal: 15,
    },
    buttonContainer: {
        marginTop: screenHeight < 700? 20 : 40,
        alignItems: 'center',
    },
    buttonView: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        marginBottom: 20,
        height: screenWidth < 340? 50 : 65,
    },
    largeText: {
        fontSize: screenWidth < 340? 23 : 40,
        color: 'white',
        fontFamily: 'Helvetica-Bold',
        marginBottom: screenWidth < 340? 5 : 10,
    },
    smallText: {
        paddingLeft: screenWidth < 340? 4 : 8,
        color: 'gray',
        fontSize: screenWidth < 340? 9 : 14,
    },

})