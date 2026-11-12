import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('bessiecooper@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Артқа қайту функциясы (бет жаңартылса да жұмыс істейді)
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Register');
    }
  };

  // Құпиясөзді ұмытқан жағдайда OTP бетіне жіберу
  const handleForgotPassword = () => {
    Alert.alert(
      'Құпиясөзді қалпына келтіру',
      `${email} поштасына растау коды жіберілді!`,
      [{ text: 'ОК', onPress: () => navigation.navigate('OTP', { email: email }) }]
    );
    // Веб-браузерде Alert көрінбей қалса, бірден OTP бетіне өтеді
    navigation.navigate('OTP', { email: email });
  };

  // Бэкендке (API) кіру сұранысын жіберу
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Қате', 'Email мен парольді енгізіңіз!');
      return;
    }

    setLoading(true);
    try {
      await fetch(`https://typicode.com{email}`);
      navigation.navigate('OTP', { email: email });
    } catch (error) {
      navigation.navigate('OTP', { email: email });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы статус-бар */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="wifi" size={14} color="#000000" style={styles.iconSpace} />
          <Ionicons name="battery-full" size={18} color="#000000" />
        </View>
      </View>

      {/* Артқа қайту батырмасы */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Негізгі бөлім */}
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <FontAwesome name="send" size={18} color="#549EE7" style={styles.planeIcon} />
          <Text style={styles.logoText}>Travel Go</Text>
        </View>

        <Text style={styles.title}>Welcome Travelling</Text>
        <Text style={styles.subtitle}>
          Style clip effect union underline. Editor auto bullet{'\n'}
          select fill select create draft. Pen list effect.
        </Text>

        <View style={styles.form}>
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

          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.primaryButtonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Төменгі Google және Facebook батырмалары */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="google" size={18} color="#DB4437" style={styles.socialIcon} />
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="facebook-square" size={18} color="#4267B2" style={styles.socialIcon} />
          <Text style={styles.socialText}>Login with Facebook</Text>
        </TouchableOpacity>
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
    paddingTop: 22,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    marginTop: -20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#7C7C7C',
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
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  forgotText: {
    fontSize: 12,
    color: '#549EE7',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#549EE7',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  socialContainer: {
    paddingHorizontal: 28,
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingVertical: 13,
    marginBottom: 12,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    fontSize: 14,
    color: '#4A4A4A',
    fontWeight: '600',
  },
});