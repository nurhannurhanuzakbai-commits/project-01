import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState('Bessie Cooper');
  const [email, setEmail] = useState('bessiecooper@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
const handleRegister = async () => {
    if (!fullName || !email || !password) {
      alert('Барлық өрістерді толтырыңыз!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://typicode.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email: email, password: password }),
      });

      if (response.ok) {
        navigation.navigate('OTP', { email: email });
      } else {
        alert('Тіркелу кезінде қате шықты');
      }
    } catch (error) {
      // Егер интернет немесе сервер болмаса да, тест үшін келесі бетке өткізу:
      navigation.navigate('OTP', { email: email });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Жоғарғы статус-бар */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="wifi" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="battery-full" size={18} color="#000000" />
        </View>
      </View>

      {/* 2. Артқа қайту батырмасы */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* 3. Экранның қақ ортасында тұратын негізгі бөлім */}
      <View style={styles.centerContent}>
        <View style={styles.logoContainer}>
          <FontAwesome name="send" size={18} color="#549EE7" style={styles.planeIcon} />
          <Text style={styles.logoText}>Travel Go</Text>
        </View>

        <Text style={styles.title}>Let's Join With Us to{'\n'}Around the World</Text>
        <Text style={styles.subtitle}>
          Style clip effect union underline. Editor auto bullet{'\n'}
          select fill select create draft. Pen list effect bullet{'\n'}
          layer undo object share outline.
        </Text>

        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Your Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={18} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.primaryButtonText}>Register</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
            <Text style={styles.loginLinkText}>
              Already have an account? <Text style={styles.linkBold}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Төменгі ережелер мәтіні */}
      <Text style={styles.footerText}>
        By clicking Register, you are agree to our{'\n'}
        regulation of <Text style={styles.termsBold}>Terms and Privacy</Text>
      </Text>
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
    paddingBottom: 4,
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
    paddingTop: 22,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    marginTop: 0,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  planeIcon: {
    marginRight: 8,
    transform: [{ rotate: '-10deg' }],
  },
  logoText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  title: {
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
    color: '#000000',
    lineHeight: 31,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  inputBox: {
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 3,
  },
  input: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    padding: 0,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#549EE7',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  loginLink: {
    marginTop: 14,
    alignItems: 'center',
  },
  loginLinkText: {
    fontSize: 12,
    color: '#7C7C7C',
  },
  linkBold: {
    color: '#549EE7',
    fontWeight: '700',
  },
  footerText: {
    fontSize: 11,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 20,
  },
  termsBold: {
    color: '#000000',
    fontWeight: '800',
  },
});