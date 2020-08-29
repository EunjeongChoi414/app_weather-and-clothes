import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import RecommendCard from "../components/RecommendCard";
import clothesData from "../clothes.json";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


export default function MainPage({navigation}) {

  const [state,setState] = useState({
    temp: 20,
    clothes: []
  })

  useEffect(()=>{
    setState({
      temp: 20,
      clothes: clothesData["data"]
    })
  },[])


  return (
    <View style={styles.container}>
      <ScrollView>
        
        <LinearGradient colors={["#FF7300", "#FEF253"]} style={styles.weather}>
          <MaterialCommunityIcons name="weather-sunny" size={120} color="white" />
          <Text style={styles.temperature}>20°</Text>
        </LinearGradient> 

        <View style={styles.clothesRecom}>
        {state["clothes"].map((data,i)=>{
                    return <RecommendCard key={i} data={data}/>
                  })}
        </View>

      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  weather: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width:370,
    height:270,
    marginTop: 25,
    borderRadius: 12,

  },
  temperature: {
    color: 'white',
    fontSize: 35
  },
  clothesRecom: {
    alignItems: "center"
  },
  
});