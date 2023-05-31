import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import LottieView from 'lottie-react-native';
import React from 'react';

export default function App() {
  let animation = React.createRef();

  function startAnimation(){
    animation.current.play();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Feather name="play" color="red" size={60} />
      </TouchableOpacity>
      <LottieView
        source={require('./assets/check.json')} 
        style={{
          width: 200,
          height: 200.
        }}
        loop={false}
        ref={animation}
      />
      <Button title="Start Animation" onPress={startAnimation} />
      <StatusBar style="auto" />
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
