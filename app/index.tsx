import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

type OnboardingItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  gradient: [string, string];
};

const onboardingData: OnboardingItem[] = [
  {
    id: 1,
    title: 'Welcome to AI Chat',
    subtitle: 'Your intelligent conversation partner',
    description: 'Experience the future of communication with our advanced AI chatbot that understands and responds naturally.',
    icon: 'chatbubbles',
    gradient: ['#667eea', '#64b6ff'],
  },
  {
    id: 2,
    title: 'Smart Conversations',
    subtitle: 'Natural and intuitive',
    description: 'Our AI understands context, remembers conversations, and provides helpful responses to all your questions.',
    icon: 'bulb',
    gradient: ['#f093fb', '#f5576c'],
  },
  {
    id: 3,
    title: '24/7 Available',
    subtitle: 'Always ready to help',
    description: 'Get instant answers anytime, anywhere. Your AI assistant is always online and ready to assist you.',
    icon: 'time',
    gradient: ['#43e97b', '#38f9d7'],
  },
  {
    id: 4,
    title: 'Ready to Start?',
    subtitle: 'Begin your journey',
    description: 'Join thousands of users who are already enjoying intelligent conversations with our AI chatbot.',
    icon: 'rocket',
    gradient: ['#fa709a', '#fee140'],
  },
];

export const options = { headerShown: false };
export const screenOptions = { headerShown: false };

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    // Navigate to main app
    console.log('Skip onboarding');
  };

  const handleGetStarted = () => {
    // Navigate to main app
    console.log('Get started');
  };

  // Simple dots (not animated)
  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index === currentIndex ? '#fff' : 'rgba(255, 255, 255, 0.4)',
              width: index === currentIndex ? 20 : 8,
            },
          ]}
        />
      ))}
    </View>
  );

  const renderSlide = (item: OnboardingItem, index: number) => {
    return (
      <View key={item.id} style={styles.slide}>
        <LinearGradient colors={item.gradient} style={styles.gradient}>
          <View style={styles.slideContent}>
            <View style={styles.iconContainer}>
              <View style={styles.iconBackground}>
                <Ionicons name={item.icon} size={64} color="#fff" />
              </View>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        style={styles.scrollView}
      >
        {onboardingData.map((item, index) => renderSlide(item, index))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        {renderDots()}
        <View style={styles.buttonContainer}>
          {currentIndex < onboardingData.length - 1 ? (
            <>
              <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextText}>Next</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.getStartedContainer}>
              <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                <Text style={styles.getStartedText}>Start </Text>
                <Ionicons name="rocket" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    height: height * 0.8,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    borderRadius: 32,
    overflow: 'hidden',
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 36,
  },
  iconBackground: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: 320,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.92)',
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
  },
  bottomContainer: {
    height: height * 0.18,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  skipText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 44,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  getStartedText: {
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 8,
    textAlign: 'center',
    width: 100,
  },
  getStartedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
