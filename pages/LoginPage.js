import { StyleSheet, Text, View, ImageBackground, Alert, Dimensions } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'

import Card from '../components/Card'
import Colors from '../constants/Colors'
import TextInputs from '../components/TextInputs'
import Buttons from '../components/Buttons'

export default function LoginPage({navigation, route}) {
  const [userName, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const userNameTextHandler = (enteredUserName) => {
    setUserName(enteredUserName);
  };

  const passwordTextHandler = (enterPassword) => {
    setPassWord(enterPassword)
  };

  const buttonHandler = () => {
    if(userName === 'Savic' && password === '12345'){
      setUserName('');
      setPassWord('');
      navigation.navigate('BottomTabs', {userName: 'Hello'})
    }else{
      Alert.alert('Login Error', 'Username and password mismatch', [{style: 'cancel'}])
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: '#E9E8EE'},
      title: '',
      headerTransparent: true,
    })
  }, [navigation])

  console.log(userName + ' ' + password)
  return (
    <View style={styles.page}>
      <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/loginscreenbackground.jpg')}
          resizeMode='cover'
      >
        <View>
          <Text style={styles.loginText}> Log-in </Text>
          <View style={styles.cardView}>
            <Card style={styles.card}>
              <TextInputs 
                style={styles.textInput}
                placeholder='Username'
                placeholderColor='white'
                userName={userName}
                userNameTextHandler={userNameTextHandler}
              />
              <TextInputs
                style={styles.textInput}
                placeholder='Password'
                placeholderColor='white'
                userName={password}
                userNameTextHandler={passwordTextHandler}
              />
              <View style={styles.buttonView}>
                <View style={styles.buttonContainer}><Buttons style={styles.button} onPress={buttonHandler}> Login </Buttons></View>
                <Text style={styles.text}> Do you have an account? 
                  <Text style={styles.text1}> Sign Up </Text>
                </Text>
              </View>
            </Card>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  cardView: {
    alignItems: 'center'
  },
  card: {
    marginTop: 10,
    width: '90%',
    height: screenHeight < 700? 252 : 330,
    paddingTop: 20,
    backgroundColor: 'black',
    shadowColor: 'green',
    opacity: 0.6,
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    fontSize: screenWidth < 340? 27 : 35,
    fontFamily: 'Roboto-Bold',
    color: Colors.signUpPageColor200,
    marginLeft: 10,
  },
  text: {
    fontSize: screenWidth < 340? 11 : 14,
    fontWeight: 'bold',
    color: 'white'
  },
  text1: {
    color: 'green'
  },
  textInput: {
    borderColor: 'white',
    color: 'white',
    width: '80%',
  },
  buttonView: {
    width: '100%',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: screenHeight < 700? 15 : 30,
    marginBottom: 10,
  },
  button: {
   height: screenHeight < 700? 45 : 60,
  }
})