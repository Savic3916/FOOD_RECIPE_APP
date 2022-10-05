import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyFeed from './screens/MyFeed';
import Articles from './screens/Articles';
import Settings from './screens/Settings';
import CategoryMeal from './screens/CategoryMeal';
import Favourite from './screens/Favourite';
import CategoryMealRecipe from './screens/CategoryMealRecipe';
import Colors from './constants/Colors';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import ReadableArticle from './screens/ReadableArticle';
import TrendingRecipe from './screens/TrendingRecipe';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  const Bottom = () => {
    return(
      <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: '#EDF8F1', tabBarActiveTintColor: '#12937B', tabBarInactiveTintColor: '#AFE1AF', tabBarHideOnKeyboard: true, tabBarStyle: {height: 45, justifyContent: 'center'}}}>
        <Tab.Screen name='MyFeed' component={MyFeed} options={{
          title: '' ,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => {
            return (<Octicons name="home" size={20} color={color} />)},
        }}/>
        <Tab.Screen name='Article' component={Articles} options={{
           title: 'Article' ,
           headerStyle: {backgroundColor: Colors.primary100},
           headerTitleAlign: 'center',
          tabBarIcon: ({ size, color }) => {
            return(<Feather name="file-text" size={20} color={color} />)},
        }}/>
        <Tab.Screen name='Favourite' component={Favourite} options={{
           title: 'Favourite' ,
           headerStyle: {backgroundColor: Colors.primary100},
           headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => {
            return(<Ionicons name="bookmark-outline" size={20} color={color} />)},
        }}/>
        <Tab.Screen name='Settings' component={Settings} options={{
           title: 'Settings',
           headerStyle: {backgroundColor: Colors.primary100},
           headerTitleAlign: 'center',
           tabBarIcon: ({size, color}) => {
            return (<Ionicons name="settings-outline" size={20} color={color} />)},
        }}/>
      </Tab.Navigator>
    )
  }
  
  const [fontLoaded] = useFonts({
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'SyneMono': require('./assets/fonts/SyneMono-Regular.ttf'),
    'BhuTuka': require('./assets/fonts/BhuTukaExpandedOne-Regular.ttf'),
    'RubikMoonrocks-Regular': require('./assets/fonts/RubikMoonrocks-Regular.ttf')
  });

  if(!fontLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style='light'/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Login' component={LoginPage}/>
            <Stack.Screen name='SignUp' component={SignUpPage}/>
            <Stack.Screen name='BottomTabs' component={Bottom} options={{ headerShown: false, }}/>
            <Stack.Screen name='CategoryMeal' component={CategoryMeal}/>
            <Stack.Screen name='CategoryMealRecipe' component={CategoryMealRecipe}/>
            <Stack.Screen name='ReadableArticle' component={ReadableArticle}/>
            <Stack.Screen name='TrendingRecipe' component={TrendingRecipe}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </>
  );
}

const styles = StyleSheet.create({
 
});
