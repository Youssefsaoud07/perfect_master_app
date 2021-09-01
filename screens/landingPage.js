import React from 'react'
import { StyleSheet, Text, View,Image ,SafeAreaView, TouchableOpacity} from 'react-native'

const LandingPage = () => {
    return (
        <SafeAreaView style={ styles.container }>
             <Image source={require('../assets/images/background.png')} style={styles.backgroundImage} />
             <TouchableOpacity style={{opacity:3,position:'absolute',bottom:600,borderRadius:6}}>
                 <Text style={{color:'#fff',fontSize:35,padding:10}}>
                    IQ Comunity
                 </Text>
             </TouchableOpacity>
             <Text style={{fontSize:34,color:'#fff',position:'absolute',fontWeight:'bold'}}>Cool App Design</Text>
             <TouchableOpacity style={{borderWidth:1,borderColor:"#fff",opacity:3,position:'absolute',top:600,borderRadius:6}}>
                 <Text style={{color:'#fff',fontSize:30,padding:10}}>
                    Join IQ Comunity
                 </Text>
             </TouchableOpacity>
            
        </SafeAreaView>
    )
}

export default LandingPage

const styles = StyleSheet.create({

   
        container: {
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover', 
            width:400
        },
       
    });

