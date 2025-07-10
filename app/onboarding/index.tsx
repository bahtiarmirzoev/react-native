import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: "Your One-Stop Name\nSolution",
    subtitle: "Simplify the process of finding the perfect\nand professional name."
  },
  {
    id: 2,
    title: "AI-Powered Name\nGeneration",
    subtitle: "Get personalized name suggestions\nbased on your preferences."
  },
  {
    id: 3,
    title: "Smart Recommendations\nfor You",
    subtitle: "Our intelligent system learns your style\nand provides the best options."
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  
  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      const nextSlide = currentSlide + 1;
      
      // Анимация слайда
      Animated.timing(slideAnim, {
        toValue: -nextSlide * width,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
      setCurrentSlide(nextSlide);
    } else {
      // Переход на страницу логина
      router.push('/auth/login');
    }
  };

      return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        
        {/* Carousel Container */}
        <View style={styles.carouselWrapper}>
          <Animated.View 
            style={[
              styles.carouselContainer,
              {
                transform: [{ translateX: slideAnim }]
              }
            ]}
          >
        {onboardingData.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <View style={styles.content}>
              
              {/* Diamond composition */}
              <View style={styles.diamondComposition}>
                {/* Top gradient square */}
                <LinearGradient
                  colors={['#FFFFFF', '#6A53E7']}
                  style={[styles.gradientSquare, styles.topGradientSquare]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                />
                
                {/* Top diamond */}
                <View style={[styles.diamond, styles.topDiamond]}>
                  <Image 
                    source={require('@/assets/images/top-onb.jpg')} 
                    style={styles.diamondImage}
                    resizeMode="cover"
                  />
                </View>
                
                {/* Left diamond */}
                <View style={[styles.diamond, styles.leftDiamond]}>
                  <Image 
                    source={require('@/assets/images/left-onb.jpg')} 
                    style={styles.diamondImage}
                    resizeMode="cover"
                  />
                </View>
                
                {/* Right diamond */}
                <View style={[styles.diamond, styles.rightDiamond]}>
                  <Image 
                    source={require('@/assets/images/right-onb.jpg')} 
                    style={styles.diamondImage}
                    resizeMode="cover"
                  />
                </View>
                
                {/* Bottom diamond */}
                <View style={[styles.diamond, styles.bottomDiamond]}>
                  <Image 
                    source={require('@/assets/images/bottom-onb.jpg')} 
                    style={styles.diamondImage}
                    resizeMode="cover"
                  />
                </View>
                
                {/* Bottom gradient square */}
                <LinearGradient
                  colors={['#FFFFFF', '#31C3F3']}
                  style={[styles.gradientSquare, styles.bottomGradientSquare]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                />
              </View>

              {/* Title */}
              <Text style={styles.title}>
                {slide.title}
              </Text>
              
              {/* Subtitle */}
              <Text style={styles.subtitle}>
                {slide.subtitle}
              </Text>
              
              {/* Progress indicator */}
              <View style={styles.progressContainer}>
                {onboardingData.map((_, progressIndex) => (
                  <View 
                    key={progressIndex}
                    style={[
                      styles.progressDot,
                      progressIndex === currentSlide ? styles.progressActive : styles.progressInactive
                    ]} 
                  />
                ))}
              </View>
              
              {/* Next Button */}
              <TouchableOpacity 
                style={styles.button}
                onPress={handleNext}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>
                  {currentSlide === onboardingData.length - 1 ? 'Get Started' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
          </Animated.View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carouselWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  carouselContainer: {
    flexDirection: 'row',
    width: width * 3, // 3 слайда
    height: '100%',
  },
  slide: {
    width: width,
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  diamondComposition: {
    width: 320,
    height: 280,
    marginBottom: 48,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientSquare: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 10,
    transform: [{ rotate: '45deg' }],
  },
  topGradientSquare: {
    top: 5,
    left: '50%',
    marginLeft: -25,
    zIndex: 1,
  },
  bottomGradientSquare: {
    bottom: 5,
    left: '50%',
    marginLeft: -25,
    zIndex: 1,
  },
  diamond: {
    position: 'absolute',
    overflow: 'hidden',
    transform: [{ rotate: '45deg' }],
  },
  topDiamond: {
    width: 100,
    height: 100,
    backgroundColor: '#6A53E7',
    borderRadius: 20,
    top: 20,
    left: '50%',
    marginLeft: -50,
    zIndex: 2,
  },
  leftDiamond: {
    width: 80,
    height: 80,
    backgroundColor: '#06B6D4',
    borderRadius: 16,
    top: '50%',
    marginTop: -40,
    left: 40,
    zIndex: 2,
  },
  rightDiamond: {
    width: 80,
    height: 80,
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    top: '50%',
    marginTop: -40,
    right: 40,
    zIndex: 2,
  },
  bottomDiamond: {
    width: 100,
    height: 100,
    backgroundColor: '#1F2937',
    borderRadius: 20,
    bottom: 20,
    left: '50%',
    marginLeft: -50,
    zIndex: 2,
  },
  diamondImage: {
    width: '100%',
    height: '100%',
    transform: [{ rotate: '-45deg' }, { scale: 1.4 }],
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 64,
    paddingHorizontal: 16,
    lineHeight: 24,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  progressActive: {
    width: 32,
    backgroundColor: '#6A53E7',
  },
  progressInactive: {
    width: 8,
    backgroundColor: '#d1d5db',
  },
  button: {
    width: '100%',
    backgroundColor: '#6A53E7',
    paddingVertical: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
}); 