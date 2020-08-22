import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import RecommendCard from "./components/RecommendCard";
import clothesData from "./clothes.json";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const [state,setState] = useState([])

  useEffect(()=>{
    setState(clothesData.data)
  },[])


  return (
    <View style={styles.container}>
      <ScrollView>
        
        <LinearGradient colors={["#FF7300", "#FEF253"]} style={styles.weather}>
          <MaterialCommunityIcons name="weather-sunny" size={120} color="white" />
          <Text style={styles.temperature}>20°</Text>
        </LinearGradient> 

        <View style={styles.clothesRecom}>
        {state.map((data,i)=>{
                    return <RecommendCard key={i} brand={data.brand} name={data.name} brand={data.brand} name={data.name} price={data.price} image={data.image}/>
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