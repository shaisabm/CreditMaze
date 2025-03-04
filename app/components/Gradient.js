import React from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";


function Gradient ({children, colors, style }) {

    const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

    return (
        <AnimatedGradient style={[styles.container, style]} colors={colors} styles={styles.container} >
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