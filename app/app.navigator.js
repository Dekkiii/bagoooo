import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Loginscreen } from './screen/login/login.screen';
import { Homescreen } from './screen/Home/homescreen';
import { Aboutscreen } from './screen/About/aboutscreen';
import { Contactscreen } from './screen/Contact/contactscreen';
import { Menuscreen } from './screen/Menu/menuscreen';
import { Recipescreen } from './screen/Recipe/recipescreen';
import { Food1 } from './screen/Recipe/recipescreen';
import { Food2 } from './screen/Recipe/recipescreen';
import { Food3 } from './screen/Recipe/recipescreen';
import { Food4 } from './screen/Recipe/recipescreen';
import { Food5 } from './screen/Recipe/recipescreen';
import { Food6 } from './screen/Recipe/recipescreen';
import { Food7 } from './screen/Recipe/recipescreen';
import { Food8 } from './screen/Recipe/recipescreen';
import { Food9 } from './screen/Recipe/recipescreen';
import { Food10 } from './screen/Recipe/recipescreen';
import { Bmiscreen } from './screen/BMI/bmiscreen';
import { Exerscreen } from './screen/Exercise/exerscreen';



const Stack = createStackNavigator();

export const AppNavigator = ({navigation}) => {
return (
    <NavigationContainer  initialRouteName='Loginscreen'> 
        <Stack.Navigator headerMode ="none">
            <Stack.Screen name ='Login' component={Loginscreen}/>
            <Stack.Screen name ='Home' component={Homescreen}/>
            <Stack.Screen name ='About' component={Aboutscreen}/>
            <Stack.Screen name ='Contact' component={Contactscreen}/>
            <Stack.Screen name ='Menu' component={Menuscreen}/>
            <Stack.Screen name ='Recipescreen' component={Recipescreen}/>
            <Stack.Screen name ='Gymsc' component={Exerscreen}/>
            <Stack.Screen name ='Recipe1' component={Food1}/>
            <Stack.Screen name ='BMI' component={Bmiscreen}/>
            <Stack.Screen name ='Recipe2' component={Food2}/>
            <Stack.Screen name ='Recipe3' component={Food3}/>
            <Stack.Screen name ='Recipe4' component={Food4}/>
            <Stack.Screen name ='Recipe5' component={Food5}/>
            <Stack.Screen name ='Recipe6' component={Food6}/>
            <Stack.Screen name ='Recipe7' component={Food7}/>
            <Stack.Screen name ='Recipe8' component={Food8}/>
            <Stack.Screen name ='Recipe9' component={Food9}/>
            <Stack.Screen name ='Recipe10' component={Food10}/>
            
            
            
            

        </Stack.Navigator>
    </NavigationContainer>
    )
   }
     
export default AppNavigator;