module.exports = {
  'note-E2': {
    text: 'What note is this?',
    difficulty: 1,
    staff: [{name: 'E2', yOffset: '0'}],
    fretboard: [{fret: 0, finger: 0}],
    answers: [
      {
        "text": 'E',
        "isCorrect": true
      },
      {
        "text": 'A',
        "isCorrect": false
      },
      {
        "text": 'G',
        "isCorrect": false
      },
      {
        "text": 'B',
        "isCorrect": false
      }
    ]
  },
  'note-A2': {
    text: 'What note is this?',
    difficulty: 1,
    staff: [{name: 'A2', yOffset: '15'}],
    fretboard: [null, {fret: 0, finger: 0}],
    answers: [
      {
        "text": 'A',
        "isCorrect": true
      },
      {
        "text": 'D',
        "isCorrect": false
      },
      {
        "text": 'G',
        "isCorrect": false
      },
      {
        "text": 'B',
        "isCorrect": false
      }
    ]
  },
  'chord-E0': {
    text: 'What chord is this?',
    difficulty: 2,
    staff: [
      {name: 'E2', yOffset: '0'},
      {name: 'B2', yOffset: '20'},
      {name: 'E3', yOffset: '35'},
      {name: 'G3', yOffset: '45'},
      {name: 'B3', yOffset: '55'},
      {name: 'E4', yOffset: '70'},
    ],
    fretboard: [
      {fret: 0, finger: 0},
      {fret: 2, finger: 2},
      {fret: 2, finger: 3},
      {fret: 0, finger: 0},
      {fret: 0, finger: 0},
      {fret: 0, finger: 0},],
    answers: [
      {
        "text": 'E minor',
        "isCorrect": true
      },
      {
        "text": 'D minor',
        "isCorrect": false
      },
      {
        "text": 'G minor',
        "isCorrect": false
      },
      {
        "text": 'B minor',
        "isCorrect": false
      }
    ]
  },
  'chord-Dm0': {
    text: 'What chord is this?',
    difficulty: 2,
    staff: [
      { name: 'D3', yOffset: '30' },
      { name: 'A3', yOffset: '50'},
      { name: 'D4', yOffset: '65'},
      { name: 'D4', yOffset: '65'},
      { name: 'F4', yOffset: '75'},
    ],
    fretboard: [
      {fret: 0, finger: 'x'},
      {fret: 0, finger: 'x'},
      {fret: 0, finger: 0},
      {fret: 2, finger: 2},
      {fret: 3, finger: 3},
      {fret: 1, finger: 1},
    ],
    answers: [
      {
        "text": 'D minor',
        "isCorrect": true
      },
      {
        "text": 'E minor',
        "isCorrect": false
      },
      {
        "text": 'G minor',
        "isCorrect": false
      },
      {
        "text": 'B minor',
        "isCorrect": false
      }
    ]
  }
};
