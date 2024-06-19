import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput ,FlatList} from 'react-native';
import JobCard from '../components/jobCard';

const jobData = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', icon:require('../assets/fb.png') },
  { id: '2', title: 'Data Analyst', company: 'Google',icon:require('../assets/google.png') },
  { id: '3', title: 'Scrum Master', company: 'Morgan Stanley',icon:require('../assets/icon.png') },
 
];

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title1}>{name}</Text>
          <Text style={styles.subtitle}>{email}</Text>
        </View>
        <Image source={require('../assets/Ellipse.png')} style={styles.imagehome} />
      </View>


      <View style={styles.searchRow}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search a job or position"
      />

      
        <Image source={require('../assets/filter.5.png')} style={styles.searchImage} />
        
      </View>

    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={{alignContent:"center",color:"gray",marginTop:50,}}>See all</Text>
      </View> 
      <FlatList
          data={jobData}
          horizontal
          renderItem={({ item }) => (
           <View style={styles.categoryItem}>

            <View style={{flexDirection:"row",gap:20,}}>
              <View style={{backgroundColor:"white",borderRadius:20,height:50,width:50,}}>
                <Image source={item.icon} style={styles.icon}/>
                </View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={{color:"white"}}>{item.company}</Text>
                </View>
           </View>

          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{color:"white"}}>$180,00</Text>
            <Text style={{color:"white"}}> Accra,Ghana</Text>
          </View>
        </View>

            
          )}
          
          
        />

      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={{alignContent:"center",color:"gray", marginTop:50,}}>See all</Text>
      </View> 

      <View style={styles.cardContainer}>

        <View style={{flexDirection:'row',gap:20,}}>
          <Image source={require('../assets/bking.png')} style={{padding:10}}/>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontWeight:"bold"}}>Jr Executive</Text>
        <Text style={{marginTop:5,}}>Burger King</Text>
        </View>
        </View>

        <View style={{flexDirection:"column"}}>
        <Text style={{fontWeight:"bold"}}>$96,000/y</Text>
        <Text style={{marginTop:5,}}>Los Angeles,US</Text>
        </View>
      </View>


      <View style={styles.cardContainer1}>

        <View style={{flexDirection:'row',gap:20,}}>
          <Image source={require('../assets/bbd.png')} style={{padding:10}}/>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontWeight:"bold"}}>Product Manager</Text>
        <Text style={{marginTop:5,}}>Beats</Text>
        </View>
        </View>

        <View style={{flexDirection:"column"}}>
        <Text style={{fontWeight:"bold"}}>$84,000/y</Text>
        <Text style={{marginTop:5,}}> Florida,US</Text>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"black",
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  imagehome: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBox: {
    height: 40,
    width:450,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor:"lightgray",
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop:20,
  },
  searchImage: {
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 8,
    fontWeight:"bold",
    marginTop:50,
  },
  cardContainer: {
    flexDirection: 'row',
    height:70,
    width:500,
    padding:15,
    backgroundColor:'lightgray',
    borderRadius:16,
    justifyContent: 'space-between',
    alignContent:"center",
  },
  cardContainer1: {
    flexDirection: 'row',
    height:70,
    width:500,
    padding:15,
    backgroundColor:'lightgray',
    borderRadius:16,
    justifyContent: 'space-between',
    alignContent:"center",
    marginTop:10,
  },
   categoryItem: {
      alignItems: 'right',
      padding: 15 ,
      backgroundColor: '#007fff',
      borderRadius: 8,
      marginRight: 16,
      width: 300,
      height: 200,
      flexDirection:"column",
      gap: 20,
      padding:20,
      justifyContent:"space-between",
      
    },
    icon:{
      padding:10,
     margin:15,
    }
    ,
    title: {
      fontSize: 16,
      alignContent: 'left',
      color:'white',
      fontWeight:"bold"
      
    },
 
    
  
});
