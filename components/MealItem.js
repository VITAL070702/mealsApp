import { View,Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import{useNavigation} from '@react-navigation/native'
import MealDetails from "./MealDetails"

function MealItem({id, title,imageUrl,duration, complexity, affordability}){

    console.log('title',title)
    console.log('imageUrl',imageUrl)

    const navigation= useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{MealId: id})
    }
    return(
        <View style={style.mealItem}>
            <Pressable
            android_ripple={{color:'#ccc'}}
            style={({pressed})=>(pressed ? style.buttonPressed: null)}
            onPress={selectMealItemHandler}>

            
        </View>
        <View>
            <image
            source={{uri:imageUrl}}
            style={StyleSheet.title}
            />
            <Text style={StyleSheet.title}>
                {title}
            </Text>

        </View>
    )
}
 export default MealItem
  
  const styles= StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS=== 'android'? 'hidden': 'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOddset:{width:0, height:2},
        shadowRadius:8,
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
  })