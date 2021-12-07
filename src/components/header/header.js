import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
export default class MainHeader extends Component {
  render() {
    return (
      <Header noShadow style={{backgroundColor: '#B80E17'}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" style={{fontSize: 20, color: 'white'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'white'}}>{this.props.screen}</Title>
        </Body>
      </Header>
    );
  }
}