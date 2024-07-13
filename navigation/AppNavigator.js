import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import styles from '../styles/styles'; // Import your global styles

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacterList"
        component={CharacterListScreen}
        options={{
          title: 'Character List',
          headerStyle: {
            backgroundColor: '#1E1E1E', 
          },
          headerTintColor: '#FFF', 
        }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={{
          title: 'Character Details',
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#FFF',
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
