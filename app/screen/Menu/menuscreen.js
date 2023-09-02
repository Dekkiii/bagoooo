import React from 'react';

import { SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import { Menustyle } from './menu.style';


export const Menuscreen = ({navigation}) => {
    return(
<SafeAreaView style={Menustyle.content}>
    <View>
    <Text style={Menustyle.titleText}>{"Menu"}</Text>
    <Card >
       <Card.Actions  style={Menustyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Menu')}>Menu</Button>
       <Button onPress={() => navigation.navigate('Home')}>Home</Button>
       <Button onPress={() => navigation.navigate('About')}> About</Button>
       <Button onPress={() => navigation.navigate('Contact')}>Contact</Button>
    </Card.Actions>
    </Card>
   
   <ScrollView>
    <Card style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/Fitnessbuddy.png')}/>
    <Card.Content>
      <Title>Food Recipe</Title>
      <Paragraph>Free healthy food recipe for Your fitness journey!</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => navigation.navigate('Recipescreen')}>Go</Button>
    </Card.Actions>
    
     </Card>
    <Card style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/COVER3.png')}/>
    <Card.Content>
      <Title>Gym Equipments</Title>
      <Paragraph>Different Uses of Gym Equipments</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button onPress={() => navigation.navigate('Gymsc')}>Go</Button>
    </Card.Actions>
    </Card>


    <Card style={Menustyle.card2}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/COVER2.png')}/>
    <Card.Content>
      <Title>Workout Guide</Title>
      <Paragraph>Workout guides for all</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Go</Button>
    </Card.Actions>
    </Card>
    
    </ScrollView> 
    </View> 

</SafeAreaView>

    
   
    );
 };