import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    height: '100px',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: '#eee',
  },
  button: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  }
});

const TextEditor = () => {
  const fieldEl = useRef(null);

  const classes = useStyles();

  const [font, setFont] = useState(true);

  const changeFont = () => {
    setFont(!font);
    if (font) {
      fieldEl.current.style.fontWeight = 'bold';
    } else {
      fieldEl.current.style.fontWeight = 'normal';
    }
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        onClick={changeFont}
        size="small"
        variant="contained"
      >
        B
      </Button>
      <input ref={fieldEl} type="text" />
    </div>
  );
};

export default TextEditor;
