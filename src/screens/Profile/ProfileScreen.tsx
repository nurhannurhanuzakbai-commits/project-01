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
  ChevronRight,
  UserCircle,
  CreditCard,
  Globe,
  ShieldCheck,
  Settings,
  Info,
} from 'lucide-react-native';

export default function ProfileScreen() {
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
            <Signal size={18} color="#FFFFFF" strokeWidth={3} />
            <Wifi size={20} color="#FFFFFF" strokeWidth={3} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryBody}>
                <View style={styles.batteryFill} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>

        {/* АРТҚЫ ФОН СУРЕТІ */}
        <View style={styles.headerBackground}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900',
            }}
            style={styles.bgImage}
          />
        </View>

        {/* ПРОФИЛЬДІҢ АҚ ҚАЛҚЫМАЛЫ КАРТОЧКАСЫ */}
        <View style={styles.profileCardWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
              }}
              style={styles.avatarImage}
            />
          </View>

          <Text style={styles.profileName}>Bessie Cooper</Text>
          <Text style={styles.profileEmail}>
            Bullet editor invite shadow create effect scrolling community shadow.
          </Text>

          {/* БАТЫРМАЛАР (Edit Photo / Verification) */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.outlineButton} activeOpacity={0.8}>
              <Text style={styles.outlineButtonText}>Edit Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlineButton} activeOpacity={0.8}>
              <Text style={styles.outlineButtonText}>Verification</Text>
            </TouchableOpacity>
          </View>

          {/* МӘЗІР ТІЗІМІ */}
          <View style={styles.menuList}>
            {/* 1. Profile */}
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconBox}>
                <UserCircle size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>Profile</Text>
                <Text style={styles.menuSubtitle}>Short Description Of Menu</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* 2. Payment & Method */}
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconBox}>
                <CreditCard size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>Payment & Method</Text>
                <Text style={styles.menuSubtitle}>Short Description Of Menu</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* 3. Language */}
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconBox}>
                <Globe size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>Language</Text>
                <Text style={styles.menuSubtitle}>Short Description Of Menu</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* 4. Privacy & Security */}
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconBox}>
                <ShieldCheck size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>Privacy & Security</Text>
                <Text style={styles.menuSubtitle}>Short Description Of Menu</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* 5. Advanced Setting */}
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconBox}>
                <Settings size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>Advanced Setting</Text>
                <Text style={styles.menuSubtitle}>Short Description Of Menu</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* 6. ABOUT APP (ЖЕКЕ ЖЕКЕ БӨЛЕК ТҮЙМЕ РЕТІНДЕ ҚОСЫЛДЫ) */}
            <TouchableOpacity
              style={[styles.menuItem, { borderBottomWidth: 0 }]}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('About')}
            >
              <View style={styles.menuIconBox}>
                <Info size={22} color="#38A9D6" />
              </View>
              <View style={styles.menuTextBox}>
                <Text style={styles.menuTitle}>About App</Text>
                <Text style={styles.menuSubtitle}>Story of our journey</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 140 }} />
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

          <TouchableOpacity style={styles.navItem}>
            <User size={22} color="#FFFFFF" />
            <Text style={[styles.navLabel, styles.navLabelActive]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { paddingBottom: 30 },
  statusBar: {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    zIndex: 10,
  },
  timeText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  statusIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  batteryContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: 2 },
  batteryBody: {
    width: 24,
    height: 12,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 3.5,
    padding: 1.5,
    justifyContent: 'center',
  },
  batteryFill: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 1.5 },
  batteryTip: {
    width: 1.5,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    marginLeft: 0.5,
  },
  headerBackground: { width: '100%', height: 250, backgroundColor: '#CBD5E1' },
  bgImage: { width: '100%', height: '100%' },
  profileCardWrapper: {
    marginTop: -80,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 25,
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    top: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  avatarImage: { width: '100%', height: '100%' },
  profileName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 6,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    lineHeight: 18,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 25,
  },
  outlineButton: {
    flex: 1,
    height: 44,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  outlineButtonText: { fontSize: 14, fontWeight: '700', color: '#334155' },
  menuList: { width: '100%' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  menuIconBox: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#E7F5FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuTextBox: { flex: 1 },
  menuTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 3,
  },
  menuSubtitle: { fontSize: 12, color: '#94A3B8' },
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
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5 },
  navLabel: { fontSize: 10, color: '#AEB8C0', fontWeight: '500' },
  navLabelActive: { color: '#FFFFFF', fontWeight: '700' },
});