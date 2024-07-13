import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://thronesapi.com/api/v2/Characters');
      const data = await response.json();
      navigation.navigate('CharacterList', { characters: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <TextInput placeholder="Email" placeholderTextColor="#888" style={styles.input} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>
            Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;



