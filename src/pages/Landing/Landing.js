import React from "react";
import classes from "./Landing.module.scss";
import VideoSource from "../../assets/video/dj.mp4";
import Button from "../../components/Button/Button";
import "./Landing.module.scss";


const Landing = (props) =>{
    return (
        <header className={classes.header}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
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
        <Button>
          Build Jamz
        </Button>
      </div>

      <div className={classes.header__overlay}>

      </div>
      
    </header>
    )
}

export default Landing;