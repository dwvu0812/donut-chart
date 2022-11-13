import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Donut from './components/Donut';
import Gestures from './components/Gestures';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true}/>
      {/* <Donut /> */}
      <Gestures />
    </View>
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
