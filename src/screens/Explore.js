import React, { Component } from 'react';
import {
  TextInput, StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import StarRating from '../../components/Map/StarRating';

const { width, height } = Dimensions.get("window");
const screen = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 43.810860;
const LONGITUDE = -79.358200;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class MyLocationMapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
      

    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={this.state.region}
          // onRegionChange={region => this.onRegionChange(region)}
          // region={{
          //     latitude: 43.810860,
          //     longitude: -79.358200,
          //     latitudeDelta: 0.015,
          //     longitudeDelta: 0.0121,
          // }}
          >
            {/* <Marker
            // ref={marker => {
            //   this.marker = marker;
            // }}
            coordinate={this.state.region}
            image={require('../../assets/icons/map_marker.png')}
          // title="My first location"
          // description=" this is the test"
          >
          </Marker> */}

          </MapView >

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0 }}
          />
          <Ionicons name="ios-search" size={20} />
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          // contentInset={{ // iOS only
          //   top:0,
          //   left:0,
          //   bottom:0,
          //   right:20
          // }}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0
          }}
        >
        </ScrollView>

      </View>

    );
  };
}




const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  // bubble: {

  //   flexDirection: 'column',
  //   alignSelf: 'flex-start',
  //   backgroundColor: 'rgba(255,255,255,0.7)',
  //   padding: 15,
  //   borderRadius: 6,
  //   width: 150
  // },
  // arrow: {
  //   backgroundColor: 'transparent',
  //   borderColor: 'transparent',
  //   borderWidth: 16,
  //   alignSelf: 'center',
  //   marginTop: -32,
  // },
  // arrowBorder: {
  //   backgroundColor: 'transparent',
  //   borderColor: 'transparent',
  //   borderTopColor: '#007a87',
  //   borderWidth: 16,
  //   alignSelf: 'center',
  //   marginTop: -0.5,
  // },
  // //Character name
  // name: {
  //   fontSize: 16,
  //   marginBottom: 5
  // },
  // image: {
  //   width: 120,
  //   height: 80,
  //   borderColor: 'black',
  // },
  searchBox: {
    position: 'absolute',
    // marginTop: Platform.OS === 'ANDROID' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,

  },
});


