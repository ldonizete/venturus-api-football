import React from 'react';
import './index.css';
import Pickedplayer from '../Picked-player';



class Top extends React.Component {
    render(){
      
      var teams = this.props.teams;


      let rowsHigh = []
      let rowsLow = []

      if(teams!=null && teams.length>0)
      {
        var player = null;

        for(let i=0; i< teams.length; i++)
        {
          var countAge =0;
          var media =0;
         if(teams[i].players != null && teams[i].players[0].length>0)
          {
            for(let k=0; k< teams[i].players[0].length; k++)
            {
              player = teams[i].players[0][k];
              
              countAge += player.age;
            }
            media = (countAge/teams[i].players[0].length);
          }
          teams[i].mediaAge = Number(media.toFixed(2));
        }

        teams.sort((a,b) =>{
          return b.mediaAge - a.mediaAge;
        })

        for(let i=0; i< 5; i++){
          rowsHigh.push(
            <div key={i} className="divTopNameAge">
              <label>{teams[i].name}</label>
              <label>{teams[i].mediaAge}</label>
            </div>
          )
        }

        teams.sort((a,b) =>{
          return a.mediaAge - b.mediaAge;
        })

        for(let i=0; i< 5; i++){
          rowsLow.push(
            <div key={i} className="divTopNameAge">
              <label>{teams[i].name}</label>
              <label>{teams[i].mediaAge}</label>
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
                  {rowsHigh}
                </div>
              </div>
              <div>
                <h4>Lowest avg age</h4>
                <div className="backgroundList">
                  {rowsLow}
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