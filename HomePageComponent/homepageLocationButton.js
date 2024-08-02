import { StyleSheet, TouchableOpacity, Text } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import Icons from "react-native-vector-icons/FontAwesome6"

const HomePageLocationButton = () => {
    return (
        <TouchableOpacity style={styles.mainButton}>
            <Icons name="location-dot" color={"white"} size={20}/>
            <Text style={{fontWeight: "bold", color: "white"}}>Kosi Kalan </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainButton: {
        flexDirection: "row",
        backgroundColor: "#1b3c87",
        width: wp("59%"),
        height: hp("5%"),
        alignItems: "center",
        padding: wp("2%"),
        gap: wp("2%")

    }
})

export default HomePageLocationButton