import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import DropdownHospital from "../components/DropdownHospital";
import { normalize } from "../functions/normalize";
import Checkbox from 'expo-checkbox';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue } from "firebase/database";
import { database } from '../../firebase/firebase-config';

function ChangeHospital({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);


    const [hospital, setHospital] = useState("");
    const userId = auth.currentUser.uid;

    const checkHandler=()=>{
        setChecked(true)
        setChecked1(false)
    }
    const checkHandler1=()=>{
        setChecked(false)
        setChecked1(true)
    }

    useEffect(() => {
        return onValue(ref(database, '/users/' + userId), (snapshot) => {
            let data_hospital = (snapshot.val().currentHospital);

            setHospital(data_hospital);
        });
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container2}>
                    <Image
                        style={styles.image_b}
                        source={require('../../assets/images/hospital4.png')}
                    />
                </View>
                <Text style={styles.text_tittle}>เปลี่ยนโรงพยาบาล</Text>
                <View style={styles.container1}>

                    <Text style={styles.text_normal}>โรงพยาบาลปัจจุบัน</Text>
                    <Text style={styles.text}>{hospital}</Text>

                </View>
                <View style={styles.container1}>
                    <Text style={styles.text}>สาเหตุการเปลี่ยนโรงพยาบาล</Text>
                    <View style={styles.check}>
                        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={checkHandler} />
                        <Text style={[styles.policy_text, styles.check1]}>เปลี่ยนประจำปี</Text>
                    </View>
                    <View style={styles.check}>
                        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={checkHandler1} />
                        <Text style={[styles.policy_text, styles.check1]}>ย้ายที่อยู่</Text>
                    </View>


                </View>
                <View style={styles.container1}>
                    <Text style={styles.text}>เลือกโรงพยาบาล</Text>
                    <DropdownHospital></DropdownHospital>
                </View>
                <TouchableOpacity
                    style={[styles.button_log_in, styles.boxWithShadow]} >
                    <Text style={styles.buttonText_l} >ถัดไป</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    container1: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(50),
        backgroundColor: '#f8f8f8',
        borderRadius: normalize(10),
        padding: 10,
    },
    text_tittle: {
        fontSize: normalize(18),
        fontWeight: '500',
        fontFamily: 'Kanit-SemiBold',
        color: '#000',
        textAlign: 'center',
        marginBottom: normalize(10),
    },
    text: {
        fontSize: normalize(14),
        fontWeight: '500',
        color: '#000',
        fontFamily: 'Kanit-Medium',
    },
    check1: {
        marginLeft: normalize(5),
    },
    text_normal: {
        fontSize: normalize(14),
        color: '#000',
        fontFamily: 'Kanit-Medium',
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    policy_text: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily: 'Kanit-Medium',
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

    container2: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(50),
        borderRadius: normalize(10),
        padding: 10,
        alignItems: 'center'
    },
    image_b: {
        resizeMode: 'contain',
        width: normalize(240),
        height: normalize(240),
    },
    boxWithShadow: {
        elevation: 5,
        shadowColor: '#52006A',
    },

})
export default ChangeHospital;