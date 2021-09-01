import * as React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./screens/login";
import landingPage from "./screens/landingPage";
import LandingPage from './screens/landingPage';
import HomeScreen from './screens/home';
import { DrawerContent } from "./components/DrawerContent";
import ProfileScreen from './screens/Profile';
import Store from './screens/store';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
    headerShown: false
  }}  drawerContent={props=><DrawerContent{... props} />}
      
      >
        <Drawer.Screen name="Home" component={LandingPage} />
        <Drawer.Screen name="Logout" component={LoginScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="store" component={Store} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
