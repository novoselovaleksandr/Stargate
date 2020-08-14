import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { Tab0Main, Tab0Details } from './src/screens/tab0'
import reducers from './src/reducers'

const Stack = createStackNavigator()

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)))
const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="TAB0_MAIN"
        >
          <Stack.Screen name="TAB0_MAIN" component={Tab0Main} />
          <Stack.Screen name="TAB0_DETAILS" component={Tab0Details} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App
