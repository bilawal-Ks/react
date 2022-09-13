import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text,ScrollView } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainScreen from './sources/screens/MainScreen'
import DoctorLogin from './sources/screens/DoctorLogin'
import NewAccount from './sources/screens/NewAccount'
import Login from './sources/screens/Login'
import SignIn from './sources/screens/SignIn'
import SignUp from './sources/screens/SignUp'
import Diagnosis from './sources/screens/Diagnosis'

const Stack = createNativeStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>

          <Stack.Screen name="MainScreen" component={MainScreen}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/>
            
        <Stack.Screen name="DoctorLogin" component={DoctorLogin}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/>

        <Stack.Screen name="NewAccount" component={NewAccount}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/>

        <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        <Stack.Screen name="Diagnosis" component={Diagnosis}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;