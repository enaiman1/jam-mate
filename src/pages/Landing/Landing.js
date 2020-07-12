import React from "react";
import classes from "./Landing.module.scss";
import VideoSource from "../../assets/video/dj.mp4";
import "./Landing.module.scss";


const Landing = () =>{
    return (
        <header className={classes.header}>
      <video playsInline autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={VideoSource} type="video/mp4" />
        <source src={VideoSource} type="video/ogg" />
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