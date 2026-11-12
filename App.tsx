import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import OTPScreen from './src/screens/OTP/OTPScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import DetailsScreen from './src/screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}