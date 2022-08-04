import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { ref, onValue, child, get, query, equalTo, orderByChild } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import { Ionicons } from '@expo/vector-icons';


function EpayOther({ route, navigation }) {
    const { Id_num } = route.params;
    let x = <Text></Text>
    const [bills, setbills] = useState([]);

    useEffect(() => {
        const recentPostsRef = query(ref(database, 'bills'), orderByChild('nationalID'), equalTo(Id_num));
        return onValue(recentPostsRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                setbills(current => [...current, childData]);
            });
        });
    }, []);

    console.log(bills)

    if (bills.length === 0) {
        x = <Text style={styles.text_title}>ไม่มีรายการชำระเงิน</Text>
    } else {
        x = <View>
            {bills.map((d) => (
                <TouchableOpacity style={[styles.row, styles.boxWithShadow]} key={d.billID} onPress={() => {
                    navigation.navigate('Preview33', {
                        Id_num: d.billID,
                        first_name: d.firstName,
                        last_name: d.lastName,
                        user_ID: d.nationalID,
                        p_month: d.month,
                        p_amount: d.amount,
                    });
                }}>
                    <View style={styles.col}>
                        <Text style={styles.text_normal}>bill งวด {d.month}</Text>
                        <Text style={styles.text_normal}>{d.amount} บาท</Text>
                        <Text>bill ID: {d.billID}</Text>
                    </View>

                    <Ionicons style={styles.icon} color="#000" size={32} name="chevron-forward-outline" />
                </TouchableOpacity>
            ))}

        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={styles.icon} color="#000" size={32} name="chevron-back-outline" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerText}>งวดค้างชำระ</Text>
                </View>
            </View>
            <Image
                style={styles.img_bg}
                source={require('../../assets/images/moneyy.png')}
            />
            {x}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        width: '95%',
    },
    backBtn: {
        backgroundColor: 'blue',
    },
    headerText: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: normalize(18),
        alignSelf: 'center',
        left: -10,
    },
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',

    },
    text_title: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: 28,
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '1.5%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        justifyContent: 'space-between',
        width: 370,
        padding:10,
    },
    col: {
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    icon: {
        alignSelf: 'center',
    },
    text_normal: {
        fontFamily: 'Kanit-SemiBold',
        fontSize: 18
    },
    img_bg: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    boxWithShadow: {
        elevation: 20,
        shadowColor: '#3d3d3d',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});


export default EpayOther;