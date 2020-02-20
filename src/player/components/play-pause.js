import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="red"
      hitSlop={{left: 5, top: 5, bottom: 5, right: 5}}>
      {props.paused ? (
        <Text style={styles.button}> Play </Text>
      ) : (
        <Text style={styles.button}> Pause </Text>
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
});

export default PlayPause;
