import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';

import Epay33 from './Epay33';
import PayOtherBill from './PayOtherBill';


function Epay39({ navigation }) {
    let x = <TouchableOpacity style={[styles.link,styles.boxWithShadow]} onPress={() =>navigation.navigate(Epay33)}>
        <Text style={styles.policy_text}>จ่ายของตนเอง</Text>
    </TouchableOpacity>

    let y = <TouchableOpacity style={[styles.link,styles.boxWithShadow]} onPress={() =>navigation.navigate(PayOtherBill)}>
        <Text style={styles.policy_text}>จ่ายของคนอื่น</Text>
    </TouchableOpacity>

    return (
        <SafeAreaView style={styles.container}>
             <Image
                style={styles.img_bg}
                source={require('../../assets/images/money2.png')}
            />
            <Text style={styles.text_title}>E-payment</Text>
            <View style={styles.card}>
                {x}
                {y}
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#f8f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(50),
        backgroundColor: '#f8f8f8',
        borderRadius: normalize(10),
        padding: 10,
    },
    card: {
        flexDirection: 'column',
        backgroundColor: '#f8f8f8f8',
        paddingHorizontal: normalize(20),
        borderRadius: 5,
    },
    text_title: {
        fontSize: normalize(28),
        color: '#000',
        marginBottom: 20,
        fontFamily: 'Kanit-SemiBold',
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    policy_text: {
        color: '#000000',
        fontSize: normalize(14),
        fontFamily: 'Kanit-Medium',
    },
    check1: {
        marginLeft: normalize(5),
    },
    link: {
        backgroundColor: '#ffffff',
        padding: 20,
        margin:10,
        width:300,
        alignItems:'center',
        borderRadius:normalize(10),
        
    },
    img_bg:{
        width:300,
        height:300,
        resizeMode:'contain',
    },
    boxWithShadow: {
        elevation: 20,
        shadowColor: '#3d3d3d',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
});


export default Epay39;