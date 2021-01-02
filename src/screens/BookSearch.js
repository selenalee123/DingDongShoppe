import { toJS } from 'mobx'
import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, ToastAndroid, AppRegistry, Image, ActivityIndicator } from 'react-native'
import { Header, Item, Input, Icon, Button, Text, Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import _ from 'lodash'


export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            fullData: [],
            loading: false,
            error: null,
            query: ""

        }
    }



    handleSearch = (text) => {
        const fortmarttedQuery = text.toLowerCase();
        // data = _.filter(this.state.fullData, photo => {
        //     if (photo.title.includes(fortmarttedQuery)) {
        //         return true
        //     }
        //     return false
        // })
        const data = this.state.fullData.filter((item) => item.book_title.toLowerCase().indexOf(fortmarttedQuery) > -1)
        console.log(data)
        console.log("this is", this.state.fullData)
        this.setState({ dataSource: data, query: text })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={{ width: 80, height: 80 }}
                    source={{ uri: item.image }} />
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, color: 'red', marginBottom: 15 }}>
                        {item.book_title}
                    </Text>

                    <Text style={{ fontSize: 16, color: 'green' }}>
                        {item.author}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'pink' }}>

            </View>
        )
    }


    componentDidMount() {
        const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.book_array,
                    isLoading: false,
                    fullData: responseJson.book_array,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            this.state.isloading ?
                <View >
                    <ActivityIndicator size="large" color="#3300" />
                </View>
                :
                <View syle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" onChangeText={this.handleSearch} />
                            <Icon name="ios-people" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                    <Text>Hello</Text>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />

                </View>
        );
    }
}
