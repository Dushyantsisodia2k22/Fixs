import { StyleSheet, View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CartPage = ({}) => {
    return (
        <View>
            <Text>Cart Page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    }
})

export default CartPage