import { StyleSheet, ImageBackground, View, Text, Alert, Dimensions } from 'react-native';
import React, {useLayoutEffect, useState} from 'react';

import Colors from '../constants/Colors';
import Card from '../components/Card';
import Buttons from '../components/Buttons';
import TextInputs from '../components/TextInputs';


export default function SignUpPage({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [usernamePasswordList, setUsernamePasswordList] = useState([])

  const userNameTextHandler = (enteredUserName) => {
    setUserName(enteredUserName);
  };

  const passwordTextHandler = (enterPassword) => {
    setPassWord(enterPassword)
  };

  const userDetailListHandler = () => {
    setUsernamePasswordList((myList) => [...myList, {username: userName, password: password}]);
    setUserName('');
    setPassWord('')
    Alert.alert('IMPORTANT!!!', "ALREADY SIGN UP? ",[{text: 'LOGIN', onPress: () => navigation.navigate('Login', {signupList: usernamePasswordList}), style: 'default'}, 
    {text: 'CANCEL', onPress: () => navigation.navigate('Home'), style: 'default'}])
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true,
    })
  }, [navigation])
  
  return (
    <View style={styles.page}>
      <ImageBackground 
        resizeMode='cover'
        style={styles.image}
        source={require('../assets/images/signupPageBackground.jpg')}
      >
          <View style={styles.container}>
            <Text style={styles.text}> Sign Up </Text>
            <View style={styles.cardView}>
              <Card style={styles.card}>
                <TextInputs 
                  placeholder='Username'
                  placeholderColor='white'
                  userName={userName}
                  userNameTextHandler={userNameTextHandler}
                  style={styles.textInput}
                />
                <TextInputs 
                  placeholder='Password'
                  placeholderColor='white'
                  userName={password}
                  userNameTextHandler={passwordTextHandler} 
                  style={styles.textInput}
                />
                  <Text style={styles.cardText}> By Selecting Agree and Continue below {'\n'} I agree to 
                    <Text style={styles.cardText2}> Terms of Service and Privacy Policy </Text>
                  </Text>
                  <View style={styles.buttonView}><Buttons style={styles.button} textStyle={styles.buttontext} onPress={userDetailListHandler}> Agree and Continue </Buttons></View>
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
    justifyContent: "center"
  },
  container: {
    marginTop: screenHeight < 700? 40 : 130,
    marginHorizontal: 8,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: screenWidth < 340? 24 : 35,
    color: Colors.signUpPageColor200,
    marginLeft: 10,
  },
  cardText: {
    fontSize: screenWidth < 340? 9 : 13,
    fontWeight: 'bold',
  },
  cardText2: {
    color: '#492D20',
  },
  cardView: {
    alignItems: 'center'
  },
  card: {
    marginTop: 10,
    height: screenHeight < 700? 250 : 380,
    paddingTop: 20,
    backgroundColor: Colors.primary200,
    shadowColor: 'green',
    opacity: 0.7,
    alignItems: 'center'
  }, 
  textInput: {
    borderColor: Colors.signUpPageColor200,
  },
  button: {
    marginTop: screenHeight < 700? 20 : 50,
    borderColor: 'transparent',
    backgroundColor: 'black',
    height: screenHeight < 700? 45 : 60,
  },
  buttonView: {
    width: '90%',
    alignItems: 'center',
    color: Colors.signUpPageColor100,

  },
  buttontext: {
    fontSize: screenHeight < 700? 11 : 18,
    fontWeight: 'bold',
 }
})