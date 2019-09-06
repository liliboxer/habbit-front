import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HabbitForm({ handleSubmit }) {
  const [habbit, setHabbit] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(habbit, description);
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="habbit name" 
        value={habbit} 
        onChange={({ target }) => setHabbit(target.value)} />
      <input 
        type="text" 
        placeholder="description" 
        value={description} 
        onChange={({ target }) => setDescription(target.value)} />
      <button>Submit</button>
    </form>
  );
}

HabbitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default HabbitForm;
