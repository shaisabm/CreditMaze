import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={ require('../assets/background.jpeg')} blurRadius={7}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/creditmaze-high-resolution-logo-transparent.png")}
                       resizeMode={"contain"}
                       style={styles.logo}
                />
            </View>
            <View>
                <AppButton styleButton={styles.loginButton} title={"Login"}
                           onPress={() => console.log("Logged In")}/>
                <AppButton styleButton={styles.signupButton} title={"SignUp"}
                           onPress={() => console.log("Signed Up")}/>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        position: "absolute",
        top: 70,
        left: 55
    },
    logo: {
        height: 300,
        width: 300
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        height: 40,

    },
    signupButton: {
        backgroundColor: colors.secondary,
        borderRadius: 30,
        height: 40,
    },
    background: {
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 50
    }

})
export default WelcomeScreen;