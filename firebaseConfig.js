import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
var firebaseConfig = {
    apiKey: "AIzaSyCvlL9rExk-UhUEDXII_9o6nWVNdOXY4Jo",
    authDomain: "sparta-weather-chloe.firebaseapp.com",
    databaseURL: "https://sparta-weather-chloe.firebaseio.com",
    projectId: "sparta-weather-chloe",
    storageBucket: "sparta-weather-chloe.appspot.com",
    messagingSenderId: "988084566808",
    appId: "1:988084566808:web:62da33236933aa31a97c6d",
    measurementId: "G-F8HE6JYQ7D"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()