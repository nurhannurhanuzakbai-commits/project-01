import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Wifi, Signal, CheckCircle2, ChevronRight } from 'lucide-react-native';

export default function PaymentMethodScreen() {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* ЖОҒАРҒЫ СТАТУС ПАНЕЛІ (iPhone дизайны) */}
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

        {/* ЖОҒАРҒЫ ПАНЕЛЬ (Артқа қайту және тақырып) */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <ArrowLeft size={20} color="#1E293B" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment Method</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* CHOICE OF DESTINATION БӨЛІМІ */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionLabel}>Choice Of Destination</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.destinationSubInfo}>11 - 16 Juni 2023 • 2 Per, 1 Chd</Text>
          
          <View style={styles.destinationRow}>
            <View style={styles.destinationThumbnail} />
            <View>
              <Text style={styles.placeName}>Raja Ampat</Text>
              <Text style={styles.placeDesc}>Library device clip stroke through move.</Text>
            </View>
          </View>
        </View>

        {/* PAYMENT METHOD БӨЛІМІ */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionLabel}>Payment Method</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardBox}>
            <View style={styles.mastercardIcon}>
              <View style={[styles.circle, styles.redCircle]} />
              <View style={[styles.circle, styles.orangeCircle]} />
            </View>
            <View>
              <Text style={styles.cardNumber}>5543 9929 0013 9925</Text>
              <Text style={styles.cardHolder}>un Bessie Cooper</Text>
            </View>
          </View>
        </View>

        {/* PRICE DETAILS БӨЛІМІ */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>Price Details</Text>
          
          <View style={styles.priceRow}>
            <Text style={styles.priceKey}>Rental Price (5 Day)</Text>
            <Text style={styles.priceVal}>$30.000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceKey}>Service Fee</Text>
            <Text style={styles.priceVal}>$100</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceKey}>Adalan Price (5 Day)</Text>
            <Text style={styles.priceVal}>$1.420</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.totalKey}>Total Payment</Text>
            <Text style={styles.totalVal}>$31.420</Text>
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* ТӨМЕНГІ БАТЫРМА */}
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.footerLabel}>Price Place</Text>
          <Text style={styles.footerPrice}>$31.420</Text>
        </View>
        <TouchableOpacity
          style={styles.purchaseButton}
          activeOpacity={0.85}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
      </View>

      {/* CONFIRMATION MODAL (Растау терезесі / Чек) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconBox}>
              <CheckCircle2 size={36} color="#38A9D6" />
            </View>
            <Text style={styles.modalTitle}>Confirmation Order</Text>
            <Text style={styles.modalSubtitle}>
              Music Akystat Venenate Dui Etiam Pllastro Sem Non Nulla
            </Text>

            <TouchableOpacity
              style={styles.modalPurchaseBtn}
              activeOpacity={0.85}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.modalPurchaseText}>Purchase Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 10,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1E293B',
  },
  sectionCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
  },
  changeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#38A9D6',
  },
  destinationSubInfo: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 12,
  },
  destinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  destinationThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#CBD5E1',
  },
  placeName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 2,
  },
  placeDesc: {
    fontSize: 11,
    color: '#64748B',
    maxWidth: 220,
  },
  cardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 14,
  },
  mastercardIcon: {
    width: 36,
    height: 24,
    flexDirection: 'row',
    position: 'relative',
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    opacity: 0.85,
  },
  redCircle: {
    backgroundColor: '#EB001B',
  },
  orangeCircle: {
    backgroundColor: '#F79E1B',
    position: 'absolute',
    left: 12,
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  cardHolder: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceKey: {
    fontSize: 13,
    color: '#64748B',
  },
  priceVal: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
  totalRow: {
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  totalKey: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  totalVal: {
    fontSize: 15,
    fontWeight: '800',
    color: '#38A9D6',
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
  footerLabel: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '600',
  },
  footerPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
  },
  purchaseButton: {
    backgroundColor: '#38A9D6',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 25,
    elevation: 4,
  },
  purchaseButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
  },
  modalIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E7F5FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  modalPurchaseBtn: {
    backgroundColor: '#38A9D6',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  modalPurchaseText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});