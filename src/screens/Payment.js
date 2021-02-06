import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PaymentView from '../../components/Payments/PaymentView'

export default class Payment extends Component {

    constructor(props) {
        console.log("go topayment" ,props.selectedItem)
        super(props);
        this.state = {
            selectedItem: props.selectedItem
        };
    }

    render() {
       const  selectedItem= this.state.selectedItem
        return (
            <View>
                <Text>{JSON.stringify(selectedItem)}</Text>

            </View>
        );
    }
}



{/* <PaymentView
            onCheckStatus={onCheckStatus}
            product={cartInfo.description}
            amount={cartInfo.amount} /> */}
{/* <PaymentView
                /> */}


