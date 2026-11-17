import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Home,
  Search,
  Bell,
  User,
  Plane,
  MapPin,
  Percent,
  CalendarCheck,
  Wifi,
  BatteryCharging,
  Signal,
} from 'lucide-react-native';

const NOTIFICATIONS = [
  {
    id: 1,
    text: 'Париж бен Римге арналған күзгі турларға 25% жеңілдік ашылды.',
    date: '17 Қараша, 2026',
    type: 'offer',
  },
  {
    id: 2,
    text: 'Мальдив аралдарындағы қонақүйді брондау сәтті расталды.',
    date: '15 Қараша, 2026',
    type: 'booking',
  },
  {
    id: 3,
    text: 'Швейцария Альпілеріне шаңғы тебу маусымына билеттер сатылымға шықты.',
    date: '12 Қараша, 2026',
    type: 'plane',
  },
  {
    id: 4,
    text: 'Бали аралына саяхат алдындағы сақтандыру құжаттары дайын.',
    date: '10 Қараша, 2026',
    type: 'map',
  },
  {
    id: 5,
    text: 'Дубайға 5 күндік демалыс пакетіне арнайы ұсыныс қосылды.',
    date: '07 Қараша, 2026',
    type: 'offer',
  },
  {
    id: 6,
    text: 'Жапонияға визалық қолдау қызметі жаңартылды, онлайн өтінім беріңіз.',
    date: '04 Қараша, 2026',
    type: 'plane',
  },
  {
    id: 7,
    text: 'Түркия, Анталья жағалауындағы демалыс орындарына ерте брондау басталды.',
    date: '01 Қараша, 2026',
    type: 'map',
  },
];

export default function NotificationScreen() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'notification' | 'activity'>('notification');

  const renderCircleIcon = (type: string) => {
    switch (type) {
      case 'plane':
        return <Plane size={20} color="#FFFFFF" />;
      case 'map':
        return <MapPin size={20} color="#FFFFFF" />;
      case 'offer':
        return <Percent size={20} color="#FFFFFF" />;
      default:
        return <CalendarCheck size={20} color="#FFFFFF" />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы статус-бар (9:41 + зарядка + желі) */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Signal size={15} color="#111827" strokeWidth={2.5} />
          <Wifi size={15} color="#111827" strokeWidth={2.5} />
          <BatteryCharging size={18} color="#111827" strokeWidth={2.2} />
        </View>
      </View>

      {/* Тақырып және оң жақтағы дөңгелек профиль суреті */}
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Хабарламалар</Text>
          <Text style={styles.subtitle}>
            Сіз әрдайым соңғы жаңалықтардан хабардарсыз
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Қойындылар: Хабарлама / Белсенділік */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabBox,
            activeTab === 'notification' && styles.tabBoxActive,
          ]}
          onPress={() => setActiveTab('notification')}
        >
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'notification' && styles.tabLabelActive,
            ]}
          >
            Хабарлама
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabBox,
            activeTab === 'activity' && styles.tabBoxActive,
          ]}
          onPress={() => setActiveTab('activity')}
        >
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'activity' && styles.tabLabelActive,
            ]}
          >
            Белсенділік
          </Text>
        </TouchableOpacity>
      </View>

      {/* Хабарламалар тізімі */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'notification' ? (
          NOTIFICATIONS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notifRow}>
              <View style={styles.blueCircle}>
                {renderCircleIcon(item.type)}
              </View>

              <View style={styles.notifBody}>
                <Text style={styles.notifText}>{item.text}</Text>
                <Text style={styles.notifDate}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>Белсенді сапарлар әзірге жоқ</Text>
            <Text style={styles.emptySub}>
              Шетелдік турға тапсырыс берген соң осында көрінеді
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Екінші фотодағыдай бірдей төменгі панель */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Home size={21} color="#8E96A4" />
          <Text style={styles.navLabel}>Басты бет</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Search')}
        >
          <Search size={21} color="#8E96A4" />
          <Text style={styles.navLabel}>Іздеу</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Bell size={21} color="#FFFFFF" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Хабарлама</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Favorite')}
        >
          <User size={21} color="#8E96A4" />
          <Text style={styles.navLabel}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F8FAFC',
  },
  timeText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 18,
  },
  tabBox: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBoxActive: {
    backgroundColor: '#E2E8F0',
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#94A3B8',
  },
  tabLabelActive: {
    color: '#111827',
    fontWeight: '700',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 115,
  },
  notifRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    gap: 14,
  },
  blueCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifBody: {
    flex: 1,
  },
  notifText: {
    fontSize: 14.5,
    fontWeight: '500',
    color: '#1F2937',
    lineHeight: 20,
  },
  notifDate: {
    fontSize: 12.5,
    color: '#6B7280',
    marginTop: 5,
  },
  emptyBox: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4B5563',
  },
  emptySub: {
    fontSize: 13.5,
    color: '#9CA3AF',
    marginTop: 6,
    textAlign: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 22,
    right: 22,
    height: 68,
    backgroundColor: '#364150',
    borderRadius: 34,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  navLabel: {
    fontSize: 11.5,
    color: '#8E96A4',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});