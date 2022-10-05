import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ArticleItem({Pressed, title, text}) {

  const reduceText = text[0].slice(0, 150) + '.... See more';

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}> {title} </Text>
        <Pressable onPress={Pressed} style={({pressed}) => pressed? styles.pressed:null }>
        <View style={styles.pressableContainer}>
            <View style={{padding: 8}}>
                <Text style={styles.text}> {reduceText} </Text>
            </View>
            <View style={styles.bottomView}/>
        </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       marginTop: 14,
       marginHorizontal: 20,
    },
    pressableContainer: {
       marginTop: 14,
       backgroundColor: 'white',
       borderRadius: 8,
       borderColor: 'green',
       borderWidth: 1,
       height: 140,
       elevation: 6,
       shadowColor: 'black',
       shadowOffset: {width: 1, height: 1},
       shadowOpacity: 0.5,
       shadowRadius: 6
    },
    bottomView: {
        backgroundColor: '#EDF8F1',
        width: '100%',      
        height: 30,     
        justifyContent: 'flex-end',  
        position: 'absolute',
        bottom: 0,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8, 
        
    },
    pressed: {
        opacity: 0.3,

    },
    titleText: {
        fontSize: 17,
        // fontWeight: 'bold',
        fontFamily: 'RubikMoonrocks-Regular',
        
    },
    text: {
        fontWeight: 'bold',
        color: 'gray'
    }
})