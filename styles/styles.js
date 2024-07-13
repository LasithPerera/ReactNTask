import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 30,
    zIndex: 1,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPassword: {
    color: '#FFF',
    textAlign: 'right',
    marginVertical: 10,
  },
  link: {
    color: '#FFFF',
    textAlign: 'center',
    marginVertical: 10,

  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#FFC107',
  },
  buttonContainer: {
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  passwordValidationContainer: {
    width: '100%',
    marginVertical: 10,
  },
  passwordValidationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  passwordValidationText: {
    color: '#FFF',
    marginLeft: 10,
  },
});

export default styles;
