import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
// import  MainHeader from './../../components/header/header';
import CustomCard from "./../../components/cards/cards";

const axios = require("axios");

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Confirmed Cases",
          backgroundColor: "grey",
          border: "#0000FF",
        },
        {
          title: "Recovered Cases",
          backgroundColor: "green",
          border: "#289228",
        },

        {
          title: "Deaths",
          backgroundColor: "red",
          border: "#FF0000",
        },
      ],
    };
  }

  async componentDidMount() {
    try {
      let { data } = this.state;
      const getData = await axios.get("https://covid19.mathdro.id/api");
      data[0].number = getData.data.confirmed.value;
      data[1].number = getData.data.recovered.value;
      data[2].number = getData.data.deaths.value;

      this.setState({
        data,
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    let { data } = this.state;
    return (
      <View style={styles.container}>
        <View></View>
        {/* <MainHeader navigation={this.props.navigation}/> */}
        <ScrollView>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/29c64d17cae51607b51f557105053235.png")}
          />
          {data &&
            data.map((val, i) => {
              return (
                <CustomCard data={val} key={i} dataObj={this.state.dataObj} />
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginVertical: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },

  tinyLogo: {
    // flex: 2,
    width: 150,
    height: 70,
    alignSelf: "center",

    marginVertical: 30,
  },
});
