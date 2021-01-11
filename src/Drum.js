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
    const sound = document.getElementById(this.props.label);
    if (sound) {
      this.setActive(true);
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => this.setActive(false), 300);
      this.props.pressed(this.props.label);
    }
  }

  setActive(isActive) {
    this.setState({ active: isActive });
  }

  render() {
    return (
      <div className={`drum-pad ${this.state.active ? 'active' : ''}`} id={this.props.id} onClick={this.playSound.bind(this)}>
          {this.props.label}
          <audio
            className="clip"
            id={this.props.label}
            src={this.props.sound}
          />
      </div>
    );
  }
}
