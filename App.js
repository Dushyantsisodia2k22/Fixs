import react from "react"
import {} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./Screens/homePage";
import CartPage from "./Screens/cartPage";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home Screen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name= "cartPage" component={CartPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App