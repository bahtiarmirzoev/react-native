import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header with diamond shape images */}
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 32 
      }}>
        
        {/* Diamond shaped image container */}
        <View style={{ position: 'relative', marginBottom: 48 }}>
          {/* Top diamond */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            marginLeft: -48,
            width: 96,
            height: 96,
            backgroundColor: '#f3e8ff',
            borderRadius: 16,
            transform: [{ rotate: '45deg' }],
            overflow: 'hidden'
          }}>
            <View style={{
              width: '100%',
              height: '100%',
              transform: [{ rotate: '-45deg' }, { scale: 1.5 }]
            }}>
              <Image 
                source={require('@/assets/images/partial-react-logo.png')} 
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
          
          {/* Left diamond */}
          <View style={{
            position: 'absolute',
            top: 48,
            left: -32,
            width: 80,
            height: 80,
            backgroundColor: '#dbeafe',
            borderRadius: 12,
            transform: [{ rotate: '45deg' }],
            overflow: 'hidden'
          }}>
            <View style={{
              width: '100%',
              height: '100%',
              transform: [{ rotate: '-45deg' }, { scale: 1.5 }]
            }}>
              <Image 
                source={require('@/assets/images/react-logo.png')} 
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
          
          {/* Right diamond */}
          <View style={{
            position: 'absolute',
            top: 48,
            right: -32,
            width: 80,
            height: 80,
            backgroundColor: '#fed7aa',
            borderRadius: 12,
            transform: [{ rotate: '45deg' }],
            overflow: 'hidden'
          }}>
            <View style={{
              width: '100%',
              height: '100%',
              transform: [{ rotate: '-45deg' }, { scale: 1.5 }]
            }}>
              <Image 
                source={require('@/assets/images/icon.png')} 
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
          
          {/* Bottom diamond */}
          <View style={{
            position: 'absolute',
            top: 96,
            left: '50%',
            marginLeft: -40,
            width: 80,
            height: 80,
            backgroundColor: '#1f2937',
            borderRadius: 12,
            transform: [{ rotate: '45deg' }],
            overflow: 'hidden'
          }}>
            <View style={{
              width: '100%',
              height: '100%',
              transform: [{ rotate: '-45deg' }, { scale: 1.5 }]
            }}>
              <Image 
                source={require('@/assets/images/adaptive-icon.png')} 
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
          
          {/* Placeholder for center area */}
          <View style={{ marginTop: 128 }} />
        </View>

        {/* Title */}
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#111827',
          textAlign: 'center',
          marginBottom: 16,
          lineHeight: 32
        }}>
          Your One-Stop Name{'\n'}Solution
        </Text>
        
        {/* Subtitle */}
        <Text style={{
          color: '#6b7280',
          textAlign: 'center',
          fontSize: 16,
          marginBottom: 64,
          paddingHorizontal: 16,
          lineHeight: 24
        }}>
          Simplify the process of finding the perfect{'\n'}and professional name.
        </Text>
        
        {/* Progress indicator */}
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginBottom: 48 
        }}>
          <View style={{
            width: 32,
            height: 8,
            borderRadius: 4,
            marginRight: 8,
            backgroundColor: '#6A53E7'
          }} />
          <View style={{
            width: 8,
            height: 8,
            backgroundColor: '#d1d5db',
            borderRadius: 4,
            marginRight: 8
          }} />
          <View style={{
            width: 8,
            height: 8,
            backgroundColor: '#d1d5db',
            borderRadius: 4
          }} />
        </View>
        
        {/* Next Button */}
        <TouchableOpacity 
          style={{
            width: '100%',
            paddingVertical: 16,
            borderRadius: 16,
            backgroundColor: '#6A53E7'
          }}
          onPress={() => router.push('/auth/login')}
          activeOpacity={0.8}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600'
          }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 