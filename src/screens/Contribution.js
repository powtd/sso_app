import React from "react";
import { StyleSheet, ScrollView, View, SafeAreaView, Text } from 'react-native';
import { normalize } from "../functions/normalize";
import DropdownYear from "../components/DropdownYearPension";

function Contribution({ navigation }) {
    const data = [
        { id: 1, date: "09/02/2565", amount: "417", percent: "5%" },
        { id: 2, date: "09/03/2565", amount: "500", percent: "5%" },
        { id: 3, date: "12/04/2565", amount: "467", percent: "5%" },
        { id: 4, date: "13/05/2565", amount: "450", percent: "5%" },
    ];

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={styles.text_tittle}>เงินสมทบผู้ประกันตน</Text>
                <View style={[styles.container1, styles.boxWithShadow]}>
                    <Text style={styles.text}>ยอดเงินสมทบผู้ประกันตน</Text>
                    <Text style={[styles.text, styles.text_pension_amount]}>{'\u0E3F'}1,000,000</Text>
                </View>
                <DropdownYear></DropdownYear>
                <View style={[styles.container2, styles.boxWithShadow, styles.pension_sub]}>
                    <View style={styles.pension_sub_item}>
                        <View style={styles.col}>
                            <Text style={styles.text_table_head}>งวดเงิน</Text>
                            {data.map((d) => (
                                <Text key={d.id} style={styles.text_center}>{d.id}</Text>
                            ))}
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.text_table_head}>วันที่ชำระเงิน</Text>
                            {data.map((d) => (
                                <Text key={d.id} style={styles.text_center}>{d.date}</Text>
                            ))}
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.text_table_head}>จำนวนเงินสมทบ</Text>
                            {data.map((d) => (
                                <Text key={d.id} style={styles.text_center}>{d.amount}</Text>
                            ))}
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.text_table_head}>อัตราเงินสมทบ</Text>
                            {data.map((d) => (
                                <Text key={d.id} style={styles.text_center}>{d.percent}</Text>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={[styles.container2, styles.boxWithShadow, styles.pension_sub]}>
                    <View style={styles.pension_sub_item}>
                        <Text style={[styles.sub_menu_text, styles.bold]}>รวมเงินสะสม</Text>
                        <Text style={[styles.sub_menu_text, styles.bold]}>100</Text>
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
        padding: '2%',
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
        marginVertical: normalize(5),
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    icon: {
        margin: 5,
    },
    sub_menu_text: {
        fontFamily: 'Kanit-Light',
    },
    text_table_head: {
        fontFamily: 'Kanit-Medium',
        marginBottom: normalize(10),
    },
    col: {

    },
    text_center: {
        textAlign: 'center',
        marginBottom: normalize(7),
    },
    bold: {
        fontFamily: 'Kanit-Medium',
        marginHorizontal: normalize(10),
    },
});

export default Contribution;