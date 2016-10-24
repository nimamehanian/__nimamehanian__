import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Sidebar from '../sidebar';
import Badge from '../badge';
import Background from '../background';
// import bg1 from '../../shared/images/bg1.jpg';
// import bg2 from '../../shared/images/bg2.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merge: false
    };
    this.animateTitle = this.animateTitle.bind(this);
  }

  animateTitle() {
    this.setState({ merge: true });
  }

  mergeFromValue(charIdx, lineIdx) {
    let val = this.state.merge ?
      0 : ((charIdx + 1) % 2 === 0 ? -98 : 98);

    if ((lineIdx + 1) % 2 === 0) {
      val *= -1;
    }

    return val;
  }

  componentDidMount() {
    setTimeout(this.animateTitle, 100);
  }

  render() {
    const titleData = [
      ['a'],
      ['ux-inspired'],
      ['design-driven'],
      ['product engineer']
    ];

    const subtitleData = 'fusing motion and interaction like nobody else';
    const subtitleData2 = 'i don\'t build MVPs. i build V1s.';

    return (
      <div className='app'>
        <Badge />
        <div className='landscape-message'>
          Please return to portrait mode <span>🙃</span>
        </div>

        <div className='main-title'>
          {titleData.map((line, lineIndex) =>
            <div className='line' key={lineIndex}>
              {line[0].split('').map((char, i) =>
                <span key={i} className='char'
                  style={{
                    transition: `opacity 1800ms cubic-bezier(0.19, 1, 0.22, 1) ${i * 30}ms, -webkit-transform 1800ms cubic-bezier(0.19, 1, 0.22, 1) ${i * 30}ms`,
                    transform: `translate3d(0px, ${this.mergeFromValue.bind(this, i, lineIndex)()}px, 0px)`,
                    opacity: this.state.merge ? 1 : 0,
                    willChange: 'transform'
                  }}
                >{char}
                </span>
              )}
            </div>
          )}

          <div className='subline'>
            {subtitleData.split(' ').map((word, i) =>
              <span key={i}
                className='word'
                style={{
                  transition: `opacity 1800ms cubic-bezier(0.19, 1, 0.22, 1) ${i * 60}ms, -webkit-transform 1800ms cubic-bezier(0.19, 1, 0.22, 1) ${i * 60}ms`,
                  transform: `translate3d(0px, ${this.state.merge ? 0 : 98}px, 0px)`,
                  opacity: this.state.merge ? 1 : 0,
                  willChange: 'transform'
                }}
              >{word}&nbsp;
              </span>
            )}
          </div>
        </div>

        <Background isSidebarOpen={this.props.isSidebarOpen} />
        <Sidebar openFrom='right' />
      </div>
    );
  }
}

export default App;

// <StaggeredMotion
//   defaultStyles={[{ y: 80 }, { y: 60 }, { y: 40 }]}
//   styles={prevStyles => prevStyles.map((_, i) => {
//     return i === 0 ?
//       { y: spring(100, presets.gentle) } :
//       { y: spring(prevStyles[i - 1].y, presets.gentle)}
//   })}
// >
//   {interpolatingStyles =>
//     <div>
//       {interpolatingStyles.map(({y, char}, i) =>
//         <span key={i} className='char'
//           style={{ transform: `translate3d(0px, ${y}px, 0px)` }}
//         >
//           D
//         </span>
//       )}
//     </div>
//   }
// </StaggeredMotion>
