import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TextInput, Input, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue, child, get, query, equalTo, orderByChild } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import Preview33 from './Preview33';
import PaymentComplete from './PaymentComplete';

function Epay40({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [hospital, setHospital] = useState("");
    const [status, setStatus] = useState("");
    const [nationalID, setNationalID] = useState("");
    const userId = auth.currentUser.uid;

    useEffect(() => {
        return onValue(ref(database, '/users/' + userId), (snapshot) => {
            let data_firstName = (snapshot.val().firstName);
            let data_lastName = (snapshot.val().lastName);
            let data_hospital = (snapshot.val().currentHospital);
            let data_status = (snapshot.val().status);
            let data_nationalID = (snapshot.val().nationalID);

            setFirstName(data_firstName);
            setLastName(data_lastName);
            setHospital(data_hospital);
            setStatus(data_status);
            setNationalID(data_nationalID);
        });
    }, []);


    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);

    const inputChange1 = async (num) => {
        setNumber1(num)
        const newTotal = number1 + number2;
        setTotal(newTotal);
    }
    const inputChange = (num) => {
        setNumber2(num)
        const newTotal = number1 + number2;
        setTotal(newTotal);
    }
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text_normal3}>{firstName +' '+ lastName}</Text>
                    <Text style={styles.text}>{nationalID}</Text>
                </View>
                <View style={styles.marg}>
                    <Text style={styles.text}>เงินสมทบ</Text>
                    <TextInput
                        style={styles.input}
                        
                        placeholder="0"
                        value={number1}
                        onChange={v => {
                            inputChange1(Number.parseInt(v.nativeEvent.text));
                        }}
                    />
                </View>
                <View style={styles.marg}>
                    <Text style={styles.text}>เงินออม</Text>
                    <TextInput
                        style={styles.input}
                        
                        placeholder="0"
                        maxLength={3}
                        value={number2}
                        onChange={e => {
                            inputChange(Number.parseInt(e.nativeEvent.text));
                        }}
                    />

                </View>
                <Text style={styles.text}>รวม: {total}</Text>
                <TouchableOpacity style={styles.button_sign_up} onPress={() => navigation.navigate(PaymentComplete)}>
                    <Text style={styles.text_normal2}>ถัดไป</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    button_sign_up: {
        marginTop: '20%',
        backgroundColor: "#005A9C",
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: 'center',
       
    },
    text_normal2: {
        fontFamily: 'Kanit-Medium',
        fontSize: normalize(16),
        color: '#fff'
    },
    text_normal3: {
        fontFamily: 'Kanit-Medium',
        fontSize: normalize(16),
        color: '#000'
    },
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    box: {
        paddingHorizontal: '20%',

    },
    marg: {
        marginVertical: 20,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
    text: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily: 'Kanit-Medium'
    },

});

export default Epay40;