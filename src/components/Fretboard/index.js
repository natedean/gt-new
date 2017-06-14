import React, {Component} from 'react';
import './index.css';

const isX = string => string.finger === 'x';
const isO = string => string.fret === 0;

export default class extends Component {
    interval;
    speed = 2000;

    chords = [
        [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}], //E
        [{fret: 0, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 0, finger: 0}], //A
        [{fret: 0, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}], // C
        [{fret: 0, finger: "x"},{fret: 0, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 2}], // D
        [{fret: 0, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 2},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}] // C Bar
    ];

    state = {
        currIndex: 0,
        strings: this.chords[0]
    };

    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startInterval() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                currIndex: prevState.currIndex + 1 >= this.chords.length ? 0 : prevState.currIndex + 1
            }))
        }, this.speed);
    }

    render() {
        const strings = this.chords[this.state.currIndex];
        
        return (
            <svg viewBox="0 0 202 200.7" className="fretboard">
                <g id="fretboard">
                    <path className="fretboard-1" d="M12 19.7v180m179-180v180m.5-179.5L12 19.7m179 180H12m35-180v180m36-180v180m36-180v180"/>
                    <path className="fretboard-2" d="M155 19.7v180"/>
                    <path className="frets-3" d="M12.5 56.2h179M12 92.2h179m-179 36h179m-178 36h179"/>
                </g>
                <g id="dots">
                    { strings.map((string, i) => {
                        return (
                            <circle key={i}
                                    data-name="1"
                                    className="fretboard-dot"
                                    cx={12 + (35.6 * i)}
                                    style={{
                                        opacity: isX(string) ? 0 : 1,
                                        transform: `translateY(${34 * string.fret}px)`,
                                        fillOpacity: isO(string) && 0,
                                        stroke: isO(string) && 'black',
                                        strokeOpacity: isO(string) ? 1 : 0,
                                        strokeWidth: isO(string) && '2px'
                                    }}
                                    cy="8"
                                    r="11"
                            />
                        )
                    })}

                    { strings.map((string, i) => {
                        return (
                            <g key={i} className="fretboard-x"
                               style={{ opacity: `${isX(string) ? 1 : 0}`, transform: `translateX(${35 * i}px)` }}>
                                <line className="fretboard-line" x1="6" y1="1" x2="20" y2="16"/>
                                <line className="fretboard-line" x1="20" y1="1" x2="6" y2="16"/>
                            </g>
                        )
                    })}
                </g>
            </svg>
        );
    }
}
