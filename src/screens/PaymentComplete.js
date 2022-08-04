import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue, child, get, query, equalTo, orderByChild } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import Preview33 from './Preview33';

function PaymentComplete({ navigation }) {


    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Image
                    style={styles.img_bg}
                    source={require('../../assets/images/check.png')}
                />
                <Text style={styles.text_normal}>Payment Complete</Text>
            </SafeAreaView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
    },
    img_bg: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf:'center',
        marginTop:'20%',
        marginBottom:'10%',
    },
    text_normal: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: 24,
        textAlign:'center',
    },

});

export default PaymentComplete;