import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
export default class Info extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Help Stop the Spread of Coronavirus and Protect Your Family
          </Text>
          <Image
            style={{ width: "100%", height: 200, marginTop: 20 }}
            source={{
              uri: "https://www.fda.gov/files/how-you-can-make-a-difference-1600x900_0.gif",
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            Help Stop COVID-19 by Getting Vaccinated
          </Text>
          <Text style={{ width: "95%", alignSelf: "center", marginTop: 30 }}>
            Everyone ages 5 and older can get vaccinated against COVID-19.
            Vaccination is one of the best ways to protect everyone who is
            eligible from COVID-19
          </Text>
          <Text style={{ width: "95%", alignSelf: "center", marginTop: 30 }}>
            The U.S. Food and Drug Administration has approved Comirnaty for the
            prevention of COVID-19 in people ages 16 and older. The FDA-approved
            Comirnaty (COVID-19 Vaccine, mRNA) and the two emergency use
            authorization (EUA) formulations of Pfizer-BioNTech COVID-19 Vaccine
            for ages 12 years and older, when prepared according to their
            respective instructions for use, can be used interchangeably without
            presenting any safety or effectiveness concerns. Additionally, the
            vaccine is available under EUA for ages 5 to 11 at a lower dose and
            in a vial marked with an orange cap to differentiate from the vials
            intended for ages 12 and older. For the latest information on
            vaccines, visit this FDA page.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            Wash Your Hands
          </Text>
          <Text style={{ width: "95%", alignSelf: "center", marginTop: 30 }}>
            The best way to prevent illness is to avoid being exposed (or
            exposing others) to this virus. First, practice simple hygiene. Wash
            your hands regularly with soap and water for 20 seconds – especially
            after going to the bathroom, before eating, and after coughing,
            sneezing, or blowing your nose. Learn how to wash your hands to
            prevent the spread of coronavirus and other illnesses.
          </Text>
          <Text style={{ width: "95%", alignSelf: "center", marginTop: 30 }}>
            If soap and water are not available, the Centers for Disease Control
            and Prevention recommend that consumers use alcohol-based hand
            sanitizers containing at least 60% ethanol (also known as ethyl
            alcohol).
          </Text>
        </ScrollView>
      </View>
    );
  }
}
