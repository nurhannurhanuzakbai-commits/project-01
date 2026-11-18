
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  { id: '1', name: 'Museums and Institutions' },
  { id: '2', name: 'National Parks' },
  { id: '3', name: 'Camping' },
  { id: '4', name: 'Greece Travel' },
  { id: '5', name: 'Disneyland Resort' },
  { id: '6', name: 'Electric Vehicles' },
  { id: '7', name: 'Mountaineering' },
  { id: '8', name: 'Cruise Travel' },
  { id: '9', name: 'Travel Bloggers' },
];

const COUNTRIES = [
  { id: '1', name: 'Canada Travel' },
  { id: '2', name: 'China Travel' },
  { id: '3', name: 'South Korea Travel' },
  { id: '4', name: 'Las Vegas Travel' },
  { id: '5', name: 'Indonesian Culture' },
  { id: '6', name: 'Taj Mahal' },
];

export default function FavoriteScreen() {
  const navigation = useNavigation<any>();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'National Parks',
    'Cruise Travel',
  ]);

  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    'South Korea Travel',
    'Las Vegas Travel',
    'Indonesian Culture',
  ]);

  const toggleCategory = (name: string) => {
    setSelectedCategories(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const toggleCountry = (name: string) => {
    setSelectedCountries(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const totalSelectedCount =
    selectedCategories.length + selectedCountries.length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Status Bar */}
      <View style={styles.statusBarCustom}>
        <Text style={styles.timeText}>9:41</Text>

        <View style={styles.statusIcons}>
          <Ionicons
            name="cellular"
            size={14}
            color="#000000"
            style={styles.iconSpace}
          />
          <Ionicons
            name="wifi"
            size={14}
            color="#000000"
            style={styles.iconSpace}
          />
          <Ionicons
            name="battery-full"
            size={18}
            color="#000000"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Choose Your Favorite Topics
          </Text>

          <Text style={styles.subtitle}>
            Get inspired for your future trips and vacations.{' '}
            <Text style={styles.highlightText}>
              {totalSelectedCount} topics
            </Text>{' '}
            selected
          </Text>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>

          <View style={styles.chipsContainer}>
            {CATEGORIES.map(cat => {
              const isSelected = selectedCategories.includes(cat.name);

              return (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.chip,
                    isSelected && styles.chipActive,
                  ]}
                  onPress={() => toggleCategory(cat.name)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isSelected && styles.chipTextActive,
                    ]}
                  >
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Countries and Regions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Countries and Regions
          </Text>

          <View style={styles.chipsContainer}>
            {COUNTRIES.map(country => {
              const isSelected = selectedCountries.includes(country.name);

              return (
                <TouchableOpacity
                  key={country.id}
                  style={[
                    styles.chip,
                    isSelected && styles.chipActive,
                  ]}
                  onPress={() => toggleCountry(country.name)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isSelected && styles.chipTextActive,
                    ]}
                  >
                    {country.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Home' as never)}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>
              Confirm Selection
            </Text>
            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('Home' as never)}
            activeOpacity={0.7}
          >
            <Text style={styles.skipButtonText}>
              Skip for Now
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Status Bar
  statusBarCustom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 4,
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

  // Scroll Content
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
  },

  // Header
  headerContainer: {
    marginBottom: 42,
  },

  title: {
    fontSize: 25,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 12,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 20,
  },

  highlightText: {
    color: '#549EE7',
    fontWeight: '700',
  },

  // Sections
  sectionContainer: {
    marginBottom: 38,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 18,
  },

  // Chips
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },

  chipActive: {
    backgroundColor: '#1E293B',
    borderColor: '#1E293B',
  },

  chipText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#334155',
  },

  chipTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Bottom Buttons
  buttonContainer: {
    marginTop: 'auto',
    paddingTop: 15,
    gap: 16,
  },

  primaryButton: {
    backgroundColor: '#549EE7',
    borderRadius: 14,
    paddingVertical: 17,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    shadowColor: '#549EE7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  skipButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },

  skipButtonText: {
    color: '#7C7C7C',
    fontSize: 13,
    fontWeight: '600',
  },
});
