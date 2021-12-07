import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./../screens/home/home";
import Country from "./../screens/country/country";
import Swiper1 from "./../screens/swiper/swiper";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Menu from "./../components/myDrawer/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Info from "./../screens/info/info";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </Stack.Navigator>
  );
}

function CountryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Country"
        options={{ headerShown: false }}
        component={Country}
      />
    </Stack.Navigator>
  );
}
function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="info"
        options={{ headerShown: false }}
        component={Info}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <AntDesign name="home" size={24} color="red" />
            ) : (
              <AntDesign name="home" size={24} color="gray" />
            );
          } else if (route.name === "info") {
            iconName = focused ? (
              <FontAwesome name="info" size={24} color="red" />
            ) : (
              <FontAwesome name="info" size={24} color="gray" />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="Country"
        component={CountryStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#fff",
                elevation: 2,
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                marginBottom: 30,
              }}
            >
              <FontAwesome name="search" size={24} color="#5ea616" />
            </View>
          ),
        }}
      />

      <Tab.Screen name="info" component={InfoStack} />
    </Tab.Navigator>
  );
}
// function MyDrawer() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Swiper"
          options={{ headerShown: false }}
          component={Swiper1}
        />

        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
