import React from 'react';
import {StyleSheet, View} from "react-native";
import Icon from "./Icon";
import colors from "../configs/colors";
import AppText from "./AppText";

function AppNavBar({children, style}) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})
export default AppNavBar;
