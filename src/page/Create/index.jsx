import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import ChipInput from 'material-ui-chip-input';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from '../../components/Search';

const options = ['4-4-2', '1-1-8', '4-1-4-1', '4-5-1', '4-6-0', '5-4-1'];


function Create(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

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
                  <label>Team Name</label>
                  <TextField
                    id="outlined-helperText"
                    label="Insert team name"
                    variant="outlined"
                  />
                </div>
                <div className="inputPainel">
                  <label>Description</label>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={7}
                    variant="outlined"
                  />
                </div>

                
              </div>
              <div className="colWebsite">
                <div className="inputPainel">
                  <label>Team website</label>
                  <TextField
                    id="outlined-helperText"
                    label="http://myteam.com"
                    variant="outlined"
                  />
                </div>
                <label>Team type</label>
                <div>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <label className="radioLabel">Real</label>
                  <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                  <label className="radioLabel">Fantasy</label>
                </div>
                <div className="painelTags">
                  <label>Tags</label>
                  <ChipInput
                    defaultValue={['BR', 'PTW', 'Attack']}
                  />
                </div>
              </div>
            </div>
            <h3>CONFIGURE SQUAD</h3>
            <div className="rowTeam">
              <div>
                <label>Formation</label>
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
              </div>
              <div>
                <label>Search Players</label>
                <Search />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Create;