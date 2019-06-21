import React, { Component } from 'react';
import backgroundImage from './background/background-image.png';

const Container = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100%',
};

const Box = {
  maxWidth: 500,
  maxHeight: 500,
};

const BackgroundImage = {
  display: 'inline-block',
  width: '100%',
  height: 'auto',
};

class MainBlock extends Component {

  state = {
    rectTop: 0,
    rectLeft: 0
  };

  componentDidMount() {
    window.onresize = () => {
      const rect = this.mainBlock.getBoundingClientRect();
      const rectTop = Math.round(rect.height * 0.15 + rect.top);
      const rectLeft = Math.round(rect.width * 0.15 + rect.left);
      this.setState({
        rectTop,
        rectLeft
      });
    };
  }

  render() {
    return (
      <div style={Container}>
        <div style={Box}>
          <img
            src={backgroundImage}
            alt="backgroundImage"
            style={BackgroundImage}
            ref={(block) => this.mainBlock = block}
          />
        </div>
      </div>
    )
  }
}

export default MainBlock;
