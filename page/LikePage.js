import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default LikePage = ({navigation}) => {
    
    useEffect(()=>{
        navigation.addListener('focus', () => {
           console.log("탭을 누를때마다 실행 시킬 로직을 여기에 작성!")  
      });
    },[])
    
    return (
        <View style={styles.readyContainer}>
            <Text style={styles.readyText}>찜 페이지...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    readyContainer: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 400,
        height: 500,
        
    },
    });
