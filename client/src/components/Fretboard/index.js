import React, {Component} from 'react';
import './index.css';

const isX = string => string.finger === 'x';
const isO = string => string.fret === 0;

export default class extends Component {
  render() {
    const {width, notes} = this.props;

    return (
      <svg viewBox="0 0 202 210" style={{width: '202px', maxWidth: `${width}px`}} className="fretboard">
        <g id="fretboard" style={{transform: 'translateY(9px)'}}>
          <path className="fretboard-1"
                d="M12 19.7v180m179-180v180m.5-179.5L12 19.7m179 180H12m35-180v180m36-180v180m36-180v180"/>
          <path className="fretboard-2" d="M155 19.7v180"/>
          <path className="frets-3" d="M12.5 56.2h179M12 92.2h179m-179 36h179m-178 36h179"/>
        </g>
        <g id="dots">
          { notes.map((note, i) => {
            if (!note) return; // no note for this string

            return (
              <circle key={i}
                      data-name="1"
                      className="fretboard-dot"
                      cx={12 + (35.6 * i)}
                      style={{
                        opacity: isX(note) ? 0 : 1,
                        transform: `translateY(${7 + (35 * note.fret)}px)`,
                        fillOpacity: isO(note) && 0,
                        stroke: isO(note) && 'black',
                        strokeOpacity: isO(note) ? 1 : 0,
                        strokeWidth: isO(note) && '2px'
                      }}
                      cy="8"
                      r="11"
              />
            )
          })}

          { notes.map((note, i) => {
            if (!note) return; // no note for this string

            return (
              <g key={i} className="fretboard-x"
                 style={{opacity: `${isX(note) ? 1 : 0}`, transform: `translateX(${35 * i}px)`}}>
                <line className="fretboard-line" x1="6" y1="8" x2="20" y2="24"/>
                <line className="fretboard-line" x1="20" y1="8" x2="6" y2="24"/>
              </g>
            )
          })}
        </g>
      </svg>
    );
  }
}
