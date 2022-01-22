import React,{Component} from "react";
import {Text,View,TouchableOpacity,StyleSheet} from "react-native";
export default class App extends Component{

//create a function
render()
{
  return (


    <View>

    <Text style = {styles.textstyles}>
    Samarth
    </Text>
    <TouchableOpacity style = {styles.touchstyle2}>
    <Text>
    Present
    </Text>
    </TouchableOpacity>

        <TouchableOpacity style = {styles.touchstyle3}>
    <Text>
    Absent
    </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style = {styles.touchstyle}
    onPress = {()=>this.props.navigation.navigate("SummaryScreen")}
    >
    <Text>
    Summary
    </Text>
    </TouchableOpacity>
    </View>
  )
}
}

const styles = StyleSheet.create({
  touchstyle:{
    backgroundColor:"blue",
    width:300,
    height:80,
    marginTop:50,
    marginRight:60,
    alignItems:"center",
    borderRadius:100,
    justifyContent:"center",
    marginLeft:60
  },

    touchstyle2:{
    backgroundColor:"green",
    width:300,
    height:80,
    marginTop:50,
    marginRight:60,
    alignItems:"center",
    borderRadius:100,
    justifyContent:"center",
    marginLeft:60
  },

    touchstyle3:{
    backgroundColor:"red",
    width:300,
    height:80,
    marginTop:50,
    marginRight:60,
    alignItems:"center",
    borderRadius:100,
    justifyContent:"center",
    marginLeft:60
  },

  textstyles:{
    fontSize:20,
    marginLeft:160,
    marginTop:50
  }

})