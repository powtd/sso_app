import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { auth } from '../../firebase/firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Home from "./Home";
import SignUp from "./SignUp";



const SignIn = ({ navigation }) => {

    useFonts({
        'Kanit-SemiBold': require('../../assets/fonts/Kanit-SemiBold.ttf'),
        'Kanit-Medium': require('../../assets/fonts/Kanit-Medium.ttf'),
        'Kanit-Light': require('../../assets/fonts/Kanit-Light.ttf'),
    });

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    const signInUser = () => {
        signInWithEmailAndPassword(auth, text, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate(Home)
                setIsSignedIn(true)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    //PixelRatio.getFontScale();

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.bg1}></View>
        <View style={styles.card}>
            <Text style={styles.text_title}>เข้าสู่ระบบ</Text>
            <View style={styles.space}>
                <Text style={styles.text}>รหัสผู้ใช้งาน (เลขบัตรประจำตัวประชาชน)</Text>
                <TextInput
                    style={styles.input}
                    key="field1"
                    name="field1"
                    placeholder="หมายเลขบัตรประชาชน(13 หลัก)"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text} />
            </View>
            <View style={styles.space}>
                <Text style={styles.text}>รหัสผ่าน</Text>
                <TextInput
                    style={styles.input}
                    key="field2"
                    name="field2"
                    placeholder="รหัสผ่าน"
                    onChangeText={newPassword => setPassword(newPassword)}
                    defaultValue={password} />
            </View>
            <View style={styles.space}>
                <Text style={styles.text_link} >ลืมรหัสผ่าน</Text>
            </View>
            <View style={styles.space}>
                <TouchableOpacity
                    style={styles.button_log_in}
                    onPress={signInUser}>
                    <Text style={styles.buttonText_l}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button_sign_up}
                    onPress={() =>
                        navigation.navigate(SignUp)
                    }
                >
                    <Text style={styles.buttonText_s}>สมัครสมาชิก</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#e9ebee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: normalize(270),
        backgroundColor: '#005C9E',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    card: {
        flexDirection: 'column',
        //borderWidth: 1,
        backgroundColor: '#ffffff',
        padding: normalize(20),
        borderRadius: 5,
    },
    text_title: {
        fontSize: normalize(24),
        color: '#204082',
        marginBottom: 20,
        fontFamily: 'Kanit-SemiBold',
    },
    space: {
        marginBottom: 20,
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
    text_link: {
        color: '#204082',
        textAlign: 'right',
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(12),
    },
    button_log_in: {
        marginBottom: 20,
        backgroundColor: "#FFC43D",
        padding: normalize(10),
        borderRadius: normalize(5),
        alignItems: 'center',
    },
    buttonText_l: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily: 'Kanit-SemiBold',
    },
    button_sign_up: {
        backgroundColor: "#005A9C",
        padding: normalize(10),
        borderRadius: normalize(5),
        alignItems: 'center',
    },
    buttonText_s: {
        color: '#ffffff',
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(12),
    },
});

export default SignIn;