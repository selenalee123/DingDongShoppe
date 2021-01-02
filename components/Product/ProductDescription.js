import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';



class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
        <View style={styles.container}>
        <Text style={styles.textTitle}>
            Women's Running Shoes
        </Text>
        <Text style={styles.textContent}>
            The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage.
        </Text>
        <Text style={styles.textList}>
            - Shown: Cinnabar/Crimson Tint/Aurora/Blue Force
        </Text>
        <Text style={styles.textList}>
            - Style: AQ2731-600
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginRight: '5%'
    },
    textTitle: {
        fontSize: 22,
        fontFamily: 'FiraSans-Medium',
        marginVertical: '2%'
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        lineHeight: 25,

    },
    textList: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        lineHeight: 25,
    }
});

export default ProductDescription;
