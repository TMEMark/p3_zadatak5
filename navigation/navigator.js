import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HdzScreen } from '../screens/HdzScreen';
import { SdpScreen } from '../screens/SdpScreen';
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home screen" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings screen" }}
      />
      <Stack.Screen
        name="Hdz"
        component={HdzScreen}
        options={{ title: 'Hdz screen' }}
      />
      <Stack.Screen
        name="Sdp"
        component={SdpScreen}
        options={{ title: 'Sdp screen' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return(
  <NavigationContainer>
    <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}>
    <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "HOME",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "#1f4d29",
            },
            headerStyle: {
              borderBottomColor: "gray",
              borderBottomWidth: 0.2,
              shadowColor: "transparent",
            },
            title: "HOME",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: "SETTINGS",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "#1f4d29",
            },
            headerStyle: {
              borderBottomColor: "gray",
              borderBottomWidth: 0.2,
              shadowColor: "transparent",
            },
            title: "SETTINGS",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
      <Tab.Screen
        name="HDZ"
        component={HdzScreen}
        options={{
          headerTitle: 'HDZ',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            paddingBottom: 10,
            color: '#4169e1',
          },
          headerStyle: {
            borderBottomColor: 'grey',
            borderBottomWidth: 0.2,
          },
        }}
      />
      <Tab.Screen
        name="SDP"
        component={SdpScreen}
        options={{
          headerTitle: 'SDP',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            paddingBottom: 10,
            color: '#FF3131',
          },
          headerStyle: {
            borderBottomColor: 'grey',
            borderBottomWidth: 0.2,
          },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}
