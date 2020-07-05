import React from 'react';
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
  <li className="nav-item">
    <a className="nav-link active" href="#">Build Jamz</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Lyricz</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Updatez</a>
  </li>
</ul>
  </div>
</nav>





//     <nav className="navbar navbar-dark bg-dark mb-5">
//         <span className="navbar-brand mb-0 justify-content-start">Jam Matez</span>
//         <ul className="nav justify-content-end">
//   <li className="nav-item">
//     <a className="nav-link active" href="#">Build Jamz</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#">Lyricz</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#">Updatez</a>
//   </li>
// </ul>
//     </nav>
    )
}

export default Navbar