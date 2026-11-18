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
  Wifi,
  Signal,
  Compass,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react-native';

export default function AboutScreen() {
  const navigation = useNavigation<any>();

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
            <Signal size={18} color="#000000" strokeWidth={3} />
            <Wifi size={20} color="#000000" strokeWidth={3} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryBody}>
                <View style={styles.batteryFill} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>

        {/* АРТҚА ҚАЙТАТЫН БАТЫРМА ЖӘНЕ ЛОГОТИП */}
        <View style={styles.topBarRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <ArrowLeft size={22} color="#1E293B" />
          </TouchableOpacity>

          <View style={styles.brandRow}>
            <View style={styles.brandIconBox}>
              <Compass size={20} color="#38A9D6" />
            </View>
            <Text style={styles.brandText}>Travel Go</Text>
          </View>
        </View>

        {/* БЕТ ТАҚЫРЫБЫ (Үлкейтілді) */}
        <Text style={styles.headerTitle}>Story Of Our Journey</Text>

        {/* КЕҢЕС БЛОКТАРЫ (Tips) */}
        <View style={styles.tipBox}>
          <Lightbulb size={22} color="#0284C7" style={{ marginTop: 2 }} />
          <Text style={styles.tipText}>
            <Text style={{ fontWeight: '800', color: '#0369A1' }}>Tips:</Text> Let's want to learn more? <Text style={{ fontWeight: '800', color: '#0369A1' }}>Get Know Airbnb</Text>
          </Text>
        </View>

        {/* ЖОҒАРҒЫ МӘТІН СИПАТТАМАСЫ (Анық және үлкенірек) */}
        <Text style={styles.paragraph}>
          Content style export device link duplicate select. Pencil stroke through figram auto comment. Opacity rotate shadow star share inspect style. Library device clip stroke through move. Flows vector overflow style invite scrolling background. Style clip select fill select. Edit auto bullet select fill select.
        </Text>

        {/* СУРЕТТЕР ГРИДІ */}
        <View style={styles.imageGrid}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600' }}
              style={styles.gridImageLarge}
            />
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600' }}
              style={styles.gridImageSmall}
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600' }}
              style={styles.gridImageSmall}
            />
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600' }}
              style={styles.gridImageLarge}
            />
          </View>
        </View>

        {/* АСТЫНҒЫ МӘТІН СИПАТТАМАСЫ */}
        <Text style={styles.paragraph}>
          Content style export device link duplicate select. Pencil stroke through figram auto comment. Opacity rotate shadow star share inspect style. Library device clip stroke through move. Flows vector overflow style invite scrolling background. Style clip select fill select. Edit auto bullet select fill select.
        </Text>

        {/* COPYRIGHT БӨЛІМІ */}
        <Text style={styles.copyrightText}>
          Copyright © 2023 - Name Of Product
        </Text>

        <View style={{ height: 60 }} />
      </ScrollView>
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
    paddingBottom: 50,
  },
  statusBar: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 8,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryBody: {
    width: 24,
    height: 12,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 3.5,
    padding: 1.5,
    justifyContent: 'center',
  },
  batteryFill: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: 1.5,
  },
  batteryTip: {
    width: 1.5,
    height: 5,
    backgroundColor: '#000000',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    marginLeft: 0.5,
  },
  topBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E7F5FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#38A9D6',
  },
  headerTitle: {
    fontSize: 28, // Тақырып үлкейтілді
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  tipBox: {
    flexDirection: 'row',
    backgroundColor: '#E0F2FE',
    borderRadius: 14,
    padding: 14,
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  tipText: {
    flex: 1,
    fontSize: 14, // Кеңес мәтіні үлкейтілді
    color: '#0369A1',
    lineHeight: 20,
  },
  paragraph: {
    fontSize: 14, // Негізгі мәтіндер анық әрі үлкен жазылды
    color: '#475569',
    lineHeight: 22,
    marginBottom: 20,
  },
  imageGrid: {
    gap: 14,
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    gap: 14,
  },
  gridImageLarge: {
    flex: 2,
    height: 130,
    borderRadius: 14,
    backgroundColor: '#E2E8F0',
  },
  gridImageSmall: {
    flex: 1,
    height: 130,
    borderRadius: 14,
    backgroundColor: '#E2E8F0',
  },
  copyrightText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 25,
    fontWeight: '600',
  },
});