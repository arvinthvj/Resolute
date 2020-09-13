import React from "react";
import picone from "./circleresol.png";
import Grid from "@material-ui/core/Grid";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <div className="home__con1">
          <h1>
            <br />
            <span className="one"> We seek to accelerate the world’s</span>
            <br />
            <span className="two"> transition to digital identity</span>
            <br />
          </h1>
        </div>

        <div className="home__con2">
          <img src={picone} />
        </div>
      </Grid>
    </div>
  );
}

export default Home;
