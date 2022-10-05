import { StyleSheet, ImageBackground, View, Text, Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function MyFeedItem({visualDisplay, categoryName, style, textViewStyle, textStyle, onPress}) {

  return (    
    <View style={[styles.feedItem, style]}>
        <ImageBackground source={{uri: visualDisplay}} style={styles.image} resizeMode='cover'>
            <Pressable 
                style={({pressed}) => pressed? [styles.pressable, styles.pressed]: styles.pressable}
                onPress={onPress}
                >
                <View style={[styles.textView, textViewStyle]}>
                    <Text style={[styles.text, textStyle]}>{ categoryName }</Text>
                </View>
            </Pressable>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    feedItem: {
        borderRadius: 18,
        width: 140,
        height: 140,
        overflow: 'hidden',
        margin: 10,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 4,
    },
    pressable: {
        width: 160,
        height: 160,
    },
    pressed: {
        backgroundColor: Colors.primary100,
        opacity: 0.5
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        marginLeft: 5,
        marginTop: 10,
        width: 65,
        borderRadius: 8,
        opacity: 0.7,
        padding: 2,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 11,
        color: 'white',
        fontWeight: 'bold',
    }
})