import {Modal, StyleSheet, View} from 'react-native';
import HomeScreen from "./app/screens/HomeScreen";
import 'react-native-reanimated';
import Slider from "@react-native-community/slider";
import ColorPicker from 'react-native-wheel-color-picker';
import React, {useState} from "react";
import AppNavBar from "./app/components/AppNavBar";
import Icon from "./app/components/Icon";
import colors from "./app/configs/colors";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Overlay from "./app/components/Overlay";
import Screen from "./app/components/Screen";

export default function App() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            {/*<Screen>*/}

            {/*    <Overlay animationType={'fade'} visible={visible} style={{backgroundColor: "gray"}}>*/}
            {/*        <View style={styles.sectionContainer}>*/}

            {/*            <AppButton title={"click"} onPress={() => setVisible(!visible)} styleText={{color: "red"}}/>*/}
            {/*        </View>*/}
            {/*    </Overlay>*/}

            {/*    <View style={styles.sectionContainer}>*/}

            {/*        <AppButton title={"click"} onPress={() => setVisible(!visible)} styleText={{color: colors.black}}/>*/}
            {/*    </View>*/}
            {/*</Screen>*/}
            <HomeScreen/>

        </>

    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
});