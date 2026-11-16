import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function OTPScreen() {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState(['8', '8', '6', '6']);
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (digit: string) => {
    const emptyIndex = code.findIndex((c) => c === '');
    if (emptyIndex !== -1) {
      const updated = [...code];
      updated[emptyIndex] = digit;
      setCode(updated);
    }
  };

  const handleBackspace = () => {
    for (let i = code.length - 1; i >= 0; i--) {
      if (code[i] !== '') {
        const updated = [...code];
        updated[i] = '';
        setCode(updated);
        break;
      }
    }
  };

  const handleVerify = async () => {
    const fullCode = code.join('');
    if (fullCode.length < 4) {
      alert('4 таңбалы кодты толық енгізіңіз!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://typicode.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: fullCode }),
      });

      if (response.ok) {
        navigation.navigate('Home');
      }
    } catch (error) {
      navigation.navigate('Home');
    } finally {
      setLoading(false);
    }
  };

  const keypadData = [
    [{ num: '1', sub: '' }, { num: '2', sub: 'ABC' }, { num: '3', sub: 'DEF' }],
    [{ num: '4', sub: 'GHI' }, { num: '5', sub: 'JKL' }, { num: '6', sub: 'MNO' }],
    [{ num: '7', sub: 'PQRS' }, { num: '8', sub: 'TUV' }, { num: '9', sub: 'WXYZ' }],
    [{ num: '', sub: '' }, { num: '0', sub: '' }, { num: '⌫', sub: '' }],
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы бөлім: Статус-бар мен стрелка бірге тұрады */}
      <View>
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={14} color="#000000" style={styles.iconSpace} />
            <Ionicons name="wifi" size={14} color="#000000" style={styles.iconSpace} />
            <Ionicons name="battery-full" size={18} color="#000000" />
          </View>
        </View>

        <View style={styles.topNav}>
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.navigate('Register');
              }
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Орталық растау бөлімі */}
      <View style={styles.centerSection}>
        <Text style={styles.title}>Verification Account</Text>
        <Text style={styles.subtitle}>
          Style clip effect union underline. Editor auto bullet{'\n'}
          select fill select <Text style={styles.emailBold}>bessiecooper@gmail.com</Text>
        </Text>

        {/* 4 ұяшықты OTP өрісі */}
        <View style={styles.otpRow}>
          {code.map((digit, idx) => (
            <View key={idx} style={styles.otpBox}>
              <Text style={styles.otpDigit}>{digit}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleVerify} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.primaryButtonText}>Verification</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.resendText}>
          I don't have code? <Text style={styles.resendBold}>Resend Code</Text>
        </Text>
      </View>

      {/* Төменгі сандық пернетақта */}
      <View style={styles.keypad}>
        {keypadData.map((row, rIndex) => (
          <View key={rIndex} style={styles.keyRow}>
            {row.map((item, cIndex) => {
              if (item.num === '') {
                return <View key={cIndex} style={styles.keyEmpty} />;
              }
              const isBackspace = item.num === '⌫';
              return (
                <TouchableOpacity
                  key={cIndex}
                  style={[styles.keyButton, isBackspace && styles.keyBackspace]}
                  onPress={() => (isBackspace ? handleBackspace() : handleKeyPress(item.num))}
                >
                  <Text style={styles.keyNumber}>{item.num}</Text>
                  {item.sub !== '' && <Text style={styles.keyLetters}>{item.sub}</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpace: {
    marginRight: 6,
  },
  topNav: {
    paddingHorizontal: 24,
    paddingTop: 28,
    zIndex: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  centerSection: {
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 28,
  },
  emailBold: {
    color: '#000000',
    fontWeight: '700',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 28,
  },
  otpBox: {
    width: 58,
    height: 58,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  otpDigit: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#549EE7',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  resendText: {
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
  },
  resendBold: {
    color: '#549EE7',
    fontWeight: '700',
  },
  keypad: {
    backgroundColor: '#D2D5DB',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  keyButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  keyBackspace: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
  },
  keyEmpty: {
    flex: 1,
    marginHorizontal: 3,
  },
  keyNumber: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22,
  },
  keyLetters: {
    fontSize: 9,
    fontWeight: '700',
    color: '#4A4A4A',
    letterSpacing: 1,
  },
});