import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';

export default LikePage = ({navigation}) => {
    
    useEffect(()=>{
        navigation.addListener('focus', () => {
           console.log("탭을 누를때마다 실행 시킬 로직을 여기에 작성!")  
      });
    },[])
    
    return (
    <View style={styles.Background}>
        <View style={styles.readyContainer}>
            <Text style={styles.readyText}>찜 페이지...</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: "black",
    },
    readyContainer: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 400,
        height: 500,
        
    },
    });
