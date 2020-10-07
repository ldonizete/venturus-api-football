import React, { useState } from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from '../../components/Search';
import Camp from '../../components/Camp';
import { Link } from 'react-router-dom';
import DragAndDropPlayers from '../../components/Drag-players'

const options = ['4-4-2', '1-1-8', '4-1-4-1', '4-5-1', '4-6-0', '5-4-1'];

function Create(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [stateTags, setStateTags] = useState({tags:[]})

  const handleChangeTag = (tags) =>{
    setStateTags({tags})
  }

  const saveClick = () =>
  {
    var teamName = document.getElementById("teamName");
    var description = document.getElementById("description");
    var website = document.getElementById("website");
    var type = selectedValue === 'a' ? "Real" : "Fantasy";
    var tags = stateTags;
    var formation = value;
    var players = document.getElementById("droppable");

    console.log(players);
  }

  return(
    <div className="mainCreate">
      <div className="painelCreate">
          <h1>Create your team</h1>
          <hr></hr>
          <div className="subPainelCreate">
            <h3>TEAM INFORMATION</h3>
            <div className="rowTeam">
              <div className="colName">
                <div className="inputPainel">
                  <label className="labelCreate">Team Name</label>
                  <TextField
                    id="teamName"
                    label="Insert team name"
                    variant="outlined"
                  />
                </div>
                <div className="inputPainel">
                  <label className="labelCreate">Description</label>
                  <TextField
                    id="description"
                    multiline
                    rows={7}
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="colWebsite">
                <div className="inputPainel">
                  <label className="labelCreate">Team website</label>
                  <TextField
                    id="website"
                    label="http://myteam.com"
                    variant="outlined"
                  />
                </div>
                <label className="labelCreate">Team type</label>
                <div>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <label>Real</label>
                  <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                  <label>Fantasy</label>
                </div>
                <div className="painelTags">
                  <label className="labelCreate">Tags</label>
                  <TagsInput 
                    className="tags"
                    value={stateTags.tags}
                    onChange={handleChangeTag}
                    tagProps={{className: 'tagsinput-tag'}}
                    focusedClassName="focused"
                  />
                </div>
              </div>
            </div>
            <h3>CONFIGURE SQUAD</h3>
            <div className="rowTeam">
              <div>
                <label className="labelCreate">Formation</label>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params}
                    variant="outlined" />}
                />
                <Camp />
                <Link to="/" className="linkBtnTeams">
                  <button 
                    className="btnSave"
                    onClick={() => {saveClick()}}
                  >
                    Save
                  </button>
                </Link>
              </div>
              <div>
                <label className="labelCreate">Search Players</label>
                <Search />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Create;