import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Times from '../../Data/times';
import DragAndDropPlayers from '../Drag-players';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  const [pickedPlayers, setPickedPlayer] = React.useState([]);
  

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
            if(pickedPlayers.length>0)
            {
              var repeatPlayer = 0;
              for (let i = 0; i < pickedPlayers.length; i++) {
                const player = pickedPlayers[i];
                if(player.player_id == newValue.player_id)
                {
                  repeatPlayer++;
                }
              }

              if(repeatPlayer==0) {
                setPickedPlayer(pickedPlayers => [...pickedPlayers, newValue])
              }
            }
            else
            {
              setPickedPlayer(pickedPlayers => [...pickedPlayers, newValue])
            }
          } 
        }}
        renderOption={(option) => option.player_name}
        style={{ width: 350 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} variant="outlined" />
        )}
      />
      <DragAndDropPlayers players={pickedPlayers}/>
    </>
  );
}