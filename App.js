import Home from './components/home';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Result from './components/result';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './constants/colors';
import ListData from './components/listData';
import Account from './components/account';
import Detail from './components/detail';
import ChooseData from './components/chooseData';

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
            else if (rn === 'Choose') {
              iconName = focused ? 'list' : 'list-outline'
            }
            else if (rn === 'Account') {
              iconName = focused ? 'person' : 'person-outline'
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
        <Tab.Screen name='Choose' component={ChooseData} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Account' component={Account} options={{ headerShown: false }}></Tab.Screen>
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
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="ListData" component={ListData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
