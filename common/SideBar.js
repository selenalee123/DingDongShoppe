import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createAppContainer, NavigationContext } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Action, Actions } from "react-native-router-flux"

//import { connect } from "react-redux";
//import { logout } from "src/action";
import {
  Container,
  Thumbnail,
  Content,
  List,
  ListItem,
  Separator,
  Button,
  Text,
  Left,
  Body,
  Icon,
  Right,
  View
} from "native-base";
import Images from '../constants/Images'

let { height } = Dimensions.get("window");

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#86A8E7",
            height: 120,
            alignItems: "center",
           
          }}
        >
          <Thumbnail
            style={{
              width: 120,
              height: 120,
              marginRight:30,
              marginLeft:30
            }}
            source={Images.KKProfile}

          />
          <Text style={{ marginTop: 5, color: "white" }}>
            {/*{this.props.name}*/}
          </Text>
          <Text style={{ marginTop: 5, color: "white" }}>
            {/*this.props.email}*/}
          </Text>
        </View>
        <View
          style={{
            height: height - 150
          }}
        >
          <Content>
            <List
              style={{
                backgroundColor: "white"
              }}
            >
              <ListItem icon>
                <Left>
                  <Icon name="ios-reorder" />
                </Left>
                <Body>
                  <Text>Your Orders</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-folder-open" />
                </Left>
                <Body>
                  <Text>Wallet</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-card" />
                </Left>
                <Body>
                  <Text>Saved Cards</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-trophy" />
                </Left>
                <Body>
                  <Text>Refer N Earn</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-film" />
                </Left>
                <Body>
                  <Text>My Coupons</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-help-circle" />
                </Left>
                <Body>
                  <Text>Help And Support</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-settings" />
                </Left>
                <Body>
                  <Text>Settings</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-paper" />
                </Left>
                <Body>
                  <Text>Abouts Us</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-clipboard" />
                </Left>
                <Body>
                  <Text>Terms And Service</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-exit" />
                </Left>
                <Body>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.props.logout();
                    }}
                  >
                    <Text
                      style={{
                        paddingLeft: 5,
                        textDecorationLine: "underline"
                      }}
                    >
                      Sign Out
                  </Text>
                  </TouchableWithoutFeedback>
                </Body>
                <Right />
              </ListItem>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

export default SideBar;
