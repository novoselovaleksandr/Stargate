// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab0Main, Tab0Details } from './src/screens/tab0'
import { Tab1Main, Tab1Details } from './src/screens/tab1'
import { Tab2Main, Tab2Details } from './src/screens/tab2'

const Stack = createStackNavigator()
const TabNavigator = createBottomTabNavigator()

const Tab = () => {
  return (
    <>
      <TabNavigator.Navigator initialRouteName="STARGATE">
        <TabNavigator.Screen name="STARGATE" component={Tab0Main} />
        <TabNavigator.Screen name="BATMAN" component={Tab1Main} />
        <TabNavigator.Screen name="SPIDER MAN" component={Tab2Main} />
      </TabNavigator.Navigator>
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
        initialRouteName="TAB"
      >
        <Stack.Screen name="TAB" component={Tab} />
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
