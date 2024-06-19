import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

const CustomButton=({onPress,title})=>{
    return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity> 
    );
    };

const styles = StyleSheet.create({
    button: {
      backgroundColor:'#356899',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width:480,
      marginLeft:20,
      marginRight:20,
      justifyContent:"center"
      
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
  export default CustomButton;