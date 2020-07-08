import React, { Component } from 'react';
import { Consumer } from "../context";
import axios from 'axios';
import Button from "../../../components/Button/Button"
import "./Search.scss";

class Search extends Component {
    state = {
        trackTitle: ''
      };

    findTrack =(dispatch, e) => {
        e.preventDefault();
        console.log(this.state.trackTitle)
        axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then(res => {
            
         dispatch({
             type:'SEARCH_TRACKS',
             payload: res.data.message.body.track_list
         })
          this.setState({trackTitle: ""})
        })
        .catch((err) => console.log(err));
    }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    render() {
        return (
            <Consumer>
               {value => {
                const {dispatch} = value;
                   return (
                       <div className="searchBar ">
                           <form  onSubmit={this.findTrack.bind(this, dispatch)}>
                               <div className="form-group">
                                   <input 
                                   type="text"
                                   placeholder="Enter A Song Title"
                                   name="trackTitle"
                                   value={this.state.trackTitle}
                                   onChange={this.onChange}
                                   />
                               </div>
                                  <Button className="searchButton"
                              type="submit">
                                Search Lyrics
                               </Button>  
                           </form>
                       </div>
                   )
               }}
           </Consumer>
        )
    }
}

export default Search;