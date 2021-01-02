import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import GradientButton from 'react-native-gradient-buttons'
import { SearchBar, Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Product 1", count: 4, image: "https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/11/franchise_mpp_ambient_0005_studio_us.jpg?quality=90&strip=all&zoom=1&resize=644%2C342&ssl=1" },
        { id: 2, title: "Product 2", count: 4, image: "https://plasticsdecorating.com/wp-content/uploads/cosmetic-foil-1.jpg" },
        { id: 3, title: "Product 3", count: 4, image: "https://images-static.nykaa.com/media/catalog/product/9/8/9899765347245_1_.png" },
        { id: 4, title: "Product 4", count: 4, image: "https://i.pinimg.com/originals/30/31/6f/30316fc033e5daf1e92a5af9f6a03a42.jpg" },
        { id: 5, title: "Product 5", count: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqsQzGxfO7ZhCCDjD0mFwgo55arA_c16q7cQ&usqp=CAU" },
        { id: 6, title: "Product 6", count: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqRpoizVod38F6BbwXTcZlRzQvuOhe3Q-Q0w&usqp=CAU" },
        { id: 7, title: "Product 7", count: 4, image: "https://cdn11.bigcommerce.com/s-raezqm0uvx/images/stencil/1280x1280/products/768/469/perfect-mat-lipstick-artdeco-134-144_image_person__88239.1519367291.jpg?c=2?imbypass=on" },
        { id: 8, title: "Product 8", count: 4, image: "https://via.placeholder.com/400x200/4169E1/000000" },


      ]
    };
  }

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
    const { search } = this.state;
    return (


      <View style={styles.bigcontainer}>
        <Header
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}

        />
        <View style={{ justifycontent: "row", backgroundColor: "pink" }}>
          <View>
            <SearchBar
              placeholder="What are you looking for ?"
              onChangeText={this.updateSearch}
              value={search}
              fontColor="#c6c6c6"
              iconColor="black"
              shadowColor="white"
              cancelIconColor="white"
              nPress={() => alert("onpress")}
              style={{
                borderRadius: 20,
                borderColor: '#333',
                backgroundColor: 'white'
              }} />



            <FontAwesome
              name="camera"
              color="gray"
              size={20}
            />
          </View>
          <View>
            <FontAwesome
              name="microphone"
              color="gray"
              size={20}
            />
            <View>
            </View>
          </View>
        </View>



        <View style={styles.beautyandfashioncontainer}>
          <View style={styles.trending}>
            <GradientButton
              style={{ marginVertical: 8 }}
              text="Trending"
              textSyle={{ fontSize: 20 }}
              gradientBegin="#874f00"
              gradientEnd="#f5ba57"
              gradientDirection="diagonal"
              height={30}
              width={200}
              radius={15}
              impact
              impactStyle='Light'
              onPressAction={() => alert('You pressed me!')}
            />
          </View>

          <View style={styles.fashion}>

            <GradientButton
              text="Product"
              style={{ marginVertical: 8 }}
              textSyle={{ fontSize: 20 }}
              gradientBegin="#874f00"
              gradientEnd="#f5ba57"
              gradientDirection="diagonal"
              height={30}
              width={200}
              radius={15}
              impact
              impactStyle='Light'
              onPressAction={() => alert('You pressed me!')}
            >
              Gradient Button #2
    </GradientButton>


          </View>



        </View>

        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{ uri: item.image }} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                </View>
              </View>
            )
          }} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  beautyandfashioncontainer: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white"

  },

  fashion: {
    flex: 0.5
  },
  trending: {
    flex: 0.5
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '45%',
    marginHorizontal: 10,

  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',

  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
    borderRadius: 10
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: "#778899"
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: "#B0C4DE"
  },
});