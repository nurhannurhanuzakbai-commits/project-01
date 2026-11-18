import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Барлық экрандарды папкаларына сәйкес дұрыс импорттау:
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import OTPScreen from './src/screens/OTP/OTPScreen';
import FavoriteScreen from './src/screens/Favorite/FavoriteScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import DetailDestinationScreen from './src/screens/Details/DetailsScreen'; // Егер файл аты басқа болса соған қараңыз
import SearchScreen from './src/screens/Favorite/Search/SearchScreen';
import NotificationScreen from './src/screens/Notification/NotificationScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import AboutScreen from './src/screens/About/AboutScreen';
import ListDestinationScreen from './src/screens/List/ListDestinationScreen';
import DateScreen from './src/screens/Date/DateScreen';
import MessageScreen from './src/screens/Message/MessageScreen';
import PaymentMethodScreen from './src/screens/Payment/PaymentMethodScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailDestinationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ListDestination" component={ListDestinationScreen} />
        <Stack.Screen name="Date" component={DateScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}