import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgPosX: 0,
      bgPosY: 0
    };
  }

  getGamma(e) {
    const y = (e.gamma / 180) * 100;
    const d0 = -90;
    const d1 = 90;
    const r0 = 60;
    const r1 = -60;
    return Math.round((y - d0) * ((r1 - r0) / (d1 - d0)) + r0);
  }

  getX(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const d0 = 0;
    const d1 = 100;
    const r0 = 12;
    const r1 = -12;
    return Math.round((x - d0) * ((r1 - r0) / (d1 - d0)) + r0);
  }

  getY(e) {
    const y = (e.clientY / window.innerHeight) * 100;
    const d0 = 0;
    const d1 = 100;
    const r0 = 12;
    const r1 = -12;
    return Math.round((y - d0) * ((r1 - r0) / (d1 - d0)) + r0);
  }

  getCoordinates(e) {
    const bgPosX = this.getX(e);
    const bgPosY = this.getY(e);
    this.setState({ bgPosX, bgPosY });
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        if (event.gamma) {
          const bgPosX = this.getGamma(event);
          this.setState({ bgPosX });
        }
      });
    }
  }

  render() {
    let behavior = { stiffness: 160, damping: 16 };
    return (
      <Motion style={{
        bgPosX: spring(this.state.bgPosX, behavior),
        bgPosY: spring(this.state.bgPosY, behavior),
        scale: spring(this.props.isSidebarOpen ? 0.94 : 1, { stiffness: 220, damping: 26 })
      }}>
        {({ bgPosX, bgPosY, scale }) =>
          <div
            className='bg-container'
            style={{ transform: `scale(${scale})` }}
            onMouseMove={(e) => this.getCoordinates(e)}
          >
            <div className='backgrounds'
              style={{
                transform: `translate3d(${bgPosX}px, ${bgPosY}px, 0px) scale(1.15)`
              }}
            />
          </div>
        }
      </Motion>
    );
  }
}

export default Background;
