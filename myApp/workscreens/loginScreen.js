import React,{useState} from "react";
import { View,Text,TextInput,Button,StyleSheet } from "react-native";

// Entry point of the project

export default function LoginScreen({navigation}){
    // Making use of usestate to track and handle our events in the login page 

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');

    // our trigger function to be triggered when the button is pressed
    const handleclick = ()=>{
        navigation.navigate("home",{name,email});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
            <Text >Welcome back </Text>
            <Text>Let's log in. Apply to jobs!</Text>
            <TextInput 
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
            <Button title="Login" onPress={handleclick}>Log in</Button>
            <Text style={styles.continue}> or continue with</Text>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'left',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    continue:{
      justifyContent:"center",
      textAlign:"center"
    },

})