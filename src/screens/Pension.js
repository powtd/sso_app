import React from "react";
import { StyleSheet, ScrollView, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { normalize } from "../functions/normalize";
import DropdownYear from "../components/DropdownYearPension";

function Pension({ navigation }) {
    const data = [
        { id: 1, tittle: "เงินสมทบผู้ประกันตน", amount: "100" },
        { id: 2, tittle: "เงินสมทบนายจ้าง", amount: "100" },
        { id: 3, tittle: "เงินสมทบรัฐบาล", amount: "100" },
    ];

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={styles.text_tittle}>เงินสมทบชราภาพ</Text>
                <View style={[styles.container1, styles.boxWithShadow]}>
                    <Text style={styles.text}>ยอดเงินสมทบชราภาพ</Text>
                    <Text style={[styles.text, styles.text_pension_amount]}>{'\u0E3F'}1,000,000</Text>
                </View>
                <DropdownYear></DropdownYear>
                <View style={[styles.container2, styles.boxWithShadow, styles.pension_sub]}>
                    {data.map((d) => (
                        <View key={d.id} style={styles.pension_sub_item}>
                            <View style={styles.row}>
                                <Text style={styles.icon}>pic</Text>
                                <Text style={styles.sub_menu_text}>{d.tittle}</Text>
                            </View>
                            <Text style={styles.sub_menu_text}>{d.amount}</Text>
                        </View>
                    ))}
                </View>

                <View style={[styles.container2, styles.boxWithShadow, styles.pension_sub]}>
                    <View style={styles.pension_sub_item}>
                        <View style={styles.row}>
                            <Text style={styles.icon}>pic</Text>
                            <Text style={styles.sub_menu_text}>รวมเงินสะสม</Text>
                        </View>
                        <Text style={styles.sub_menu_text}>100</Text>
                    </View>
                </View>
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
    container1: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(50),
        backgroundColor: '#f8f8f8',
        borderRadius: normalize(10),
        padding: '8%',
        backgroundColor: '#3682ba',
    },
    container2: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(50),
        backgroundColor: '#f8f8f8',
        borderRadius: normalize(10),
        padding: '5%',
        backgroundColor: '#ffffff',
    },
    text_tittle: {
        fontSize: normalize(18),
        fontWeight: '500',
        fontFamily: 'Kanit-SemiBold',
        color: '#000',
        textAlign: 'center',
        marginVertical: normalize(10),
    },
    text: {
        fontFamily: 'Kanit-SemiBold',
        textAlign: 'center',
        color: '#ffffff',
    },
    text_pension_amount: {
        fontSize: normalize(28),

    },
    boxWithShadow: {
        elevation: 5,
        shadowColor: '#52006A',
    },
    pension_sub: {
        flexDirection: 'column',

    },
    pension_sub_item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: normalize(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    icon: {
        margin: 5,
    },
    sub_menu_text: {
        marginLeft: 20,
        fontFamily: 'Kanit-Light',
        fontSize: normalize(12),
    },
});

export default Pension;