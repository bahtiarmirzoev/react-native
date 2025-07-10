import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Animated, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import InputField from '@/components/ui/InputField';
import ChatIcon from '@/assets/images/chat-icon.svg';
import { CATEGORIES, WELCOME_MESSAGES } from '@/constants/data';
import { COLORS } from '@/constants/colors';

export default function HomeScreen() {
  const scaleAnim = new Animated.Value(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleCategoryPress = (category: string) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    router.push('/chat');
  };

  const handleSendPress = () => {
    router.push('/chat');
  };

  return (
    <Animated.View 
      style={[{
        flex: 1,
        backgroundColor: 'white'
      }, {
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
        }}>Chatbot AI</Text>
        <TouchableOpacity>
          <ChatIcon color={COLORS.secondary} width={24} height={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        {/* AI Bot Image */}
        <View style={{ alignItems: 'center', paddingVertical: 32 }}>
          <Animated.View 
            style={[{
              width: 128,
              height: 128,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24
            }, {
              transform: [{
                scale: scaleAnim
              }]
            }]}
          >
            <Image 
              source={require('../../assets/images/Ai-bot.png')}
              style={{ width: 128, height: 128 }}
              resizeMode="contain"
            />
          </Animated.View>
        </View>

        {/* Welcome Messages */}
        <View style={{ marginBottom: 32 }}>
          {/* Первая рекомендация */}
          <View style={{ 
            backgroundColor: '#f9fafb', 
            borderRadius: 12, 
            padding: 16, 
            marginBottom: 12 
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Ionicons 
                name="sparkles" 
                size={16} 
                color={COLORS.primary} 
                style={{ marginTop: 2, marginRight: 12 }} 
              />
              <Text style={{ 
                flex: 1, 
                color: '#374151', 
                fontSize: 16, 
                lineHeight: 24 
              }}>
                {WELCOME_MESSAGES[0]}
              </Text>
            </View>
          </View>

          {/* Вторая рекомендация + категории */}
          <View style={{ backgroundColor: '#f9fafb', borderRadius: 12, padding: 16 }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'flex-start', 
              marginBottom: 16 
            }}>
              <Ionicons 
                name="sparkles" 
                size={16} 
                color={COLORS.primary} 
                style={{ marginTop: 2, marginRight: 12 }} 
              />
              <Text style={{ 
                flex: 1, 
                color: '#374151', 
                fontSize: 16, 
                lineHeight: 24 
              }}>
                {WELCOME_MESSAGES[1]}
              </Text>
            </View>
            
            {/* Category Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              gap: 12 
            }}>
              {CATEGORIES.map((category, index) => (
                <Animated.View 
                  key={index}
                  style={{ transform: [{ scale: scaleAnim }] }}
                >
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderWidth: 2,
                      borderColor: COLORS.primary,
                      borderRadius: 20
                    }}
                    onPress={() => handleCategoryPress(category)}
                    activeOpacity={0.7}
                  >
                    <Text style={{ color: '#374151', fontSize: 14 }}>{category}</Text>
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Input Section */}
      <View style={{ 
        paddingHorizontal: 24, 
        paddingBottom: 24, 
        paddingTop: 16 
      }}>
        <InputField onSendPress={handleSendPress} />
      </View>


    </Animated.View>
  );
} 