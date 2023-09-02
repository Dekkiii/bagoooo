import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import { Menustyle } from './menu.style';
import { Aboutstyle } from './about.style';


export const Recipescreen = ({navigation}) => {
    return(
<SafeAreaView style={Menustyle.content}>
    <View>
    
    <Card >
       <Card.Actions  style={Menustyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Menu')}>Menu</Button>
       <Button onPress={() => navigation.navigate('Home')}>Home</Button>
       <Button onPress={() => navigation.navigate('About')}> About</Button>
       <Button onPress={() => navigation.navigate('Contact')}>Contact</Button>
    </Card.Actions>
    </Card>
   
   
    </View> 
    <ScrollView>
    <View>
    
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe1')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food1.png')}/>
    </Card>

    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe2')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food2.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe3')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food3.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe4')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food4.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe5')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food5.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe6')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food6.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe7')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food7.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe8')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food8.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe9')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food9.png')}/>
    </Card>
    <Card TouchableOpacity onPress={() => navigation.navigate('Recipe10')} style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/food10.png')}/>
    </Card>
    
    
    </View>
    </ScrollView> 
    
</SafeAreaView>


    
   
    );
 };
 
 export const Food1 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    
    <Card>
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View >
       <Card style={Aboutstyle.card1}>
       
       <Card.Content  >
       
       <Title style={{ textAlign: 'center',}}>Baked Avocado Fries</Title>
       <Paragraph>Crunchy, soft, and creamy, these Baked Avocado Fries are addictive! No need for a deep frier here, these avocado fries are seasoned, breaded, and then baked to perfection. Perfect for entertaining or as a snack!</Paragraph>

       <Title style={{ textAlign: 'center',}}>Ingredients</Title>
<Paragraph>Ingredient Checklist{'\n'}2 large avocados{'\n'}1/2 lemon{'\n'}kosher salt and ground pepper to taste{'\n'}1/3 cup all-purpose flour whole wheat or oat flour works{'\n'}2 large eggs{'\n'}1/2 cup panko bread crumbs{'\n'}1 tsp garlic powder{'\n'}2 tsp smoked paprika{'\n'}cooking oil spray{'\n'}parsley</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
<Paragraph>{'\n'}1. Preheat the oven to 425F and line a large baking dish with parchment paper.{'\n'}2.Prepare your station: place the flour in a shallow dish, and whisk the eggs in a bowl. In a second dish, combine the breadcrumbs with seasonings.{'\n'}3.Cut the avocado into 1/2” thick wedges. Squeeze over fresh lemon juice and sprinkle with lemon zest, salt and pepper, to taste. Gently coat each piece with the lemon juice, to prevent it from browning.{'\n'}4.Dredge the avocado wedges in flour, then dip into the beaten eggs.{'\n'}5.Transfer to the bread crumb mixture and completely coat on all sides.{'\n'}6.Place the coated avocado fries on the prepared baking sheet and spray with cooking oil spray.{'\n'}7.Bake for 9-10 minutes, or until brown and crispy. </Paragraph>

  <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 273kcal | Carbohydrates: 24g | Protein: 8g | Fat: 18g | Saturated Fat: 3g | Polyunsaturated Fat: 3g | Monounsaturated Fat: 11g | Trans Fat: 1g | Cholesterol: 93mg | Sodium: 172mg | Potassium: 598mg | Fiber: 8g | Sugar: 2g | Vitamin A: 777IU | Vitamin C: 17mg | Calcium: 48mg | Iron: 2mg </Paragraph>

       
       </Card.Content>
       
       </Card>

   </View>  
   </ScrollView> 
    </View>
        
</SafeAreaView>
      
    );
 };


 export const Food2 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Chocolate and Peanut Butter Overnight Oats</Title>
       <Paragraph>Chocolate and peanut butter overnight oats are naturally creamy, rich in flavor, and so easy to make. Filled with healthy protein and fiber, this recipe for overnight oats with peanut butter and chocolate is incredibly filling and delicious!</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}Rolled oats{'\n'}Maple syrup or honey{'\n'}Chia seeds{'\n'}Peanut butter{'\n'}Cocoa powder{'\n'}Protein powder{'\n'}Dairy-free Milk{'\n'}Chocolate chips </Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.In a medium bowl, add the rolled oats, maple syrup or honey, chia seeds, nut butter, cocoa powder, protein powder, and whichever dairy-free milk you are using. {'\n'}2.Using a spatula or a spoon, mix all the ingredients together until they are combined.{'\n'}3.Next, add in the chocolate chips.{'\n'}4.Using two single-serve containers or jars, divide the mixture evenly. {'\n'}5.Please them in the fridge for at least 4 hours or overnight.{'\n'}6.Once ready, enjoy cold or warm it in the microwave. {'\n'}7.Add your favorite toppings like bananas, more chocolate chips, almond or peanut butter drizzle, coconut flakes, and so on. Enjoy. </Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 630kcal | Carbohydrates: 76g | Protein: 30g | Fat: 26g | Saturated Fat: 6g | Polyunsaturated Fat: 8g | Monounsaturated Fat: 7g | Trans Fat: 1g | Cholesterol: 27mg | Sodium: 134mg | Potassium: 766mg | Fiber: 14g | Sugar: 33g | Vitamin A: 790IU | Vitamin C: 13mg | Calcium: 503mg | Iron: 6mg </Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food3 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Air Fryer BBQ Cauliflower Wings</Title>
       <Paragraph>Air Fryer BBQ Cauliflower Wings will be your new favorite (secretly healthy) party appetizer! Crunchy on the outside and coated in sweet sticky BBQ sauce, they are decedent with far fewer calories. Make a batch to share or have them all to yourself.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}1 medium head cauliflower cut into florets{'\n'}3/4 cup buttermilk{'\n'}1 large egg{'\n'}1/2 cup all-purpose flour or oat flour{'\n'}1 tsp garlic powder{'\n'}1 tsp onion powder{'\n'}1/2 tsp kosher salt{'\n'}1 cup panko breadcrumbs{'\n'}1 1/2 cups BBQ sauce{'\n'}cooking oil spray </Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.Cut the cauliflower into bite-sized florets.{'\n'}2.In a large bowl, whisk the buttermilk together with the egg, flour, and seasonings.{'\n'}3.Place the cauliflower florets into the buttermilk mixture and stir to completely coat.{'\n'}4.Transfer each piece into the breadcrumbs and gently press to adhere on all sides; place into the air fryer basket.{'\n'}5.Meanwhile, preheat the air fryer to 390F.{'\n'}6.Spray the coated cauliflower from the air fryer with cooking oil spray.{'\n'}7.Air fry the cauliflower in two batches for 14-16 minutes, shaking the basket halfway.{'\n'}8.Meanwhile, add the BBQ sauce to a large bowl.{'\n'}9.Once the cauliflower is done air frying, transfer to the bowl with the BBQ sauce and toss to coat.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 350kcal | Carbohydrates: 63g | Protein: 15g | Fat: 4g | Saturated Fat: 2g | Polyunsaturated Fat: 1g | Monounsaturated Fat: 1g | Trans Fat: 1g | Cholesterol: 51mg | Sodium: 2186mg | Potassium: 617mg | Fiber: 4g | Sugar: 31g | Vitamin A: 142IU | Vitamin C: 69mg | Calcium: 123mg | Iron: 2mg </Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food4 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Baked Buffalo Chicken Breasts</Title>
       <Paragraph>Baked, buffalo chicken breasts are tender, juicy, and filled with savory spice. Made with a homemade, buffalo sauce marinade, you will love this healthy baked chicken recipe served with your favorite celery, blue cheese, and Ranch dressing.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}4 chicken breasts lightly pounded with tenderizer until evenly thick{'\n'}Buffalo Sauce{'\n'}1/4 cup Frank's hot sauce{'\n'}1/4 cup mayonnaise{'\n'}2 tablespoons honey or maple syrup{'\n'}2 teaspoons smoked paprika{'\n'}1 teaspoon garlic powder{'\n'}1 teaspoon onion powder{'\n'}1 teaspoon chili powder{'\n'}1 teaspoon Kosher salt{'\n'}Optional{'\n'}Celery sticks{'\n'}Blue cheese crumbles{'\n'}Ranch dressing{'\n'}Blue cheese dressing</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.In a medium bowl, whisk well all the buffalo sauce ingredients. Reserve about 2 spoonfuls of sauce to use as a glaze/dip, and refrigerate it.{'\n'}2.To the bowl with the buffalo sauce, add the chicken breast and stir it to completely coat.{'\n'}3.Allow the chicken to marinate over the counter for 30 minutes. {'\n'}4.Meanwhile, preheat your oven to 375F. Transfer the marinated chicken to an oven-safe dish.{'\n'}5.Bake for 25-28 minutes, or until the internal temperature reads 165F.{'\n'}6.Once the chicken is done transfer to a platter and brush with the reserved buffalo sauce.{'\n'}7.Allow it to sit for 10 minutes before slicing it.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Serving: 1serving | Calories: 393kcal | Carbohydrates: 10g | Protein: 49g | Fat: 17g | Saturated Fat: 3g | Polyunsaturated Fat: 7g | Monounsaturated Fat: 4g | Trans Fat: 1g | Cholesterol: 151mg | Sodium: 943mg | Potassium: 891mg | Fiber: 1g | Sugar: 9g | Vitamin A: 718IU | Vitamin C: 3mg | Calcium: 20mg | Iron: 1mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food5 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Shrimp Fried Rice</Title>
       <Paragraph>Quick, easy, and healthy, this Shrimp Fried Rice recipe couldn’t be any better! Skip the butter and extra oils, and go for this lighter version. It still tastes absolutely incredible with far fewer calories!</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}2 tablespoons olive oil{'\n'}1 lb medium raw shrimp peeled and deveined{'\n'}1 cup frozen peas and carrots *see notes{'\n'}1 teaspoon grated ginger{'\n'}1 teaspoon minced garlic{'\n'}4 eggs beaten{'\n'}3 cups rice cooked and cooled{'\n'}1 tablespoon soy sauce{'\n'}1 teaspoon salt{'\n'}1 teaspoon ground black pepper{'\n'}2 tablespoons green onion chopped</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.To a large skillet over medium heat, add oil. Once the oil is heated, add the shrimp and cook for 4-5 minutes until the shrimp is cooked through by flipping them frequently.Transfer the cooked shrimp to a plate and set them aside.{'\n'}2.To the same skillet add carrot and peas, ginger, and garlic. Cook for 2 minutes until the veggies soften a bit.{'\n'}3.Push the veggies on one side of the skillet and add the beaten eggs. Cook the eggs to scramble.{'\n'}4.Transfer the shrimp back to the skillet along with the cooked rice. Stir in the soy sauce, salt, and pepper. Mix the rice, eggs, and veggies all together. Cook on low heat for 3-5 minutes by stirring the rice often.{'\n'}5.Finally, add the green onions and turn off the heat. Transfer the shrimp fried rice to a bowl and serve.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Serving: 1g | Calories: 738kcal | Carbohydrates: 118g | Protein: 33g | Fat: 13g | Saturated Fat: 3g | Polyunsaturated Fat: 2g | Monounsaturated Fat: 7g | Trans Fat: 1g | Cholesterol: 307mg | Sodium: 1573mg | Potassium: 452mg | Fiber: 3g | Sugar: 1g | Vitamin A: 3798IU | Vitamin C: 5mg | Calcium: 141mg | Iron: 3mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food6 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}> Three Bean Salad</Title>
       <Paragraph>This easy, fresh three bean salad is full of protein and bold refreshing flavors. 3 beans such as kidney beans, black beans, and cannellini beans are tossed together with fresh onion, celery, and red wine vinegar to create the best healthy flavors without the refined sugar.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}Bean Salad Dressing{'\n'}1/4 cup olive oil{'\n'}2 tablespoons red wine vinegar{'\n'}1 tablespoon lemon juice fresh{'\n'}1 teaspoon honey{'\n'}1 teaspoon garlic minced{'\n'}1/2 teaspoon Italian seasoning dried{'\n'}1/2 teaspoon salt Kosher{'\n'}1/2 teaspoon ground black pepper Kosher{'\n'}3 Bean Salad{'\n'}15 ounces canellini beans one can{'\n'}15 ounces black beans one can{'\n'}15 ounces kidney beans one can{'\n'}3/4 cup celery chopped{'\n'}1/2 red onion medium; chopped{'\n'}1/3 cup fresh cilantro chopped</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.In a small bowl, combine all of the salad dressing ingredients with a fork.Whisk until well-mixed.{'\n'}2.Next, in a large bowl, combine all of the beans along with the celery, red onion, and cilantro.{'\n'}3.Pour the dressing over the beans and toss them well until coated.{'\n'}4.Transfer the salad to a bowl and serve.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Serving: 1serving | Calories: 490kcal | Carbohydrates: 70g | Protein: 25g | Fat: 15g | Saturated Fat: 2g | Polyunsaturated Fat: 2g | Monounsaturated Fat: 10g | Sodium: 540mg | Potassium: 899mg | Fiber: 23g | Sugar: 3g | Vitamin A: 188IU | Vitamin C: 5mg | Calcium: 141mg | Iron: 8mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food7 = ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Spinach and Mushroom Pasta</Title>
       <Paragraph>We really love how simple and easy it is to make this Spinach and Mushroom Pasta recipe. With just a handful of pantry staple ingredients and your favorite pasta, you can make this creamy vegan pasta recipe in just 30 minutes.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}8 oz farfalle pasta or any pasta of choice{'\n'}kosher salt and ground pepper to taste{'\n'}1 tbsp olive oil or avocado oil{'\n'}10 oz button mushrooms sliced{'\n'}3 oz sun-dried tomatoes thinly sliced{'\n'}6 oz spinach coarsely chopped{'\n'}3-4 garlic cloves minced{'\n'}1 cup almond milk or any milk of choice{'\n'}1 tbsp GF flour or any other flour{'\n'}1/4 cup minced parsley</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.Cook the pasta in salted water according to the package direction. Drain and set aside.{'\n'}2.Meanwhile, in a large skillet, heat the olive oil.{'\n'}3.Sauté the mushrooms and sun-dried tomatoes, for 3-4 minutes, stirring occasionally.{'\n'}4.Add in the spinach and garlic and continue to sauté until wilted.{'\n'}5.In a small bowl whisk the almond milk and flour until no visible lumps.{'\n'}6.Pour the milk mixture over the sautéed veggies and stir to combine. The sauce should begin to thicken almost immediately.{'\n'}7.While the pan is still on the heat, stir in the cooked pasta and parsley.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 341kcal | Carbohydrates: 61g | Protein: 15g | Fat: 6g | Saturated Fat: 1g | Polyunsaturated Fat: 2g | Monounsaturated Fat: 3g | Sodium: 220mg | Potassium: 1348mg | Fiber: 7g | Sugar: 11g | Vitamin A: 4489IU | Vitamin C: 27mg | Calcium: 165mg | Iron: 5mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food8= ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}>Chicken Fettuccine Alfredo</Title>
       <Paragraph>This Chicken Fettuccine Alfredo recipe is so creamy, luscious, and full of flavor. Loaded with chicken breast and the perfect healthy pasta dinner recipe the whole family will enjoy.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}8 oz fettuccine pasta GF if needed{'\n'}2 chicken breasts cut in half lengthwise (6 oz each){'\n'}Kosher salt & ground pepper to taste{'\n'}1 tbsp olive oil{'\n'}1 cup milk of choice{'\n'}1/2 tbsp GF flour or cornstarch{'\n'}2 large cloves garlic minced{'\n'}4 oz cream cheese softened or at room temp{'\n'}1/2 cup chicken broth{'\n'}1 cup Parmesan cheese grated{'\n'}Fresh parsley chopped – to garnish</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.Bring a large pot of salted water to the boil, and cook the pasta according to package directions to al-dente.{'\n'}2.Season the chicken breast with salt and pepper on both sides.
{'\n'}3.Preheat a large frying pan over medium heat and add in the oil. Cook chicken for 6-8 minutes per side, or until cooked through and internal temp reaches 165F.{'\n'}4.Set aside and allow the chicken to rest until you make the sauce, then slice it.{'\n'}5.In a small bowl whisk the milk and flour until no visible lumps.{'\n'}6.To the same skillet over medium heat, add garlic and cook for no more than 1 minute. Stir in the milk mixture together with cream cheese and broth. Whisk continuously until the sauce is smooth and bubbly, 2-3 minutes. Add the parmesan cheese and allow it to cook for another 1-2 minutes.{'\n'}7.Once the sauce has thickened stir in the sliced chicken, cooked pasta, parmesan and parsley. Season with salt and pepper and remove from heat.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 600kcal | Carbohydrates: 49g | Protein: 45g | Fat: 24g | Saturated Fat: 11g | Trans Fat: 1g | Cholesterol: 123mg | Sodium: 661mg | Potassium: 727mg | Fiber: 2g | Sugar: 6g | Vitamin A: 726IU | Vitamin C: 2mg | Calcium: 420mg | Iron: 2mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food9= ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
       

  <Title style={{ textAlign: 'center',}}> Crispy Italian Baked Chicken Thighs </Title>
       <Paragraph>This tender and crispy, Italian baked chicken thighs recipe is incredibly easy and made in the oven in about 35 minutes! Bone-in chicken thighs are marinated with garlic cloves, olive oil, Italian seasoning, and fresh lemon juice for the best bold flavors.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}2 pounds chicken thighs bone-in; skin-on{'\n'}3 tablespoons olive oil{'\n'}3-4 garlic cloves{'\n'}2 teaspoons Italian seasoning{'\n'}Kosher salt to taste{'\n'}Kosher pepper to taste{'\n'}1 lemon juice and zest{'\n'}2/3cups low-sodium chicken stock{'\n'}1/4 cup fresh parsley chopped{'\n'}lemon slices to garnish; optional</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.Place all the ingredients, except for the stock and parsley, in a Ziploc bag. Stir well through the bag to coat the chicken thighs.{'\n'}2.Marinade the chicken thighs for one hour or overnight.{'\n'}3.Preheat the oven to 425°F.{'\n'}4.Preheat a large oven-safe skillet over medium-high heat. Sear the chicken until golden brown on both sides.{'\n'}5.Pour over the stock and stir a bit to release those brown bits from the bottom of the pan.{'\n'}6.Transfer to the preheated oven.{'\n'}7.Bake for 30-35 minutes, or until the internal temperature reads 165°F.{'\n'}8.Garnish with chopped parsley and lemon slices, if desired.</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Serving: 1serving | Calories: 407kcal | Carbohydrates: 3g | Protein: 26g | Fat: 32g | Saturated Fat: 8g | Polyunsaturated Fat: 6g | Monounsaturated Fat: 16g | Trans Fat: 1g | Cholesterol: 148mg | Sodium: 127mg | Potassium: 386mg | Fiber: 1g | Sugar: 1g | Vitamin A: 344IU | Vitamin C: 13mg | Calcium: 35mg | Iron: 2mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };

 export const Food10= ({navigation}) => {
    return(
<SafeAreaView style={Aboutstyle.content}>
    <View>
    <Text style={Aboutstyle.titleText}>{"About Page"}</Text>
    <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Image style={{width:35,height:35,marginRight: 5}}  source={require('./asset/blacklogo.png')}></Image>
       <Button onPress={() => navigation.navigate('Recipescreen')}>Back</Button>     
       </Card.Actions>
       </Card>
       <ScrollView>
   <View>
       <Card style={Aboutstyle.card1}>
       <Card.Content>
   
  <Title style={{ textAlign: 'center',}}>Indian Chicken Curry</Title>
       <Paragraph>This Indian Chicken Curry Recipe is packed to the brim with flavor. Perfect for a no-fuss dinner anytime, it’s ready in less than an hour and so easy to throw together. Everyone will be asking for seconds, it’s so delicious!</Paragraph>

 <Title style={{ textAlign: 'center',}}>Ingredients</Title>
       <Paragraph>{'\n'}For the chicken:{'\n'}1 and 1/2 lb chicken breasts cut into bite-sized pieces{'\n'}1 teaspoon chili powder{'\n'}1 teaspoon salt{'\n'}1/2 teaspoon turmeric powder{'\n'}2 tablespoons olive oil{'\n'}For the curry:{'\n'}1 tablespoon olive oil{'\n'}1 medium yellow onion diced{'\n'}1 teaspoon garlic minced{'\n'}2 tablespoons tomato paste{'\n'}1 and 1/2 tablespoon curry powder{'\n'}1 teaspoon salt{'\n'}13.5 oz coconut milk one can{'\n'}1 tablespoon cilantro chopped{'\n'}Lemon wedges to garnish</Paragraph>

 <Title style={{ textAlign: 'center',}}>Steps:</Title>
       <Paragraph>{'\n'}1.In a medium bowl combine chicken pieces with chili powder, salt, and turmeric powder. Coat them well.{'\n'}2.Heat a 4 qt dutch oven on a medium flame; add olive oil followed by chicken and sear them for 4-5 minutes. Transfer the chicken to a bowl and set it aside.{'\n'}3.Add the remaining oil to the same pot and add the onion and garlic. Saute for 3-5minutes until the onions turn translucent.{'\n'}4.Add in the tomato paste, curry powder, and salt. Saute for a couple of minutes and stir in the coconut milk.{'\n'}5.Once the curry starts bubbling add the chicken back to the pot and allow the curry to simmer for 15-20 minutes on a low flame.{'\n'}6.Once the chicken is cooked through, add in the chopped cilantro and turn off the flame.{'\n'}7.Serve the chicken curry with a bowl of rice to enjoy!</Paragraph>

 <Title style={{ textAlign: 'center',}}>Nutrition:</Title>
       <Paragraph>Calories: 504kcal | Carbohydrates: 9g | Protein: 39g | Fat: 36g | Saturated Fat: 21g | Polyunsaturated Fat: 2g | Monounsaturated Fat: 10g | Trans Fat: 1g | Cholesterol: 109mg | Sodium: 1447mg | Potassium: 1016mg | Fiber: 2g | Sugar: 2g | Vitamin A: 351IU | Vitamin C: 7mg | Calcium: 50mg | Iron: 5mg</Paragraph>

 </Card.Content>
       </Card>

   </View>   
   </ScrollView>
    </View>
        
</SafeAreaView>
      
    );
 };