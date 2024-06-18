import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const JobItem =({task})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.category}>{task.category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      title: {
        fontSize: 16,
      },
      category: {
        fontSize: 12,
        color: '#666',
      },
    
});

export default JobItem;