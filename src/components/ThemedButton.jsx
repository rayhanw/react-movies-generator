import React from 'react';

import Button from '@material-ui/core/Button';

import useStyles from './styles/';
import './styles/Button.css';

const ThemedButton = props => {
  const { button } = useStyles();

  return (
    <Button
      type={props.type}
      variant={props.contained}
      className={button}
      disabled={props.disable}
      data-color={props.disable ? 'gray' : 'colorful'}
      style={{ width: '50%' }}
    >
      {props.text}
    </Button>
  );
};

export default ThemedButton;
