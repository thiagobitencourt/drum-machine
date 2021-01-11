import './Drum.css';
import React from 'react';

export default class Drum extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressed.bind(this));
  }

  keyPressed({ keyCode }) {
    if (keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    const sound = document.getElementById(this.props.id);
    if (sound) {
      this.setActive(true);
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => this.setActive(false), 300);
    }
  }

  setActive(isActive) {
    this.setState({ active: isActive });
  }

  render() {
    return (
      <div className={`drum-button ${this.state.active ? 'active' : ''}`} onClick={this.playSound.bind(this)}>
          {this.props.label}
          <audio
            id={this.props.id}
            src={this.props.sound}
          />
      </div>
    );
  }
}
