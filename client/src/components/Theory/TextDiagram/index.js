import React from 'react';
import { textDiagramShape } from '../../../constants/propShapes';
import './index.css';

const TextDiagram = ({ diagram }) => {
  const notes = diagram.notes.split(' ');
  const tones = diagram.tones.split(' ');

  return (
    <div className="textDiagram">
      { notes.map((note, i) => {
        return (
          <div key={i} className="textDiagram__col">
            <div className="textDiagram__row">{tones[i]}</div>
            <div className="textDiagram__row">{note}</div>
          </div>
        )
      }) }
    </div>
  )
};

export default TextDiagram;

TextDiagram.propTypes = {
  diagram: textDiagramShape
};
