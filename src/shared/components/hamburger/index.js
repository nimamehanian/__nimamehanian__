import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import classnames from 'classnames';

class Hamburger extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const openFrom = {};
    openFrom[this.props.openFrom] = '0px';

    let barClasses = classnames({
      bar: true,
      open: this.props.isOpen
    });

    return (
      <div className='toggler' style={{ ...openFrom }}>
        <div className='bar-container'>
          <Motion style={{
            opacity: spring(this.props.isOpen ? 0 : 1, this.props.behavior),
            offsetY: spring(this.props.isOpen ? -10 : 0, this.props.behavior)
          }}>
            {({ opacity, offsetY }) =>
              <span className={barClasses}
                style={{
                  transform: `translate3d(0px, ${offsetY}px, 0px)`,
                  opacity: (Math.round(opacity * 10) / 10),
                  willChange: 'transform, opacity'
                }}
              />
            }
          </Motion>

          <Motion style={{
            rotate: spring(this.props.isOpen ? -315 : 0, this.props.behavior)}}>
            {({ rotate }) =>
              <span className={barClasses}
                style={{
                  transform: `rotate(${rotate}deg)`,
                  willChange: 'transform'
                }}
              />
            }
          </Motion>

          <Motion style={{
            rotate: spring(this.props.isOpen ? -45 : 0, this.props.behavior),
            offsetX: spring(this.props.isOpen ? 6 : 0, this.props.behavior),
            offsetY: spring(this.props.isOpen ? -6 : 0, this.props.behavior)
          }}>
            {({ rotate, offsetX, offsetY }) =>
              <span className={barClasses}
                style={{
                  transform: `rotate(${rotate}deg) translate3d(${offsetX}px, ${offsetY}px, 0px)`,
                  willChange: 'transform'
                }}
              />
            }
          </Motion>
        </div>
      </div>
    );
  }
}

export default Hamburger;
