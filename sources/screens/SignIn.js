import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View,TouchableOpacity,ImageBackground,TextInput, SafeAreaView,Alert } from 'react-native';
import Diagnosis from './Diagnosis';
import { loginPatApi } from '../constants/auth';
import SignUp from './SignUp';

const image = require('../assets/11.jpeg')

export default function SignIn({navigation}) {

  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [result,setResult]=useState('');

  async function loginPat(){

    if(userName==''){
      Alert.alert('Username cannot be empty')
    }
    else if(password==''){
      Alert.alert('Password cannot be empty')
    }
    else{
      const data={
        email:userName,
        password:password
      }
      const response = await loginPatApi(data)
      console.log(response)
      if(response!==undefined){
        setResult(response)
      }
      if(response.message=='Invalid username or password'){
        Alert.alert('Invalid username or password')
        console.log('Did not log in')
        setResult(response.message)
      }else{
        navigation.navigate(Diagnosis)
      }
    }

  }
  
  return (
    <ImageBackground source={image} style={styles.background}>
    <SafeAreaView>
      <View style={{alignItems:'center', marginTop:50}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}>Patient Sign In</Text>
      </View>

    <View style={{marginTop:'20%'}}>

      <TextInput style={styles.inputStyle} onChangeText={setUserName} placeholder="Enter your Name" placeholderTextColor="#000000"/>
      <TextInput style={styles.inputStyle} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#000000" secureTextEntry={true}/>
    </View>

      <TouchableOpacity style={styles.touchable}
               onPress={loginPat}>
        <Text style={{fontSize:20, color:'#000000'}}>SignIn</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.touchable}
              onPress={()=>navigation.navigate(SignUp)}>
        <Text style={{fontSize:20, color:'#000000'}}>Sign Up</Text>
        </TouchableOpacity>


        </SafeAreaView>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  },

  touchable:{
    backgroundColor:'rgba(83, 110, 115, 0.6)',
      alignSelf:'center',
      height:50,
      width:'70%',
      borderRadius:7,
      marginTop:30, 
      justifyContent:'center',
      marginBottom:10,
      alignItems:'center'
  },
  inputStyle: {
    backgroundColor:'rgba(83, 110, 115, 0.6)',
    fontSize: 20,
    color: '#D3D3D3',
    marginBottom: 25,
    marginHorizontal:45,
    paddingLeft:15,
    height:55,
    borderRadius:10
  },
  textStyle:{
    color:'black',
    fontWeight:'bold',
    },

});
