import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { color } from "react-native-reanimated";

export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name;
    let color = this.props.route.params.color;
    this.props.navigation.setOptions({ title: name });

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: color,
        }}
      ></View>
    );
  }
}
