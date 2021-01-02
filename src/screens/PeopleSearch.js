import React, { Component } from 'react';
import { Header, Item, Input, Icon, Button, Text, Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native';
import _ from 'lodash'


export default class SearchBarExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            fulldata: [],
            loading: false,
            error: null,
            query: ""
        }
    }
    componentDidMount() {
        this.requestAPIPhotos()
    }
    requestAPIPhotos = _.debounce(() => {
        this.setState({ loading: true })
        const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=30"
        fetch(apiURL).then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    loading: false,
                    data: resJson,
                    fullData: resJson
                })
            }).catch(error => {
                this.setState({ error, loading: false })
            })
    }, 250)
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <View style={{ paddingVertical: 50, borderTopWidth: 1, borderColor: 'red' }}>
                <ActivityIndicator animating size="large" />
            </View>
        )
    }
    handleSearch = (text) => {
        const fortmarttedQuery = text.toLowerCase();
        data = _.filter(this.state.fullData, photo => {
            if (photo.title.includes(fortmarttedQuery)) {
                return true
            }
            return false
        })
        this.setState({ data, query: text })
    }
    _renderItem = ({ item, index }) => {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: item.thumbnailUrl }} />
                </Left>
                <Body>
                    <Text>{item.title}</Text>

                </Body>
            </ListItem>
        )
    }
    render() {
        return (
            <Container>
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
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={this.renderFooter}
                    >
                    </FlatList>
                </List>
            </Container>
        )
    }
}
