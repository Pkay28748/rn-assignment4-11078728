import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./workscreens/loginScreen.js";
import HomeScreen from "./workscreens/homeScreen.js";


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component ={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


