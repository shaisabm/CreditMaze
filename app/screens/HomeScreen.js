import React from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../configs/colors";
import Gradient from "../components/Gradient";
import BalanceCard from "../components/BalanceCard";
import AppText from "../components/AppText";
import SimpleLineGraph from "../components/SimpleLineGraph";
import TransactionsHistory from "../components/TransactionsHistory";

function HomeScreen({user = "Shaisab"}) {


    const simpleGraphsWidth = Dimensions.get("window").width/2-20

    const greeting = () => {
        const currentHour = new Date().getHours()
        if (currentHour >= 5 && currentHour < 12) {
            return "Good Morning"
        } else if (currentHour > 12 && currentHour < 17) {
            return "Good Afternoon"
        } else if (currentHour > 17 && currentHour < 21) {
            return "Good Evening"
        } else {
            return "Good Night"
        }

    }
    const data = {
        datasets: [
            {
                data: [
                    10,
                    14,
                    15,
                    20,
                    30,
                    40,
                    50,


                ]
            }
        ]
    }

    return (
        <Gradient colors={["#0e0b05", "#207c67"]}>
            <Screen style={styles.container}>
                <Icon name={"account-cash"} size={20} color={colors.white} style={styles.icon}/>
                <AppText styles={styles.greetingText}>{greeting()}, {user} </AppText>
                <View style={styles.detailsContainer}>
                    <BalanceCard style={styles.card}
                                 titleOne="Today's Balance"
                                 titleTwo={"$555"}
                                 subtitleOne={"2 transactions today"}
                                 subtitleTwo={"yesterday $56"}
                                 />
                    <View style={styles.graphContainer}>
                        <SimpleLineGraph data={data} width={simpleGraphsWidth}/>
                        <SimpleLineGraph data={data} title={"EARNING"} subtitle={"$809"} width={simpleGraphsWidth}/>
                    </View>
                    <TransactionsHistory/>

                </View>




            </Screen>

        </Gradient>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10
    },
    icon: {
        borderWidth: 2,
        borderColor: colors.white,
        marginLeft: 10

    },
    card: {
        backgroundColor: colors.gray,
        marginTop: 30,
        marginBottom: 20
    },
    greetingText: {
        color: colors.white,
        fontWeight: "500",
        alignSelf: "center"
    },
    detailsContainer: {
        backgroundColor: "black",
        flex: 1,
        marginTop: 100,
        paddingHorizontal: 10,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23
    },
    graphContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
})
export default HomeScreen;