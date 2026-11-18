import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
  Wifi,
  Signal,
  ArrowLeft,
  Star,
  ChevronRight,
  MapPin,
} from 'lucide-react-native';

const PLACES_DATA = [
  {
    id: 1,
    name: 'Maldives Islands',
    country: 'Republic of Maldives',
    category: 'beach',
    placesCount: '120 places',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900',
  },
  {
    id: 2,
    name: 'Swiss Alps',
    country: 'Zermatt, Switzerland',
    category: 'mountain',
    placesCount: '85 places',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900',
  },
  {
    id: 3,
    name: 'Paris, Eiffel Tower',
    country: 'France',
    category: 'city',
    placesCount: '210 places',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900',
  },
  {
    id: 4,
    name: 'Bali, Nusa Penida',
    country: 'Indonesia',
    category: 'beach',
    placesCount: '150 places',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900',
  },
  {
    id: 5,
    name: 'Mount Fuji',
    country: 'Japan',
    category: 'mountain',
    placesCount: '64 places',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900',
  },
];

export default function ListDestinationScreen() {
  const navigation = useNavigation<any>();

  // Орынды басқан кезде Details (деталды бетке) өту функциясы
  const openDetails = (place: any) => {
    navigation.navigate('Details', { destination: place });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ЖОҒАРҒЫ СТАТУС ПАНЕЛІ */}
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Signal size={16} color="#000000" strokeWidth={3.5} />
            <Wifi size={18} color="#000000" strokeWidth={3.5} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryBody}>
                <View style={styles.batteryFill} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>

        {/* АРТҚЫ ҚАЙТАТЫН БАТЫРМА */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <ArrowLeft size={22} color="#1E293B" />
          </TouchableOpacity>
        </View>

        {/* ТАҚЫРЫП БӨЛІМІ */}
        <View style={styles.titleSection}>
          <Text style={styles.headerTitle}>Papua, Indonesia</Text>
          <Text style={styles.headerSubtitle}>
            There are 80 interesting tourist spots
          </Text>
        </View>

        {/* ТІЗІМ (LIST OF PLACES) */}
        <View style={styles.listContainer}>
          {PLACES_DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.placeCard}
              activeOpacity={0.85}
              onPress={() => openDetails(item)} // Осы жер арқылы Details бетіне өтеді
            >
              <Image source={{ uri: item.image }} style={styles.placeThumb} />

              <View style={styles.placeInfo}>
                <View style={styles.ratingRow}>
                  <Star size={13} color="#F5B942" fill="#F5B942" />
                  <Text style={styles.ratingText}>
                    {item.rating}{' '}
                    <Text style={styles.reviewText}>(30,000)</Text>
                  </Text>
                </View>

                <Text style={styles.placeName} numberOfLines={1}>
                  {item.name}
                </Text>

                <View style={styles.countryRow}>
                  <MapPin size={12} color="#94A3B8" />
                  <Text style={styles.placeDesc} numberOfLines={1}>
                    {item.country}
                  </Text>
                </View>
              </View>

              <ChevronRight size={18} color="#CBD5E1" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 130 }} />
      </ScrollView>

      {/* ТӨМЕНГІ ҚАЛҚЫМАЛЫ НАВИГАЦИЯ МӘЗІРІ */}
      <View style={styles.bottomBarWrapper}>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Home')}
          >
            <Home size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Search')}
          >
            <Search size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Notification')}
          >
            <Bell size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <User size={22} color="#AEB8C0" />
            <Text style={styles.navLabel}>Profile</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  timeText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryBody: {
    width: 20,
    height: 12,
    borderWidth: 1.2,
    borderColor: '#000000',
    borderRadius: 2.5,
    padding: 1,
    justifyContent: 'center',
  },
  batteryFill: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  batteryTip: {
    width: 1.5,
    height: 4,
    backgroundColor: '#000000',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    marginLeft: 0.5,
  },
  headerTop: {
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSection: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
  },
  listContainer: {
    gap: 14,
  },
  placeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  placeThumb: {
    width: 74,
    height: 74,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  placeInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  reviewText: {
    fontWeight: '400',
    color: '#94A3B8',
  },
  placeName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  placeDesc: {
    fontSize: 11,
    color: '#94A3B8',
  },
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
});