import PropTypes from 'prop-types';
import { DIAGRAM_TYPES } from './index';

export const staffNoteShape = PropTypes.shape({
  pitch: PropTypes.string.isRequired,
  tone: PropTypes.string.isRequired
});

export const guitarNoteShape = PropTypes.shape({
  fret: PropTypes.number.isRequired,
  string: PropTypes.number.isRequired
});

export const staffDiagramShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(staffNoteShape).isRequired
});

export const staffScaleDiagramShape = PropTypes.shape({
  type: PropTypes.oneOf(DIAGRAM_TYPES).isRequired,
  notes:PropTypes.arrayOf(staffNoteShape).isRequired
});

export const guitarDiagramShape = PropTypes.shape({
  type: PropTypes.oneOf(DIAGRAM_TYPES).isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    string: PropTypes.number.isRequired,
    fret: PropTypes.number.isRequired
  })).isRequired
});

export const textDiagramShape = PropTypes.shape({
  type: PropTypes.oneOf(DIAGRAM_TYPES).isRequired,
  tones: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
});

export const helpersShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  diagrams: PropTypes.arrayOf(PropTypes.oneOfType([textDiagramShape, staffDiagramShape, guitarDiagramShape]))
});

export const questionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  helpers: helpersShape
});
