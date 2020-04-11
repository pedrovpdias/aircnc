import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30
    },

    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderStyle: 'solid',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height: 44,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 2,
    },

    button: {
      height: 42,
      backgroundColor: '#f05a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
    },

    buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16
    }
  });