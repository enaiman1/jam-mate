import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Spinner from "../Spinner/Spinner";
import "./Lyrics.scss";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  // once pages load an api call will be made to get the lyrics for the song the user selected
  componentDidMount() {
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ track: res.data.message.body.track });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <>
        <div className="lyrics">
          <div className="lyrics__card">
            <h5 className="lyrics__header">
              {track.track_name} by{" "}
              <span className="lyrics__header__secondary">{track.artist_name}</span>
            </h5>
            <div className="lyrics__body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list_group mt-3">
            <li className="lyrics__list">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="lyrics__list">
              <strong>Song Genre</strong>:{" "}
              {track.primary_genres.music_genre_list.length === 0
                ? "NO GENRE AVAILABLE"
                : track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name}
            </li>
            <li className="lyrics__list">
              <strong>Explicit Words</strong>{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
          </ul>
          <Link to="/LSindex" className="button__box">
            <Button className="Ltrack__action">
              Back to Search
            </Button>
           
          </Link>
          </div>
        </>
      );
    }
  }
}

export default Lyrics;
