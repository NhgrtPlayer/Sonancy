import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <ReactAudioPlayer
            src='/test.mp3'
            controls
            autoPlay
        />
      </div>
    );
  }
}