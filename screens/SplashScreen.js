import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000, // Duration of the fade-in
      useNativeDriver: true,
    }).start();

    // Navigate after 6 seconds
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 6000); // 6 seconds

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        My App
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SplashScreen;
