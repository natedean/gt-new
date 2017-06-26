export const DIAGRAM_TYPES_MAP = {
  staff: 'staff',
  staffScale: 'staff-scale',
  staffChord: 'staff-chord',
  text: 'text',
  guitar: 'guitar'
};

export const DIAGRAM_TYPES = Object.keys(DIAGRAM_TYPES_MAP).map(key => DIAGRAM_TYPES_MAP[key]);
