import React, { useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import useStyles from './styles/';
import './styles/Button.css';
import formStyles from './styles/Form.module.css';

const Form = ({ handleSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [disable, setDisable] = useState(true);
  const styles = useStyles();

  useEffect(() => {
    if (keyword.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [keyword]);

  return (
    <form
      id="form-keyword"
      className={styles.form}
      onSubmit={e => handleSubmit(e, keyword)}
    >
      <FormControl style={{ width: '50%' }}>
        <InputLabel htmlFor="keyword" className="keyword-label">
          Click here and enter a movie name
        </InputLabel>
        <Input
          id={formStyles.keyword}
          className={styles.input}
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
          name="keyword"
          placeholder="Doctor Strange"
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        className={styles.button}
        disabled={disable}
        data-color={disable ? 'gray' : 'colorful'}
        style={{ width: '50%' }}
      >
        Get movies
      </Button>
    </form>
  );
};

export default Form;
