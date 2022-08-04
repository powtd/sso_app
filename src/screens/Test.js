import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { normalize } from '../functions/normalize';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebase/firebase-config';
import { ref, onValue, child, get,query, equalTo, orderByChild } from "firebase/database";
import { database } from '../../firebase/firebase-config';

function Test({ navigation }) {
   

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text>test</Text>
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

});

export default Test;