import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView,Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { createNewDoc } from '../constants/auth';
import { NavigationHelpersContext } from '@react-navigation/native';



const bkimage = require('../assets/background2.jpeg')

export default function NewAccount({navigation}) {
  const [Name,setName]=useState(''); 
  const [Contact,setContact]=useState('');
  const [Experience,setExperience]=useState('');
  const [Hospitals,setHospitals]=useState('');
  const [Clinic,setClinic]=useState('');
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [image, setImage] = useState(null);
  const [specs, setSpecs] = useState('');


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
};

async function registerDoc(){
   const data={
    fname:Name,  // laravel:app
    Contact:Contact,
    Exp:Experience,
    Hname:Hospitals,
    Cname:Clinic,
    email:userName,
    pass:password,
    Specs:specs
   }
   const response = await createNewDoc(data)
   console.log(response)
   navigation.goBack()
}


  return (
    <ImageBackground source={bkimage} style={styles.imageBackgroundContainer}>
      <SafeAreaView style={{flex:1}}>
          
        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}>𝓢𝓲𝓰𝓷 𝓤𝓹</Text>
        </View>
        <ScrollView style={{marginTop:'20%'}}>
          <View>
            <TouchableOpacity style={styles.DpView} onPress={pickImage} activeOpacity={0.7}>
            {image && <Image source={{ uri: image }} style={styles.DpView} />} 
             <Text style={{fontSize:50, color:'rgba(83, 110, 115, 0.6)'}}>+</Text>
             <Text style={{fontSize:15, color:'rgba(83, 110, 115, 0.6)'}}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput style={styles.inputStyle} onChangeText={setName} placeholder="Enter Name" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setContact} placeholder="Enter Contact" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setExperience} placeholder="Enter Experience" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setHospitals} placeholder="Enter Hospitals" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setClinic} placeholder="Enter Clinic" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setUserName} placeholder="Enter Username" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setSpecs} placeholder="Specialization" placeholderTextColor="#D3D3D3"/>


            <TouchableOpacity style={styles.touchable}
              onPress={registerDoc}>
              <Text style={{fontSize:20, color:'#D3D3D3'}}>Create Account</Text>
            </TouchableOpacity>  
          </View>
        </ScrollView>
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

    DpView:{
      backgroundColor:'#D3D3D3',
      height:150,
      width:150,
      borderRadius:200,
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      marginTop:'10%',
      marginBottom:50,
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
    
});