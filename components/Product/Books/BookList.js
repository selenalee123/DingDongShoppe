
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Header, Item, Input, Icon, Button, Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
// import Header from "../../../common/Header"
import SearchBar from "../../../common/SearchBar"
import HeaderHome from "../../../common/HeaderHome"

import book from "../../../assets/data/Books"


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

            loading: false,

            query: ""
        };
    }




    componentDidMount() {
        //fetch data
        this.setState({ data: book })
    }



    handleSearch = (text) => {
        const fortmarttedQuery = text.toLowerCase();
        // data = _.filter(this.state.fullData, photo => {
        //     if (photo.title.includes(fortmarttedQuery)) {
        //         return true
        //     }
        //     return false
        // })

        const newdata = this.state.data.filter((item) => item.title.toLowerCase().indexOf(fortmarttedQuery) > -1)
        // console.log(newdata)
         console.log("this is", this.state.newdata)
         this.setState({ data: newdata,query: text })
    }


    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginTop: 5 }} onPress={() => Actions.ProductDetail()}>
                <View style={styles.BigContainer}>
                    <View style={styles.imageContainer}>

                        {/* wrong method <Image style={styles.cardImage} source={item.thumbnailUrl} */}
                        {/* image link needs to have uri if it is a website  */}
                        <Image style={styles.cardImage} source={{ uri: item.thumbnailUrl }}
                        />
                    </View>

                    <View style={styles.Text}>
                        <Text style={styles.Booktitle}>{item.title}</Text>
                        <Text style={styles.Author}>{item.authors}</Text>
                        {/* PRice enter the rae constant because I dont have data */}
                        <Text >$20</Text>


                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <HeaderHome />
                {/* <SearchBar /> */}

                <Header searchBar rounded style={{backgroundColor:"grey"}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={this.handleSearch} />
                        <Icon name="ios-camera" />
                        <Icon name="ios-mic" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Text>What is your favorte Books</Text>
                <FlatList

                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                    horizontal={false}


                />

            </View>
        );
    }
}

export default BookList;

const styles = StyleSheet.create({

    BigContainer: {
        flexDirection: "row",


        alignItems: "center",
        marginHorizontal: 15
    },

    cardImage: {
        borderRadius: 10,
        height: 100,
        width: 80,
        borderColor: "black"


    },

    Booktitle: {
        color: "black",
        fontSize: 18,

    },
    Author: {
        color: "grey",
        fontSize: 14


    },
});

