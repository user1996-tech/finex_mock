import React, { Component, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';

import Header from './Header';

const DetailScreen = ({ route, navigation }) => {
    const companydata = route.params.companydata
    const companydataDataObject = JSON.parse(companydata.companyData)
    const offerdata = route.params.offerdata


    // const companydata = {
    // status: "Pending Approval (Offering)",
    // companyCode: "AU1231212",
    // companyName: "DATS Pty Ltd.",
    // docType: "INV",
    // docNo: "01212",
    // docDate: "22 Jul 2020",
    // currency: "AUD",
    // ammount: "122,126.72",
    // terms: "90",
    // dueDate: "20 Oct 2020",
    // ageing: "50",
    // }
    // const offerdata = [
    // {
    // id: "1", 
    // offerDate: "1 Sep 2020",
    // offerID: "23-1212",
    // status: "Pendgin Approval (Offering)",
    // earlyPaymentDay: "30",
    // paymentDate: "20 Sep 2020",
    // expiredDate: "2 Sep 2020",
    // account: "Account 1",
    // currency: "AUD",
    // discountAmount: "12,212.67",
    // COFAmount: "722.72",
    // profileAmount: "11,489.95",
    // offerAmount: "109,914.05",
    // discountRate: "5.11",
    // COFRate: "3.23",
    // profitRate: "24.23",
    // annualInterestRate: "5.43"
    // },
    // {
    // id: "2", 
    // offerDate: "31 Aug 2020",
    // offerID: "12-1123122",
    // status: "Rejected",
    // earlyPaymentDay: "30",
    // paymentDate: "20 Sep 2020",
    // expiredDate: "2 Sep 2020",
    // account: "Account 1",
    // currency: "AUD",
    // discountAmount: "12,212.67",
    // COFAmount: "722.72",
    // profileAmount: "11,489.95",
    // offerAmount: "109,914.05",
    // discountRate: "5.11",
    // COFRate: "3.23",
    // profitRate: "24.23",
    // annualInterestRate: "5.43"
    // },
    // {
    // id : "3", 
    // offerDate: "29 Aug 2020",
    // offerID: "12323",
    // status: "Rejected",
    // earlyPaymentDay: "30",
    // paymentDate: "20 Sep 2020",
    // expiredDate: "2 Sep 2020",
    // account: "Account 1",
    // currency: "AUD",
    // discountAmount: "12,212.67",
    // COFAmount: "722.72",
    // profileAmount: "11,489.95",
    // offerAmount: "109,914.05",
    // discountRate: "5.11",
    // COFRate: "3.23",
    // profitRate: "24.23",
    // annualInterestRate: "5.43"
    // },
    // {
    // id: "4", 
    // offerDate: "29 Aug 2020",
    // offerID: "12323",
    // status: "Rejected",
    // earlyPaymentDay: "30",
    // paymentDate: "20 Sep 2020",
    // expiredDate: "2 Sep 2020",
    // account: "Account 1",
    // currency: "AUD",
    // discountAmount: "12,212.67",
    // COFAmount: "722.72",
    // profileAmount: "11,489.95",
    // offerAmount: "109,914.05",
    // discountRate: "5.11",
    // COFRate: "3.23",
    // profitRate: "24.23",
    // annualInterestRate: "5.43"
    // },
    // {
    // id: "5", 
    // offerDate: "29 Aug 2020",
    // offerID: "12323",
    // status: "Rejected",
    // earlyPaymentDay: "30",
    // paymentDate: "20 Sep 2020",
    // expiredDate: "2 Sep 2020",
    // account: "Account 1",
    // currency: "AUD",
    // discountAmount: "12,212.67",
    // COFAmount: "722.72",
    // profileAmount: "11,489.95",
    // offerAmount: "109,914.05",
    // discountRate: "5.11",
    // COFRate: "3.23",
    // profitRate: "24.23",
    // annualInterestRate: "5.43"
    // }
    // ]

    const initCurrentIndex = () => {
        var initArray = new Array(offerdata.length).fill(false)
        initArray[0] = true
        return (initArray)
    }

    const drawerAnimation = useRef(new Animated.Value(0)).current;
    const drawer_status = useRef(initCurrentIndex())

    const openDrawer = (index, drawerStatus) => {
        // Close
        drawerStatus[index] = true
        Animated.timing(drawerAnimation, {
            toValue: 180,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    const closeDrawer = (index, drawerStatus) => {
        // Openr
        drawerStatus[index] = false
        Animated.timing(drawerAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    const toggleDrawer = (index, drawerStatus) => {
        if (drawerStatus[index]) {
            closeDrawer(index, drawerStatus)
        } else {
            openDrawer(index, drawerStatus)
        }
    }

    const drawerInterpolate = drawerAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"],
    })




    const [currentIndex, setCurrentIndex] = useState(initCurrentIndex());

    const renderOffer = (offer, index) => {
        const offerData = JSON.parse(offer.offerData)
        return (
            <View style={styles.offer}>
                {/* Title */}
                <View style={[styles.row, { flex: 0, height: 30, borderBottomWidth: 2, boderColor: 'black' }]}>
                    <View style={{ flex: 1, }}><Text style={{ fontWeight: 'bold' }}>{offerData.offerDate}</Text></View>
                    <View style={{ flex: 1, }}><Text style={{ fontWeight: 'bold' }}>{offerData.offerNo}</Text></View>
                    <View style={[styles.buttonTO, { backgroundColor: "#6599f7", }]}><Text style={styles.buttonTOText}>{offerData.status}</Text></View>
                    <TouchableOpacity onPress={() => {
                        var status = [...currentIndex]
                        status[index] = !status[index]
                        setCurrentIndex(status)
                        toggleDrawer(index, drawer_status.current)
                    }}>
                        <Animated.View style={[{
                            transform: [
                                {
                                    rotate: drawerInterpolate
                                }
                            ]
                        }]}>
                            <FeatherIcons style={{ fontSize: 20 }} name="chevron-down" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                {currentIndex[index] && (
                    <View style={styles.collapsible} key={"collapsible-" + index}>
                        {/* First Table Row  */}
                        <View style={[styles.row, { alignItems: 'flex-end', }]} key={"1-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', textAlign: 'center' }}>Early Payment Day</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Payment Date</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Expired Date</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Account</Text></View>
                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', borderBottomWidth: 1, borderColor: 'grey', }]} key={"2-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.earlyPaymentDay} Days</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.paymentDate}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.expiredDate}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.account}</Text></View>
                        </View>
                        {/* Second Table Row */}
                        <View style={[styles.row, { alignItems: 'flex-end', }]} key={"3-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', textAlign: 'center' }}>Discount Amount</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>COF Amount</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Profit Amount</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Offer Amount</Text></View>
                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', borderBottomWidth: 1, borderColor: 'grey', }]} key={"4-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.discountAmount} Days</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.COFAmount}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.profitAmount}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.offerAmount}</Text></View>
                        </View>
                        {/* Third Table Row */}
                        <View style={[styles.row, { alignItems: 'flex-end', }]} key={"5-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Discount Rate</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>COF Rate</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', }}>Profit Rate</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, color: 'grey', textAlign: 'center', }}>Annual Interest Rate</Text></View>
                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', borderBottomWidth: 2, borderColor: 'black', }]} key={"6-" + index}>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.discountRate} Days</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.COFRate}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.profitRate}</Text></View>
                            <View style={{ flex: 1, alignItems: 'center', }}><Text style={{ fontSize: 12, fontWeight: 'bold', }}>{offerData.annualInterestRate}</Text></View>
                        </View>
                    </View>
                )}

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.containerBody}>
                <View style={styles.containerContract}>
                    <View style={[styles.row, { flex: 0, height: 30, alignItems: "flex-start", paddingHorizontal: 0, }]}>
                        <View style={[styles.buttonTO, { backgroundColor: "#6599f7", }]}><Text style={styles.buttonTOText}>{companydata.status}</Text></View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={[styles.buttonTO, { backgroundColor: "#65b4ad", }]}><Text style={styles.buttonTOText}>Approve</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonTO, { backgroundColor: "#f64e5f", }]}><Text style={styles.buttonTOText}>Reject</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonTO, { backgroundColor: "#000", }]}><Text style={styles.buttonTOText}>Cancel</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.row, { alignItems: "flex-end" }]}>
                        <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>{companydata.companyCode}</Text></View>
                        <View style={{ flex: 2 }}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>{companydata.companyName}</Text></View>
                    </View>
                    <View style={[styles.row, { alignItems: "flex-start" }]}>
                        <View style={{ flex: 1 }}><Text>{companydataDataObject.docType}-{companydataDataObject.docNo}</Text></View>
                        <View style={{ flex: 1 }}><Text>{companydataDataObject.date}</Text></View>
                        <View style={{ flex: 1 }}><Text>{companydataDataObject.curency} {companydataDataObject.amount}</Text></View>
                    </View>
                    <View style={[styles.row, { alignItems: "flex-end" }]}>
                        <View style={styles.table}><Text>Terms</Text></View>
                        <View style={styles.table}><Text>Due Date</Text></View>
                        <View style={styles.table}><Text>Ageing</Text></View>
                    </View>
                    <View style={[styles.row, { alignItems: "flex-start", marginBottom: 2 }]}>
                        <View style={styles.table}><Text>{companydataDataObject.term} Days</Text></View>
                        <View style={styles.table}><Text>{companydataDataObject.dueDate}</Text></View>
                        <View style={styles.table}><Text>{companydataDataObject.aging} Days</Text></View>
                    </View>
                </View>
                <View style={styles.containerOffer}>
                    <View style={styles.title}>
                        <FeatherIcons style={{ marginHorizontal: 3, marginRight: 7, fontSize: 25, fontWeight: 'bold' }} name="list" />
                        <Text style={{ fontSize: 21, fontWeight: 'bold', }}>Offer ({offerdata.length})</Text>
                    </View>

                    <FlatList
                        data={offerdata}
                        keyExtractor={(item) => (item.offernumber)}
                        renderItem={({ item, index }) => {
                            return (renderOffer(item, index))
                        }} />


                </View>

            </View>
        </View >
    )


}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBody: {
        flex: 10,
    },
    containerContract: {
        flex: 1,
    },
    containerOffer: {
        flex: 5,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 4,
        alignItems: "center"
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    buttonTO: {
        margin: 3,
        padding: 2,
        borderRadius: 6,
        justifyContent: "center"
    },
    buttonTOText: {
        color: "white",
    },
    table: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F7F7F7',

    },
    title: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black",
        height: 35,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#e3faff',
    },
    offer: {
        flexBasis: 1,
    },
    collapsible: {
        flex: 1,
    }

})