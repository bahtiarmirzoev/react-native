import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import InputField from '@/components/ui/InputField';
import ChatIcon from '@/assets/images/chat-icon.svg';
import { COLORS } from '@/constants/colors';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello there!', isUser: true, timestamp: new Date() },
    { id: '2', text: 'Hello there! How may I assist you today?', isUser: false, timestamp: new Date() },
    { id: '3', text: "I'm looking for a name that reflects adventure and exploration.", isUser: true, timestamp: new Date() },
    { id: '4', text: 'How about the name "VentureQuest"? It combines the sense of adventure with a quest for exploration. Let me know if you\'d like more suggestions or if there\'s anything specific you have in mind!', isUser: false, timestamp: new Date() },
    { id: '5', text: 'I want a name that sounds elegant and timeless.', isUser: true, timestamp: new Date() },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (inputText.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsLoading(true);
      
      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Here are some suggestions for "${inputText}": Creative Name 1, Innovative Name 2, Unique Name 3`,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1500);
    }
  };

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
        }}>Chat</Text>
        <TouchableOpacity>
          <ChatIcon color={COLORS.secondary} width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 16 }}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={{
              marginBottom: 16,
              alignItems: message.isUser ? 'flex-end' : 'flex-start'
            }}
          >
            <View
              style={[{
                maxWidth: '80%',
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 16
              }, {
                borderBottomRightRadius: message.isUser ? 4 : 16,
                borderBottomLeftRadius: message.isUser ? 16 : 4,
                backgroundColor: message.isUser ? COLORS.primary : COLORS.gray[100]
              }]}
            >
              <Text style={{
                fontSize: 16,
                color: message.isUser ? 'white' : '#111827'
              }}>
                {message.text}
              </Text>
            </View>
          </View>
        ))}
        
        {isLoading && (
          <View style={{ alignItems: 'flex-start', marginBottom: 16 }}>
            <View 
              style={{
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 16,
                borderBottomLeftRadius: 4,
                backgroundColor: COLORS.gray[100]
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="sparkles" size={12} color={COLORS.primary} style={{ marginRight: 8 }} />
                <Text style={{ color: '#6b7280' }}>Thinking...</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Input Section */}
      <View style={{ 
        paddingHorizontal: 24, 
        paddingBottom: 24, 
        paddingTop: 16 
      }}>
        <InputField
          placeholder="Ask me to generate names..."
          value={inputText}
          onChangeText={setInputText}
          onSendPress={handleSend}
        />
      </View>


    </View>
  );
} 