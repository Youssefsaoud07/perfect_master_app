import React from 'react'
import { StyleSheet, View } from 'react-native'
import {DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer'
import { Avatar,Text,Caption,Paragraph,Switch,TouchableRipple, Drawer, Title } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const DrawerContent = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',right:30}}>
                          <Avatar.Image 
                          source={{uri :'https://resize-public.ladmedia.fr/img/var/public/storage/images/toutes-les-photos/kylie-jenner-sexy-en-bikini-c-est-le-grand-deballage-sur-instagram-1427207/kylie-jenner-sexy-en-bikini-c-est-le-grand-deballage-sur-instagram-1427216/36914919-1-fre-FR/Kylie-Jenner-Sexy-en-bikini-c-est-le-grand-deballage-sur-Instagram.jpg'}} size={50}/>
                          <View>
                              <Title>Kylie Jenner</Title>
                              <Caption>@Kylie</Caption>
                          </View>
                      </View>
                      <View style={{justifyContent:'space-evenly',flexDirection:'row',marginRight:120}}>
                          
                          <Caption>folowing</Caption>
                          <Paragraph style={{fontWeight:'bold'}}>+50M</Paragraph>
                      </View>
                  </View>
                  
              </View>
              <View style={styles.DrawerContent,{marginTop:40}}>
              <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='home-outline'
                  color={color}
                  size={26}
                  />
                )} label='Home' 
                onPress={()=>props.navigation.navigate('Home')}
                />
                 <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='account-settings-outline'
                  color={color}
                  size={26}
                  />
                )} label='Setting' 
                onPress={()=>props.navigation.navigate('Profile')}
                />
                 <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='bookmark-outline'
                  color={color}
                  size={26}
                  />
                )} label='Bookmarks' 
                />
                 <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='store-outline'
                  color={color}
                  size={26}
                  />
                )} label='Store' 
                onPress={()=>props.navigation.navigate('store')}
                />
              </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='exit-to-app'
                  color={color}
                  size={30}
                  />
                )} label='SignOut' 
                onPress={()=>props.navigation.navigate('Logout')}
                />

            </Drawer.Section>
        </View>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})
