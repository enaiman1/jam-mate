import React, {Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResult";
import Playlist from "./Playlist/Playlist";
import Spotify from "./util/Spotify";
import "./SBindex.scss"

class SBindex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: "Name Your Playlist",
    };
    this.audio = document.createElement('audio')
     
  }
 
  // this method from results to playlist
  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    // check to see if a matching id. if the track id matches an id that is already in our tracks array we will return
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    // if the id is new we will add it to the array at the bottom
    tracks.push(track);
    console.log(tracks)
    this.setState({ playlistTracks: tracks });
   console.log(`playlistTracks ${this.state.playlistTracks}`)
  };

  // this method removes a saved song from the playlist
  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  };

  playTrack = (track) => {
    if(track.preview === null){
      alert("demo is unaviable")
    }

    this.audio.src = track.preview
    console.log(`this is from track: ${track.name}`)
    this.audio.load()
    this.audio.play()
    
  }

  //this method allows users to change the playlist name
  updatePlaylistName = (name) => this.setState({ playlistName: name });

  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    // after playlist is sent, we reset the playlist to a generic state
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "Name Your Playlist",
        playlistTracks: [],
      });
    });
  }

  search = (searchTerm) => {
    Spotify.search(searchTerm).then((results) => {
      this.setState({ searchResults: results });
      console.log(results)
    });
  }

  render = () => (
    <div>
      
      <div className="SBindex">
        <SearchBar onSearch={this.search} />
        <div className="SBindex-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onPlay={this.playTrack}
            />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            onPlay={this.playTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default SBindex;