import { StyleSheet, View } from "react-native"

const Circle = () => {
    return (
        <View style={styles.outerCircle}>
            
        </View>
    )
}

const styles = StyleSheet.create({

    outerCircle: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: "white",
        
    }
})

export default Circle