import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Animated, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import ChatIcon from '@/assets/images/chat-icon.svg';
import { COLORS } from '@/constants/colors';

export default function ProfileScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogout = () => {
    router.push('/auth/login');
  };

  const menuItems = [
    { icon: 'settings-outline', title: 'Settings', onPress: () => {} },
    { icon: 'notifications-outline', title: 'Notifications', onPress: () => {} },
    { icon: 'time-outline', title: 'History', onPress: () => router.push('/history') },
    { icon: 'help-circle-outline', title: 'Support and Help', onPress: () => {} },
    { icon: 'log-out-outline', title: 'Logout', onPress: handleLogout },
  ];

  return (
    <Animated.View 
      style={[{ flex: 1, backgroundColor: 'white' }, { 
        opacity: fadeAnim, 
        transform: [{ translateY: slideAnim }] 
      }]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 24, 
        paddingTop: 48, 
        paddingBottom: 16, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e5e7eb' 
      }}>
        <View style={{ width: 24 }} />
        <Text style={{ 
          fontSize: 20, 
          fontWeight: '600', 
          color: '#111827' 
        }}>Profile</Text>
        <TouchableOpacity>
          <ChatIcon color={COLORS.secondary} width={24} height={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        {/* Profile Info */}
        <View style={{ alignItems: 'center', paddingVertical: 32 }}>
          <Image 
            source={require('../../assets/images/avatar_glock.jpg')}
            style={{ 
              width: 96, 
              height: 96, 
              borderRadius: 48, 
              marginBottom: 16 
            }}
            resizeMode="cover"
          />
          <Text style={{ 
            fontSize: 20, 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: 4 
          }}>AlexandrGlock</Text>
          <Text style={{ 
            color: '#6b7280', 
            fontSize: 16 
          }}>Asimlox8@gmail.com</Text>
        </View>

        {/* Menu Items */}
        <View style={{ gap: 12 }}>
          {menuItems.map((item, index) => (
            <Animated.View
              key={index}
              style={{
                opacity: fadeAnim,
                transform: [{
                  translateX: slideAnim
                }]
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  backgroundColor: '#f9fafb',
                  borderRadius: 12
                }}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                  <View style={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: 'white', 
                    borderRadius: 20, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2
                  }}>
                    <Ionicons name={item.icon as any} size={20} color={COLORS.secondary} />
                  </View>
                  <Text style={{ 
                    color: '#111827', 
                    fontWeight: '500', 
                    fontSize: 16 
                  }}>{item.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>


    </Animated.View>
  );
} 