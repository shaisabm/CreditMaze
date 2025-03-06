import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Dimensions} from "react-native";
import Constants from "expo-constants";

function Overlay({animationType, visible, children, style}) {

    const {height} = Dimensions.get('window')
    const slideAnim = useRef(new Animated.Value(height)).current
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (visible) {
            if (animationType === 'slide') {
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }).start()

            }
            else if (animationType === 'fade'){
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }).start()
            }
        } else {
            if (animationType==='slide'){
                Animated.timing(slideAnim, {
                    toValue: height,
                    duration: 300,
                    useNativeDriver: true
                }).start()
            }
            else if (animationType === 'fade'){
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start()
            }
        }
    }, [visible, animationType, height]);

    return (
        <Animated.View
            style={{
                height: "auto",
                width: "100%",
                backgroundColor: "gray",
                transform: animationType === "slide"? [{translateY: slideAnim}] : [] ,
                alignSelf: "center",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: "absolute",
                opacity: animationType === "fade"? fadeAnim : 1,
                zIndex: 999,
                elevation: 999,
                pointerEvents: "auto",

            }}>
            <View style={styles.content}>
                {children}

            </View>
        </Animated.View>

    );
}
const styles = StyleSheet.create({
    content: {
        flex: 1
    }
})

export default Overlay;
