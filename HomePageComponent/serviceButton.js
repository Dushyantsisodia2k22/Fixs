// import { StyleSheet,Text, TouchableOpacity,Image } from "react-native"
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

// const ServiceButton = ({text,imageUrl}) => {
//     return (
//         <TouchableOpacity style={style.innerButton}>
//             <Image source={imageUrl} style={{width: wp("16.5%"), height: hp("7"), marginBottom: 10}} />
//             <Text style={{fontWeight: "400"}}>{text}</Text>
//         </TouchableOpacity>
//     )
// }

// const style = StyleSheet.create({
//     innerButton: {
//         justifyContent: "center",
//         alignItems: "center",
//         width: wp("27%"),
//         height: hp("13%"),
//         backgroundColor: "white",
//         borderRadius: 10,
//         margin: 5,
//     }
// })

// export default ServiceButton


import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ServiceButton = ({ text, imageUrl }) => {
  return (
    <TouchableOpacity style={styles.innerButton}>
      <Image
        source={imageUrl}
        style={styles.image}
        resizeMode="contain" // Ensure image scaling is handled
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  innerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('27.6%'),
    height: hp('13%'),
    backgroundColor: 'white',
    borderRadius: 10,
    margin: wp('1%'), // Use width percentage for margin
  },
  image: {
    width: wp('16.5%'),
    height: hp('7.1%'),
    marginBottom: hp('1%'), // Use height percentage for margin
  },
  text: {
    fontWeight: '400',
    fontSize: wp('3.5%'), // Ensure text size is responsive
  },
});

export default ServiceButton;
