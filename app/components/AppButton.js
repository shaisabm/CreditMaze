import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./AppText";
import defaultStyle from "../configs/defaultStyle";


function AppButton({title, onPress, styleButton, styleText}) {
    return (
        <TouchableOpacity style={[styles.container, styleButton]} onPress={onPress}>
            <AppText styles={[styleText, defaultStyle.text, styles.text]}>{title}</AppText>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5

    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
    }

})
export default AppButton;