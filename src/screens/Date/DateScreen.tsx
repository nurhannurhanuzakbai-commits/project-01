import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, ChevronLeft, ChevronRight, Plus, Minus, Wifi, Signal } from 'lucide-react-native';

export default function DateScreen() {
  const navigation = useNavigation<any>();

  // Жолаушылар санын басқару күйлері (state)
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [babies, setBabies] = useState(0);

  // Таңдалған күндер
  const [selectedStart, setSelectedStart] = useState(12);
  const [selectedEnd, setSelectedEnd] = useState(16);

  // Күнтізбе күндерінің тізімі
  const days = [
    27, 28, 29, 30, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* ЖОҒАРҒЫ СТАТУС ПАНЕЛІ (iPhone дизайны) */}
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

        {/* ЖОҒАРҒЫ ПАНЕЛЬ (Артқа қайту және тақырып) */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <ArrowLeft size={20} color="#1E293B" />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>11 - 15 Juni 2023 • 2 Per, 1 Chd</Text>
          </View>
        </View>

        {/* АЙДЫ ТАҢДАУ (Juni 2023) */}
        <View style={styles.monthSelector}>
          <Text style={styles.monthText}>Juni 2023</Text>
          <View style={styles.monthArrows}>
            <TouchableOpacity style={styles.arrowBtn}>
              <ChevronLeft size={18} color="#64748B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowBtn}>
              <ChevronRight size={18} color="#64748B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* АПТА КҮНДЕРІ */}
        <View style={styles.weekDaysRow}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d, index) => (
            <Text key={index} style={styles.weekDayText}>{d}</Text>
          ))}
        </View>

        {/* КҮНТІЗБЕ ТОРЫ (GRID) */}
        <View style={styles.calendarGrid}>
          {days.map((day, index) => {
            const isSelected = day >= selectedStart && day <= selectedEnd && index >= 4 && index <= 19;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.dayCell, isSelected && styles.selectedDayCell]}
                activeOpacity={0.8}
              >
                <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ЖОЛАУШЫЛАРДЫ ТАҢДАУ БӨЛІМІ */}
        <View style={styles.counterSection}>
          {/* Adult */}
          <View style={styles.counterRow}>
            <Text style={styles.counterLabel}>Adult</Text>
            <View style={styles.counterControls}>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setAdults(Math.max(1, adults - 1))}
              >
                <Minus size={14} color="#64748B" />
              </TouchableOpacity>
              <Text style={styles.countValue}>{adults}</Text>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setAdults(adults + 1)}
              >
                <Plus size={14} color="#64748B" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Children */}
          <View style={styles.counterRow}>
            <Text style={styles.counterLabel}>Children</Text>
            <View style={styles.counterControls}>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setChildren(Math.max(0, children - 1))}
              >
                <Minus size={14} color="#64748B" />
              </TouchableOpacity>
              <Text style={styles.countValue}>{children}</Text>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setChildren(children + 1)}
              >
                <Plus size={14} color="#64748B" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Kids (Baby) */}
          <View style={styles.counterRow}>
            <Text style={styles.counterLabel}>Kids (Baby)</Text>
            <View style={styles.counterControls}>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setBabies(Math.max(0, babies - 1))}
              >
                <Minus size={14} color="#64748B" />
              </TouchableOpacity>
              <Text style={styles.countValue}>{babies}</Text>
              <TouchableOpacity
                style={styles.countBtn}
                onPress={() => setBabies(babies + 1)}
              >
                <Plus size={14} color="#64748B" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ТӨМЕНГІ БАТЫРМАЛАР (Reset және Confirmation) */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.resetButton} activeOpacity={0.8}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>

        {/* PaymentMethod экранына өтетін етіп өзгертілді */}
        <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('PaymentMethod')}
        >
          <Text style={styles.confirmButtonText}>Confirmation</Text>
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
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  statusBar: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
  },
  monthArrows: {
    flexDirection: 'row',
    gap: 10,
  },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  weekDayText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94A3B8',
    width: 40,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
    marginBottom: 30,
  },
  dayCell: {
    width: '13.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  selectedDayCell: {
    backgroundColor: '#38A9D6',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  counterSection: {
    gap: 16,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  counterLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  countBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    minWidth: 15,
    textAlign: 'center',
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
  },
  resetButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#64748B',
  },
  confirmButton: {
    backgroundColor: '#38A9D6',
    flex: 1,
    marginLeft: 16,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 4,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});