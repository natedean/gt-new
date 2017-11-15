import React from 'react';
import './index.css';
import StaffDiagram from '../StaffDiagram';
import TextDiagram from '../TextDiagram';
import { helpersShape } from '../../../../constants/propShapes';
import { DIAGRAM_TYPES_MAP } from '../../../../constants';

const Helpers = ({ helpers }) => {
  console.log(helpers);
  return (
    <div className="helpers">
      <p className="helpers__textLine"><strong>Your guess was incorrect</strong></p>
      { helpers && <p className="helpers__textLine">{helpers.text}</p> }
      {/*I'm not liking these big diagrams here, for now. But that may change.*/}
      {/*<div className="helpers__diagramsContainer">*/}
        {/*{ helpers.diagrams.map((diagram, i) => {*/}
          {/*return (*/}
            {/*<div key={i} className="helpers__diagram">{renderDiagram(diagram)}</div>*/}
          {/*)*/}
        {/*}) }*/}
      {/*</div>*/}
    </div>
  )
};

export default Helpers;

Helpers.propTypes = {
  helpers: helpersShape
};

function renderDiagram(diagram) {
  switch (diagram.type) {
    case DIAGRAM_TYPES_MAP.staff:
      return <StaffDiagram diagram={diagram}/>;
    case DIAGRAM_TYPES_MAP.staffScale:
      return <StaffDiagram diagram={diagram}/>;
    case DIAGRAM_TYPES_MAP.guitar:
      return <div>Guitar diagram coming soon</div>;
    case DIAGRAM_TYPES_MAP.text:
      return <TextDiagram diagram={diagram}/>;
    default:
      return <div>No diagram for this type</div>
  }
}
