import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

class CartView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       items: props.items,
    };

    console.log('props', props)

  }



  renderItem = ({item, index}) => {
    return (

      <View
        key={index}
        style={{backgroundColor: 'grey', marginTop: 5}}
      >
        <Text>{`id: ${item.id}`}</Text>
        <Text>{`title: ${item.type}`}</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onItemPress(item.id)}
            style={{paddingVertical: 5, backgroundColor: 'red', width: 100}}
          >
            <Text style={{color: 'white', textAlign: 'center'}}>REMOVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPlus(item.id)}
            style={{marginLeft: 10, paddingVertical: 5, backgroundColor: 'red', width: 100}}
          >
            <Text style={{color: 'white', textAlign: 'center'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    console.log(this.state.selectedItem)
    return (
      <View style={{flex: 1}}>

        <Text>Kim Kim </Text>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={this.state.selectedItem}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <TouchableOpacity onPress={this.goToPayment}>
        <Text style={{paddingVertical: 10, backgroundColor: 'red', color: 'white'}}>{`Selected posts: ${this.state.posts.map(_ => _.id).join(', ')}`}</Text>
      </TouchableOpacity> */}
    </View>
    );
  }
}

export default CartView1;
