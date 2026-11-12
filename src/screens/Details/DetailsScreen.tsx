import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Обязательно должно быть написано export default function
export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>3. Толық мәлімет (Details) беті</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  text: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  }
});