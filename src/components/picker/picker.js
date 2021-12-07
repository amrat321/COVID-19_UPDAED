import React, { useState } from "react";
import { View, Text, StyleSheet, PixelRatio, Switch } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
// import { CountryCode, Country } from './src/types'
import { Entypo } from "@expo/vector-icons";

export default function CustomPicker(props) {
  const [countryCode, setCountryCode] = useState("FR");
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    props.onValueChange(country.name);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}>Welcome to Country Picker !</Text> */}
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible={false}
        containerStyle={{ borderWidth: 2, width: "100%" }}
      />
      <Entypo name="chevron-small-down" size={24} color="gray" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerStyle: {
    width: "100%",
    color: "#344953",
  },
});
