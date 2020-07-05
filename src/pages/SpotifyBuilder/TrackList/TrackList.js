import React, {Component} from "react";

import Track from "../Track/Track";
import "./TrackList.scss";



class TrackList extends Component {

    render =(props) =>  <div className="trackList">
                        {
                            // console.log(this.props.tracks)
                            this.props.tracks.map(track => {
                            return <Track
                            key={track.id}
                            track={track}
                            onAdd={this.props.onAdd}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.isRemoval}
                            onPlay={this.props.onPlay}
                            />
                            })

                        }

                    </div>

}


export default TrackList;