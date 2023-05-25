import React from "react";
import HomeScreen from "./Src/Components/HomeScreen";
import BookDetails from "./Src/Components/BookDetails";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./Redux/Reducers/rootReducer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";

const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs(true)

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
export default App;