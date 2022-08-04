import React, { useState, useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue } from "firebase/database";
import { database } from '../../firebase/firebase-config';

import ChangeHospital from './ChangeHospital';
import Pension from './Pension';
import Profile from './Profile';
import Contribution from './Contribution';
import Epayment from './Epayment';
import Test from './Test';
import Preview33 from './Preview33';
import PaymentComplete from './PaymentComplete';
import Epay39 from './Epay39';
import Epay33 from './Epay33';
import Epay40 from './Epay40';
import PayOtherBill from './PayOtherBill';
import EpayOther from './EpayOther';

const ProfileStack = createNativeStackNavigator();
const EpayStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



function State({ navigation }) {
    return (<Text>State</Text>);
}
function News() {
    return (<Text>News</Text>);
}
function Setting() {
    return (<Test></Test>);
}

function Home({navigation }) {
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

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { pressColor: '#204082' },
                tabBarActiveTintColor: '#204082',
            }}
        >
            <Tab.Screen
                name="Profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="home" ios="ios-home" android="md-home" />
                    ),
                }}>
                {() => (
                    <ProfileStack.Navigator>
                        <ProfileStack.Screen
                            name="ProfileScreen"
                            component={Profile}
                            options={{ headerShown: false, pressColor: 'gray' }}
                        />
                        <ProfileStack.Screen name="ChangeHospital" component={ChangeHospital} options={{ headerShown: false, tabBarVisible: true }} />
                        <ProfileStack.Screen name="Pension" component={Pension} options={{ headerShown: false, }} />
                        <ProfileStack.Screen name="Contribution" component={Contribution} />
                    </ProfileStack.Navigator>
                )}
            </Tab.Screen>

            <Tab.Screen
                name="E-Payment"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="wallet" />
                    ),
                }}>
                {() => (
                    <EpayStack.Navigator>
                        <EpayStack.Screen
                            name="E-paymenet"
                            component={Epayment}
                            options={{ headerShown: false, pressColor: 'gray' }}
                        />
                        <EpayStack.Screen name="Epay33" component={Epay33} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="Epay39" component={Epay39} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="Epay40" component={Epay40} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="PayOtherBill" component={PayOtherBill} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="EpayOther" component={EpayOther} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="Preview33" component={Preview33} options={{ headerShown: false, }}/>
                        <EpayStack.Screen name="PaymentComplete" component={PaymentComplete} options={{ headerShown: false, }} />

                    </EpayStack.Navigator>
                )}
            </Tab.Screen>


            <Tab.Screen
                name="News"
                component={News}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="newspaper" />
                    ),
                }} />
            <Tab.Screen
                name="State"
                component={State}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="checkmark-circle" />
                    ),
                }} />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="settings" />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default Home;