import React, { Component } from 'react';

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='badge'>
        <svg width='79px' height='67px' viewBox='329 237 79 67' version='1.1'>
          <g id='Group'
            stroke='none' strokeWidth='1'
            fill='none' fillRule='evenodd'
            transform='translate(329.000000, 237.000000)'
            fontSize='60' fontFamily='ArialMT, Arial' fontWeight='normal'>
            <text id='M' fill='#fff'><tspan x='29.0097656' y='54'>M</tspan></text>
            <text id='N' fill='#fff'><tspan x='0.334960938' y='54'>N</tspan></text>
          </g>
        </svg>
        <div className='name'>
          <p>nima</p>
          <p>mehanian</p>
        </div>
      </div>
    );
  }
}

export default Badge;
