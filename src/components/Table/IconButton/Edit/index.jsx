import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Create';

export default function Edit(props) {
  return (
      <IconButton component="span">
        <EditIcon />
      </IconButton>
  );
}