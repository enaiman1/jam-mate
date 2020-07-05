import React, { Component } from "react";
import TrackList from "../TrackList/TrackList"
import './playlist.css'

class Playlist extends Component {
    
    handleNameChange = event =>  this.props.onNameChange(event.target.value)

   
    

    render = (props) => <div className="playlist">
                        <input defaultValue={"New Playlist"} onChange={ this.handleNameChange }/>
                        <TrackList 
                            tracks = { this.props.playlistTracks } 
                            onRemove = { this.props.onRemove }
                            isRemoval = { true }
                            onPlay={this.props.onPlay}
                            />
                        <button className="playlist__save" onClick={ this.props.onSave }>SAVE TO SPOTIFY</button>
                    </div>
    
}


export default Playlist