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
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Wifi,
  Signal,
  ArrowLeft,
  Heart,
  Star,
  MapPin,
} from 'lucide-react-native';

export default function DetailDestinationScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Тізімнен басылған орынның деректерін қабылдау
  const place = route.params?.destination || {
    name: 'Raja Ampat',
    country: 'Papua, Indonesia',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900',
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

        {/* БАСТЫ СУРЕТ ЖӘНЕ БАТЫРМАЛАР */}
        <View style={styles.imageHeaderWrapper}>
          <Image source={{ uri: place.image }} style={styles.headerImage} />

          <View style={styles.headerButtonsRow}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >
              <ArrowLeft size={20} color="#1E293B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
              <Heart size={20} color="#EF4444" fill="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>

        {/* АҚ ҚАЛҚЫМАЛЫ КОНТЕНТ БӨЛІМІ */}
        <View style={styles.contentCard}>
          {/* Рейтинг жұлдыздары */}
          <View style={styles.ratingRow}>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} color="#F5B942" fill="#F5B942" />
              ))}
            </View>
            <Text style={styles.ratingText}>{place.rating} / 5.0</Text>
          </View>

          {/* Орынның атауы */}
          <Text style={styles.placeTitle}>{place.name}</Text>

          <View style={styles.countryRow}>
            <MapPin size={14} color="#64748B" />
            <Text style={styles.countryText}>{place.country}</Text>
          </View>

          {/* Суреттер торы (Gallery grid) */}
          <View style={styles.imageGrid}>
            <View style={styles.gridRow}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600' }}
                style={styles.gridImageSmall}
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600' }}
                style={styles.gridImageSmall}
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600' }}
                style={styles.gridImageSmall}
              />
            </View>
          </View>

          {/* Толық мәтін сипаттамасы */}
          <Text style={styles.descriptionText}>
            Content style export device link duplicate select. Pencil stroke through figram auto comment. Opacity rotate shadow star share inspect style. Library device clip stroke through move. Flows vector overflow style invite scrolling background.
          </Text>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* ТӨМЕНГІ БРОНДАУ ПАНЕЛІ */}
      <View style={styles.footerContainer}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$1.500 <Text style={styles.priceUnit}>/ day</Text></Text>
        </View>

        {/* МІНЕ, БҰЛ ЖЕРДЕ Date экранына өтетін етіп өзгерттік */}
        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Date')}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
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
    paddingBottom: 20,
  },
  statusBar: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
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
  imageHeaderWrapper: {
    width: '100%',
    height: 320,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerButtonsRow: {
    position: 'absolute',
    top: 15,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  contentCard: {
    marginTop: -25,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 3,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
  },
  placeTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 6,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
  },
  countryText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  imageGrid: {
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 10,
  },
  gridImageSmall: {
    flex: 1,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  descriptionText: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    elevation: 20,
  },
  priceBox: {
    justifyContent: 'center',
  },
  priceLabel: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
  },
  priceValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E293B',
  },
  priceUnit: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
  },
  bookButton: {
    backgroundColor: '#38A9D6',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 25,
    elevation: 4,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});