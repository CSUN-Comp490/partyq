import React, { PropTypes } from 'react';
import styles from './AddSong.css';

export default class AddSong extends React.Component {
  constructor(props) {
    super(props);
  }

  dimSuccess() {
    $('.dimmer').css('background-color', 'rgba(48, 170, 255, 1)');
    $('#dimmerIcon').removeClass('frown');
    $('#dimmerIcon').addClass('checkmark');
    $('#dimmerTextMain').text('Song Added');
    $('#dimmerTextSecondary').text('');
    this.dim();
  }

  dimFailure() {
    $('.dimmer').css('background-color', 'rgba(255, 0, 0, 0.8)');
    $('#dimmerIcon').removeClass('checkmark');
    $('#dimmerIcon').addClass('frown');
    $('#dimmerTextMain').text('Invalid URL');
    $('#dimmerTextSecondary').text('Song Not Added');
    this.dim();
  }

  handleClick(event) {
    event.preventDefault();
    const node = this.refs.songname;
    const text = node.value.trim();
    console.log(event);
    this.props.onAddSong(text);
    node.value = '';
    this.dimSuccess();
  }

  dim() {
    $('.dimmable').dimmer('show').dimmer({duration: {show: 2000, hide: 0}}).dimmer('hide');
  }

  render() {
    return (
      <div className={styles.addsong}>
          <form onSubmit={(event) => this.handleClick(event)}>
            <div className='ui input focus'>
              <input className={styles.songInput} ref='songname' type='text' className={styles.songURL} type='text' placeholder='Add Song...'/>
              <button className={'ui button ' + styles.addsongButton} onClick={() => this.handleClick(event)}>Add Song</button>
            </div>
          </form>
      </div>
    );
  }
}

AddSong.propTypes = {
  onAddSong: PropTypes.func.isRequired
};
