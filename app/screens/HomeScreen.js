import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Modal} from "react-native";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../configs/colors";
import Gradient from "../components/Gradient";
import TransactionCard from "../components/TransactionCard";
import AppText from "../components/AppText";
import SimpleLineGraph from "../components/SimpleLineGraph";
import TransactionsHistory from "../components/TransactionsHistory";
import AppNavBar from "../components/AppNavBar";
import AppButton from "../components/AppButton";
import ColorPicker from "react-native-wheel-color-picker";

function HomeScreen({user = "Shaisab"}) {

    const [showModal, setShowModal] = useState(false);
    const [gradientColor, setGradientColor] = useState('#0f1b43')
    let tempColor = ''


    const handleSave = () => {
        setGradientColor(tempColor);
        setShowModal(false)
    }
    const handleOpenModal = () => {
        tempColor = gradientColor
        setShowModal(true)
    }


    const simpleGraphsWidth = Dimensions.get("window").width / 2 - 20

    const graphData = {
        datasets: [
            {
                data: [
                    10,
                    12,
                    15
                ]
            }
        ]
    }
    const transactionHistory = [
        {
            value: 1,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "-$60.00",
            color: "white"
        },
        {
            value: 2,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "$50.00",
            color: "green"
        },
        {
            value: 3,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "-$20.00",
            color: "white"
        },
        {
            value: 4,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "$90.00",
            color: "green"
        },
    ]
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


    return (
        <Gradient style={styles.gradient} colors={[gradientColor, "#000000", "#000000"]}>

            <Screen>

                <AppNavBar children={
                    <>
                        <Icon name={"account-cash"} size={15} color={colors.white} style={styles.icon}
                              onPress={() => console.log("Clicked Account")}/>
                        <AppText styles={styles.title}>Home</AppText>
                        <Icon name={"cat"} size={24} color={colors.white}
                              onPress={() => {
                                  console.log("Clicked notifications");
                                  handleOpenModal()
                              }}/>
                    </>
                }/>
                <Modal visible={showModal} animationType={"slide"}>
                    <View style={{
                        flex: 1,
                        backgroundColor: colors.gray,
                        justifyContent: "center",
                        paddingVertical: 100,
                        paddingHorizontal: 30

                    }}>
                        <ColorPicker color={tempColor} onColorChange={(color) => tempColor=color} />

                        <AppButton title={"Save"} styleButton={{marginTop: 30}} onPress={() => handleSave()}/>
                    </View>
                </Modal>

                <ScrollView style={styles.scrollView}>
                    <AppText styles={styles.greetingText}>{greeting()}, {user} </AppText>
                    <View style={styles.detailsContainer}>
                        <TransactionCard style={styles.card}
                                         titleOne="Today's Balance"
                                         titleTwo={"$555"}
                                         subtitleOne={"2 transactions today"}
                                         subtitleTwo={"yesterday $56"}
                        />
                        <View style={styles.graphContainer}>
                            <SimpleLineGraph data={graphData} width={simpleGraphsWidth}/>
                            <SimpleLineGraph data={graphData} title={"EARNING"} subtitle={"$809"}
                                             width={simpleGraphsWidth}/>
                        </View>
                        <TransactionsHistory
                            data={transactionHistory}
                            onPress={() => console.log("viewed all")}
                            preview/>

                    </View>

                </ScrollView>
                <AppNavBar style={styles.footerNav} children={
                    <>
                        <Icon name={"home"} size={24} title={"Home"} color={colors.white}
                              onPress={() => console.log("Clicked Home")}/>
                        <Icon name={"bank-outline"} size={24} title={"Banking"} color={colors.white}
                              onPress={() => console.log("Clicked Banking")}/>
                        <Icon name={"credit-card"} size={24} title={"Cards"} color={colors.white}
                              onPress={() => console.log("Clicked Cards")}/>
                        <Icon name={"graph"} size={24} title={"Invest"} color={colors.white}
                              onPress={() => console.log("Clicked Invest")}/>
                        <Icon name={"flash"} size={24} title={"Trade"} color={colors.white}
                              onPress={() => console.log("Clicked Trade")}/>
                    </>
                }/>
            </Screen>

        </Gradient>


    )
}

const styles = StyleSheet.create({
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
        alignSelf: "center",
        fontSize: 18,
        marginTop: 40
    },
    detailsContainer: {
        backgroundColor: "black",
        flex: 1,
        marginTop: 70,
        paddingHorizontal: 10,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23
    },
    graphContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    scrollView: {
        height: "100%"
    },
    title: {
        fontWeight: "500"
    },
    footerNav: {
        backgroundColor: colors.black,
        height: 80,
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 20
    }

})
export default HomeScreen;