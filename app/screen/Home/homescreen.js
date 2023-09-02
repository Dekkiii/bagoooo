import React from 'react';
import { SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import {Homestyle} from './home.style'
const { PrismaClient } = require('@prisma/client');

const coaches = await prisma.Coach.findMany();


export const Homescreen = ({navigation}) => {
    return(
<SafeAreaView style={Homestyle.content}>
    <View>
    <Text style={Homestyle.titleText} >{"Home Screen"}</Text>
    <Card>
    
        
       <Card.Actions style={Homestyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Menu')} style={Homestyle.button}>Menu</Button>
      <Button onPress={() => navigation.navigate('Home')} style={Homestyle.button}>Home</Button>
      <Button onPress={() => navigation.navigate('About')} style={Homestyle.button}>About</Button>
      <Button onPress={() => navigation.navigate('Contact')} style={Homestyle.button}>Contact</Button>     
    </Card.Actions>
    </Card>   
    </View>
    <ScrollView>
    <View>
       <Card style={Homestyle.card2}>
       <Card.Content>
       <Title style={{textAlign:'center'}}>Welcome to Gym App</Title>
       <Paragraph style={{textAlign:'center'}}>Click Menu to Start your Fitness journey with Us! </Paragraph>
       </Card.Content>
       </Card>
    </View>

    

    

    <ScrollView horizontal={true}>

    <Card style={Homestyle.card1}>
    <Card.Cover style={Homestyle.cardcover} resizeMode={`cover`} source={require('./asset/fit1.jpg')}/>
     </Card>

    <Card style={Homestyle.card1}>
    <Card.Cover style={Homestyle.cardcover} resizeMode={`cover`} source={require('./asset/fit2.jpg')}/>
    </Card>

    <Card style={Homestyle.card1}>
    <Card.Cover style={Homestyle.cardcover} resizeMode={`cover`} source={require('./asset/fit3.jpg')}/>
    </Card>
    
    <Card style={Homestyle.card1}>
    <Card.Cover style={Homestyle.cardcover} resizeMode={`cover`} source={require('./asset/fit4.jpg')}/>
    </Card>

    <Card style={Homestyle.card1}>
    <Card.Cover style={Homestyle.cardcover} resizeMode={`cover`} source={require('./asset/fit5.jpg')}/>
    </Card>

    </ScrollView>

    </ScrollView> 
   
 
</SafeAreaView>
    
   
    );

 };
