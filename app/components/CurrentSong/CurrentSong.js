import React from 'react';
import YouTube from 'react-youtube';
import styles from './CurrentSong.css';

export default class CurrentSong extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlay() {
    this.props.onPlaySong();
    this.youtube.playVideo();
  }

  handlePause() {
    this.props.onPauseSong();
    this.youtube.pauseVideo();
  }

  handleNextSong() {
    this.props.onNextSong();
  }

  _onReady(event, context) {
    // Set the playing status to true
    context.props.onPlaySong();

    // Max the volume out
    event.target.setVolume(100);

    // context = this from react
    // this = this for this function to Youtube API
    context.youtube = event.target;
    console.log(context);
  }

  _onEnd(event, context) {
    // Handles events at the end of a song
    // context.youtube = event.target;
    context.handleNextSong();
  }

  render() {
    const opts = {
      height: '0',
      width: '0',
      playerVars: {
        autoplay: 1, // enables autoplay
        disablekb: 0 // disables keyboard controls
      }
    };

    return (
      // Formatting is nasty and hard coded and I copied it from Andrew :D
      <div className={styles.currentSong}>
        <YouTube
          url={this.props.currentSong.url}
          opts={opts}
          onReady={(event) => this._onReady(event, this)}
          onEnd={(event) => this._onEnd(event, this)}
        />
        {this.props.currentSong.title}
        &nbsp;
        &nbsp;
        <player/>

        {this.props.isPlaying ?
         <button type='button' onClick={() => this.handlePause()}> Pause </button> :
         <button type='button' onClick={() => this.handlePlay()}> Play </button>}
        &nbsp;
        &nbsp;
        <button type='button' onClick={() => this.handleNextSong()}> Next </button>
      </div>
    );
  }
}
