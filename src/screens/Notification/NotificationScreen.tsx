import React, { useState } from 'react';
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
  CheckCircle2,
} from 'lucide-react-native';

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 2,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 3,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 4,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 5,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 6,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
  {
    id: 7,
    title: 'Component asset rectangle hand export',
    description: 'Horizontal flows duplicate mask select.',
    date: 'June 10, 2026',
  },
];

export default function NotificationScreen() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState('notification');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ЖОҒАРҒЫ СТАТУС ПАНЕЛІ (iPhone стилі) */}
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Signal size={17} color="#000000" strokeWidth={3} />
            <Wifi size={17} color="#000000" strokeWidth={3} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryBody}>
                <View style={styles.batteryFill} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>

        {/* ЖОҒАРҒЫ БӨЛІК: ТАҚЫРЫП ЖӘНЕ ПРОФИЛЬ СУРЕТІ */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>Notification</Text>
            <Text style={styles.headerSubtitle}>
              You'll always get the latest news
            </Text>
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
          </TouchableOpacity>
        </View>

        {/* ҚОС ҚАБАТТЫ БАТЫРМА (Notification / Activity) */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'notification' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('notification')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'notification' && styles.activeTabText,
              ]}
            >
              Notification
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'activity' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('activity')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'activity' && styles.activeTabText,
              ]}
            >
              Activity
            </Text>
          </TouchableOpacity>
        </View>

        {/* ХАБАРЛАМАЛАР ТІЗІМІ (Басылғанда Message экранына өтеді) */}
        <View style={styles.listContainer}>
          {NOTIFICATIONS_DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.notificationItem}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Message')}
            >
              <View style={styles.iconContainer}>
                <CheckCircle2 size={22} color="#38A9D6" />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.notificationDesc} numberOfLines={1}>
                  {item.description}
                </Text>
                <Text style={styles.notificationDate}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 130 }} />
      </ScrollView>

      {/* ТӨМЕНГІ ҚАЛҚЫМАЛЫ МӘЗІР */}
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

          <TouchableOpacity style={styles.navItem}>
            <Bell size={22} color="#FFFFFF" />
            <Text style={[styles.navLabel, styles.navLabelActive]}>
              Notification
            </Text>
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
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 15,
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
    width: 20,
    height: 12,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 3,
    padding: 1.5,
    justifyContent: 'center',
  },
  batteryFill: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: 1.5,
  },
  batteryTip: {
    width: 2,
    height: 5,
    backgroundColor: '#000000',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    marginLeft: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#292929',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#858D93',
    marginTop: 4,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7F8',
    borderRadius: 25,
    height: 48,
    padding: 4,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EDF0F2',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#858D93',
  },
  activeTabText: {
    color: '#292929',
    fontWeight: '700',
  },
  listContainer: {
    gap: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F3',
    gap: 14,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E7F5FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#293238',
    marginBottom: 3,
  },
  notificationDesc: {
    fontSize: 12,
    color: '#858D93',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 10,
    color: '#B0B6BC',
    fontWeight: '500',
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
  navLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});