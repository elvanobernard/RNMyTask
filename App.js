import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './screens/Calendar';

import Home from './screens/Home';
import TaskDetail from './screens/TaskDetail';
import TaskForm from './screens/TaskForm';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Task() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='TaskDetail' component={TaskDetail} />
      <Stack.Screen name='TaskForm' component={TaskForm} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name='Task' component={Task} />
        <BottomTab.Screen name='Calendar' component={Calendar} />
      </BottomTab.Navigator>
      <StatusBar />
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
