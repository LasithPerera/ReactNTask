import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles/styles';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [isLowercase, setIsLowercase] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);

  const validatePassword = (text) => {
    setPassword(text);
    setIsLowercase(/[a-z]/.test(text));
    setIsUppercase(/[A-Z]/.test(text));
    setIsNumber(/[0-9]/.test(text));
    setIsMinLength(text.length >= 8);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>My App</Text>
          <TextInput placeholder="Name" placeholderTextColor="#888" style={styles.input} />
          <TextInput placeholder="Email Address" placeholderTextColor="#888" style={styles.input} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
            onChangeText={validatePassword}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
          />
          <View style={styles.passwordValidationContainer}>
            <View style={styles.passwordValidationRow}>
              <Icon name={isLowercase ? 'check-circle' : 'cancel'} size={20} color={isLowercase ? 'green' : 'red'} />
              <Text style={styles.passwordValidationText}>One lowercase character</Text>
            </View>
            <View style={styles.passwordValidationRow}>
              <Icon name={isUppercase ? 'check-circle' : 'cancel'} size={20} color={isUppercase ? 'green' : 'red'} />
              <Text style={styles.passwordValidationText}>One uppercase character</Text>
            </View>
            <View style={styles.passwordValidationRow}>
              <Icon name={isNumber ? 'check-circle' : 'cancel'} size={20} color={isNumber ? 'green' : 'red'} />
              <Text style={styles.passwordValidationText}>One number</Text>
            </View>
            <View style={styles.passwordValidationRow}>
              <Icon name={isMinLength ? 'check-circle' : 'cancel'} size={20} color={isMinLength ? 'green' : 'red'} />
              <Text style={styles.passwordValidationText}>8 characters minimum</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title="Sign Up" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.link}>
            Have an account? <Text style={styles.linkText}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
