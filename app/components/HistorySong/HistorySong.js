import React from 'react';
import styles from './HistorySong.css';

export default class HistorySong extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.historysong}>
        {this.props.song.title} {this.props.song.artist}
      </div>
    );
  }
}
