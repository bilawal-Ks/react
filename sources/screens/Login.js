import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const image = require('../assets/background4.jpeg')

export default function Login({navigation}) {
  
  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
     <SafeAreaView>
     <View style={{alignItems:'center', marginTop:50}}>
        <Text style={[styles.textStyle, {fontSize:50} ]}>Doctor's Profile</Text>
    </View>
     </SafeAreaView>

    </ImageBackground>
     );
}

const styles = StyleSheet.create({
    imageBackgroundContainer:{
     flex:1,
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        color:'silver',
        },
 });