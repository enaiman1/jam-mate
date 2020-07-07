import React from "react";
import LyricsResult from "./LyricsResult/LyricsResults";
import Search from "./Search/Search";
import "./LSindex.scss";

const LSbody = () => {
  return (
    <>
    <div className="LSindex">
      <Search />
      <LyricsResult />
      </div>
    </>
  );
};

export default LSbody;
