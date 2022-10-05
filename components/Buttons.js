import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Buttons({children, style, onPress, textStyle}) {
  return (
    <View style={[styles.button, style]}>
        <Pressable style={({pressed}) => pressed? 
                   [styles.pressableContainer, styles.pressed]: styles.pressableContainer}
                   onPress={onPress}
                   >
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </Pressable>
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button: {
        height: 65,
        width: '90%',
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: Colors.primary300,
        borderWidth: 2,
        elevation: 4,
        shadowColor: 'green',
        shadowOffset: {height: 0, width: 1},
        shadowOpacity: 0.6,
        shadowRadius: 4,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    pressableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        backgroundColor: 'black'
    },
    pressed: {
        backgroundColor: Colors.primary300,
    },
    text: {
        fontSize: screenWidth < 340? 12 : 17,
        color: 'white',
        fontWeight: 'bold',
    }
})