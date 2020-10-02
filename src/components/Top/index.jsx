import { render } from '@testing-library/react';
import React from 'react';
import './index.css';
import Pickedplayer from '../Picked-player';



class Top extends React.Component {
    render(){
      
      var teams = this.props.teams;


      let rows = []

      if(teams!=null && teams.length>0)
      {
        for(let i=0; i< 5; i++){
          rows.push(
            <div key={i} className="divTopNameAge">
              <label>{teams[i].name}</label>
              {/* <label>{this.times[i].age}</label> */}
            </div>
          )
        }
      }
      

      return(
        <div className="colTOP">
          <div className="topPainel">
            <h1>Top 5</h1>
            <hr />
            <div className="row">
              <div>
                <h4>Highest avg age</h4>
                <div className="backgroundList">
                  {rows}
                </div>
              </div>
              <div>
                <h4>Lowest avg age</h4>
                <div className="backgroundList">
                  {rows}
                </div>
              </div>
            </div>
          </div>
          <Pickedplayer/>
        </div>
      );
    }
}

export default Top;