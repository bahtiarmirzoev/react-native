import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MicIcon from '@/assets/images/mic-outline.svg';
import SendIcon from '@/assets/images/send.svg';
import { COLORS } from '@/constants/colors';

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSendPress?: () => void;
  onMicPress?: () => void;
}

export default function InputField({ 
  placeholder = "Generate a name of ....",
  value,
  onChangeText,
  onSendPress,
  onMicPress
}: InputFieldProps) {
  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center', 
      gap: 12 
    }}>
      <View 
        style={[{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f9fafb',
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 16
        }, { 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.1, 
          shadowRadius: 8, 
          elevation: 3 
        }]}
      >
        <TextInput
          style={{
            flex: 1,
            color: '#374151',
            fontSize: 16
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray[400]}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onMicPress}>
          <MicIcon 
            color={COLORS.primary}
            width={24} 
            height={24} 
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary
        }}
        onPress={onSendPress}
      >
        <SendIcon 
          color={COLORS.white}
          width={20} 
          height={20} 
        />
      </TouchableOpacity>
    </View>
  );
} 