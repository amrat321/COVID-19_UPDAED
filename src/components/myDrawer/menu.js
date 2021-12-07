import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation}>
        <View style={s.menuContainer}>
          <View style={s.iconoContainer}>
            {/* <Icon size={17} name={this.props.iconName} /> */}
          </View>
          <View style={s.tituloContainer}>
            <Text style={s.tituloTxt}>{this.props.titleName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center',
  },
  tituloTxt: {
    fontSize: 13,
  },
});

export default Menu;
