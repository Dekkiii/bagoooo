

import React from 'react';
import { Alert, SafeAreaView, View} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';
import { Homescreen } from '../Home/homescreen';
import { NavigationContainer } from '@react-navigation/native';

export const Loginscreen = ({navigation}) => {  
       
    

   return (
       
        <SafeAreaView style={loginStyle.content}> 
        <View>
            
            <Card>
                <Card.Title title="Fitness Buddy" titleStyle={loginStyle.cardTitle}></Card.Title>
                <Card.Content>
                <TextInput label="Email"keyboardType="email-address"></TextInput>
                <TextInput label="Password" secureTextEntry={true}></TextInput>
                <Button uppercase={false} style={loginStyle.cardButton}>Forgot email/password</Button>
                <Button 
                onPress={() => navigation.navigate('Home') }
                mode="contained" 
                style={loginStyle.cardButton}>
                Login
                </Button>
                
               
                <Button style={loginStyle.cardButton}>Register</Button>
                </Card.Content>                                                         
            </Card>
            
            </View>
        </SafeAreaView>
   );
    
   }

