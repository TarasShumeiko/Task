import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import TextEditor from '../TextEditor';
import backgroundImage from '../../assets/background.png';

const useStyles = makeStyles({
  '@global': {
    'html, body, #root': {
      width: '100%',
      height: '100%',
    },
    body: {
      margin: 0,
      overflow: 'hidden',
    },
  },
  container: {
    height: '100%',
    padding: '10px',
    backgroundColor: 'lightblue',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  box: {
    position: 'fixed',
  },
});

const Section = () => {
  const imageEl = useRef(null);
  const boxEl = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      const rect = imageEl.current.getBoundingClientRect();
      const rectTop = `${Math.round(rect.height * 0.15 + rect.top)}px`;
      const rectLeft = `${Math.round(rect.width * 0.15 + rect.left)}px`;
      boxEl.current.style.top = rectTop;
      boxEl.current.style.left = rectLeft;
    };
    window.addEventListener('resize', handleResize);
    requestAnimationFrame(handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Grid container alignItems="center" justify="center" className={classes.container}>
      <img ref={imageEl} src={backgroundImage} alt="background" className={classes.image} />
      <div ref={boxEl} className={classes.box}>
        <TextEditor />
      </div>
    </Grid>
  );
};

export default Section;
