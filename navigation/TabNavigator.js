import React,{useEffect} from "react";

import {Platform} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../page/MainPage';
import LikePage from '../page/LikePage';
import {Ionicons} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({navigation,route}) =>{
  
    useEffect(()=>{
        navigation.setOptions({
            title:"오늘 뭐입지?"
        })
    },[])


    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused}) =>{

              //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
              
                  if (route.name === "MainPage") {
                    iconName += "list";
                  } else if (route.name === "LikePage") {
                    iconName += "heart";
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      color={focused ? "yellow" : "grey"}
                      size={26}
                    />
                  );
            }
        })}
        tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: "black",
              borderTopColor: "black",
              height:80
            }
        }}
    >
        
        <Tabs.Screen name="MainPage" component={MainPage}/>
        <Tabs.Screen name="LikePage" component={LikePage}/>
        
    </Tabs.Navigator>)
}

export default TabNavigator