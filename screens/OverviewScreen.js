import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie';

import Header from './Header';

const percentages = [10,30,20,20,20]

const OverviewScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.containerBody}>
                <View style={styles.containerBodyTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Payables > Overview</Text>
                    <Text style={{ fontWeight: 'bold', }}> 57 / AUD 1,453,868.52</Text>
                </View>
                <View style={styles.containerBodyChart}>
                    <Pie
                        radius={80}
                        innerRadius={40}
                        sections={[
                            {
                                percentage: percentages[0],
                                color: '#91BDFC',
                            },
                            {
                                percentage: percentages[1],
                                color: '#4EC882',
                            },
                            {
                                percentage: percentages[2],
                                color: '#F659A4',
                            },
                            {
                                percentage: percentages[3],
                                color: '#80E5E4',
                            },
                            {
                                percentage: percentages[4], 
                                color: '#AE98DC',
                            }
                        ]}
                        dividerSize={6}
                        strokeCap={'butt'}
                    />
                </View>
                <View style={styles.containerBodyList}>
                    {/* Row 1  */}
                    <View style={styles.listTop}>
                        <FontAwesomeIcon name="circle-o" size={20} color="#91BDFC" style={{ paddingRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>Pending Approval (Offering)</Text>
                    </View>
                    <View style={styles.listBottom}>
                        <View style={{ flex: 2, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>AUD 10,210.10</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', }}>5</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>{percentages[0]}%</Text>
                        </View>
                    </View>
                    {/* Row 2 */}
                    <View style={styles.listTop}>
                        <FontAwesomeIcon name="circle-o" size={20} color="#4EC882" style={{ paddingRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>Pending Response</Text>
                    </View>
                    <View style={styles.listBottom}>
                        <View style={{ flex: 2, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>AUD 312,212.12</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', }}>12</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>{percentages[1]}%</Text>
                        </View>
                    </View>

                    {/* Row 3 */}
                    <View style={styles.listTop}>
                        <FontAwesomeIcon name="circle-o" size={20} color="#F659A4" style={{ paddingRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>Pending Acceptance</Text>
                    </View>
                    <View style={styles.listBottom}>
                        <View style={{ flex: 2, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>AUD 321,992.00</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', }}>16</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>{percentages[2]}%</Text>
                        </View>
                    </View>

                    {/* Row 4 */}
                    <View style={styles.listTop}>
                        <FontAwesomeIcon name="circle-o" size={20} color="#80E5E4" style={{ paddingRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>Pending Approval (Accepting)</Text>
                    </View>
                    <View style={styles.listBottom}>
                        <View style={{ flex: 2, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>AUD 12,333.20</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', }}>2</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>{percentages[3]}%</Text>
                        </View>
                    </View>

                    {/* Row 5 */}
                    <View style={styles.listTop}>
                        <FontAwesomeIcon name="circle-o" size={20} color="#AE98DC" style={{ paddingRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>Accepted</Text>
                    </View>
                    <View style={styles.listBottom}>
                        <View style={{ flex: 2, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>AUD 797,121.10</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', }}>24</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', }}>{percentages[4]}%</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBody: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBodyTitle: {
        flex: 1,
        alignSelf: 'stretch',
    },
    containerBodyChart: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    containerBodyList: {
        flex: 5,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    listTop: {
        marginTop: 2,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
    },
    listBottom: {
        marginBottom: 2,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
    }

})

export default OverviewScreen;