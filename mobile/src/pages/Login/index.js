import React, { useState } from 'react';
import { KeyboardAvoidingView,
         Platform,
         AsyncStorage,
         View,
         Image, 
         Text, 
         TextInput, 
         TouchableOpacity
        } from 'react-native';

import api from '../../services/api';        

import styles from './styles';
import logo from '../../assets/logo.png';

function Login( { navigation } ){
    const [ email, setEmail ] = useState('');
    const [ techs, setTechs ] = useState('');

    async function handleSubmit(){
        const response = await api.post('/sessions', {
            email
        });

        const { _id } = response.data;

        await AsyncStorage.setItem('user_id', _id);
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('Spots');
    }
    
    return (
        <KeyboardAvoidingView 
            enabled={Platform.OS === 'ios'}
            behavior="padding"
            style={styles.container}
        >
            <Image source={logo} />
            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail:"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Tecnologias de interesse:"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;