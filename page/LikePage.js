import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig"
import RecommendCard from "../components/RecommendCard"

export default LikePage = ({navigation}) => {
    
    const user_id = Constants.installationId;
    const [state,setState] = useState({
        isLoading:true,
        likes: []
    });

    useEffect(()=>{
        navigation.addListener('focus', () => {
            firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
                console.log("파이어베이스에서 데이터 가져왔습니다!!")
                let likes = snapshot.val(); 
                setState({
                    isLoading: false,
                    likes: likes
                })
            });
      });
    },[])
    
    return state.isLoading?  (
        <View style={styles.readyContainer}>
            <Text style={styles.readyText}>찜 페이지...</Text>
        </View>
    ) : (
        <ScrollView style={styles.container}>
            {state.likes.map((c,i)=>{
                        return (<RecommendCard key={i} data={c}/>)
                    })}
        </ScrollView>
        
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
    container: {
        flex: 1
    }
    });
