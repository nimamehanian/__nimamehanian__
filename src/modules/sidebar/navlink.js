import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Motion, spring } from 'react-motion';

export default class Navlink extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  selectLink(index) {
    this.props.selectLink(index);
    setTimeout(this.props.shut, 200);
  }

  render() {
    let behavior = { stiffness: 270, damping: 24 };

    let linkClasses = classnames({
      'link': true,
      'is-active': this.props.isActive
    });

    return (
      <div
        className={linkClasses}
        onClick={this.selectLink.bind(this, this.props.index)}
        onMouseOver={() =>
          !this.props.isActive ? this.setState({ isHovered: true }) : null
        }
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Motion style={{
          opacity: spring(this.state.isHovered ? 1 : 0, behavior),
          fillInner: spring(this.state.isHovered ? 1.8 : 1, { stiffness: 135, damping: 20 }),
          fillLeft: spring(this.state.isHovered ? 0 : -100, { stiffness: 260, damping: 28 }),
          fillRight: spring(this.state.isHovered ? 100 : 200, { stiffness: 260, damping: 28 }),
          strokeLeft: spring(this.state.isHovered ? 100 : -2, behavior),
          strokeRight: spring(this.state.isHovered ? -100 : 2, behavior),
          slideTitle: spring(this.props.isSidebarOpen ? 0 : 50, { stiffness: 170, damping: 20 })
        }}>
          {({
            opacity,
            fillInner,
            fillLeft,
            fillRight,
            strokeLeft,
            strokeRight,
            slideTitle
          }) =>
            <div>
              <div className='fill inner'
                style={{
                  transform: `translate3d(50%, 0px, 0px) scaleX(${fillInner})`,
                  opacity: `${Math.round(opacity * 10) / 10}`
                }}
              />

              <div className='fill left'
                style={{
                  transform: `translate3d(${fillLeft}%, 0px, 0px)`
                }}
              />

              <div className='fill right'
                style={{
                  transform: `translate3d(${fillRight}%, 0px, 0px)`
                }}
              />

              <div className='stroke left'
                style={{
                  transform: `translate3d(${strokeLeft}%, 0px, 0px)`,
                  opacity: `${Math.round(opacity * 10) / 10}`
                }}
              />

              <div className='stroke right'
                style={{
                  transform: `translate3d(${strokeRight}%, 0px, 0px)`,
                  opacity: `${Math.round(opacity * 10) / 10}`
                }}
              />

              <div className='title'
                style={{
                  // transition: `-webkit-transform 150ms cubic-bezier(0.39, 0.575, 0.565, 1) ${this.props.indicesFromActive * 2}ms`,
                  transform: `translate3d(${slideTitle}%, 0px, 0px)`
                }}
              >
                {this.props.name}
              </div>
            </div>
          }
        </Motion>
      </div>
    );
  }
}
