import React, {Component} from "react";
import Tracks from "../Tracks/Tracks";
import "./LyricsResults.scss";


 class SearchResults extends Component{

  render = () => <div className="LyricsResults">
                        <h2 className="LyricsResults__title">Results</h2>
                        <Tracks
                        />
                  </div>

}



export default SearchResults;