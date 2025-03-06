import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Modal, ActivityIndicator, Platform} from "react-native";
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
import Overlay from "../components/Overlay";

function HomeScreen({user = "Shaisab"}) {

    const [showModel, setShowModel] = useState(false);
    const [gradientColor, setGradientColor] = useState('#0f1b43')
    const tempColor = useRef('');


    const handleSave = () => {
        setShowModel(false)
        setGradientColor(tempColor.current);


    }
    const handleOpenModal = () => {
        tempColor.current = gradientColor
        setShowModel(true)
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
        <Gradient colors={[gradientColor, "#000000", "#000000"]} onLongPress={handleOpenModal}>

            <Screen>
                <AppNavBar children={
                    <>
                        <Icon name={"account-cash"} size={15} color={colors.white} style={styles.icon}
                              onPress={() => console.log("Clicked Account")}/>
                        <AppText styles={styles.title}>Home</AppText>
                        <Icon name={"cat"} size={24} color={colors.white}
                              onPress={() => {
                                  console.log("Clicked notifications");
                              }}/>
                    </>
                }/>

                <Modal visible={showModel} animationType={"slide"}>
                    <View style={{
                        flex: 1,
                        backgroundColor: colors.gray,
                        paddingHorizontal: 10,
                        paddingVertical: Platform.OS === "android"? 50 : 200

                    }}>
                        <ColorPicker color={tempColor.current}
                                     onColorChangeComplete={(color) => tempColor.current = color}
                                     sliderSize={60}
                                     shadeSliderThumb={true}
                                     swatches={false}


                        />

                        <AppButton title={"Save"} styleButton={styles.modalSaveButton} onPress={() => handleSave()}/>
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
                            <SimpleLineGraph data={graphData} width={simpleGraphsWidth} title={"SPENDING"}
                                             onPress={() => console.log("Clicked spending graph")}/>
                            <SimpleLineGraph data={graphData} title={"EARNING"} subtitle={"$809"}
                                             width={simpleGraphsWidth} onPress={() => {
                                console.log("Clicked earning graph")
                            }}/>
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
        paddingHorizontal: 28,
        borderTopWidth: 2,
        borderColor: colors.gray,
        paddingBottom: 10
    },
    modalSaveButton: {
        marginTop: 40
    }


})
export default HomeScreen;