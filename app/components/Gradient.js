import React from 'react';
import {StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";


function LinearGradient ({children, colors}) {

    const Gradient = Animated.createAnimatedComponent(LinearGradient)

    return (
        <Gradient style={styles.container} colors={colors} >
            {children}
        </Gradient>
    );
}

const styles= StyleSheet.create({
        container: {

    }
})
export default LinearGradient;