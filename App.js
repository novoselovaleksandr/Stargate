// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Tab0Main, Tab0Details } from './src/screens/tab0'
import { Tab1Main, Tab1Details } from './src/screens/tab1'
import { Tab2Main, Tab2Details } from './src/screens/tab2'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="TAB0_MAIN">
        <Drawer.Screen name="TAB0_MAIN" component={Tab0Main} />
        <Drawer.Screen name="TAB1_MAIN" component={Tab1Main} />
        <Drawer.Screen name="TAB2_MAIN" component={Tab2Main} />
      </Drawer.Navigator>
    </>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="DrawerNavigation"
      >
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="TAB0_MAIN" component={Tab0Main} />
        <Stack.Screen name="TAB0_DETAILS" component={Tab0Details} />
        <Stack.Screen name="TAB1_MAIN" component={Tab1Main} />
        <Stack.Screen name="TAB1_DETAILS" component={Tab1Details} />
        <Stack.Screen name="TAB2_MAIN" component={Tab2Main} />
        <Stack.Screen name="TAB2_DETAILS" component={Tab2Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
