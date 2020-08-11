import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Tab0Main, Tab0Details } from './src/screens/tab0'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="TAB0_MAIN"
      >
        <Stack.Screen name="TAB0_MAIN" component={Tab0Main} />
        <Stack.Screen name="TAB0_DETAILS" component={Tab0Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
