import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';

function PayOtherBill({ navigation }) {

    const [Id, setId] = useState('');
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={styles.icon} color="#000" size={32} name="chevron-back-outline" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerText}>จ่ายงวดคนอื่น</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.marg}>
                    <Text style={styles.text}>รหัสผู้ใช้งาน</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        key="field2"
                        name="field2"
                        placeholder="Id"
                        onChangeText={newId => setId(newId)}
                        defaultValue={Id} />
                </View>

                <TouchableOpacity style={styles.link} onPress={() => {
                    navigation.navigate('EpayOther', {
                        Id_num: Id,
                    });
                }}>
                    <Text style={styles.text_normal2}>ถัดไป</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    text_normal2: {
        fontFamily: 'Kanit-Medium',
        fontSize: normalize(16),
        color: '#fff'
    },
    header: {
        flexDirection: 'row',
        width: '95%',
    },
    center:{
        marginTop:'50%',
    },

    headerText: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(18),
        alignSelf: 'center',
        left: -10,
    },
    text: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily: 'Kanit-Medium'
    },
    marg: {
        margin: 30,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
    link: {
        backgroundColor: '#005A9C',
        padding: 10,
        margin: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
});


export default PayOtherBill;