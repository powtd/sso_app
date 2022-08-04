import { normalize } from "../functions/normalize";
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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