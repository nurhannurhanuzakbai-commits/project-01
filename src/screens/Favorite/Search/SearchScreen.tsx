import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Home,
  Search,
  Bell,
  User,
  Compass,
  Palmtree,
  Mountain,
  Building2,
  MapPin,
  Wifi,
  BatteryFull,
  Signal,
  X,
  Star,
} from 'lucide-react-native';

const CATEGORIES = [
  { id: 'all', name: 'Барлығы', icon: Compass },
  { id: 'beach', name: 'Жағажай', icon: Palmtree },
  { id: 'mountain', name: 'Таулар', icon: Mountain },
  { id: 'city', name: 'Қалалар', icon: Building2 },
];

const PLACES_DATA = [
  {
    id: 1,
    name: 'Мальдив аралдары',
    country: 'Мальдив Республикасы',
    category: 'beach',
    placesCount: '120 орын',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900',
  },
  {
    id: 2,
    name: 'Швейцария Альпілері',
    country: 'Церматт, Швейцария',
    category: 'mountain',
    placesCount: '85 орын',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900',
  },
  {
    id: 3,
    name: 'Париж, Эйфель мұнарасы',
    country: 'Франция',
    category: 'city',
    placesCount: '210 орын',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900',
  },
  {
    id: 4,
    name: 'Бали, Нуса Пенида',
    country: 'Индонезия',
    category: 'beach',
    placesCount: '150 орын',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900',
  },
  {
    id: 5,
    name: 'Фудзи тауы',
    country: 'Жапония',
    category: 'mountain',
    placesCount: '64 орын',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900',
  },
  {
    id: 6,
    name: 'Дубай Марина',
    country: 'Біріккен Араб Әмірліктері',
    category: 'city',
    placesCount: '190 орын',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900',
  },
  {
    id: 7,
    name: 'Анталья жағалауы',
    country: 'Түркия',
    category: 'beach',
    placesCount: '175 орын',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900',
  },
  {
    id: 8,
    name: 'Каппадокия',
    country: 'Невшехир, Түркия',
    category: 'mountain',
    placesCount: '95 орын',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900',
  },
  {
    id: 9,
    name: 'Рим, Колизей',
    country: 'Италия',
    category: 'city',
    placesCount: '180 орын',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900',
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<any>();

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category === selectedCategory;

      const search = searchText.trim().toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(search) ||
        item.country.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchText, selectedCategory]);

  const openPlace = (place: (typeof PLACES_DATA)[number]) => {
    navigation.navigate('Details', {
      destination: place,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ЖОҒАРҒЫ САҒАТ ПАНЕЛІ */}
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>

          <View style={styles.statusIcons}>
            <Signal size={16} color="#333333" strokeWidth={2.5} />
            <Wifi size={16} color="#333333" strokeWidth={2.5} />
            <BatteryFull
              size={20}
              color="#333333"
              strokeWidth={2.3}
            />
          </View>
        </View>

        {/* БЕТ ТАҚЫРЫБЫ */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Саяхат іздеу</Text>
          <Text style={styles.headerSubtitle}>
            Өзіңе ұнайтын ерекше мекенді тап
          </Text>
        </View>

        {/* ІЗДЕУ ЖОЛАҒЫ */}
        <View style={styles.searchBox}>
          <Search size={22} color="#64717B" />

          <TextInput
            style={styles.searchInput}
            placeholder="Баратын жеріңді ізде..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
          />

          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <X size={20} color="#8B9298" />
            </TouchableOpacity>
          )}
        </View>

        {/* САНАТТАР */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Санаттар</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <TouchableOpacity
                key={cat.id}
                style={styles.categoryItem}
                activeOpacity={0.8}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <View
                  style={[
                    styles.categoryIconCircle,
                    isActive && styles.categoryIconCircleActive,
                  ]}
                >
                  <IconComponent
                    size={24}
                    color={isActive ? '#FFFFFF' : '#38A9D6'}
                    strokeWidth={2}
                  />
                </View>

                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* НӘТИЖЕЛЕР */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Ұсынылатын орындар
          </Text>

          <Text style={styles.resultCount}>
            {filteredPlaces.length} орын
          </Text>
        </View>

        {/* ОРЫНДАР ТІЗІМІ */}
        <View style={styles.listContainer}>
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <TouchableOpacity
                key={place.id}
                style={styles.placeRow}
                activeOpacity={0.85}
                onPress={() => openPlace(place)}
              >
                <Image
                  source={{ uri: place.image }}
                  style={styles.placeThumb}
                  resizeMode="cover"
                />

                <View style={styles.placeTextBox}>
                  <Text
                    style={styles.placeTitle}
                    numberOfLines={2}
                  >
                    {place.name}
                  </Text>

                  <View style={styles.countryRow}>
                    <MapPin size={13} color="#8B969E" />
                    <Text
                      style={styles.placeSubtitle}
                      numberOfLines={1}
                    >
                      {place.country}
                    </Text>
                  </View>

                  <View style={styles.ratingRow}>
                    <Star
                      size={13}
                      color="#F5B942"
                      fill="#F5B942"
                    />
                    <Text style={styles.ratingText}>
                      {place.rating}
                    </Text>
                  </View>
                </View>

                <View style={styles.placeBadge}>
                  <MapPin
                    size={14}
                    color="#38A9D6"
                  />
                  <Text style={styles.placeBadgeText}>
                    {place.placesCount}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Search size={38} color="#AAB4BC" />
              <Text style={styles.emptyTitle}>
                Орын табылмады
              </Text>
              <Text style={styles.emptySubtitle}>
                Басқа атауды немесе санатты таңдап көр
              </Text>

              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                  setSearchText('');
                  setSelectedCategory('all');
                }}
              >
                <Text style={styles.resetButtonText}>
                  Сүзгіні тазарту
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={{ height: 115 }} />
      </ScrollView>

      {/* ТӨМЕНГІ ҚАЛҚЫМАЛЫ МӘЗІР */}
      <View style={styles.bottomBarWrapper}>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Home')}
          >
            <Home size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Басты бет</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Search size={22} color="#FFFFFF" />
            <Text style={[styles.navLabel, styles.navLabelActive]}>
              Іздеу
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Notification')}
          >
            <Bell size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Хабарлама</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <User size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Профиль</Text>
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

  // ЖОҒАРҒЫ САҒАТ
  statusBar: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 22,
  },

  timeText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
  },

  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  // ТАҚЫРЫП
  header: {
    marginBottom: 22,
  },

  headerTitle: {
    fontSize: 29,
    fontWeight: '800',
    color: '#292929',
    letterSpacing: -0.5,
  },

  headerSubtitle: {
    fontSize: 15,
    color: '#858D93',
    marginTop: 7,
  },

  // ІЗДЕУ
  searchBox: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7F8',
    borderRadius: 15,
    paddingHorizontal: 16,
    marginBottom: 27,
    borderWidth: 1,
    borderColor: '#EDF0F2',
    gap: 11,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#252D33',
  },

  // САНАТТАР
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#292929',
  },

  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  categoryItem: {
    alignItems: 'center',
    gap: 8,
    width: '24%',
  },

  categoryIconCircle: {
    width: 57,
    height: 57,
    borderRadius: 29,
    backgroundColor: '#E7F5FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryIconCircleActive: {
    backgroundColor: '#354653',
  },

  categoryText: {
    fontSize: 12,
    color: '#747E85',
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#29343B',
    fontWeight: '800',
  },

  resultCount: {
    fontSize: 13,
    color: '#89939A',
    fontWeight: '600',
  },

  // ОРЫНДАР ТІЗІМІ
  listContainer: {
    marginTop: 0,
  },

  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F3',
    gap: 12,
  },

  placeThumb: {
    width: 82,
    height: 82,
    borderRadius: 15,
    backgroundColor: '#E5E9EC',
  },

  placeTextBox: {
    flex: 1,
    justifyContent: 'center',
  },

  placeTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#293238',
    lineHeight: 20,
  },

  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 5,
  },

  placeSubtitle: {
    flex: 1,
    fontSize: 12,
    color: '#929BA1',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },

  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#626D74',
  },

  placeBadge: {
    alignItems: 'center',
    gap: 4,
    paddingLeft: 2,
  },

  placeBadgeText: {
    fontSize: 10,
    color: '#68747C',
    fontWeight: '600',
  },

  // НӘТИЖЕ ЖОҚ КЕЗДЕ
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 55,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#354653',
    marginTop: 15,
  },

  emptySubtitle: {
    fontSize: 13,
    color: '#929BA1',
    marginTop: 7,
    textAlign: 'center',
  },

  resetButton: {
    backgroundColor: '#354653',
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
    marginTop: 18,
  },

  resetButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },

  // ТӨМЕНГІ МӘЗІР
  bottomBarWrapper: {
    position: 'absolute',
    bottom: 13,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  bottomBar: {
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

  navLabel: {
    fontSize: 10,
    color: '#AEB8C0',
    fontWeight: '500',
  },

  navLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});