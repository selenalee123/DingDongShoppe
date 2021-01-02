import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Images from '../../constants/Images'



export default class ProductSwiper extends PureComponent {
    render() {
        return (
            <View style={styles.container}>


                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>

                    <View style={styles.child }>
                        <Image source={Images.ProductCard}></Image>
                    </View>
                    <View style={styles.child }>
                    <Image source={Images.ProductCard}></Image>
                    </View>
                    <View style={styles.child }>
                    <Image source={Images.ProductCard}></Image>
                    </View>
                    <View style={styles.child }>
                    <Image source={Images.ProductCard}></Image>
                    </View>

                </SwiperFlatList>
            </View>
        );
    }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: width / 2 - 50,
        width: width - 40,
        borderColor:"red",
        marginTop:10,
        alignItems:"center",
        justifyContent:"center",
       


    },
    allchild:{
        alignItems:"center",
        justifyContent:"center"
    },
    child: {

        width: width - 40,
        borderRadius:20,
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center',
    },
});
