import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Delete(props) {
  return (
      <IconButton component="span">
       <DeleteIcon />
      </IconButton>
  );
}

