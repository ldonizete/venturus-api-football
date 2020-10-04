import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './page/Home';
import Create from './page/Create';
import Times from './Data/times';

// import api from './services/api';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [state] = useState({teams: Times});

  //############################################################
  // CHAMANDO A API PARA PEGAR OS TIMES
  // COPIE OS DADOS PARA LOCAL PARA NÃO ESTOURAR O LIMITE FREE
  //############################################################

  // async componentDidMount(){
  //  this.loadTeams();
    
  // }

  // loadTeams = async () => {
  //   const axios = require("axios");
  //   var teams = null;
  //   var apiTeams = await axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/2', {
  //     headers:{
  //       "content-type":"application/octet-stream",
  //       "x-rapidapi-host":"api-football-v1.p.rapdapi.cm",
  //       "x-rapidapi-key":"c9fe884823msh349fe88429b0d886ec7p14927cjsncc0da9e18971",
  //       "useQueryString":true
  //       }
  //     } 
  //   );

  //   teams = apiTeams.data.api.teams;

  //   var playersTeams = null;

  //   var teamsAndPlayers = [];

  //   for (let i = 0; i < 5; i++) {
  //     var idTeams = teams[i].team_id;

  //     var apiPlayers = await axios.get(
  //       `https://api-football-v1.p.rapidapi.com/v2/players/squad/${idTeams}/2018-2019`, {
  //       headers:{
  //         "content-type":"application/octet-stream",
  //         "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
  //         "x-rapidapi-key":"9fe884c823msh344029b0d886ec7p14927cjsncc0da9e18971",
  //         "useQueryString":true
  //         }
  //       } 
  //     );

  //     playersTeams = apiPlayers.data.api.players;

  //     teams[i].players = [];
  //     teams[i].description = teams[i].venue_name;
      
  //     teamsAndPlayers.push(teams[i]);
  //     teamsAndPlayers[i].players.push(playersTeams);
  //   }
  //   this.setState({teams:teamsAndPlayers})
  // }

  
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home teams={state.teams}/>
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;