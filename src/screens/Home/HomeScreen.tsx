import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const CATEGORIES = ['All', 'Mountain', 'Beach', 'Camp', 'Forest'];

const PLACES = [
  {
    id: '1',
    title: 'Kolsai Lakes',
    location: 'Almaty, Kazakhstan',
    price: '$120',
    rating: '4.9',
    category: 'Mountain',
    image: 'https://unsplash.com',
    description: 'Beautiful mountain lakes surrounded by pine forests and fresh alpine air.',
  },
  {
    id: '2',
    title: 'Bali Island',
    location: 'Denpasar, Indonesia',
    price: '$350',
    rating: '4.8',
    category: 'Beach',
    image: 'https://unsplash.com',
    description: 'Tropical paradise with crystal clear beaches, temples, and vibrant culture.',
  },
  {
    id: '3',
    title: 'Swiss Alps Camp',
    location: 'Zermatt, Switzerland',
    price: '$480',
    rating: '5.0',
    category: 'Camp',
    image: 'https://unsplash.com',
    description: 'Unforgettable camping experience under the stars in the heart of the Alps.',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlaces = PLACES.filter((place) => {
    const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
    const matchesSearch =
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Жоғарғы сәлемдесу */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Bessie 👋</Text>
            <Text style={styles.headerTitle}>Where do you want to go?</Text>
          </View>
          <TouchableOpacity style={styles.notifButton}>
            <Ionicons name="notifications-outline" size={22} color="#222222" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        {/* Іздеу жолағы */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search destination..."
              placeholderTextColor="#8E8E93"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Санаттар */}
        <Text style={styles.sectionTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[styles.categoryChip, isActive && styles.categoryChipActive]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Танымал бағыттар */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {filteredPlaces.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Details', { place: item })}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.ratingBadge}>
              <FontAwesome name="star" size={12} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>

            <View style={styles.cardInfo}>
              <View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={14} color="#549EE7" />
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
              </View>
              <View style={styles.priceBox}>
                <Text style={styles.priceText}>{item.price}</Text>
                <Text style={styles.perPerson}>/person</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Төменгі навигация */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#549EE7" />
          <Text style={[styles.navText, { color: '#549EE7' }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Favorite')}
        >
          <Ionicons name="heart-outline" size={22} color="#8E8E93" />
          <Text style={styles.navText}>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Onboarding')}
        >
          <Ionicons name="person-outline" size={22} color="#8E8E93" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: '#F8F9FA',
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
    paddingTop: 18,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 13,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginTop: 2,
  },
  notifButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  notifDot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4D4F',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000000',
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#549EE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 13,
    color: '#549EE7',
    fontWeight: '600',
  },
  categoriesList: {
    marginBottom: 24,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: '#549EE7',
    borderColor: '#549EE7',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555555',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  cardImage: {
    width: '100%',
    height: 170,
  },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },
  cardInfo: {flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 14,
},
cardTitle: {
fontSize: 16,
fontWeight: '800',
color: '#1A1A1A',
marginBottom: 4,
},
locationRow: {
flexDirection: 'row',
alignItems: 'center',
},
locationText: {
fontSize: 12,
color: '#7C7C7C',
marginLeft: 4,
},
priceBox: {
alignItems: 'flex-end',
},
priceText: {
fontSize: 17,
fontWeight: '800',
color: '#549EE7',
},
perPerson: {
fontSize: 11,
color: '#8E8E93',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingVertical: 10,
backgroundColor: '#FFFFFF',
borderTopWidth: 1,
borderTopColor: '#EAEAEA',
},
navItem: {
alignItems: 'center',
},
navText: {
fontSize: 11,
fontWeight: '600',
color: '#8E8E93',
marginTop: 3,
},
});