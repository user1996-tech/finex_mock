import React, { Component, createRef } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Header from './Header';
import Body from './Body';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchBarInput: '',      
    }, 
    this.data = createRef();
  }


  apiCall() {
    console.log("API CALL")
    fetch('http://192.168.20.19/API/finex_mock_api.php?SearchString=' + this.state.searchBarInput)
      .then((response) => (response.json()))
      .then((responseJson) => {
        this.data.current = responseJson
        this.setState({ data: responseJson })
        
      })
      .catch((error) => {
        console.warn(error)
      })
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    console.log(this.data.current)

    const setSearchBarInput = (text) => {
      this.setState({
        ...this.state,
        searchBarInput: text
        
      })
    }

    const clearSearchBarInput= () => {
      this.setState({
        ...this.state,
        searchBarInput: ''
      })
    }
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={styles.searchBar}>
          <TextInput style={styles.container} onChangeText={(text) => { setSearchBarInput(text) }} value={this.state.searchBarInput} placeholder={'Search & enter'} />
          <TouchableOpacity style={{ justifyContent: 'center', marginRight: 10 }} onPress={() => {clearSearchBarInput()}}>
            <FeatherIcons style={{ fontSize: 20 }} name="x" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerBody}>
          {/* BODY  */}
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.companydata.cid}
              renderItem={({ item }) => {
                const companydata = item.companydata
                const companydataDataObject = JSON.parse(companydata.companyData)
                const offerdata = item.offerdata

                return (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', item)}>
                    <View style={styles.item}>
                      <View style={styles.itemRow1}>
                        <View style={{ flex: 1 }}><Text style={styles.blackText}>{companydata.companyCode}-{companydata.companyName}</Text></View>
                        <View style={{ flex: 1, marginHorizontal: 2 }}><Text style={styles.greyText}>{companydataDataObject.date}</Text></View>
                        <View style={{ flex: 1 }}><Text style={styles.greyText}>{companydataDataObject.docType}-{companydataDataObject.docNo}</Text></View>
                        <View style={{ flex: 1 }}><Text style={styles.redText}>{companydataDataObject.curency} {companydataDataObject.amount}</Text></View>
                      </View>
                      <View style={styles.itemRow2}>
                        <View style={styles.tRow}>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>Discount Amount</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>Offer Amount</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>Discount Rate</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>Annual Interest Rate</Text></View>
                        </View>
                        <View style={styles.tRow}>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>{companydataDataObject.discountAmount}</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>{companydataDataObject.offerAmount}</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>{companydataDataObject.discountRate}%</Text></View>
                          <View style={styles.itemRow2Columns}><Text style={styles.greyText}>{companydataDataObject.annualInterestRate}%</Text></View>
                        </View>
                      </View>
                      <View style={styles.itemRow3}>
                        <View style={[styles.buttons, { backgroundColor: '#6599f7' }]}>
                          <Text style={{ color: '#fff' }}>Pending Approval (Offering)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <TouchableOpacity style={{ padding: 10, backgroundColor: '#65b4ad', borderRadius: 5, marginHorizontal: 2 }}>
                            <Text style={{ color: '#fff' }}>Approve</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5, marginHorizontal: 2, borderColor: 'black', borderWidth: 1 }}>
                            <Text>Decline</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

        </View>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    flex: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
  },
  buttons: {
    height: '70%',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 2,
  },
  item: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200
  },
  itemRow1: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
  itemRow2: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
  },
  itemRow2Columns: {
    flex: 1,
    alignItems: 'center',
  },
  itemRow3: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
  },
  greyText: {
    fontSize: 10,
    color: 'grey',
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
  },

})