import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";

class Home extends React.component {
  state = {
    name: "",
  };
  render() {
    return (
      <View>
        <Text style={StyleSheet.title}>Enter your name :</Text>
        <TextInput
          style={StyleSheet.nameInput}
          placeholder="Suryadora"
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    margin: 20,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export default Home;
