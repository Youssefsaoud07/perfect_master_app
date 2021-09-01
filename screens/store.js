import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import List from '../components/List';

const data =[
    {
        key:1,
        name:'nike air force',
        img:require('../assets/images/s2.jpg'),
        price:130,
        descreption:'Lorem ipsium',
        size:'40,41,42,43'

    },
    {
        key:2,
        name:'nike air force',
        img:require('../assets/images/s3.jpg'),
        price:130,
        descreption:'Lorem ipsium',
        size:'40,41,42,43'

    },
    {
        key:3,
        name:'nike air force',
        img:require('../assets/images/s4.jpg'),
        price:130,
        descreption:'Lorem ipsium',
        size:'40,41,42,43'

    },
    {
        key:4,
        name:'nike air force',
        img:require('../assets/images/s5.jpg'),
        price:130,
        descreption:'Lorem ipsium',
        size:'40,41,42,43'

    },
    {
        key:5,
        name:'nike air force',
        img:require('../assets/images/s6.jpg'),
        price:130,
        descreption:'Lorem ipsium',
        size:'40,41,42,43'

    }
]

const Store = () => {
    return (
        <ScrollView style={{flex: 1}} >
              <Image source={require('../assets/images/shop.jpg')} style={{ 
            resizeMode: 'cover', 
             borderRadius:14,position:'relative',margin:5,marginTop:40,width:380,height:220}} />
           
                <View style={{position:'absolute',padding:30,marginTop:40}}>
               <TouchableOpacity >

             <Icon name='bars' color='#fff' size={25}/>
             </TouchableOpacity>
             </View>
             <View style={{right:140,top:200,position:'absolute'}}>
             <Text style={{fontSize:19,fontWeight:'bold',color:'#fff'}}>Running Shoes</Text>
             </View>
             <View style={{position:'absolute',left:270,padding:70}}>
             <TouchableOpacity>
            <Icon name='shopping-cart' color='#fff' size={25}/>
            </TouchableOpacity>
            </View>
           
         
         <View style={{backgroundColor:'#fff'}}>
         
         <FlatList style={{padding:40,right:10}}
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (<List
                        item={item}


                    />)}
                   

                />
                </View>

        </ScrollView>
    )
}

export default Store

const styles = StyleSheet.create({
header:{
    width:390,
    height:80,
    backgroundColor:'#fff',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingTop:50,
    paddingBottom:50,
    paddingLeft:30,
    paddingRight:20,
    position:'absolute'
    
    
},
body:{
   
    height:50,
    backgroundColor:'#ffffff',
    marginTop:5,
    alignItems:'center'
},
text: {
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#D659EC',
    
    fontWeight:'bold'
    
  },
  card:{
      width:200,
      height:200,
      padding:5,
      marginLeft:30,
      borderWidth:1,
      borderColor:'gray',
      alignItems:'center',
      borderRadius:16,
      backgroundColor:'#EEE7EF'
      
  }


})
