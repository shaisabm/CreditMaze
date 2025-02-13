import React from 'react';
import {ImageBackground, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

function LoginScreen(props) {
    return (
        <ImageBackground  style={styles.background} src={}>

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
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        height: 35,

    },
    signupButton: {
        backgroundColor: colors.secondary,
        borderRadius: 30,
        height: 35,
    },
    background: {
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 30
    }

})
export default LoginScreen;