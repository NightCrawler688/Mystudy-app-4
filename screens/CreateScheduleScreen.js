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
import { RFValue } from "react-native-responsive-fontsize";
import CalendarPicker from 'react-native-calendar-picker';

export default class CreateScheduleScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            date:'',
            taskName:'',
            description:'',
            calendarIsVisible:false,
            selectedDate:'',
            month:'',
            year:'',
            finalDate:''
        }
    }
      onChangeDate=(date)=>{
        this.setState({
          selectedDate:date.toString(),
          month:this.state.selectedDate.substring(4,8),
          date:this.state.selectedDate.substring(8,11),
          year:this.state.selectedDate.substring(11,16),
          calendarIsVisible:false
        })
        // var date = this.state.date.substring(8,11)
      //   this.setState({
      //     date:date
      //   })
      // console.log(this.state.selectedDate.toString());
      console.log(this.state.month);
      // console.log(this.state.year);
      // console.log(this.state.date);
      switch(this.state.month){
        case 'Jan':
          this.setState({
            month:'01'
          })
          break;
          case 'Feb':
          this.setState({
            month:'02'
          })
          break;
          case 'Mar':
          this.setState({
            month:'03'
          })
          break;
          case 'Apr':
          this.setState({
            month:'04'
          })
          break;
          case 'May':
          this.setState({
            month:'05'
          })
          break;
          case 'Jun':
          this.setState({
            month:'06'
          })
          break;
          case 'Jul':
          this.setState({
            month:'07'
          })
          break;
          case 'Aug':
          this.setState({
            month:'08'
          })
          break;
          case 'Sep':
          this.setState({
            month:'09'
          })
          break;
          case 'Oct':
          this.setState({
            month:'10'
          })
          break;
          case 'Nov':
          this.setState({
            month:'11'
          })
          break;
          case 'Dec':
          this.setState({
            month:'12'
          })
          break;
          default:
            break;
      }
      this.setState({
        finalDate:this.state.date + '/' + this.state.month + '/' + this.state.year + '/'
      })
      }

    render(){
        return(
            <View>
                <MyHeader title = {'Create Schedule'} navigation = {this.props.navigation}/>
                <View style = {{alignItems:'center',justifyContent:'center'}}>
                    
                    <TextInput
                style={styles.formInput}
                placeholder={"Date-DD/MM/YY"}
                onChangeText={(text) => {
                  this.setState({
                    calendarIsVisible:true
                  })
                  }
                  
                }
                value = {this.state.finalDate}
              />
              <View>
                {this.state.calendarIsVisible=== true
               ?
               (
                 <CalendarPicker onDateChange = {this.onChangeDate}/>
               )
               :
               
                 null
               
              }
              </View>
                
                    <TextInput
                style={styles.formInput}
                placeholder={"Task Name"}
                onChangeText={text => {
                  this.setState({
                    taskName: text
                  });
                }}
              />
                    
                    <TextInput
                style={[styles.formInput,{height:50}]}
                placeholder={"Description(Optional)"}
                multiline = {true}
                onChangeText={text => {
                  this.setState({
                    description: text
                  });
                }}
              />
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                </View>
              
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "grey",
        paddingBottom: RFValue(10),
        marginLeft: RFValue(20),
        marginBottom: RFValue(14)
      },
      registerButton:{
      width: "75%",
      height: RFValue(50),
      marginTop: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(3),
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop: RFValue(10)
    },
    registerButtonText: {
      fontSize: RFValue(23),
      fontWeight: "bold",
      color: "#fff"
    },
    cancelButtonText: {
      fontSize: RFValue(20),
      fontWeight: "bold",
      color: "white",
      marginTop: RFValue(10)
    }
})