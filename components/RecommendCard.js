import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,ScrollView, Dimensions,TouchableOpacity,ImageBackground } from 'react-native';

const RecommendCard = ({data}) => {

    return (
        <TouchableOpacity style={styles.clothesCard}>
            <Image style={styles.img} source={{uri: data.image}} resizeMode="contain"/>
        
            <View style={styles.text}>
              <View style={styles.clothesInfo}>
                <Text style={styles.brand}>{data.brand}</Text>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{data.price}</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity style={styles.dibs}>
                  <Text style={styles.dibsText}>찜하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailBtn}>
                <Text style={styles.detailBtnText}>자세히 보러가기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
    )
}
export default RecommendCard;


const styles = StyleSheet.create({

clothesCard: {
    flexDirection:"row",
    alignItems: "center",
    width:370,
    height:140,
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },
  img: {
    width: 80,
    height: 100,
    marginLeft: 10,
    marginBottom: 10
  },
  text: {
    flexDirection:"column",
    marginLeft: 10
  },
  clothesInfo: {
    marginTop: 0,
  },
  brand: {
    fontWeight: "bold",
    fontSize: 15,
  },
  name: {
    fontSize: 15,
    lineHeight: 18
  },
  price: {
    fontSize: 15,
    lineHeight: 18
  },
  btn: {
    flexDirection: "row",
    marginTop: 10,
  },
  dibs: {
    width: 60,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10
  },
  dibsText: {
    color: "white",
    fontSize: 14
  },
  detailBtn: {
    width: 120,
    height: 40,
    backgroundColor: "hotpink",
    borderRadius: 10,
    padding: 10,
    marginLeft: 15
  },
  detailBtnText: {
    color: "white",
    fontSize: 14
  }
});