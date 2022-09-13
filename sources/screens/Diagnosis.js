import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet,Button,Text, View,TouchableOpacity,ImageBackground,TextInput, SafeAreaView,Alert } from 'react-native';

const image = require('../assets/background2.jpeg')

export default function Diagnosis({navigation}) {

  const [Symptoms,patientsymptoms]=useState('');
  
  return (
    <ImageBackground source={image} style={styles.background}>
    <SafeAreaView>
      <View style={{alignItems:'center', marginTop:50}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}> How are you Feeling?</Text>
      </View>

    <View style={{marginTop:'20%'}}>

      <TextInput style={styles.inputStyle} onChangeText={patientsymptoms} placeholder="Insert Your Symptoms please" placeholderTextColor="#000000"/>
{/*      
     <TouchableOpacity style={styles.touchable}
            onPress={()=>navigation.navigate(Diagnosis)}>
    </TouchableOpacity>
     */}
    </View>
        </SafeAreaView>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
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
