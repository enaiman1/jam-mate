import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg">
  <Link to="/">
<span className="navbar-brand mb-0 justify-content-start">Jam Matez</span>
</Link>


  <span className="navbar__links">
  <ul className="nav">
    {/* goes to SBindex.js(Spotify playlist makers) */}
    <Link to="/SBindex">
  <li className="nav-item">
    <div className="nav-link">Build Jamz</div>
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
  </span>
</nav>

    )
}

export default Navbar