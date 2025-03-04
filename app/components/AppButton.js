import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./AppText";


function AppButton({title, onPress, styleButton, styleText}) {
    return (
        <TouchableOpacity style={[styles.container, styleButton]} onPress={onPress}>
            <AppText styles={[styles.text, styleText]}>{title}</AppText>
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