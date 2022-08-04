import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        'Kanit-SemiBold': require('../../assets/fonts/Kanit-SemiBold.ttf'),
        'Kanit-Medium': require('../../assets/fonts/Kanit-Medium.ttf'),
    });