import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '@/constants/colors';

const HISTORY_ITEMS = [
  {
    id: '1',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  },
  {
    id: '2', 
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and..'
  },
  {
    id: '3',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  },
  {
    id: '4',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  },
  {
    id: '5',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  },
  {
    id: '6',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  },
  {
    id: '7',
    text: 'Give me random names..',
    response: 'How about the name "Seraphina Grace"? It exudes elegance and'
  }
];

export default function HistoryScreen() {
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
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 20, 
          fontWeight: '600', 
          color: '#111827' 
        }}>Conversation</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {HISTORY_ITEMS.map((item, index) => (
          <TouchableOpacity 
            key={item.id}
            style={{
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#f9fafb'
            }}
            onPress={() => router.push('/chat')}
            activeOpacity={0.7}
          >
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start' 
            }}>
              <View style={{ flex: 1, marginRight: 16 }}>
                <Text style={{ 
                  color: '#111827', 
                  fontWeight: '500', 
                  marginBottom: 8, 
                  fontSize: 16 
                }}>{item.text}</Text>
                <Text style={{ 
                  color: '#6b7280', 
                  fontSize: 14, 
                  lineHeight: 20 
                }} numberOfLines={2}>
                  {item.response}
                </Text>
              </View>
              <TouchableOpacity style={{ padding: 8, margin: -8 }}>
                <Ionicons name="ellipsis-vertical" size={16} color="#9ca3af" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Add some bottom padding for tab bar */}
        <View style={{ height: 80 }} />
      </ScrollView>


    </View>
  );
} 