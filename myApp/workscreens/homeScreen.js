import React from "react";
import { View,Text,StyleSheet,FlatList,Image, ScrollView } from "react-native";
import JobItem from "../components/jobtask";
import PopularJobs from "../components/jobCard";


const jobDatas= [
    { id: '1', title: 'Exercise', icon: require('../assets/icon.png') },
    { id: '2', title: 'Study', icon: require('../assets/icon.png') },
    { id: '3', title: 'Code', icon: require('../assets/icon.png') },
    { id: '4', title: 'Cook', icon: require('../assets/icon.png') },
    { id: '5', title: 'Dress', icon: require('../assets/icon.png') },
    { id: '6', title: 'Dance', icon: require('../assets/icon.png') },
    { id: '7', title: 'Sing', icon: require('../assets/icon.png') },
    { id: '8', title: 'Eat', icon: require('../assets/icon.png') },
  ];

  const HomeScreen = ()=>{
    return(
      
      <View>
          <View >
            
            <Text>Eric Atsu</Text>
          </View>

          <View>
            <Text>eric@gmail.com</Text>
            <Image sou/>
          </View>
        <FlatList
        data={jobDatas}
        horizontal
        renderItem={({item})=>(

          <View style={styles.jobItem} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.taskCountText}>  12 tasks today</Text>
            <Image source={item.icon} style={styles.icon} />
            
          </View>
        )}
        keyExtractor={(item)=> item.id}
        />
        <PopularJobs/>
      </View>
      
    );
  };

  const styles= StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    jobItem: {
      alignItems: 'right',
      padding: 15 ,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      marginRight: 16,
      width: 186,
      height: 192,
      justifyContent: 'space-between',
    },
    icon: {
      width: 151,
      height: 132,
    },
    title: {
      fontSize: 16,
      alignContent: 'left',
      fontWeight:'bold',
    },

  });
  
  export default HomeScreen;