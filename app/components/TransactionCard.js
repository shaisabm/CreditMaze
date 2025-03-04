import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./AppText";
import colors from "../configs/colors";

function TransactionCard({
                             titleOne,
                             titleTwo,
                             subtitleOne,
                             subtitleTwo,
                             style,
                             titleOneStyle,
                             titleTwoStyle,
                             onPress
                         }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View  style={[styles.container, style]}>
                <View>
                    <AppText styles={titleOneStyle || styles.text}>{titleOne}</AppText>
                    {subtitleOne && <AppText styles={styles.subtitle}>{subtitleOne}</AppText>}
                </View>
                <View style={styles.leftContainer}>
                    <AppText styles={titleTwoStyle || styles.text}>{titleTwo}</AppText>
                    {subtitleTwo && <AppText styles={styles.subtitle}>{subtitleTwo}</AppText>}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 65,
        width: "100%",
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",

    }, text: {
        color: "white", fontWeight: "bold"

    }, subtitle: {
        color: colors.lightGray, fontSize: 15
    }, leftContainer: {
        alignItems: "flex-end"
    }
})
export default TransactionCard;