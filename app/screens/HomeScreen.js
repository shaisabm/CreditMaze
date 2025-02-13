import React from 'react';
import {StyleSheet} from "react-native";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../configs/colors";
import Gradient from "../components/Gradient";
import BalanceCard from "../components/BalanceCard";


function HomeScreen(props) {

    return (
        <Gradient colors={["#0e0b05", "#44e3be"]}>
            <Screen style={styles.container}>
                <Icon name={"account-cash"} size={20} color={colors.white} style={styles.icon}/>

                <BalanceCard/>

            </Screen>
        </Gradient>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    icon: {
        borderWidth: 2,
        borderColor: colors.white

    }
})
export default HomeScreen;