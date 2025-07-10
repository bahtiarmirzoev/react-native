import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Alert, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AiIcon from '@/assets/images/ai-icon.svg';
import LogoBg from '@/assets/images/logo-bg.svg';
import GoogleLogo from '@/assets/images/google-logo.svg';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Handle registration logic here
    router.replace('/(tabs)/home');
  };

  const handleFacebookRegister = () => {
    Alert.alert('Facebook Register', 'Facebook registration would be implemented here');
  };

  const handleGoogleRegister = () => {
    Alert.alert('Google Register', 'Google registration would be implemented here');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Logo/Icon */}
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <LogoBg width={80} height={80} />
            <View style={styles.aiIconContainer}>
              <AiIcon width={50} height={50} />
            </View>
            {/* Sparkle effects */}
            <View style={styles.sparkleContainer}>
              <Ionicons name="sparkles" size={16} color="#22D3EE" />
            </View>
          </View>
          
          <Text style={styles.title}>
            Create Account
          </Text>
          <Text style={styles.subtitle}>
            Sign up to get started
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-outline" size={20} color="#9CA3AF" />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Full Name"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
            </View>
            <TextInput
              style={styles.textInputWithIcon}
              placeholder="Enter Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeIconContainer}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>
          </View>


        </View>

        {/* Register Button */}
        <TouchableOpacity 
          style={styles.registerButton}
          onPress={handleRegister}
          activeOpacity={0.8}
        >
          <Text style={styles.registerButtonText}>
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          
          {/* Facebook Register */}
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={handleFacebookRegister}
            activeOpacity={0.8}
          >
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text style={styles.socialButtonText}>
              Sign up with Facebook
            </Text>
          </TouchableOpacity>

          {/* Google Register */}
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={handleGoogleRegister}
            activeOpacity={0.8}
          >
            <GoogleLogo width={20} height={20} />
            <Text style={styles.socialButtonText}>
              Sign up with Google
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login link */}
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.linkButton}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 80,
    height: 80,
    marginBottom: 16,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -25 },
      { translateY: -25 }
    ],
  },
  sparkleContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  iconContainer: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    paddingVertical: 16,
    paddingLeft: 48,
    paddingRight: 16,
    fontSize: 16,
    color: '#111827',
  },
  textInputWithIcon: {
    width: '100%',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    paddingVertical: 16,
    paddingLeft: 48,
    paddingRight: 48,
    fontSize: 16,
    color: '#111827',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#6A53E7',
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    paddingHorizontal: 16,
    color: '#6b7280',
    fontSize: 14,
  },
  socialContainer: {
    marginBottom: 24,
  },
  socialButton: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  socialButtonText: {
    marginLeft: 12,
    color: '#374451',
    fontSize: 16,
    fontWeight: '500',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#6b7280',
    fontSize: 14,
  },
  linkButton: {
    color: '#6A53E7',
    fontSize: 14,
    fontWeight: '500',
  },
}); 