import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import CustomButton from '../components/Custom';  


export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleclick = () => {
    console.log('Navigating to Home screen with', { name, email });
    navigation.navigate('home', { name, email });
  };
  

  return (
    <View style={styles.root}>
      
     

      <View style={styles.topgroup}>
        <Text style={styles.title}>Jobizz</Text>

        <View style={{flexDirection:"row",}}>
        <Text style={styles.welcome}>Welcome back</Text>
        <Image source={require('../assets/waaavy.png')} style={styles.emoji}/>
        </View>

        <Text>Let's log in. Apply to jobs!</Text>
      </View>

      <View style={styles.container}>
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
      </View>

      

      <CustomButton title="Log in" onPress={handleclick} />

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/g56.png')} style={styles.image} />
        <Image source={require('../assets/g55.png')} style={styles.image} />
        <Image source={require('../assets/g54.png')} style={styles.image} />
      </View>

      <View style={{justifyContent:"center",flexDirection:"row",}}>
        <Text>Haven't an account ?</Text>
        <Text style={{color:"#356899"}}>Register</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
  container: {
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 27,
    marginBottom: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#356899',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  topgroup: {
    margin: 20,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 50,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
    
  },
  imageContainer: {
    flexDirection: 'row',
    Gap: 50,
    marginVertical: 20,
    justifyContent:'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  emoji:{
    height:50,
    width:50,
    justifyContent:"center"
  }
});
