import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBar from './components/navbar';
import Result from './components/result';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './constants/colors';

export default function App() {

  const Tab = createBottomTabNavigator();

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            }
            else if (rn === 'List') {
              iconName = focused ? 'list' : 'list-outline'
            }
            else if (rn === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}></Ionicons>
          }
        })}

        tabBarOptions={{
          activeTintColor: COLORS.primary,
          showLabel: false
        }}
      >
        <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='List' component={Home} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Settings' component={Home} options={{ headerShown: false }}></Tab.Screen>
      </Tab.Navigator>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
