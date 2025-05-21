import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'

import CategoriesScreen from "./screens/CategoriesScreen";
 import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
 import MealsOverviewScreen from './screens/MealsOverviewScreen';
 import MealDetailScreen from './screens/MealDetailScreen';
 const Stack = createStackNavigator();


export default function App() {
  
  return (
   <>
   <StatusBar style ='dark'/>
   <NavigationContainer>
    <Stack.Navigator
    screenOptins={{
      headerStyles:{ backgroundColor:'#987070'},
      headerTintColor:'white',
      contentStyle:{backgroundColor:'#F1E5D1'}
    }}
    >
      <Stack.Screen
      name="MealsCategories"
      component={categoriesScreen}
      />
      <Stack.Screen
      name="MealsOverview"
      component={MealsOverviewScreen}
      optins={{
        title:'All categories',
        headerTintColor:'white',
        contentStyle:{ backgroundColor:'#C39898'}
      }}
      />
      <Stack.Screen name="MealDetail"
      component={MealDetailScreen}
      />
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
