import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const FILTERS = [
  'Барлығы',
  'Ұлттық парктер',
  'Круиз',
  'Көлдер',
  'Жағажай',
];

const DESTINATIONS = [
  {
    id: '1',
    name: 'Көлсай көлдері',
    country: 'Қазақстан',
    rating: '4.9',
    category: 'Көлдер',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: '2',
    name: 'Бали жағажайы',
    country: 'Индонезия',
    rating: '4.8',
    category: 'Жағажай',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900',
  },
  {
    id: '3',
    name: 'Шарын шатқалы',
    country: 'Қазақстан',
    rating: '4.9',
    category: 'Ұлттық парктер',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=900',
  },
  {
    id: '4',
    name: 'Мальдив аралдары',
    country: 'Мальдив',
    rating: '5.0',
    category: 'Жағажай',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900',
  },
  {
    id: '5',
    name: 'Бурабай',
    country: 'Қазақстан',
    rating: '4.8',
    category: 'Көлдер',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900',
  },
  {
    id: '6',
    name: 'Швейцария таулары',
    country: 'Швейцария',
    rating: '4.9',
    category: 'Ұлттық парктер',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900',
  },
  {
    id: '7',
    name: 'Санторини',
    country: 'Грекия',
    rating: '4.8',
    category: 'Круиз',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900',
  },
  {
    id: '8',
    name: 'Үлкен Алматы көлі',
    country: 'Қазақстан',
    rating: '4.9',
    category: 'Көлдер',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const [selectedFilter, setSelectedFilter] = useState('Барлығы');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('home');

  const filteredDestinations =
    selectedFilter === 'Барлығы'
      ? DESTINATIONS
      : DESTINATIONS.filter(
          (item) => item.category === selectedFilter
        );

  const toggleFavorite = (id: string) => {
    setFavorites((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  };

  const openDestination = (item: any) => {
    navigation.navigate('Details', { destination: item });
  };

  const navigateTab = (tab: string, screen: string) => {
    setActiveTab(tab);
    if (screen !== 'Home') {
      navigation.navigate(screen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ЖОҒАРҒЫ САҒАТ */}
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>9:41</Text>

          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={17} color="#333" />
            <Ionicons name="wifi" size={17} color="#333" />
            <Ionicons name="battery-full" size={20} color="#333" />
          </View>
        </View>

        {/* ОРНАЛАСҚАН ЖЕР */}
        <View style={styles.locationRow}>
          <View>
            <View style={styles.locationLabelRow}>
              <Ionicons name="location" size={14} color="#888" />
              <Text style={styles.locationLabel}>Орналасқан жер</Text>
            </View>

            <TouchableOpacity style={styles.locationSelect}>
              <Text style={styles.locationText}>Алматы, Қазақстан</Text>
              <Ionicons name="chevron-down" size={15} color="#333" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
              }}
              style={styles.profileImage}
            />
            <View style={styles.onlineDot} />
          </TouchableOpacity>
        </View>

        {/* БАСТЫ ТАҚЫРЫП */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>
            Қайда барсаң да,{'\n'}әсем мекен сені күтеді
          </Text>
        </View>

        {/* СҮЗГІЛЕР */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {FILTERS.map((filter) => {
            const active = selectedFilter === filter;

            return (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterButton,
                  active && styles.activeFilter,
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterText,
                    active && styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* САЯХАТ БАҒЫТТАРЫ */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Танымал бағыттар</Text>
          <Text style={styles.sectionMore}>Барлығын көру</Text>
        </View>

        <View style={styles.destinationsGrid}>
          {filteredDestinations.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={styles.destinationCard}
              onPress={() => openDestination(item)}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.destinationImage}
                />

                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Ionicons
                    name={
                      favorites.includes(item.id)
                        ? 'heart'
                        : 'heart-outline'
                    }
                    size={20}
                    color="#F05B55"
                  />
                </TouchableOpacity>

                <View style={styles.ratingBadge}>
                  <Ionicons name="star" size={12} color="#FFB800" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.destinationName}>{item.name}</Text>

                <View style={styles.cardLocation}>
                  <Ionicons
                    name="location-outline"
                    size={13}
                    color="#888"
                  />
                  <Text style={styles.countryText}>{item.country}</Text>
                </View>

                <Text style={styles.priceText}>Бастапқы бағасы: 5 $ / күн</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* САНАТТАР */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Санаттар</Text>

          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
                }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Жағажайлар</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
                }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Таулар</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400',
                }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Көлдер</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* ТӨМЕНГІ ҚАЛҚЫМАЛЫ МӘЗІР */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTab('home', 'Home')}
          >
            <Ionicons
              name="home"
              size={23}
              color={activeTab === 'home' ? '#FFFFFF' : '#AEB8C0'}
            />
            <Text style={activeTab === 'home' ? styles.activeNavText : styles.navText}>
              Басты бет
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTab('search', 'Search')}
          >
            <Ionicons
              name="search"
              size={23}
              color={activeTab === 'search' ? '#FFFFFF' : '#AEB8C0'}
            />
            <Text style={activeTab === 'search' ? styles.activeNavText : styles.navText}>
              Іздеу
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTab('messages', 'Notifications')}
          >
            <Ionicons
              name="notifications"
              size={23}
              color={activeTab === 'messages' ? '#FFFFFF' : '#AEB8C0'}
            />
            <Text style={activeTab === 'messages' ? styles.activeNavText : styles.navText}>
              Хабарлама
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTab('profile', 'Profile')}
          >
            <Ionicons
              name="person-circle"
              size={23}
              color={activeTab === 'profile' ? '#FFFFFF' : '#AEB8C0'}
            />
            <Text style={activeTab === 'profile' ? styles.activeNavText : styles.navText}>
              Профиль
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  statusBar: {
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 17,
  },

  statusTime: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
  },

  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 27,
  },

  locationLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 7,
  },

  locationLabel: {
    fontSize: 13,
    color: '#888888',
  },

  locationSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 2,
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },

  onlineDot: {
    position: 'absolute',
    bottom: 1,
    left: 1,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#35B8D4',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  titleContainer: {
    marginBottom: 24,
  },

  mainTitle: {
    fontSize: 29,
    lineHeight: 38,
    fontWeight: '800',
    color: '#292929',
    letterSpacing: -0.5,
  },

  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingBottom: 25,
  },

  filterButton: {
    height: 40,
    paddingHorizontal: 17,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  activeFilter: {
    backgroundColor: '#35434B',
    borderColor: '#35434B',
  },

  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
  },

  activeFilterText: {
    color: '#FFFFFF',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#292929',
  },

  sectionMore: {
    fontSize: 13,
    color: '#647D8D',
    fontWeight: '600',
  },

  destinationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  destinationCard: {
    width: (width - 49) / 2,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    width: '100%',
    height: 155,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },

  destinationImage: {
    width: '100%',
    height: '100%',
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ratingBadge: {
    position: 'absolute',
    bottom: 9,
    left: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 9,
  },

  ratingText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333333',
  },

  cardInfo: {
    paddingTop: 10,
    paddingHorizontal: 3,
  },

  destinationName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#292929',
  },

  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 5,
  },

  countryText: {
    fontSize: 12,
    color: '#888888',
  },

  priceText: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '600',
    marginTop: 10,
  },

  categorySection: {
    marginTop: 5,
  },

  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  categoryCard: {
    width: '31%',
  },

  categoryImage: {
    width: '100%',
    height: 85,
    borderRadius: 13,
  },

  categoryText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333333',
    marginTop: 8,
  },

  bottomNavWrapper: {
    position: 'absolute',
    bottom: 13,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  bottomNav: {
    width: '88%',
    height: 76,
    backgroundColor: '#354653',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    elevation: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  navText: {
    fontSize: 10,
    color: '#AEB8C0',
    fontWeight: '500',
  },

  activeNavText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});