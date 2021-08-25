import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ToolsImage from './assets/tools.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ToolsImage} style={styles.image} />
      <Text>Update 1</Text>
      <StatusBar style='auto' />
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
  image: {
    width: 350,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 32,
  },
});
