import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import Button from "../../../components/Button/Button";
import "./Playlist.scss";

class Playlist extends Component {
    
    handleNameChange = event =>  this.props.onNameChange(event.target.value)

   
    

    render = (props) => <div className="playlist">
                        <input defaultValue={"Name Your Playlist"} onChange={ this.handleNameChange }/>
                        <TrackList 
                            tracks = { this.props.playlistTracks } 
                            onRemove = { this.props.onRemove }
                            isRemoval = { true }
                            onPlay={this.props.onPlay}
                            />
                        <Button className="playlist__save" onClick={ this.props.onSave }>SAVE TO SPOTIFY</Button>
                    </div>
    
}


export default Playlist