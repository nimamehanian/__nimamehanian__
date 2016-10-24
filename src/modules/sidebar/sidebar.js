import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { Motion, spring } from 'react-motion';
import Hamburger from '../../shared/components/hamburger';
import Navlink from './navlink';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {};
    styles[this.props.openFrom] = '0px';

    let behavior = this.props.isOpen ?
      { stiffness: 220, damping: 32 } :
      { stiffness: 220, damping: 26 };

    return (
      <div>
        <div
          onClick={this.props.isOpen ? this.props.shut : this.props.open}
          onMouseEnter={this.props.peek}
          onMouseLeave={this.props.hide}
        >
          <Hamburger
            openFrom={this.props.openFrom}
            isOpen={this.props.isOpen}
            behavior={behavior}
          />
        </div>
        <Motion style={{
          r: spring(this.props.isOpen ? 93 : 69, behavior),
          g: spring(this.props.isOpen ? 175 : 129, behavior),
          b: spring(this.props.isOpen ? 150 : 111, behavior),
          offsetX: spring(this.props.isOpen ? 0 :
            (this.props.openFrom === 'right' ?
              (this.props.isPeeking ? 94 : 97) :
              -(this.props.isPeeking ? 94 : 97)
            ), behavior
          )
        }}>
          {({ r, g, b, offsetX }) =>
            <div className='sidebar'
              style={{
                ...styles,
                transform: `translate3d(${offsetX}%, 0px, 0px)`,
                background: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
              }}
            >
              <div className='links'>
                {this.props.links.map((link, index) =>
                  link.name === 'home' ?
                  <IndexLink to='/' key={index}>
                    <Navlink
                      name={link.name}
                      selectLink={this.props.selectLink}
                      shut={this.props.shut}
                      index={index}
                      indicesFromActive={Math.abs(this.props.activeIndex - index)}
                      isActive={this.props.activeIndex === index}
                      isSidebarOpen={this.props.isOpen}
                      />
                  </IndexLink>
                  :
                  <Link to={link.name} key={index}>
                    <Navlink
                      name={link.name}
                      selectLink={this.props.selectLink}
                      shut={this.props.shut}
                      index={index}
                      indicesFromActive={Math.abs(this.props.activeIndex - index)}
                      isActive={this.props.activeIndex === index}
                      isSidebarOpen={this.props.isOpen}
                      />
                  </Link>
                )}
              </div>
            </div>
          }
        </Motion>
        <Motion style={{
          opacity: spring(this.props.isOpen ? 1 : 0, behavior)
        }}>
          {({ opacity }) =>
            <div className='screen'
              onClick={this.props.shut}
              style={{
                opacity: `${0.45 * opacity}`,
                display: this.props.isOpen ? 'block' : 'none'
              }}
            />
          }
        </Motion>
      </div>
    );
  }
}
