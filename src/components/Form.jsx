import React, { useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import ThemedButton from './ThemedButton';

import useStyles from './styles/';
import formStyles from './styles/Form.module.css';

const Form = ({ handleSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [disable, setDisable] = useState(true);
  const styles = useStyles();

  useEffect(() => {
    keyword.length > 0 ? setDisable(false) : setDisable(true);
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
      <ThemedButton
        type="submit"
        variant="contained"
        disable={disable}
        data-color={disable ? 'gray' : 'colorful'}
        text="Get movies"
      />
    </form>
  );
};

export default Form;
