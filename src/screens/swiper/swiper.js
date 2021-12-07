import React from "react";

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

export default class Swiper1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatable_singup: null,
      animatable_login: null,
    };
  }

  onIndexChanged = (index) => {
    if (index == 2) {
      this.setState({
        animatable_singup: "bounceInLeft",
        animatable_login: "bounceInRight",
      });
    } else {
      this.setState({
        animatable_singup: null,
        animatable_login: null,
      });
    }
  };
  render() {
    return (
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activedot} />}
        onIndexChanged={(index) => this.onIndexChanged(index)}
      >
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../assets/asset1.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Wash Your Hands</Text>
            <Text style={styles.text}>
              Wash your hands often with soap and water for at least 20 seconds
              especially after you have been in a public place, or after blowing
              your nose, coughing, or sneezing.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../assets/asset2.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Avoid close contact</Text>
            <Text style={styles.text}>
              inside your home: Avoid close contact with people who are sick. If
              possible, maintain 6 feet between the person who is sick and other
              household members.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../../assets/asset3.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Than You Doctors</Text>
            <Text style={styles.text}>
              "Thank you! Thank you for working your butts off during this
              pandemic. I appreciate that you're risking your health to care for
              our community.
            </Text>

            <View style={styles.container}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.button,
                  {
                    backgroundColor: "red",
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 15,
                    marginLeft: 20,
                  },
                ]}
              >
                <Text
                  style={styles.loginText}
                  onPress={() => {
                    this.props.navigation.navigate("Main");
                    // alert("dfdfdf");
                  }}
                >
                  Tracker
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }
}

const { width, height } = Dimensions.get("screen");

const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;

const width_button = width * 0.3;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width_image,
    height: height_image,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  text: {
    color: "grey",
    textAlign: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activedot: {
    backgroundColor: "red",
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  container: {
    flexDirection: "row",
  },

  button: {
    width: width_button,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  signupText: {
    color: "#3465d9",
  },
  loginText: {
    color: "white",
  },
});
