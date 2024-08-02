import React from "react";
import { ScrollView, StatusBar, StyleSheet, View, Text} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CartIcons from "react-native-vector-icons/FontAwesome"

import Circle from "../shapes/circle";
import ServiceButton from "../HomePageComponent/serviceButton";
import HomePageLocationButton from "../HomePageComponent/homepageLocationButton";

const HomeScreen = ({navigation}) => {
  return (

   

    <View style={styles.mainContainer}>



      <StatusBar backgroundColor={"black"} />

      {/*Header Section*/}
      <View style={styles.headerSection}>
        <View style={{flexDirection: "row", gap: wp("3%")}}>
          <Circle />
          <HomePageLocationButton/>
        </View>
        <View >

          <CartIcons name="shopping-cart" color={"white"} size={35}  onPress={() => navigation.navigate("cartPage") }/>
        </View>
      </View>

      {/*Scroll View Section*/}
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>

            {/*Slogan text View*/}
            <View style={styles.textViewContainer}>
              <Text style={styles.sloganText}>
                Book with Ease,
              </Text>
              <Text style={styles.sloganText}>
                Service with Excellence
              </Text>
            </View>

            <View style={styles.offerSlider}>
             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: "row"}}>
             <View style={{backgroundColor: "white", height: hp("25%"), width: wp("80%"),borderRadius: 10, margin: 5}}/>
             <View style={{backgroundColor: "white", height: hp("25%"), width: wp("80%"),borderRadius: 10,margin: 5}}/>
             <View style={{backgroundColor: "white", height: hp("25%"), width: wp("80%"),borderRadius: 10,margin: 5}}/>
             </ScrollView>
          
            </View>

            <View style={styles.Service_Heading_1}>
              <Text style={{color: "white", fontSize: hp("3%"), fontWeight: "bold"}}>
                Home Appliance Service
              </Text>
            </View>

            <View style={styles.innerContainer_1}>

              <ServiceButton text={"Air Conditioner"} imageUrl={require("../assets/HomeApplinaceImage/air-conditioner.png")}/>
              <ServiceButton text={"Air Cooler"} imageUrl={require("../assets/HomeApplinaceImage/air-cooler (2).png")}/>
              <ServiceButton text={"Water Purifier"} imageUrl={require("../assets/HomeApplinaceImage/water-filter.png")}/>
              <ServiceButton text={"Washing Machine"} imageUrl={require("../assets/HomeApplinaceImage/washing-machine.png")}/>
              <ServiceButton text={"Television"} imageUrl={require("../assets/HomeApplinaceImage/television.png")}/>
              <ServiceButton text={"Fan"} imageUrl={require("../assets/HomeApplinaceImage/fan.png")}/>
              <ServiceButton text={"Chinmey"} imageUrl={require("../assets/HomeApplinaceImage/chinmey (2).png")}/>
              <ServiceButton text={"Water Geyser"} imageUrl={require("../assets/HomeApplinaceImage/geyser.png")}/>
              <ServiceButton text={"Refrigerator"} imageUrl={require("../assets/HomeApplinaceImage/refrigerator.png")}/>
              <ServiceButton text={"Microwave"} imageUrl={require("../assets/HomeApplinaceImage/oven.png")}/>
              <ServiceButton text={"Mixer Blender"} imageUrl={require("../assets/HomeApplinaceImage/blender.png")}/>
              <ServiceButton text={"Home Invertor"} imageUrl={require("../assets/HomeApplinaceImage/invertor.png")}/>

            </View>

            <View style={styles.Service_Heading_1}>
              <Text style={{color: "white", fontSize: hp("3%"), fontWeight: "bold"}}>
                Smart Device Service
              </Text>
            </View>

            <View style={styles.innerContainer_2}>

              <ServiceButton text={"Computer"} imageUrl={require("../assets/HomeApplinaceImage/computer.png")}/>
              <ServiceButton text={"Laptop"} imageUrl={require("../assets/HomeApplinaceImage/laptop.png")}/>
              <ServiceButton text={"Smart Phone"} imageUrl={require("../assets/HomeApplinaceImage/Untitled design (1).png")}/>
              <ServiceButton text={"Tablet"} imageUrl={require("../assets/HomeApplinaceImage/Untitled design (2).png")}/>
              <ServiceButton text={"Printer"} imageUrl={require("../assets/HomeApplinaceImage/Untitled design (3).png")}/>
              <ServiceButton text={"CCTV Camera"} imageUrl={require("../assets/HomeApplinaceImage/cctv.png")}/>
              
            </View>

            <View style={styles.Service_Heading_1}>
              <Text style={{color: "white", fontSize: hp("3%"), fontWeight: "bold"}}>
                Home Service
              </Text>
            </View>

            <View style={styles.innerContainer_3}>

              <ServiceButton text={"Plumber"} imageUrl={require("../assets/HomeApplinaceImage/plumber.png")}/>
              <ServiceButton text={"Electrician"} imageUrl={require("../assets/HomeApplinaceImage/electrician.png")}/>
              <ServiceButton text={"Carpenter"} imageUrl={require("../assets/HomeApplinaceImage/carpenter.png")}/>
             
            </View>

            
          </View>


        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1b3c87"
  },
  headerSection: {
    flexDirection: "row",
    width: wp("100%"),
    height: hp("7%"),
    backgroundColor: "#1b3c87",
    justifyContent: "space-between", // Space between left and right components
    alignItems: "center",
    padding: 10,
    marginBottom: 15
  },

  scrollViewContainer: {
    flex: 1,
  },

  textViewContainer: {
    height: hp("15%"),
    width: wp("92%"),
    backgroundColor: "#1b3c87",
    marginBottom: 10
  },

  sloganText: {
    color: "white",
    fontSize: hp("4.06%"),
    fontWeight: "bold",
   
    },

    offerSlider: {
   
      
      flexDirection : "row",
      height: hp("27%"),
      width: wp("100%"),
      backgroundColor: "#1b3c87",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      marginBottom: hp("2%")
    
    },
  

  Service_Heading_1 : {
    height: hp("5%"),
    width: wp("92%"),
    backgroundColor: "#1b3c87",
    justifyContent: "center",
    padding: 5,
    marginBottom: hp("1%"),
    
  },

  innerContainer_1: {
   
    flexWrap: "wrap",
    flexDirection : "row",
    height: hp("57.5%"),
    width: wp("92%"),
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    marginBottom: hp("2%")
  
  },

  innerContainer_2: {
   
    flexWrap: "wrap",
    flexDirection : "row",
    height: hp("29%"),
    width: wp("92%"),
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    marginBottom: hp("2%")
  
  },

  innerContainer_3: {
   
    flexWrap: "wrap",
    flexDirection : "row",
    height: hp("15%"),
    width: wp("92%"),
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    marginBottom: hp("2%")
  
  }
});

export default HomeScreen;
