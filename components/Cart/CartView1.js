import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Dimensions, StyleSheet, Image, TextInput, ActivityIndicator, Alert
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

class CartView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: props.selectedItem,
      quantity: 1,
    };
  }


  //decrease quantity working
  decreaseQuantity = (id) => {
    const increase = this.state.selectedItem.map(item => {
      if (item.id === id && item.quantity>1) {
        item.quantity--
      }
      return item
    })
    this.setState({
      selectedItem: increase
    })

  }


  //increase quantity working
  increaseQuantitiy = (id) => {
    const increase = this.state.selectedItem.map(item => {
      if (item.id === id) {
        item.quantity++
      }
      return item
    })
    this.setState({
      selectedItem: increase
    })

  }


  onClickItem(item) {
    console.log(item)
    Actions.ProductDetail({ item: item })
  }


  deleteHandler = (id) => {
    Alert.alert(
      'Are you sure you want to delete this item from your cart?',
      '',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'Delete', onPress: () => {

            const deselected =  this.state.selectedItem.filter(item=>item.id !== id)
            this.setState({selectedItem:deselected}); /* Update the state */
          }
        },
      ],
      { cancelable: false }
    );
  }


  subtotalPrice = () => {
    const { selectedItem } = this.state;
    if (selectedItem) {
      return selectedItem.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }
    return 0;
  }

  gotoPayment = (item) => {

    // const { selectedItem } = this.state;
    Actions.Payment({ selectedItem: item })
  }

  renderItem = ({ item, index }) => {
    const {
      product, mainRight, productController,
      txtName, txtPrice,
      txtShowDetail, showDetailContainer } = styles;
    return (
      <View
        key={index}
        style={{ marginTop: 5 }}
      >
        <View style={product}>
          <Image source={item.imageUri} />

          {/* <Text>${item.type}</Text>
          <Text>${item.price}</Text> */}
          <View style={[mainRight]}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={txtName}>{item.type}</Text>

              <TouchableOpacity onPress={() => this.deleteHandler(item.id)} >
                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={txtPrice}>{item.quantity * item.price}</Text>
            </View>
            <View style={productController}>
              <TouchableOpacity style={styles.button} onPress={() => this.decreaseQuantity(item.id)}>
                <Text style={{ fontSize: 20, color: '#474747' }}> - </Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                onChangeText={(quantity) => this.setState({ quantity })}
                // value={`${this.state.quantity}`}
                value={`${item.quantity}`}
                keyboardType="numeric"
              />

              <TouchableOpacity style={styles.button}
              onPress={() => this.increaseQuantitiy(item.id)} >
                <Text style={{ fontSize: 20, color: '#474747' }}> + </Text>
              </TouchableOpacity>
              <TouchableOpacity style={showDetailContainer}>
                <Text style={txtShowDetail}
                onPress={() => this.onClickItem(item)}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const tax = 0.13 * this.subtotalPrice()
    const subtotal = this.subtotalPrice()
    console.log(this.state.selectedItem)
    return (
      <View style={{ flex: 1 }}>
        <Text>Kim Kim </Text>
        <FlatList
          contentContainerStyle={{ flex: 1 }}
          data={this.state.selectedItem}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <TouchableOpacity onPress={this.goToPayment}>
        <Text style={{paddingVertical: 10, backgroundColor: 'red', color: 'white'}}>{`Selected posts: ${this.state.posts.map(_ => _.id).join(', ')}`}</Text>
      </TouchableOpacity> */}
        <View style={{ flexDirection: 'column', paddingRight: 20 }}>
          <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'flex-start' }}>
            <Text style={{ color: 'black' }}>SubTotal  </Text>
            <Text>${subtotal}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Tax </Text>
            <Text>${tax}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Total </Text>
            <Text>${subtotal + tax}</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', height: 50, paddingRight: 20, alignItems: 'center' }}>
          <TouchableOpacity
          style={{ backgroundColor: 'black', width: 200, height: 25, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.gotoPayment(this.state.selectedItem)}
          >
            <Text style={{ color: '#ffffff' }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF',
    marginTop: 10
  },
  checkoutButton: {
    height: 40,
    margin: 10,
    marginTop: 0,
    backgroundColor: 'grey',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  product: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center',
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 0.5,

  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between',

  },
  productController: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20
  },

  txtName: {
    paddingLeft: 20,
    color: "black",
    fontSize: 18,
    fontFamily: 'Anton-Regular',
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 5,
    fontSize: 16
  }
});

export default CartView1;
