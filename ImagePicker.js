import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTime } from "luxon";
const DATE_FROMAT = 'LLLL dd yyyy';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  onChange = (event, selectedDate) => {
    console.log('kkkkk event', event)
    console.log('kkkkk selectedDate', DateTime.fromJSDate(selectedDate).toFormat(DATE_FROMAT))
    // console.log('kkkkk selectedDate', selectedDate.toLocaleString(DateTime.DATE_MED))
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ isShow: true })}>
          <Text>Open date picker</Text>
        </TouchableOpacity>
        {this.state.isShow && <DateTimePicker
          value={new Date(2020, 11, 25)}
          mode={'date'}
          is24Hour={true}
          onChange={this.onChange}
        // minimumDate={new Date(2020, 11, 22)}
        // maximumDate={new Date(2020, 11, 29)}
        />}
      </View>
    );
  }
}

export default DatePicker;
