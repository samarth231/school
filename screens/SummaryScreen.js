import React,{Component} from "react";
import {Text,View,TouchableOpacity,StyleSheet} from "react-native";
export default class App extends Component{

//create a function
render()
{
  return (
    <View>
    <TouchableOpacity style = {styles.touchstyle}>
    <Text>
    Submit
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
  }

})