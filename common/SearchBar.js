import React, { Component } from 'react';
import { View ,StyleSheet} from 'react-native';
import { Header, Item, Input, Icon, Button, Text, Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <Header searchBar rounded style={styles.searchBar}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={this.handleSearch} />

                        <Icon name="ios-camera" />
                        <Icon name="ios-mic" />

                    </Item>
                    <Button transparent>
                        <Text>What are you looking for</Text>
                    </Button>
                </Header>
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBar:{
backgroundColor:"grey"

  },
})
