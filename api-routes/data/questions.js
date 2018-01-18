module.exports = {
  'note-E2': {
    text: 'What note is this?',
    difficulty: 1,
    category: 'Notes',
    staff: ['E2'],
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
    category: 'Notes',
    staff: ['A2'],
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
  'note-D3': {
    text: 'What note is this?',
    difficulty: 1,
    category: 'Notes',
    staff: ['D3'],
    fretboard: [null, null, {fret: 0, finger: 0}],
    answers: [
      {
        "text": 'D',
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
        "text": 'E',
        "isCorrect": false
      }
    ]
  },
  'note-G3': {
    text: 'What note is this?',
    difficulty: 1,
    category: 'Notes',
    staff: ['G3'],
    fretboard: [null, null, null, {fret: 0, finger: 0}],
    answers: [
      {
        "text": 'G',
        "isCorrect": true
      },
      {
        "text": 'D',
        "isCorrect": false
      },
      {
        "text": 'E',
        "isCorrect": false
      },
      {
        "text": 'B',
        "isCorrect": false
      }
    ]
  },
  'note-B3': {
    text: 'What note is this?',
    difficulty: 1,
    category: 'Notes',
    staff: ['B3'],
    fretboard: [null, null, null, null, {fret: 0, finger: 0}],
    answers: [
      {
        "text": 'B',
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
        "text": 'E',
        "isCorrect": false
      }
    ]
  },
  'note-E4': {
    text: 'What note is this?',
    difficulty: 1,
    category: 'Notes',
    staff: ['E4'],
    fretboard: [null, null, null, null, null, {fret: 0, finger: 0}],
    answers: [
      {
        "text": 'E',
        "isCorrect": true
      },
      {
        "text": 'B',
        "isCorrect": false
      },
      {
        "text": 'G',
        "isCorrect": false
      },
      {
        "text": 'D',
        "isCorrect": false
      }
    ]
  },
  'chord-C1': {
    text: 'What chord is this?',
    difficulty: 2,
    category: 'Chords',
    staff: ['C3', 'E3', 'G3', 'C4', 'E4'],
    fretboard: [
      {fret: 0, finger: 'x'},
      {fret: 3, finger: 3},
      {fret: 2, finger: 2},
      {fret: 0, finger: 0},
      {fret: 1, finger: 1},
      {fret: 0, finger: 0},],
    answers: [
      {
        "text": 'C Major',
        "isCorrect": true
      },
      {
        "text": 'D Major',
        "isCorrect": false
      },
      {
        "text": 'G Major',
        "isCorrect": false
      },
      {
        "text": 'A Major',
        "isCorrect": false
      }
    ]
  },
  'chord-Em0': {
    text: 'What chord is this?',
    difficulty: 2,
    category: 'Chords',
    staff: ['E2', 'B2', 'E3', 'G3', 'B3', 'E4',],
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
  'chord-F1': {
    text: 'What chord is this?',
    difficulty: 2,
    category: 'Chords',
    staff: ['F3', 'A3', 'C4', 'F4',],
    fretboard: [
      {fret: 0, finger: 'x'},
      {fret: 0, finger: 'x'},
      {fret: 3, finger: 3},
      {fret: 2, finger: 2},
      {fret: 1, finger: 1},
      {fret: 1, finger: 1},
    ],
    answers: [
      {
        "text": 'F Major',
        "isCorrect": true
      },
      {
        "text": 'G Major',
        "isCorrect": false
      },
      {
        "text": 'E Major',
        "isCorrect": false
      },
      {
        "text": 'A Major',
        "isCorrect": false
      }
    ]
  },
  'chord-Dm1': {
    text: 'What chord is this?',
    difficulty: 3,
    category: 'Chords',
    staff: ['D3', 'A3', 'D4', 'F4',],
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
  },
};
