import React from 'react'
import { StyleSheet,SafeAreaView, View,Image, TouchableOpacity, TextInput ,CheckBox} from 'react-native'
import { BlurView } from 'expo-blur';
import GradientButton from "react-native-gradient-buttons";
import { Avatar,Text,Caption,Paragraph,Switch,TouchableRipple, Drawer, Title } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex:1 ,alignItems:'center',backgroundColor:'#E4EAEC'}}>
            <Image source={require('../assets/images/background.png')} style={{ 
            resizeMode: 'cover', 
             borderRadius:14,position:'relative',margin:39,width:380,height:300}} />
             <View style={{position:'absolute' ,marginTop:80}}>
             <Avatar.Image 
                          source={{uri :'https://resize-public.ladmedia.fr/img/var/public/storage/images/toutes-les-photos/kylie-jenner-sexy-en-bikini-c-est-le-grand-deballage-sur-instagram-1427207/kylie-jenner-sexy-en-bikini-c-est-le-grand-deballage-sur-instagram-1427216/36914919-1-fre-FR/Kylie-Jenner-Sexy-en-bikini-c-est-le-grand-deballage-sur-Instagram.jpg'}} size={70}/>
             </View>
             <View style={{marginTop:160,position:'absolute'}}>
             <Text style={{color:'#fff', fontWeight:'bold',fontSize:15,marginBottom:3}}>Kylie Jenner</Text>
            <Text style={{color:'#fff',fontSize:15}}>Marketing CEO</Text>
             </View>
             <View style={{position:'absolute',marginTop:210 ,flexDirection:'row'}} > 
            <BlurView intensity={50} tint="light" style={{width:100,height:50,borderRadius:25,borderWidth:1,borderColor:'#fff',margin:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontWeight:'bold'}}>Follow</Text></BlurView>
            <BlurView intensity={50} tint="light" style={{width:50,height:50,borderRadius:25,borderWidth:1,borderColor:'#fff',margin:20,justifyContent:'center',alignItems:'center'}}>
                <Icon name='twitter' color='#fff' size={20}/></BlurView>
            <BlurView intensity={50} tint="light" style={{width:50,height:50,borderRadius:25,borderWidth:1,borderColor:'#fff',margin:20,justifyContent:'center',alignItems:'center'}}>
            <Icon name='instagram' color='#fff' size={20}/></BlurView>
             </View>
            
            <View style={styles.blurContainer}>
            {/* <View style={{width:300,height:500,backgroundColor:'pink',position:'absolute',marginTop:200}}> */}
            <View><Text style={{fontWeight:'bold'}}>Posts</Text><Text>2300</Text></View>
              <View><Text style={{fontWeight:'bold'}}>followers</Text><Text>50M</Text></View>
              <View><Text style={{fontWeight:'bold'}}>following</Text><Text>30K</Text></View>
              
            </View>
            <View style={{marginTop:10,padding:30}}>
                <Text style={{fontWeight:'bold',marginBottom:5,fontSize:16}}>About me:</Text>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
 
  blurContainer: {
    height:70,
    width:330,
    alignItems:'center',
    position:'absolute',
    marginTop:305,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:30,

    
    borderRadius:15,
   
    shadowOffset: { width: 15, height: 15 },
    shadowColor: 'black',
    shadowOpacity: 10,
    
    // background color must be set
    backgroundColor : "#F6E2F8" // invisible color
  
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
