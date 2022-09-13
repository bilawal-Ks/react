import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import NewAccount from './NewAccount';
import Login from './Login';
import { loginDocApi } from '../constants/auth';

const image = require('../assets/background.jpg')

export default function DoctorLogin({navigation}) {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [result,setResult]=useState('');


  async function loginDoc(){

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
      const response = await loginDocApi(data)
      console.log(response)
      if(response!==undefined){
        setResult(response)
      }
      if(response.message=='Invalid Username or Password.'){
        console.log('Did not log in')
        Alert.alert('Invalid username or Password')
        //setResult(response.message)
      }else{
        navigation.navigate(Login)
      }
    }

  }

  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>

      <View style={{alignItems:'center', marginTop:50}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}>Doctor's</Text>
      </View>
      <View style={{alignItems:'center'}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}>Login</Text>
      </View>

    <View style={{marginTop:'20%'}}>
      <TextInput style={styles.inputStyle} onChangeText={setUserName} placeholder="Enter Username" placeholderTextColor="#D3D3D3"/>
      <TextInput style={styles.inputStyle} value={password} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#D3D3D3" secureTextEntry={true}/>
    </View>

      <TouchableOpacity style={styles.touchable}
              onPress={loginDoc}>
        <Text style={{fontSize:20, color:'#D3D3D3'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}
              onPress={()=>navigation.navigate(NewAccount)}>
        <Text style={{fontSize:20, color:'#D3D3D3'}}>Create a new account</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer:{
    flex:1,
  },
  touchable:{
    backgroundColor:'rgba(83, 110, 115, 0.6)',
      alignSelf:'center',
      height:50,width:'70%',
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
    color:'white',
    fontWeight:'bold',
    color:'silver',
    },

});