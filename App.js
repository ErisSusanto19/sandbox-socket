import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from './store';
import { Provider } from 'react-redux';

// import Login from "./screens/Login";
import Messaging from "./screens/Messaging";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
          /> */}

          <Stack.Screen
              name='Chat'
              component={Chat}
              options={{
                  title: "Chats",
                  headerShown: false,
              }}
          />
          
          <Stack.Screen name='Messaging' component={Messaging} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
