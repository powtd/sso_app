import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import ChangeHospital from "./ChangeHospital";
import Pension from './Pension';
import Contribution from './Contribution';
import PaymentComplete from './PaymentComplete';

function Profile({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [hospital, setHospital] = useState("");
    const [status, setStatus] = useState(0);
    const userId = auth.currentUser.uid;

    useEffect(() => {
        return onValue(ref(database, '/users/' + userId), (snapshot) => {
            let data_firstName = (snapshot.val().firstName);
            let data_lastName = (snapshot.val().lastName);
            let data_hospital = (snapshot.val().currentHospital);
            let data_status = (snapshot.val().status);

            setFirstName(data_firstName);
            setLastName(data_lastName);
            setHospital(data_hospital);
            setStatus(data_status);
        });
    }, []);

    let x = status;
    let z = <Image
        style={styles.img_piggy}
        source={require('../../assets/images/piggy_bank.png')}
    />

    if (x != 40) {
        z = <View style={[styles.container_hospital, styles.boxWithShadow]}>
            <View style={styles.box_text_hospital} >
                <View style={styles.col}>
                    <Text style={styles.name_text_hospital}>{hospital}</Text>
                    <TouchableOpacity
                        style={[styles.button_change_hospital, styles.boxWithShadow]}
                        onPress={() =>
                            navigation.navigate(ChangeHospital)
                        }
                    >
                        <Text style={styles.buttonText_l} >เปลี่ยนโรงพยาบาล</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ImageBackground
                source={require('../../assets/images/hospital3.png')}
                style={styles.img}
                resizeMode="contain">
                <View style={styles.box_hospital}>
                </View>
            </ImageBackground>
        </View>
    }

    return (status > 1 ?  
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={[styles.container1, styles.margin_bottom]}>
                    <View style={styles.box} >
                        <Text style={styles.name_text}>{firstName} {lastName}</Text>
                        <Text style={styles.status_text}>สถานะ : เป็นผู้ประกันตนม.{status}</Text>
                    </View>
                    <View style={styles.box} >
                        <Text>pic</Text>
                    </View>
                </View>

                {z}

                <View style={styles.container2}>
                    <View style={[styles.box_pension1, styles.boxWithShadow]} >
                        <Text style={styles.white}>pension</Text>
                        <Text style={styles.name_text_hospital}>{'\u0E3F'}1,000,000</Text>
                    </View>
                    <View style={[styles.box_pension2, styles.boxWithShadow]} >
                        <Text style={styles.white}>edent</Text>
                        <Text style={styles.name_text_hospital}>{'\u0E3F'}900</Text>
                    </View>
                </View>

                <View style={styles.container_sub_menu}>
                    <TouchableOpacity style={[styles.sub_menu_item, styles.box_padding, styles.boxWithShadow]} onPress={() =>
                        navigation.navigate(Pension)
                    }>
                        <View style={[styles.box, styles.box_sub]} >
                            <View style={styles.cover_icon}>
                                <Image
                                    style={styles.img_bg}
                                    source={require('../../assets/images/old.png')}
                                />
                            </View>
                            <Text style={styles.sub_menu_text}>pension info</Text>
                        </View>
                        <View style={styles.box} >

                            <Ionicons style={styles.icon} color="#000" size={32} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sub_menu_item, styles.box_padding, styles.boxWithShadow]} onPress={() =>
                        navigation.navigate(Contribution)}>
                        <View style={[styles.box, styles.box_sub]} >
                            <View style={styles.cover_icon}>
                                <Image
                                    style={styles.img_bg}
                                    source={require('../../assets/images/piggy-bank.png')}
                                />
                            </View>
                            <Text style={styles.sub_menu_text}>contribution</Text>
                        </View>
                        <View style={styles.box} >
                            <Ionicons style={styles.icon} color="#000" size={32} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sub_menu_item, styles.box_padding, styles.boxWithShadow]}>
                        <View style={[styles.box, styles.box_sub]} >
                            <View style={styles.cover_icon}>
                                <Image
                                    style={styles.img_bg}
                                    source={require('../../assets/images/refund.png')}
                                />
                            </View>
                            <Text style={styles.sub_menu_text}>claim info</Text>
                        </View>
                        <View style={styles.box} >
                            <Ionicons style={styles.icon} color="#000" size={32} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sub_menu_item, styles.box_padding, styles.boxWithShadow]} onPress={() =>
                        navigation.navigate(PaymentComplete)
                    }>
                        <View style={[styles.box, styles.box_sub]} >
                            <View style={styles.cover_icon}>
                                <Image
                                    style={styles.img_bg}
                                    source={require('../../assets/images/tooth.png')}
                                />
                            </View>
                            <Text style={styles.sub_menu_text}>edent claim</Text>
                        </View>
                        <View style={styles.box} >
                            <Ionicons style={styles.icon} color="#000" size={32} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        : <SafeAreaView><Text></Text></SafeAreaView>
        
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
    },
    container1: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1%',
        borderRadius: normalize(50),
        backgroundColor: '#ffffff',
        borderRadius: normalize(10),
        padding: normalize(10),
    },
    container2: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1%',
        borderRadius: normalize(50),
        marginBottom: normalize(20),
    },
    container_hospital: {
        backgroundColor: '#3682ba',
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(10),
    },

    box: {
        alignSelf: 'center',
    },
    box_padding: {
        padding: normalize(5),
    },
    box_text_hospital: {
        margin: normalize(20),
        fontFamily: 'Kanit-SemiBold',
        color: '#000',
    },
    box_hospital: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_pension1: {
        backgroundColor: "#51c3fe",
        alignSelf: 'center',
        width: '47%',
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: "center",
    },
    box_pension2: {
        backgroundColor: "#edac3b",
        alignSelf: 'center',
        width: '50%',
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: "center",
    },
    box_sub: {
        flexDirection: "row",
        alignItems: "center",
    },
    name_text: {
        fontSize: normalize(18),
        fontWeight: '500',
        fontFamily: 'Kanit-SemiBold',
        color: '#000',
    },
    sub_menu_text: {
        fontSize: normalize(14),
        marginLeft: normalize(20),
        fontFamily: 'Kanit-Medium',
        color: '#000',
    },
    white: {
        color: '#ffffff',
        fontFamily: 'Kanit-SemiBold',
    },

    name_text_hospital: {
        fontSize: normalize(14),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Kanit-SemiBold',
    },
    container_sub_menu: {
        flexDirection: 'column',
        paddingVertical: normalize(5),
    },
    sub_menu_item: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1.5%',
        borderRadius: normalize(10),
        backgroundColor: '#ffffff',
    },
    img: {
        width: normalize(110),
        height: normalize(110),
        marginTop: normalize(20),
    },
    col: {
        justifyContent: "space-between",
        flexDirection: "column",
        height: normalize(100),
    },
    icon: {
        margin: normalize(5),
    },
    boxWithShadow: {
        elevation: normalize(5),
        shadowColor: '#3d3d3d',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    img_bg: {
        width: normalize(30),
        height: normalize(30),

    },
    img_piggy: {
        width: normalize(150),
        height: normalize(150),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    cover_icon: {
        backgroundColor: '#c2e6ff',
        borderRadius: normalize(5),
        alignItems: 'center',
        padding: normalize(3),
    },
    button_change_hospital: {
        backgroundColor: '#FFC43D',
        alignItems: "center",
        borderRadius: normalize(10),
        padding: normalize(10),
    },
    buttonText_l: {
        fontWeight: '500',
        fontFamily: 'Kanit-Medium',
        color: '#000',
    },
    status_text: { fontFamily: 'Kanit-Medium', },
    margin_bottom: {
        marginVertical: normalize(20),
    },
});

export default Profile;