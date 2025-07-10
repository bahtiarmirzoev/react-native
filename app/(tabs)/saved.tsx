import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import SaveIcon from '@/assets/images/save.svg';
import ChatIcon from '@/assets/images/chat-icon.svg';
import { COLORS } from '@/constants/colors';

export default function SavedScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
        }}>Saved</Text>
        <TouchableOpacity>
          <ChatIcon color={COLORS.secondary} width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* Empty State */}
        <View style={{ 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center', 
          paddingVertical: 80, 
          minHeight: 500 
        }}>
          <View style={{ 
            width: 96, 
            height: 96, 
            backgroundColor: '#f3f4f6', 
            borderRadius: 48, 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 24 
          }}>
            <SaveIcon 
              color={COLORS.gray[400]}
              width={40} 
              height={40} 
            />
          </View>
          <Text style={{ 
            fontSize: 20, 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: 8 
          }}>No saved items yet</Text>
          <Text style={{ 
            color: '#6b7280', 
            textAlign: 'center', 
            paddingHorizontal: 32, 
            marginBottom: 32 
          }}>
            Save your favorite generated names to access them later
          </Text>
          <TouchableOpacity 
            style={{
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 20,
              backgroundColor: COLORS.primary
            }}
            onPress={() => router.push('/chat')}
          >
            <Text style={{ color: 'white', fontWeight: '500' }}>Start Generating</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </View>
  );
} 