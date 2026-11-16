import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoriteScreen() {
  const navigation = useNavigation<any>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'National Park',
    'Cruise Travel',
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    'South Korea Travel',
    'Las Vegas Travel',
    'Indonesian Culture',
  ]);

  const categories = [
    'Museum & Institutions', 'National Park', 'Camping',
    'Greece Travel', 'Disneyland Resort', 'Electric Vehicle',
    'Rock Climbing', 'Cruise Travel', 'Travelling Blogger',
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
        body: JSON.stringify({
          categories: selectedCategories,
          countries: selectedCountries,
        }),
      });
    } catch (e) {}
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы статус-бар */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="wifi" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="battery-full" size={18} color="#000000" />
        </View>
      </View>

      {/* Негізгі таңдау бөлімі */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Choose Your Favorite</Text>
        <Text style={styles.subtitle}>
          I'll chose <Text style={styles.blueBold}>5 favorite</Text> topics that became{'\n'}
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
                activeOpacity={0.8}
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
                activeOpacity={0.8}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{country}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Төменгі батырмалар */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveFavorites}>
          <Text style={styles.primaryButtonText}>Choose Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favorite')} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpace: {
    marginRight: 6,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 20,
    marginBottom: 28,
  },
  blueBold: {
    color: '#5EC2F2',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 14,
    marginTop: 12,
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  chipActive: {
    backgroundColor: '#567396',
    borderColor: '#567396',
  },
  chipText: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#72CEF9',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  skipButton: {
    marginTop: 14,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 13,
    color: '#8E8E93',
    textDecorationLine: 'underline',
  },
});