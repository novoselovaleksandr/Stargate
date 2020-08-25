import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { Tab0Main, Tab0Details } from './screens/tab0'
import client from './apollo'

const Stack = createStackNavigator()

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
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
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
