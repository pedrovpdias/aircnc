import React, { useState, useEffect } from 'react';
import { AsyncStorage, SafeAreaView, ScrollView, Text, Image } from 'react-native';

import SpotList from '../../components/SpotList';

import styles from './styles';

import logo from '../../assets/logo.png';

function Spots(){
    const [techs, setTechs] = useState([]);
    
    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            
        </SafeAreaView>
    );
}

export default Spots;