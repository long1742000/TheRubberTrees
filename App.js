import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Login from './components/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
      {/* <Home></Home> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
