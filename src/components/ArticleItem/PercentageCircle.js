import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { chuyenDoiPhanTram } from "../../helpers";

function PercentageCircle({vote_average}) {
  return (
    <div className="PercentageCircle" style={{ width: "35px", height: "35px" }}>
      <CircularProgressbar
        value={chuyenDoiPhanTram(vote_average)}
        text={`${chuyenDoiPhanTram(vote_average)}%`}
        background
        backgroundPadding={7}
        strokeWidth={10}
        styles={buildStyles({
         backgroundColor: "#1e2024",
          strokeLinecap: "butt",
          textSize: "30px",
          pathTransitionDuration: 0.5,
          textColor: "#fff",
          trailColor: "#d6d6d6",
          pathColor:"#20c674",
          backgroundPadding:'red',
        
        })}
      />
    </div>
  );
}

export default PercentageCircle;
