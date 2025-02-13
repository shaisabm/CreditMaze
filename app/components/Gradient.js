import React from 'react';
import {StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";


function Gradient ({children, colors }) {

    const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

    return (
        <AnimatedGradient style={styles.container} colors={colors} styles={styles.container} >
            {children}
        </AnimatedGradient>
    );
}

const styles= StyleSheet.create({
        container: {
            flex: 1


    }
})
export default Gradient;