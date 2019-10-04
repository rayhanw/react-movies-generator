import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import useStyles from './styles/styles';

const Form = ({ handleSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const styles = useStyles();

  return (
    <form onSubmit={e => handleSubmit(e, keyword)}>
      <FormControl>
        <InputLabel htmlFor="keyword" className="keyword-label">
          Enter a movie name:
        </InputLabel>
        <Input
          id="keyword"
          className={styles.input}
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
          name="keyword"
          placeholder="Doctor Strange"
        />
      </FormControl>
      <Button type="submit" variant="contained" className={styles.button}>
        Get movie(s)
      </Button>
    </form>
  );
};

export default Form;
