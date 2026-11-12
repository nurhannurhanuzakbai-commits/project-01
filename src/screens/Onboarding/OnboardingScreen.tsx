import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => navigation.navigate('Register')}
    >
      <ImageBackground
        source={require('../../../assets/onboard.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});