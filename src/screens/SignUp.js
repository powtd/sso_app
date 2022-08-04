import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, PixelRatio } from 'react-native';
import Checkbox from 'expo-checkbox';
import { auth } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import { makeid } from '../functions/idGenerate';

import Home from "./Home";

const SignUp = ({ navigation }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [nationalID, setNationalID] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    const [nameTittle, setNameTittle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [isChecked, setChecked] = useState(false);
    const signUpUser = () => {
        console.log(text)
        console.log(password)
        createUserWithEmailAndPassword(auth, text, password)
            .then((userCredential) => {
                console.log('register success');

                setIsSignedIn(true);
                //navigation.navigate(Home)
                const user = userCredential.user;
                //const user = auth.currentUser;
                console.log(user.uid);
                writeUserData(user.uid);
            })
            .catch((re) => {
                console.log(re);
            })
    }

    function writeUserData(userId) {
        set(ref(database, 'users/' + userId), {
            nationalID: nationalID,
            nameTittle: nameTittle,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            currentHospital: "โรงพยาบาลถั่วเหลือง",
            status: "เป็นผู้ประกันตน ม.33",
        });

        //let billID="uy651D158ad"
       
        //set(ref(database, 'bills/' + billID), {
        //    user: userId,
        //    billID: billID,
        //    month: "มีนาคม",
        //    amount: 750,
        //    paymentStatus: "ยังไม่ชำระ",
        //    nationalID: nationalID,
        //});

        navigation.navigate(Home)
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.card}>
                <Text style={styles.text_title1}>สมัครสมาชิก</Text>
            </View>
            <View style={styles.card1}>
                <Text style={styles.text_title}>ข้อมูลส่วนตัว</Text>
                <View style={styles.space}>
                    <Text style={styles.text}>เลขบัตรประจำตัวประชาชน 13 หลัก</Text>
                    <TextInput
                        style={styles.input}
                        key="field1"
                        name="field1"
                        placeholder="หมายเลขบัตรประชาชน(13 หลัก)"
                        keyboardType='numeric'
                        maxLength={13}
                        onChangeText={newnationalID => setNationalID(newnationalID)}
                        defaultValue={nationalID} />
                </View>
                <View style={styles.space}>
                    <Text style={styles.text}>เบอร์มือถือ 10 หลัก</Text>
                    <TextInput
                        style={styles.input}
                        key="field1"
                        name="field1"
                        placeholder="012 3456 789"
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={newPhone => setPhone(newPhone)}
                        defaultValue={phone} />
                </View>
                <View style={styles.space}>
                    <Text style={styles.text}>อีเมล</Text>
                    <TextInput
                        style={styles.input}
                        key="field1"
                        name="field1"
                        placeholder="example@mail.com"
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

                <View
                    style={{
                        borderBottomColor: '#e9ebee',
                        borderBottomWidth: 1,
                        marginVertical: 30,
                    }}
                ></View>
                <View style={styles.space}>
                    <Text style={styles.text}>คำนำหน้า</Text>
                    <TextInput
                        style={styles.input}
                        key="field2"
                        name="field2"
                        placeholder="คำนำหน้า"
                        onChangeText={newNameTittle => setNameTittle(newNameTittle)}
                        defaultValue={nameTittle} />
                </View>

                <View style={styles.space}>
                    <Text style={styles.text}>ชื่อ</Text>
                    <TextInput
                        style={styles.input}
                        key="field2"
                        name="field2"
                        placeholder="ชื่อ"
                        onChangeText={newFirstName => setFirstName(newFirstName)}
                        defaultValue={firstName} />
                </View>
                <View style={styles.space}>
                    <Text style={styles.text}>นามสกุล</Text>
                    <TextInput
                        style={styles.input}
                        key="field2"
                        name="field2"
                        placeholder="นามสกุล"
                        onChangeText={newLastName => setLastName(newLastName)}
                        defaultValue={lastName} />
                </View>
            </View>


            <TouchableOpacity
                style={styles.button_log_in} onPress={signUpUser}>
                <Text style={styles.buttonText_l} >ถัดไป</Text>
            </TouchableOpacity>
            <Image
                style={styles.img_bg}
                source={require('../../assets/images/footer_bg.png')}
            />
        </ScrollView>
    </SafeAreaView >
    );
}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#005C9E',
        flexDirection: "column",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    card: {
        paddingLeft: normalize(60),
        marginVertical: normalize(60),
    },
    text_title1: {
        color: '#ffffff',
        fontSize: normalize(30),
        fontFamily: 'Kanit-SemiBold',
    },
    card1: {
        paddingHorizontal: normalize(60),
        paddingVertical: 30,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    text_title: {
        color: '#000000',
        fontSize: normalize(24),
        fontFamily: 'Kanit-SemiBold',
        marginBottom: 20,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
    space: {
        marginBottom: normalize(20),
    },
    card2: {
        backgroundColor: "#e9ebee",
        width: '100%',
        paddingHorizontal: normalize(40),
        paddingVertical: normalize(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    policy: {
        backgroundColor: "#ffffff",
        padding: normalize(20),
        borderRadius: 5,
        width: '90%',
    },
    button_log_in: {
        marginBottom: 20,
        backgroundColor: "#FFC43D",
        padding: normalize(10),
        borderRadius: normalize(5),
        marginHorizontal: '20%',
        alignItems: 'center',
        marginVertical: normalize(20),
        justifyContent: 'center',
    },
    buttonText_l: {
        fontFamily: 'Kanit-SemiBold',
        color: '#000000',
        fontSize: normalize(12),
    },
    text: {
        color: '#000000',
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(12),
    },
    policy_title: {
        color: '#000000',
        fontSize: normalize(14),
        fontFamily: 'Kanit-SemiBold',
    },
    policy_text: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily: 'Kanit-Medium',
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default SignUp;