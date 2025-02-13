import React from 'react';
import {StyleSheet, View} from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function Card({
                  titleOne = "Today's Balance",
                  titleTwo = "$555",
                  subtitleOne = "2 transactions",
                  subtitleTwo = "Yesterday: $56"
              }) {
    return (
        <View style={styles.container}>
            <View>
                <AppText styles={styles.text}>{titleOne}</AppText>
                <AppText styles={styles.subtitle}>{subtitleOne}</AppText>
            </View>
            <View style={styles.leftContainer}>
                <AppText styles={styles.text}>{titleTwo}</AppText>
                <AppText styles={styles.subtitle}>{subtitleTwo}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 65,
        width: "100%",
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    text: {
        color: "white",
        // textTransform:"uppercase",
        fontWeight: "bold"

    },
    subtitle: {
        color: "grey",
        fontSize: 15
    },
    leftContainer: {
        alignItems: "flex-end"

    }
})
export default Card;