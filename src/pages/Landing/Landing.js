import React from "react";
import classes from "./Landing.module.scss";
import VideoSource from "../../assets/video/dj.mp4";
import VideoSourceM from "../../assets/video/dj.webm";
import Poster from "../../assets/img/poster.jpg";
import "./Landing.module.scss";


const Landing = () =>{
    return (
        <header className={classes.header}>

      <video playsInline="playsinline" autoPlay="autoplay" loop="loop" autoBuffer="autobuffer" poster={Poster} className={classes.Video}>
        <source src={VideoSource} type="video/mp4" />
        <source src={VideoSource} type="video/ogg" />
        <source src={VideoSourceM} type="video/webm"/>  
        Your browser does not support the video tag.
      </video>
      <div className={classes.header__textBox}>  
           
          <h1 className={classes.main__heading}>
            Jam <span className={classes.main__heading__span}>Matez</span>
          </h1>
       
      </div>{" "}
   
      <div className={classes.header__buttonBox}>
      
      </div>
      <div className={classes.header__overlay}>
      </div>
      
    </header>
    )
}

export default Landing;