import React from "react";
import {Link} from "react-router-dom";
import "./Track.scss";


const Track = (props) => {
  const { track } = props;
  return (
<div className="trackList">
<div className="Ltrack">
<div className="Ltrack__information">
        <h3>{track.track_name}</h3>
        <p>
        {track.artist_name} | {track.album_name}
        </p>
      </div>
       <Link to={`lyrics/track/${track.track_id}`} >
         <button className="Ltrack__action">
           <i className="fas fa-chevron-right"></i>
         </button>
         
     </Link>
</div>
</div>

    // <div className="col-md-6">
    //   <div className="card mb-4 shadow-sm">
    //     <div className="card-body track">
    //       <h5>{track.artist_name}</h5>
    //       <p className="card-text">
    //         <strong>
    //           <i className="fas fa-play"></i> Track
    //         </strong>
    //         : {track.track_name}
    //         <br />
    //         <strong>
    //           <i className="fas fa-compact-disc"></i> Album
    //         </strong>
    //         : {track.album_name}
    //       </p>
    // <Link to={`lyrics/track/${track.track_id}`} className="track__action">
    //     <i className="fas fa-chevron-right"></i> View Lyrics
    // </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Track;
