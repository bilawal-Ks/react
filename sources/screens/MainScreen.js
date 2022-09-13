import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import DoctorLogin from './DoctorLogin';
import SignIn from './SignIn';

const image = require('../assets/background.jpg')

export default function MainScreen({navigation}) {
  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
      <View style={{alignItems:'center', marginTop:130}}>
          <Text style={[styles.textStyle, {fontSize:70} ]}>Doctor's</Text>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={[styles.textStyle, {fontSize:70} ]}>INN</Text>
        </View>
 
        <TouchableOpacity style={[styles.touchableStyle,{marginTop:100}]} onPress={()=>navigation.navigate(DoctorLogin)}>


          <Text style={{fontSize:20, color:'#D3D3D3'}}>Doctor Login</Text>


          
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableStyle}  onPress={()=>navigation.navigate(SignIn)}>
          <Text style={{fontSize:20, color:'#D3D3D3'}}>Patient Login</Text>
        </TouchableOpacity>
      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer:{
    flex:1,
  },
  touchableStyle:{
    backgroundColor:'rgba(83, 110, 115, 0.6)',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:20,
    width:'65%',
    height:'10%',
    borderRadius:10,
  },
  textStyle:{
    color:'white',
    fontWeight:'bold',
    color:'silver',
    },
});