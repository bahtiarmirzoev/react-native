import React from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import { COLORS } from '@/constants/colors';

interface CategoryButtonProps {
  title: string;
  onPress: (category: string) => void;
  scaleAnim?: Animated.Value;
}

export default function CategoryButton({ title, onPress, scaleAnim }: CategoryButtonProps) {
  const animatedStyle = scaleAnim ? { transform: [{ scale: scaleAnim }] } : {};

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderWidth: 2,
          borderColor: COLORS.primary,
          borderRadius: 20
        }}
        onPress={() => onPress(title)}
        activeOpacity={0.7}
      >
        <Text style={{ 
          color: '#374151', 
          fontSize: 14 
        }}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
} 