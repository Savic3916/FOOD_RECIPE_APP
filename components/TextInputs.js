import { StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

export default function TextInputs({ placeholder, userName, userNameTextHandler, placeholderColor, style }) {
  return (
    <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={placeholderColor}
        style={[styles.textInput, style]} 
        value={userName} 
        keyboardType={'default'} 
        maxLength={20}
        onChangeText={userNameTextHandler}
    />
  )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    textInput: {
        width: '85%',
        height: screenWidth < 340? 38 : 50,
        borderWidth: 2,
        borderColor: Colors.signUpPageColor100,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        color: 'black',
        fontSize: screenWidth < 340? 10 : 15,
        fontWeight: 'bold',
        
      },
})