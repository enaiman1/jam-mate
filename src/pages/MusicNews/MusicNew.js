import React from "react";
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import "./MusicNew.scss";

const MusicNews = () => {
  return (
    <div className="musicNews">
        <h1 className="musicNews__title">
         Top Twitter Accounts for music news
        </h1>
      <div className="musicNews__body">
        <div className="row">
          {/* Rolling stone twitter account */}
          <div className="col-lg-3 col-md-6 col-sm-12">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="RollingStone"
                  options={{ width: 400, height: 600 }}
                />
          </div>
          {/* The Hype machine twitter account */}
          <div className="col-lg-3 col-md-6 col-sm-12">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="hypem"
                  options={{ width: 400, height: 600 }}
                />
          </div>
          {/* The billboard twitter account */}
          <div className="col-lg-3 col-md-6 col-sm-12">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="billboard"
                  options={{ width: 400, height: 600 }}
                />
          </div>
          {/* music new & rumors twitter account */}
          <div className="col-lg-3 col-md-6 col-sm-12">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="MusicNewsRumor"
                  options={{ width: 400, height: 600 }}
                />
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    </div>
  );
};

export default MusicNews;
