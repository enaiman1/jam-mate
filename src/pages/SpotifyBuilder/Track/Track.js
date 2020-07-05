import React, { Component } from "react";
import "./Track.scss";

class Track extends Component {

  /*this method that has been passed down to check if id is already there, 
      if it is not it will be added to our playlist and state will be updated */
 addTrack = () => this.props.onAdd(this.props.track);
 

  removeTrack = () => this.props.onRemove(this.props.track);

  playTrack = () => this.props.onPlay(this.props.track);

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="track__action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="track__action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }
renderPlayButton() {
  return <button onClick={this.playTrack}>Play</button>;
}
  render = () => (
    <div className="track">
      <div className="track__information">
        <h3>{this.props.track.name}</h3>
        <p>
          {this.props.track.artist} | {this.props.track.album}
        </p>
      </div>
      {this.renderPlayButton()}
      {this.renderAction()}
    </div>
  );
}



export default Track;

