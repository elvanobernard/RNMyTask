import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from './screens/Calendar';

import Home from './screens/Home';
import TaskDetail from './screens/TaskDetail';
import TaskForm from './screens/TaskForm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Calendar /> */}
      {/* <TaskDetail /> */}
      <TaskForm />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
