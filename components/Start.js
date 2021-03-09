import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = require("../assets/Background-Image.png");

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
    };
  }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to the Chat App!</Text>
          </View>
          <View style={styles.box1}>
            <View style={styles.nameBox}>
              <TextInput
                style={styles.yourName}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Enter Your Name"
              />
            </View>
            <View style={styles.backColorTextBox}>
              <Text style={styles.backColorText}>Choose Background Color:</Text>
            </View>
            <View style={styles.backColorContainer}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => {
                  this.setState({ color: "#090C08" });
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color2}
                onPress={() => {
                  this.setState({ color: "#474056" });
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color3}
                onPress={() => {
                  this.setState({ color: "#8A95A5" });
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color4}
                onPress={() => {
                  this.setState({ color: "#B9C6AE" });
                }}
              ></TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  color: this.state.color,
                })
              }
            >
              <Text style={styles.buttonText}>Start Chatting</Text>
                    </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    flex: 0.75,
    flexDirection: "column",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  box1: {
    flexDirection: "column",
    position: "relative",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    height: "44%",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },
  nameBox: {
    flexDirection: "column",
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#757083",
  },
  yourName: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 50,
    width: "100%",
    height: 50,
    marginBottom: "auto",
  },
  backColorTextBox: {
    flexDirection: "row",
    position: "relative",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
  },
  backColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  backColorContainer: {
    flexDirection: "row",
    position: "relative",
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
  },
  color1: {
    backgroundColor: "#090C08",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  color2: {
    backgroundColor: "#474056",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  color3: {
    backgroundColor: "#8A95A5",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  color4: {
    backgroundColor: "#B9C6AE",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#757083",
    flexDirection: "column",
    position: "relative",
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
