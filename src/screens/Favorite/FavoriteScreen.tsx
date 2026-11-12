import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoriteScreen() {
  const navigation = useNavigation<any>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['National Park', 'Cruise Travel']);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['South Korea Travel', 'Las Vegas Travel', 'Indonesian Culture']);

  const categories = [
    'Museum & Institutions', 'National Park', 'Camping',
    'Greece Travel', 'Disneyland Resort', 'Electric Vehicle',
    'Rock Climbing', 'Cruise Travel', 'Traveling Blogger',
  ];

  const countries = [
    'Canada Travel', 'China Travel', 'South Korea Travel',
    'Las Vegas Travel', 'Indonesian Culture', 'Taj Mahal',
  ];

  const toggleItem = (item: string, list: string[], setList: (val: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSaveFavorites = async () => {
    try {
      await fetch('https://typicode.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categories: selectedCategories, countries: selectedCountries }),
      });
    } catch (e) {}
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={14} color="#000" style={styles.iconSpace} />
          <Ionicons name="wifi" size={14} color="#000" style={styles.iconSpace} />
          <Ionicons name="battery-full" size={18} color="#000" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Choose Your Favorite</Text>
        <Text style={styles.subtitle}>
          I'll choose <Text style={styles.blueBold}>5 favorite</Text> topics that become{'\n'}
          references for my future destinations or vacations
        </Text>

        <Text style={styles.sectionTitle}>Category</Text>
        <View style={styles.chipsWrap}>
          {categories.map((cat) => {
            const active = selectedCategories.includes(cat);
            return (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{cat}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>National Country</Text>
        <View style={styles.chipsWrap}>
          {countries.map((country) => {
            const active = selectedCountries.includes(country);
            return (
              <TouchableOpacity
                key={country}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => toggleItem(country, selectedCountries, setSelectedCountries)}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{country}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveFavorites}>
          <Text style={styles.primaryButtonText}>Choose Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip it now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' },
  statusBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 12 },
  timeText: { fontSize: 14, fontWeight: '800', color: '#000' },
  statusIcons: { flexDirection: 'row', alignItems: 'center' },
  iconSpace: { marginRight: 6 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 20 },
  title: { fontSize: 23, fontWeight: '900', color: '#000', marginBottom: 8 },
  subtitle: { fontSize: 12, color: '#7C7C7C', lineHeight: 18, marginBottom: 24 },
  blueBold: { color: '#549EE7', fontWeight: '700' },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#000', marginBottom: 12, marginTop: 10 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  chip: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, marginRight: 8, marginBottom: 10, backgroundColor: '#FFFFFF' },
  chipActive: { backgroundColor: '#1E242D', borderColor: '#1E242D' },
  chipText: { fontSize: 12, color: '#4A4A4A', fontWeight: '600' },
  chipTextActive: { color: '#FFFFFF' },
  footer: { paddingHorizontal: 24, paddingBottom: 24 },
  primaryButton: { backgroundColor: '#549EE7', borderRadius: 10, paddingVertical: 15, alignItems: 'center' },
  primaryButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  skipButton: { marginTop: 14, alignItems: 'center' },
  skipText: { fontSize: 13, color: '#7C7C7C', fontWeight: '600' },
});