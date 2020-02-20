import React from 'react';
import Video from 'react-native-video';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends React.Component {
  state = {
    loading: true,
    paused: false,
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };

  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };

  onLoad = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <Layout
        video={
          <Video
            source={{
              uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            volume={0}
          />
        }
        loading={this.state.loading}
        loader={<ActivityIndicator color="white" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text> progress bar | </Text>
            <Text> time left | </Text>
            <Text> fullscreen | </Text>
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
