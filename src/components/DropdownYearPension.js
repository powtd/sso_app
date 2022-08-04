import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const data = [
    { label: '2561', value: '1' },
    { label: '2562', value: '2' },
    { label: '2563', value: '3' },
];

const DropdownYear = () => {
    const [value, setValue] = useState(null);

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}

            iconStyle={styles.iconStyle}
            data={data}

            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="ปี"

            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
    );
};

export default DropdownYear;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: '5%',
        marginVertical: '5%',
        elevation: 5,
        shadowColor: '#52006A',
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Kanit-Light',
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: 'Kanit-Light',
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: 'Kanit-Light',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});