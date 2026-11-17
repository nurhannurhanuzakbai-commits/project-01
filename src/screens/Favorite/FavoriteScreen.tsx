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
  { id: '1', name: 'Мұражайлар мен мекемелер' },
  { id: '2', name: 'Ұлттық парк' },
  { id: '3', name: 'Кемпинг' },
  { id: '4', name: 'Грекия саяхаты' },
  { id: '5', name: 'Disneyland курорты' },
  { id: '6', name: 'Электромобиль' },
  { id: '7', name: 'Альпинизм' },
  { id: '8', name: 'Круиз саяхаты' },
  { id: '9', name: 'Саяхат блогерлері' },
];

const COUNTRIES = [
  { id: '1', name: 'Канада саяхаты' },
  { id: '2', name: 'Қытай саяхаты' },
  { id: '3', name: 'Оңтүстік Корея саяхаты' },
  { id: '4', name: 'Лас-Вегас саяхаты' },
  { id: '5', name: 'Индонезия мәдениеті' },
  { id: '6', name: 'Тәж-Махал' },
];

export default function FavoriteScreen() {
  const navigation = useNavigation<any>();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Ұлттық парк', 'Круиз саяхаты'
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    'Оңтүстік Корея саяхаты', 'Лас-Вегас саяхаты', 'Индонезия мәдениеті'
  ]);

  const toggleCategory = (name: string) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(selectedCategories.filter(item => item !== name));
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const toggleCountry = (name: string) => {
    if (selectedCountries.includes(name)) {
      setSelectedCountries(selectedCountries.filter(item => item !== name));
    } else {
      setSelectedCountries([...selectedCountries, name]);
    }
  };

  const totalSelectedCount = selectedCategories.length + selectedCountries.length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Жоғарғы статус-бар */}
      <View style={styles.statusBarCustom}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="wifi" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="battery-full" size={18} color="#000000" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Тақырып блогы */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Өзіңізге ұнайтын тақырыпты таңдаңыз</Text>
          <Text style={styles.subtitle}>
            Болашақ саяхаттарыңыз бен демалыстарыңызға бағдар болу үшін{' '}
            <Text style={styles.highlightText}>{totalSelectedCount} тақырып</Text> таңдалды
          </Text>
        </View>

        {/* Санаттар бөлімі */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Санаттар</Text>
          <View style={styles.chipsContainer}>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat.name);
              return (
                <TouchableOpacity
                  key={cat.id}
                  style={[styles.chip, isSelected && styles.chipActive]}
                  onPress={() => toggleCategory(cat.name)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Мемлекеттер мен аймақтар бөлімі */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Мемлекеттер мен аймақтар</Text>
          <View style={styles.chipsContainer}>
            {COUNTRIES.map((country) => {
              const isSelected = selectedCountries.includes(country.name);
              return (
                <TouchableOpacity
                  key={country.id}
                  style={[styles.chip, isSelected && styles.chipActive]}
                  onPress={() => toggleCountry(country.name)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                    {country.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Растау және өткізу батырмалары (төменге қарай үлкенірек отступ берілді) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Home' as never)}
          >
            <Text style={styles.primaryButtonText}>Таңдауды растау</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('Home' as never)}
          >
            <Text style={styles.skipButtonText}>Әзірге өткізіп жіберу</Text>
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24, // Жоғарыдан көбірек орын қалдырылды
    paddingBottom: 50,
  },
  headerContainer: {
    marginBottom: 28, // Тақырып пен санаттардың арасы алшақтатылды
  },
  title: {
    fontSize: 23,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#7C7C7C',
    lineHeight: 18,
  },
  highlightText: {
    color: '#549EE7',
    fontWeight: '700',
  },
  sectionContainer: {
    marginBottom: 28, // Санаттар мен елдер блоктарының арасы ашылды
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 14, // Тақырыпша мен чиптердің арасы үлкейтілді
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10, // Чиптердің өзара арақашықтығы сәл ашылды
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 12, // Чиптердің биіктігі толық әрі әдемі болуы үшін ұлғайтылды
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
  buttonContainer: {
    marginTop: 20, // Батырмалар жоғарығы блоктан алшақтатылып, төменге түсірілді
    gap: 14,
  },
  primaryButton: {
    backgroundColor: '#549EE7',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#549EE7',
    shadowOffset: { width: 0, height: 4 },
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
    paddingVertical: 10,
  },
  skipButtonText: {
    color: '#7C7C7C',
    fontSize: 13,
    fontWeight: '600',
  },
});