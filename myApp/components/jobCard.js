import React from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';
import JobItem from '../components/jobtask.js';

const jobs = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Study Math' },
    { id: '3', title: 'Code React App' },
    { id: '4', title: 'Cook Dinner' },
    { id: '5', title: 'Read Book' },
    { id: '6', title: 'Plan Trip' },
    { id: '7', title: 'Meditate' },
    { id: '8', title: 'Work on Project' },
    { id: '9', title: 'Attend Meeting' },
    { id: '10', title: 'Write Report' },
    { id: '11', title: 'Grocery Shopping' },
    { id: '12', title: 'Clean House' },
    { id: '13', title: 'Exercise at Gym' },
    { id: '14', title: 'Water Plants' },
    { id: '15', title: 'Practice Piano' },
  ];

const PopularJobs = ()=>{
    return(
        <FlatList
        data={jobs}
        renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        keyExtractor={(item)=>item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    taskItem: {
      padding: 16,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      marginBottom: 16,
      alignItems: 'left',
      justifyContent: 'center',
      height:128,
      width:510,
      marginTop:10,
    },
    title: {
      fontSize: 24,
      fontWeight:'bold',
    },
  });

export default PopularJobs;
  