import React from 'react'
import { StyleSheet,SafeAreaView, Text, View,Image, TouchableOpacity, TextInput ,CheckBox} from 'react-native'
import { BlurView } from 'expo-blur';
import GradientButton from "react-native-gradient-buttons";
const LoginScreen = () => {
    return (
        <SafeAreaView style={{flex:1 ,alignItems:'center',backgroundColor:'#E4EAEC'}}>
            <Image source={require('../assets/images/background.png')} style={{ 
            resizeMode: 'cover', 
             borderRadius:14,position:'relative',margin:39,width:380,height:260}} />
            <Text style={{color:'#fff', fontWeight:'bold',fontSize:24,position:'absolute',top:80}}>Welcome</Text>
            <BlurView intensity={90} tint="light" style={styles.blurContainer}>
            {/* <View style={{width:300,height:500,backgroundColor:'pink',position:'absolute',marginTop:200}}> */}
            <Text style={{color:'black',fontSize:16,position:'absolute',marginTop:20}}>SignIn with</Text>
            <View style={{marginTop:50,flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{width:50,height:50,borderRadius:10,borderWidth:2,borderColor:'#B8B5B5',margin:20,justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:'https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png'}} style={{ 
            padding:5,
             borderRadius:10,width:30,height:30}} />
              </TouchableOpacity>
              <TouchableOpacity style={{width:50,height:50,borderRadius:10,borderWidth:2,borderColor:'#B8B5B5',margin:20,justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:'https://image.pngaaa.com/555/25555-middle.png'}} style={{ 
            padding:5,
             borderRadius:10,width:30,height:30}} />
              </TouchableOpacity>
              <TouchableOpacity style={{width:50,height:50,borderRadius:10,borderWidth:2,borderColor:'#B8B5B5',margin:20,justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:'http://simpleicon.com/wp-content/uploads/apple.png'}} style={{ 
            padding:5,
             borderRadius:10,width:30,height:30}} />
              </TouchableOpacity>
              
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 1,marginLeft:40, backgroundColor: 'gray'}} />
                <View>
                 <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                </View>
               <View style={{flex: 1, height: 1, backgroundColor: 'gray',marginRight:40}} />
            </View>
            <View style={{marginTop:30}}>
              <Text style={{marginLeft:20}}>Username :</Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={{marginTop:30}}>
              <Text style={{marginLeft:20}}>Password :</Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.checkboxContainer}>
        <CheckBox/>
        <Text>Stay connected</Text>
      </View>
      <TouchableOpacity style={{height:50,width:300,margin:30,backgroundColor:'#F065FE',justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <Text style={{fontWeight:'bold',color:'#fff'}}>SignIn</Text>
      </TouchableOpacity>
      
            {/* </View> */}
            </BlurView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
 
  blurContainer: {
    height:600,
    width:330,
    alignItems:'center',
    
    bottom:170,
    borderRadius:15,
   
    shadowOffset: { width: 15, height: 15 },
    shadowColor: 'black',
    shadowOpacity: 10,
    
    // background color must be set
    backgroundColor : "black" // invisible color
  
  },
  input: {
    height: 40,
    width:260,
    margin: 12,
    borderWidth: 1,
    borderColor:'#B8B5B5',
    padding: 10,
    borderRadius:9,
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 10,
    shadowColor: 'black',

  },
  checkboxContainer: {
    alignItems: "center",
    flexDirection:'row'
  },

})
