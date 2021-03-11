import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title = {'My Study App'} navigation = {this.props.navigation}/>
            </View>
        )
    }
}