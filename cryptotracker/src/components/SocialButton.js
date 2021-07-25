import React from 'react';
import { Button } from 'react-bootstrap';
const SocialButton = ({ name, icon }) => {
  return (
    <div>
      <Button className='socialButton' variant='dark'>
        <i class={icon}>{name}</i>
      </Button>
    </div>
  );
};

export default SocialButton;
