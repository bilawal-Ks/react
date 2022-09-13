import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity,ImageBackground,TextInput, SafeAreaView, Alert } from 'react-native';
import { createNewPat } from '../constants/auth';
const image = require('../assets/12.jpeg')
export default function SignUp({navigation}) {


  const [Name,setName]=useState('');
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');

  async function registerPat(){
    const data={
     fname:Name,  // laravel:app
     email:Email,
     pass:Password,
    }
    const response = await createNewPat(data)
    console.log(response)
    navigation.goBack()
 }
 

  return (
    <ImageBackground source={image} style={styles.background}>
    <SafeAreaView>
        <View style={{alignItems:'center', marginTop:50}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}> Patient Sign Up</Text>
        </View>

        <TextInput style={styles.inputStyle} onChangeText={setName} placeholder="Enter Name" placeholderTextColor="#D3D3D3"/>
        <TextInput style={styles.inputStyle} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor="#D3D3D3"/>
        <TextInput style={styles.inputStyle} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#D3D3D3"/>
        
      <TouchableOpacity style={styles.inputStyle}
            onPress={registerPat}>
        <Text style={{fontSize:20, color:'#000000'}}>Create Account</Text>
        </TouchableOpacity>

</SafeAreaView>
</ImageBackground>
);
  }

const styles = StyleSheet.create({

  background:{
    flex:1,
  },

    textStyle:{
        color:'black',
        fontWeight:'bold',
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
    
});