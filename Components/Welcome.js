import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Anirudh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;