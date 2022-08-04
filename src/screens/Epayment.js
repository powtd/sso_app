import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from "../functions/normalize";
import { auth } from '../../firebase/firebase-config';
import { ref, onValue } from "firebase/database";
import { database } from '../../firebase/firebase-config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Epay33 from './Epay33';
import Epay39 from './Epay39';
import Epay40 from './Epay40';
import Test from './Test';
import PaymentComplete from './PaymentComplete';
const Epayscreen = createNativeStackNavigator();


function Epayment({ route, navigation }) {
    let x = <View></View>

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

    if (status == 39) {
        x = Epay39
    } if (status == 40) {
        x = Epay40
    } if (status == 33) {
        x = Epay33
    }
    let y = <Epayscreen.Navigator>
        <Epayscreen.Screen name="Epay" component={x} options={{ headerShown: false, }} />
    </Epayscreen.Navigator>

    return (
        status > 1 ? y : <Text></Text>
    );
}

const styles = StyleSheet.create({
    link: {
        backgroundColor: 'pink',
        padding: 10,
    },
});


export default Epayment;