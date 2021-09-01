import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'



const List = ({item}) => {
    console.log('item',item)
    return (
        <View  elevation={9}style={styles.card}>
        <Image source={item.img}  
        style={{width:150,height:170,marginBottom:10,bottom:7,borderRadius:12}} />
        <Text style={{fontSize:15}}>{item.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <Icon name='shopping-cart' color='black' size={25} style={{paddingRight:40}}/>
        <Icon name='search' color='black' size={25}/>
        </View>
       </View>
    )
}

export default List

const styles = StyleSheet.create({
    card:{
        width:140,
        height:250,
        padding:5,
        margin:10,
       
        borderColor:'#fff',
        alignItems:'center',
        borderRadius:16,
        backgroundColor:'#fff',
       
        
    }

})
