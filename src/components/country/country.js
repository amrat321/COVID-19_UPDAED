import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomPicker from "./../picker/picker";
import CustomCard from "../cards/cards";
import DashboardChart from "./../chart/chart";
const axios = require("axios");

const chartData = [
  {
    name: "Confirmed",
    color: "#0000FF",
    legendFontColor: "#0000FF",
    legendFontSize: 10,
  },
  {
    name: "Recovered",
    color: "green",
    legendFontColor: "green",
    legendFontSize: 10,
  },
  {
    name: "Deaths",
    color: "red",
    legendFontColor: "red",
    legendFontSize: 10,
  },
];

export default class CountriesScreen extends Component {
  constructor() {
    super();
    this.state = {
      contury: "",
      showCard: false,
      data: [
        {
          title: "Confirmed Cases",
          backgroundColor: "#0000FF",
        },
        {
          title: "Recovered Cases",
          backgroundColor: "green",
        },

        {
          title: "Deaths",
          backgroundColor: "red",
        },
        {
          title: "Last Updated",
          backgroundColor: "#0000FF",
        },
      ],
    };
  }

  handelCity = async (itemValue) => {
    // console.log(itemValue.name);
    let { data } = this.state;
    this.setState({ contury: itemValue });
    if (itemValue) {
      try {
        const getData = await axios.get(
          `https://covid19.mathdro.id/api/countries/${itemValue}`
        );
        var confirmedNumber = getData.data.confirmed.value;
        var splitedConfirmedNumber = confirmedNumber.toString().split(".");
        splitedConfirmedNumber[0] = splitedConfirmedNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");


        var recoveredNumber = "3869";
        var splitedRecoveredNumber = recoveredNumber.toString().split(".");
        splitedRecoveredNumber[0] = splitedRecoveredNumber[0].replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        );
          var DeathNumber = getData.data.deaths.value;
        var splitedDeathNumber = DeathNumber.toString().split(".");
        splitedDeathNumber[0] = splitedDeathNumber[0].replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        );

        let confirmed = splitedConfirmedNumber.join(".");
        let recovered = splitedRecoveredNumber.join(".");
        let deaths = splitedDeathNumber.join(".");
        data[0].number = confirmed;
        data[1].number = recovered;
        data[2].number = deaths;
        data[3].number = getData.data.lastUpdate;

        chartData[0].population = getData.data.confirmed.value;;
        chartData[1].population = getData.data.recovered.value;
        chartData[2].population = getData.data.deaths.value;

        this.setState({
          data,
          showCard: true,
          chartData,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      this.setState({
        data,
        showCard: false,
      });
    }
  };

  render() {
    let { contury, data, showCard, chartData } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <CustomPicker language={contury} onValueChange={this.handelCity} />
          </View>
          {showCard ? (
            <>
              {data &&
                data.map((val, i) => {
                  return (
                    <CustomCard
                      data={val}
                      key={i}
                      dataObj={this.state.dataObj}
                    />
                  );
                })}
              <DashboardChart data={chartData} />
            </>
          ) : null}
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
    color: "#3465d9",
  },
});
