import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentComplete from './PaymentComplete';
import Test from './Test';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';

function Preview33({ route, navigation }) {
    const { Id_num, first_name, last_name, user_ID, p_month, p_amount } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.bg_color}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={styles.icon} color="#fff" size={32} name="chevron-back-outline" />
                    </TouchableOpacity>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.headerText}>ตรวจสอบข้อมูล</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text_normal}>{first_name + ' ' + last_name}</Text>
                    <Text style={styles.text_normal2}>{user_ID}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Ionicons style={styles.icon} color="#005A9C" size={32} name="calendar-outline" />
                <Text style={styles.text}>ชำระงวด {p_month}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.row2}>
                    <Text style={styles.text_normal3}>จำนวน:</Text>
                    <Text style={styles.text_normal3}>{p_amount} บาท</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.text_normal4}>เลขที่รายการ:</Text>
                    <Text style={styles.text_normal4}>{Id_num}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button_sign_up} onPress={() => navigation.navigate(PaymentComplete)}>
                <Text style={styles.text_normal2}>ถัดไป</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button_sign_up: {
        marginTop:'55%',
        backgroundColor: "#005A9C",
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: 'center',
        width:'80%',
    },
    header: {
        flexDirection: 'row',
        width: '95%',
        marginTop: '13%',
    },
    headerText: {
        fontFamily: 'Kanit-SemiBold',
        color: '#ffffff',
        fontSize: normalize(18),
        alignSelf: 'center',
        left: -8,
    },
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',

    },
    icon: {
        alignSelf: 'center',
        paddingLeft: 5,
    },
    text_normal: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(18),
        color: '#fff'
    },
    text_normal2: {
        fontFamily: 'Kanit-Medium',
        fontSize: normalize(16),
        color: '#fff'
    },
    text_normal3: {
        fontFamily: 'Kanit-Medium',
        fontSize: normalize(14),
        color: '#000'
    },
    text_normal4: {
        fontFamily: 'Kanit-Light',
        fontSize: normalize(12),
        color: '#000'
    },
    box: {
        marginVertical: normalize(40),
        alignItems: 'center',
    },
    bg_color: {
        backgroundColor: '#005A9C',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#005A9C',
        marginVertical: normalize(20),
        width: '90%',
        padding: 10,
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'Kanit-Medium',
        marginLeft: 10,
        fontSize: normalize(14),
    },
    box2: {
        backgroundColor: '#fff',
        width: '90%',
        padding: normalize(20),
        borderRadius: 10,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});

export default Preview33;