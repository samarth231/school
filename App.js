import React,{Component} from "react";
import {Text,View} from "react-native";
import Homescreen from "./screens/Homescreen"
import SummaryScreen from "./screens/SummaryScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
export default class App extends Component{

//create a function
render()
{
  return (
    <View>
    <AppContainer/>
    </View>
  )
}
}
var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  SummaryScreen:SummaryScreen
})

const AppContainer = createAppContainer(AppNavigator)