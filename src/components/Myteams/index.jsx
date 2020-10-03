import React from 'react';
import './index.css';
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';
import Table from '../Table';

function Myteams(props) {
   return (
      <div className="painelMyTeams">
        <div className="rowMyteamsTitle">
          <h1>My teams</h1>
          <Link to="/create" className="linkBtnTeams">
            <button src="/create" className="btAddTeams" type="button">
              <GoPlus className="iconAdd"/>
            </button>
          </Link>
        </div>
        <hr/>
        <Table teams={props.teams}/>
      </div>
    );
}

export default Myteams;