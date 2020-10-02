import React from 'react';
import './index.css';
import Myteams from '../Myteams';
import Top from '../Top';

function Home(props) {
    return(
      <div className="home">
        <Myteams teams={props.teams}/>
        <div className="topPicked">
          <Top teams={props.teams}/>
        </div>
      </div>
    )
}

export default Home;