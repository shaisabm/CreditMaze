import React from 'react';
import {StyleSheet, TouchableHighlight} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";


function Gradient({children, colors, style, onLongPress}) {

    const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

    return (
        <TouchableHighlight style={[styles.container, style]} colors={colors} styles={styles.container} onLongPress={onLongPress}>

            <AnimatedGradient style={[styles.container, style]} colors={colors} styles={styles.container}>
                {children}
            </AnimatedGradient>
        </TouchableHighlight>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1


    }
})
export default Gradient;