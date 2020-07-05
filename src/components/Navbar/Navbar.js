import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg">
<span className="navbar-brand mb-0 justify-content-start">Jam Matez</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end navLinks">
  <ul className="nav">
    {/* goes to SBindex.js(Spotify playlist makers) */}
    <Link to="/SBindex">
  <li className="nav-item">
    <div className="nav-link active">Build Jamz</div>
  </li>
  </Link>

  {/* goes to LSindex.js (lyric searcher) */}
  <Link to="/LSindex">
  <li className="nav-item">
    <div className="nav-link">Lyricz</div>
  </li>
</Link>

<Link to="/MusicNews">
  <li className="nav-item">
    <div className="nav-link">Updatez</div>
  </li>
  </Link>
</ul>
  </div>
</nav>

    )
}

export default Navbar