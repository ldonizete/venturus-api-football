import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Times from '../../Data/times';
import DragAndDropPlayers from '../Drag-players';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  

  var players = [];

  for (let i = 0; i < Times.length; i++) {
    for (let k = 0; k < Times[i].players[0].length; k++) {
      const player = Times[i].players[0][k];
      players.push(player);
    }
  }

  return (
    <>
      <Autocomplete
        value={value}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="searchId"
        options={players}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          return option.player_name;
        }}
        onChange={(event, newValue) => {
          if(newValue!=null)
          {
            setValue(newValue);
          } 
        }}
        renderOption={(option) => option.player_name}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} variant="outlined" />
        )}
      />
      <DragAndDropPlayers player={value}/>
    </>
  );
}