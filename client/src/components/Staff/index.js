import React from 'react';
import './index.css';

const Staff = ({children}) => (
  <svg className="staff" viewBox={`0 0 120 120`}>
    <line className="staff--line" x1="50" y1="10" x2="70" y2="10"/>
    <line className="staff--line" x1="50" y1="20" x2="70" y2="20"/>
    <line className="staff--line" x1="50" y1="30" x2="70" y2="30"/>

    <line className="staff--line" x1="0" y1="40" x2="200" y2="40"/>
    <line className="staff--line" x1="0" y1="50" x2="200" y2="50"/>
    <line className="staff--line" x1="0" y1="60" x2="200" y2="60"/>
    <line className="staff--line" x1="0" y1="70" x2="200" y2="70"/>
    <line className="staff--line" x1="0" y1="80" x2="200" y2="80"/>

    <line className="staff--line" x1="50" y1="90" x2="70" y2="90"/>
    <line className="staff--line" x1="50" y1="100" x2="70" y2="100"/>
    <line className="staff--line" x1="50" y1="110" x2="70" y2="110"/>

    <g className="staff--trebleClef">
      <path className="staff--trebleClefBackground" d="M46.42 105.58H0V0h46.42zM30.5 78.07a1.62 1.62 0 0 1 .24-.12c.32-.14.65-.27 1-.42s.73-.37 1.1-.56a5.8 5.8 0 0 0 .59-.35l.18-.11c.22-.14.44-.27.66-.41s.42-.3.63-.46l.45-.34.52-.44a4.24 4.24 0 0 0 .38-.34l.31-.32c.18-.18.37-.36.54-.55a15 15 0 0 0 1.13-1.43c.12-.18.26-.35.37-.53s.38-.61.55-.93a12.31 12.31 0 0 0 .77-1.64c.07-.19.16-.38.22-.57.15-.51.31-1 .41-1.54s.15-.91.21-1.37v-2.41a.42.42 0 0 0 0-.09c-.05-.26 0-.54-.09-.8s-.06-.54-.11-.8c-.08-.45-.17-.89-.29-1.33a12.51 12.51 0 0 0-.67-1.92c-.08-.19-.18-.37-.26-.55a9.58 9.58 0 0 0-.77-1.34c-.17-.26-.36-.51-.55-.76a16.78 16.78 0 0 0-1.11-1.26l-.07-.06-.25-.21-.42-.37a12.51 12.51 0 0 0-1.32-1 10.7 10.7 0 0 0-1.08-.58l-.17-.07c-.37-.14-.75-.3-1.13-.4s-.54-.16-.82-.22-.49-.11-.74-.15-.66-.11-1-.13a6 6 0 0 0-.6-.06h-2.03a5.71 5.71 0 0 0-.91.05h-.27a.1.1 0 0 1-.11-.08L25.8 50l-.23-1.28c-.09-.48-.18-1-.26-1.45l-.33-1.88c-.07-.4-.15-.8-.22-1.19l-.34-1.91-.19-1.09a1.46 1.46 0 0 1 .2-.18l1.33-1c.37-.27.73-.55 1.07-.85l.25-.21.71-.68.18-.19c.73-.84 1.43-1.69 2.13-2.56.42-.53.84-1.06 1.23-1.61a12.42 12.42 0 0 0 .76-1.18c.25-.44.51-.88.75-1.32.33-.61.65-1.22.94-1.85a18.53 18.53 0 0 0 1.13-3 19.11 19.11 0 0 0 .47-2.18c0-.28.08-.55.13-.83s.05-.55.09-.83 0-.52.07-.78 0-.63 0-1a.84.84 0 0 1 0-.23 1.64 1.64 0 0 0 0-.37v-1a3.08 3.08 0 0 0 0-.69.42.42 0 0 1 0-.09 12.36 12.36 0 0 0-.12-1.29c0-.4-.13-.8-.2-1.2s-.22-1-.36-1.52c-.19-.66-.39-1.32-.62-2l-.21-.57c-.23-.65-.5-1.28-.76-1.92S32.75 8.76 32.36 8q-.33-.62-.73-1.2a7.34 7.34 0 0 0-.74-.92 2.86 2.86 0 0 0-.84-.61 1.45 1.45 0 0 0-.85-.12 3 3 0 0 0-.91.3 5.24 5.24 0 0 0-.92.61c-.22.17-.41.37-.61.56a7.37 7.37 0 0 0-.66.71 20.5 20.5 0 0 0-1.53 2c-.48.74-.94 1.48-1.38 2.25-.32.57-.62 1.15-.9 1.74-.2.42-.38.85-.55 1.28s-.32.86-.44 1.29a9 9 0 0 0-.3 1.27c0 .31-.11.63-.16.94s-.1.69-.14 1c-.05.53-.13 1-.16 1.58v.66a6 6 0 0 0 0 .84.34.34 0 0 1 0 .11 1.23 1.23 0 0 0 0 .34v1.21a1 1 0 0 0 0 .14v.84a.65.65 0 0 0 0 .17 1.28 1.28 0 0 1 0 .32v2.9a4.67 4.67 0 0 0 0 .58c.06.56.15 1.13.21 1.69s.14 1 .22 1.49.12.76.18 1.14l.1.57a.17.17 0 0 1 0 .15l-1.69 1.25-.81.6L17.29 37c-.39.3-.76.61-1.13.91l-1.16.95-.66.56c-.17.15-.33.31-.51.45s-.26.24-.4.35-.53.45-.78.69-.31.3-.48.44a5.1 5.1 0 0 0-.43.41l-.55.58c-.14.15-.29.29-.43.45-.34.39-.69.78-1 1.18q-.69.85-1.31 1.73c-.29.41-.56.83-.82 1.25-.4.63-.76 1.27-1.11 1.93-.17.33-.32.66-.49 1s-.25.52-.37.79l-.38.91c-.07.16-.13.32-.19.49s-.14.44-.22.66a9.2 9.2 0 0 0-.27.89c0 .07 0 .15-.06.22a14.2 14.2 0 0 0-.39 1.78A10.2 10.2 0 0 0 4 57.13a.23.23 0 0 1 0 .06 1.52 1.52 0 0 0 0 .4 2 2 0 0 1 0 .29 2.14 2.14 0 0 0 0 .55v.78a1.35 1.35 0 0 0 0 .2c0 .19 0 .38.06.57s0 .5.07.75c.05.43.12.86.17 1.29s.1.61.16.91c.09.46.18.91.29 1.36.05.2.09.4.15.59.16.54.31 1.08.52 1.6.12.3.22.6.36.89.22.48.45.95.71 1.4.08.14.16.29.25.43.21.32.42.64.65.94a17.38 17.38 0 0 0 1.85 2.13l.45.43c.22.2.43.41.66.6s.69.57 1 .83.87.63 1.31.93c.68.45 1.38.87 2.1 1.27q.67.37 1.35.71c.45.22.89.45 1.36.64a9.41 9.41 0 0 0 1.4.46c.37.09.75.17 1.12.23s.74.1 1.11.15l.69.06c.26 0 .52.05.78.05h.18a1.39 1.39 0 0 0 .3 0 2.17 2.17 0 0 1 .27 0 4.58 4.58 0 0 0 .64 0h1.64a2.71 2.71 0 0 0 .36 0h2.07l.93-.12c.08 0 .12 0 .13.08s0 .19 0 .29c.08.49.17 1 .24 1.48 0 .27.09.53.13.8l.17 1 .37 1.39.3 1.77c.05.31.11.63.16.94s.13.78.18 1.17.08.61.11.92 0 .52.07.78 0 .65.07 1a.42.42 0 0 1 0 .09 13.09 13.09 0 0 1 0 1.59 7.08 7.08 0 0 1-.06.78 7.69 7.69 0 0 1-.3 1.5 4.42 4.42 0 0 1-.32.78 7.34 7.34 0 0 1-.55.86 8 8 0 0 1-.8.94 8.49 8.49 0 0 1-.78.72 12 12 0 0 1-1 .75c-.31.2-.63.38-1 .55a8.5 8.5 0 0 1-1.5.61 7.33 7.33 0 0 1-1.51.31 4 4 0 0 1-.48 0 .91.91 0 0 0-.3 0 .23.23 0 0 1-.12 0 2 2 0 0 0-.48 0h-.48l-.69-.07h-.21a11 11 0 0 1-1.62-.36 5.24 5.24 0 0 1-.81-.33 4.27 4.27 0 0 1-.87-.57 3.9 3.9 0 0 1-.51-.54.11.11 0 0 1 0-.11l.37-.12a13.18 13.18 0 0 0 1.45-.5 9.34 9.34 0 0 0 1.57-.81 6.94 6.94 0 0 0 1.06-.82 5.79 5.79 0 0 0 .51-.58 4.62 4.62 0 0 0 .73-1.36 3.87 3.87 0 0 0 .13-.45c0-.15 0-.31.08-.46s0-.39.06-.57a.63.63 0 0 0 0-.17v-.4a4.24 4.24 0 0 0-.23-1.25 4.38 4.38 0 0 0-.48-1 5.22 5.22 0 0 0-.72-.89 6.19 6.19 0 0 0-.87-.71 6.1 6.1 0 0 0-1.43-.74 5.11 5.11 0 0 0-1.2-.28h-.61a6.62 6.62 0 0 0-1.38.14 5.63 5.63 0 0 0-1 .31 5.37 5.37 0 0 0-1.09.62l-.09.07a8.44 8.44 0 0 0-.63.59 6.82 6.82 0 0 0-.61.79 6.13 6.13 0 0 0-.44.76 6.64 6.64 0 0 0-.36.92 6 6 0 0 0-.21.84c0 .28-.08.55-.11.83s0 .44 0 .66 0 .56.05.83a4.25 4.25 0 0 0 .11.8 5.68 5.68 0 0 0 .72 1.83 6.51 6.51 0 0 0 1.43 1.64 9.91 9.91 0 0 0 1.37.95 15.42 15.42 0 0 0 1.68.81 14.39 14.39 0 0 0 1.85.63 13.53 13.53 0 0 0 1.87.36 11.8 11.8 0 0 0 1.72.11h.3a8.28 8.28 0 0 0 1.21-.07 11.46 11.46 0 0 0 1.43-.24 10.44 10.44 0 0 0 1.24-.37 10.28 10.28 0 0 0 1.92-.93 9 9 0 0 0 1.08-.79 6.59 6.59 0 0 0 .67-.62c.08-.1.19-.17.28-.27a14.11 14.11 0 0 0 .94-1.17c.26-.37.5-.75.72-1.14A5.49 5.49 0 0 0 32 94a8 8 0 0 0 .24-1.39 3.21 3.21 0 0 1 0-.35 2.09 2.09 0 0 0 0-.4v-1a2.47 2.47 0 0 0 0-.58.37.37 0 0 1 0-.09c0-.36 0-.71-.07-1.07s-.1-.86-.15-1.29c-.07-.63-.18-1.26-.28-1.89-.07-.45-.15-.89-.22-1.34l-.33-2.11c-.07-.48-.15-1-.22-1.43s-.11-.7-.16-1.06l-.25-1.66c-.04-.08-.05-.17-.06-.27z"/>
      <path d="M30.5 78.07v.29l.28 1.64c.05.35.11.7.16 1.06s.15 1 .22 1.43c.11.7.21 1.41.33 2.11.07.45.16.89.22 1.34.1.63.21 1.25.28 1.89.05.43.11.86.15 1.29s.07.71.07 1.07a.37.37 0 0 0 0 .09 2.47 2.47 0 0 1 0 .58v1a2.09 2.09 0 0 1 0 .4 3.21 3.21 0 0 0 0 .35A8 8 0 0 1 32 94a5.49 5.49 0 0 1-.56 1.37c-.23.39-.46.77-.72 1.14a14.11 14.11 0 0 1-.94 1.17c-.08.1-.19.17-.28.27a6.59 6.59 0 0 1-.67.62 9 9 0 0 1-1.08.79 10.28 10.28 0 0 1-1.92.93 10.44 10.44 0 0 1-1.24.37 11.46 11.46 0 0 1-1.43.24 8.28 8.28 0 0 1-1.21.07h-.3a11.8 11.8 0 0 1-1.72-.11 13.53 13.53 0 0 1-1.87-.36 14.39 14.39 0 0 1-1.85-.63 15.42 15.42 0 0 1-1.68-.81 9.91 9.91 0 0 1-1.37-.95 6.51 6.51 0 0 1-1.43-1.64 5.68 5.68 0 0 1-.73-1.79 4.25 4.25 0 0 1-.11-.8c-.07-.28 0-.56-.05-.83s0-.44 0-.66.06-.56.11-.83a6 6 0 0 1 .21-.84 6.64 6.64 0 0 1 .36-.92 6.13 6.13 0 0 1 .44-.76 6.82 6.82 0 0 1 .61-.79 8.44 8.44 0 0 1 .63-.59l.09-.07a5.37 5.37 0 0 1 1.07-.59 5.63 5.63 0 0 1 1-.31 6.62 6.62 0 0 1 1.38-.14h.61a5.11 5.11 0 0 1 1.2.28 6.1 6.1 0 0 1 1.43.74 6.19 6.19 0 0 1 .87.71 5.22 5.22 0 0 1 .72.89 4.38 4.38 0 0 1 .48 1 4.24 4.24 0 0 1 .23 1.25v.4a.63.63 0 0 1 0 .17c0 .19 0 .38-.06.57s0 .31-.08.46a3.87 3.87 0 0 1-.13.45 4.62 4.62 0 0 1-.73 1.36 5.79 5.79 0 0 1-.51.58 6.94 6.94 0 0 1-1.06.82 9.34 9.34 0 0 1-1.57.81 13.18 13.18 0 0 1-1.45.5l-.37.12a.11.11 0 0 0 0 .11 3.9 3.9 0 0 0 .51.54 4.27 4.27 0 0 0 .87.57 5.24 5.24 0 0 0 .81.33 11 11 0 0 0 1.62.36h.21l.69.07h.48a2 2 0 0 1 .48 0 .23.23 0 0 0 .12 0 .91.91 0 0 1 .3 0 4 4 0 0 0 .48 0 7.33 7.33 0 0 0 1.51-.31 8.5 8.5 0 0 0 1.5-.61c.33-.17.65-.35 1-.55a12 12 0 0 0 1-.75 8.49 8.49 0 0 0 .78-.72 8 8 0 0 0 .8-.94 7.34 7.34 0 0 0 .55-.86 4.42 4.42 0 0 0 .32-.78 7.69 7.69 0 0 0 .3-1.5 7.08 7.08 0 0 0 .06-.78 13.09 13.09 0 0 0 0-1.59.42.42 0 0 0 0-.09c-.06-.32 0-.65-.07-1s0-.52-.07-.78-.06-.61-.11-.92-.12-.78-.18-1.17-.1-.63-.16-.94l-.12-1.8-.26-1.55-.17-1c0-.27-.1-.53-.13-.8-.07-.5-.16-1-.24-1.48v-.29s-.06-.09-.13-.08l-.93.12h-2.13a2.71 2.71 0 0 1-.36 0H24a4.58 4.58 0 0 1-.64 0 2.17 2.17 0 0 0-.27 0 1.39 1.39 0 0 1-.3 0h-.18c-.26 0-.52 0-.78-.05l-.69-.06c-.37 0-.74-.09-1.11-.15s-.75-.14-1.12-.23a9.41 9.41 0 0 1-1.4-.46c-.46-.2-.91-.42-1.36-.64s-.91-.46-1.35-.71c-.72-.4-1.42-.82-2.1-1.27q-.67-.45-1.31-.93c-.36-.27-.7-.55-1-.83s-.44-.39-.66-.6l-.45-.43a17.38 17.38 0 0 1-1.85-2.13c-.23-.31-.44-.63-.65-.94-.09-.14-.17-.29-.25-.43-.26-.46-.49-.93-.71-1.4-.14-.29-.24-.59-.36-.89-.21-.52-.36-1.06-.52-1.6-.06-.19-.1-.39-.15-.59-.12-.45-.21-.9-.29-1.36-.06-.3-.12-.61-.16-.91s-.12-.86-.17-1.29c0-.25 0-.5-.07-.75s0-.38-.06-.57a1.35 1.35 0 0 1 0-.2v-.78a2.14 2.14 0 0 1 0-.55 2 2 0 0 0 0-.29 1.52 1.52 0 0 1 0-.4.23.23 0 0 0 0-.06 10.2 10.2 0 0 1 .17-1.52 14.2 14.2 0 0 1 .39-1.78c0-.07 0-.15.06-.22a9.2 9.2 0 0 1 .27-.89c.08-.22.14-.44.22-.66s.12-.33.19-.49l.38-.91c.11-.27.23-.53.37-.79s.32-.67.49-1c.34-.66.71-1.3 1.11-1.93.27-.42.53-.84.82-1.25q.63-.89 1.31-1.73c.33-.4.68-.79 1-1.18.13-.16.29-.3.43-.45l.55-.58a5.1 5.1 0 0 1 .43-.41c.17-.14.33-.29.48-.44s.51-.47.78-.69.26-.24.4-.35.34-.3.51-.45l.66-.56 1.12-.93c.38-.3.75-.62 1.13-.91l1.64-1.28.81-.6 1.69-1.25a.17.17 0 0 0 0-.15l-.1-.57-.18-1.14s-.16-1-.22-1.49-.16-1.13-.21-1.69a4.67 4.67 0 0 1 0-.58v-2.9a1.28 1.28 0 0 0 0-.32.65.65 0 0 1 0-.17v-.84a1 1 0 0 1 0-.14v-1.21a1.23 1.23 0 0 1 0-.34.34.34 0 0 0 0-.11 6 6 0 0 1 0-.84v-.66c0-.53.11-1.05.16-1.58 0-.35.09-.69.14-1s.12-.63.16-.94a9 9 0 0 1 .11-1.05c.12-.44.27-.87.44-1.29s.35-.86.55-1.28c.28-.59.58-1.17.9-1.74.43-.76.9-1.51 1.38-2.25a20.5 20.5 0 0 1 1.53-2 7.37 7.37 0 0 1 .66-.71c.21-.19.4-.39.61-.56a5.24 5.24 0 0 1 .92-.61 3 3 0 0 1 .91-.3 1.45 1.45 0 0 1 .85.12 2.86 2.86 0 0 1 .84.61 7.34 7.34 0 0 1 .74.92q.39.58.73 1.2.58 1.08 1.06 2.21c.27.64.54 1.27.76 1.92l.21.57c.23.65.43 1.31.62 2 .14.5.26 1 .36 1.52s.15.79.2 1.2a12.36 12.36 0 0 1 .12 1.29.42.42 0 0 0 0 .09 3.08 3.08 0 0 1 0 .69v1a1.64 1.64 0 0 1 0 .37.84.84 0 0 0 0 .23v1s0 .52-.07.78 0 .56-.09.83-.09.55-.13.83a19.11 19.11 0 0 1-.47 2.18 18.53 18.53 0 0 1-1.13 3c-.29.63-.61 1.24-.94 1.85-.24.45-.5.88-.75 1.32a12.42 12.42 0 0 1-.79 1.01c-.4.55-.81 1.08-1.23 1.61-.69.86-1.4 1.72-2.13 2.56l-.18.19-.71.68-.25.21c-.35.29-.71.58-1.07.85l-1.33 1a1.46 1.46 0 0 0-.2.18l.19 1.09.34 1.91c.07.4.15.8.22 1.19l.33 1.88s.17 1 .26 1.45l.23 1.2.2 1.08a.1.1 0 0 0 .11.08h.27a5.71 5.71 0 0 1 .91-.05h2.01a6 6 0 0 1 .6.06c.33 0 .66.09 1 .13s.49.1.74.15.55.14.82.22.76.26 1.13.4l.17.07a10.7 10.7 0 0 1 1.08.58 12.51 12.51 0 0 1 1.32 1l.42.37.25.21.07.06a16.78 16.78 0 0 1 1.1 1.3c.19.25.38.5.55.76a9.58 9.58 0 0 1 .77 1.34c.08.19.18.37.26.55a12.51 12.51 0 0 1 .67 1.92c.12.44.21.88.29 1.33 0 .27.07.54.11.8s0 .54.09.8a.42.42 0 0 1 0 .09v2.41c-.06.46-.11.92-.21 1.37s-.26 1-.41 1.54c-.06.19-.15.38-.22.57a12.31 12.31 0 0 1-.77 1.64c-.17.32-.36.62-.55.93s-.26.35-.37.53a15 15 0 0 1-1.13 1.43c-.16.2-.36.37-.54.55l-.31.32a4.24 4.24 0 0 1-.38.34l-.52.44-.45.34c-.21.15-.41.31-.63.46s-.44.28-.66.41l-.18.11a5.8 5.8 0 0 1-.59.35c-.36.19-.73.38-1.1.56s-.64.28-1 .42a1.62 1.62 0 0 0-.22.1zM23 42.19a.13.13 0 0 0-.12 0c-.28.16-.54.34-.81.51-.51.34-1 .7-1.47 1.06s-.87.69-1.3 1l-.82.68-.72.62-.21.17-.58.51c-.32.27-.63.55-.93.83-.55.52-1.1 1-1.61 1.57-.17.18-.35.35-.52.53-.36.39-.72.78-1.06 1.19a20.73 20.73 0 0 0-1.47 1.95c-.39.59-.78 1.2-1.13 1.81-.2.35-.41.71-.6 1.07s-.32.64-.48 1a18.53 18.53 0 0 0-.72 1.72 14.8 14.8 0 0 0-.65 2.4 8.79 8.79 0 0 0-.16 1.67v1.16s.06.52.1.77A10.72 10.72 0 0 0 8 65.64c.07.27.15.54.23.81a10.64 10.64 0 0 0 .4 1.09A13.25 13.25 0 0 0 9.37 69q.3.52.65 1a13.5 13.5 0 0 0 1 1.31c.27.3.55.59.84.87a8 8 0 0 0 .59.54c.21.17.4.35.61.52a17.39 17.39 0 0 0 4.1 2.5c.47.2.94.39 1.43.55s.9.28 1.36.39l1.09.23c.34.06.68.11 1 .15s.78.08 1.17.11h1.11a3.54 3.54 0 0 0 .72 0h.12a6.72 6.72 0 0 0 .76 0l.6-.06c.38 0 .76-.09 1.14-.15h.18l.8-.15h.12c0-.14 0-.27-.06-.4l-.34-1.94-.33-1.88c-.09-.51-.19-1-.27-1.54s-.2-1.14-.29-1.71-.18-1.06-.28-1.6c0-.26-.09-.51-.13-.77-.07-.44-.15-.87-.23-1.31l-.21-1.25-.11-1.41c-.07-.4-.13-.8-.19-1.2s-.15-.87-.23-1.31l-.32-1.88a1 1 0 0 0 0-.14.08.08 0 0 0-.09-.06 4.41 4.41 0 0 0-.6 0 6.15 6.15 0 0 0-.9.11 5 5 0 0 0-.76.17 7 7 0 0 0-1.35.5 6.32 6.32 0 0 0-.85.5c-.1.07-.21.12-.3.2s-.39.33-.57.52-.35.38-.51.57a6.5 6.5 0 0 0-.84 1.35 5.71 5.71 0 0 0-.44 1.32 5.38 5.38 0 0 0-.13 1.23v.78a5.49 5.49 0 0 0 .24 1.25 7.07 7.07 0 0 0 .69 1.54c.18.3.37.6.58.88s.53.68.83 1a7.39 7.39 0 0 0 .81.74 5.7 5.7 0 0 0 .92.61c.05 0 .11.05.13.12l-.26.24a2.3 2.3 0 0 1-.25.28h-.09l-.21-.11-.19-.1c-.24-.11-.46-.23-.69-.36a12.85 12.85 0 0 1-1.8-1.17l-.39-.32a5.91 5.91 0 0 1-.65-.61 9.77 9.77 0 0 1-.7-.84 11.51 11.51 0 0 1-.8-1.22 11.9 11.9 0 0 1-.56-1.12 10.66 10.66 0 0 1-.66-2 7 7 0 0 1-.19-1.14 3.8 3.8 0 0 1-.06-.86v-.58a1.93 1.93 0 0 1 0-.2c0-.34.09-.69.16-1a10.55 10.55 0 0 1 .59-1.85c.15-.37.34-.72.52-1.07a10.77 10.77 0 0 1 .8-1.26c.15-.21.31-.4.47-.61a8.63 8.63 0 0 1 .83-.92 1.81 1.81 0 0 0 .19-.19c.18-.23.43-.38.62-.59a13 13 0 0 1 1.21-.91c.27-.17.52-.36.81-.51l.38-.19a5.62 5.62 0 0 1 .78-.37l.67-.26.25-.1.64-.18.41-.12c.06 0 .09-.05.08-.11s0-.17 0-.26l-.26-1.51-.28-1.43-.25-1.45c-.11-.64-.21-1.27-.33-1.91l-.24-1.34s-.13-.78-.2-1.17c.02-.06.02-.13.02-.19zm-.43-13.36v1.12a2.83 2.83 0 0 0 0 .6.31.31 0 0 1 0 .09c0 .27 0 .54.05.81s.07.59.09.89a3.43 3.43 0 0 0 .06.34l.1-.06c.45-.35.9-.69 1.33-1s.62-.49.9-.77c.24-.2.49-.41.71-.62l.47-.45c.24-.23.49-.46.73-.7s.49-.49.72-.74.6-.65.89-1q.8-.92 1.54-1.89a22.84 22.84 0 0 0 1.54-2.28c.27-.46.53-.93.75-1.42a4.35 4.35 0 0 0 .24-.56c0-.1.07-.2.11-.3s.15-.4.2-.6a6.55 6.55 0 0 0 .28-1.36 3.35 3.35 0 0 0 .06-.81v-.52c0-.36-.07-.73-.13-1.09a7.86 7.86 0 0 0-.31-1.23 3.85 3.85 0 0 0-.65-1.17 2.41 2.41 0 0 0-.55-.49 2.51 2.51 0 0 0-1.3-.42 3.28 3.28 0 0 0-1 .05 3.67 3.67 0 0 0-1.15.34 5.17 5.17 0 0 0-1.1.7 7.51 7.51 0 0 0-1.19 1.27 7.88 7.88 0 0 0-.54.8c-.17.29-.35.59-.51.89s-.25.49-.35.73c-.22.52-.45 1-.65 1.56s-.33 1-.47 1.43c-.2.69-.37 1.38-.51 2.08-.05.25-.09.51-.14.77-.1.52-.17 1-.23 1.57v.17c0 .23 0 .46-.07.69s0 .46 0 .69v.46c.08.45.07.94.07 1.44zm4.62 29.51a.19.19 0 0 0 0 .14c0 .22.07.44.1.66.07.4.14.8.2 1.2.11.66.21 1.31.32 2l.24 1.37.21 1.29c.08.46.16.91.23 1.37s.09.67.16 1 .15.87.22 1.31c.12.66.23 1.33.34 2l.16.94c0 .28.09.55.13.83s.15.84.22 1.25.12.7.17 1.06l.14.83.12.65a.08.08 0 0 0 .12.05l.54-.2a7 7 0 0 0 1-.42 9 9 0 0 0 1-.58 7.69 7.69 0 0 0 1.09-.87l.32-.31.14-.15c.22-.26.43-.53.63-.81a11.52 11.52 0 0 0 .63-1.12 11.93 11.93 0 0 0 .47-1.28c.07-.35.18-.69.22-1s.1-.57.11-.86a1.85 1.85 0 0 1 0-.32 1.89 1.89 0 0 0 0-.43v-.78a2.7 2.7 0 0 0 0-.69.21.21 0 0 1 0-.06 3.28 3.28 0 0 0-.06-.69 6.7 6.7 0 0 0-.15-1c0-.13 0-.27-.08-.4a12.51 12.51 0 0 0-.48-1.49 8.24 8.24 0 0 0-.45-.91 6.35 6.35 0 0 0-.75-1.05 6.15 6.15 0 0 0-.72-.7 5.25 5.25 0 0 0-.93-.64l-.13-.07a2.58 2.58 0 0 0-.46-.23l-.14-.06a5.67 5.67 0 0 0-1.07-.49 7.4 7.4 0 0 0-1.09-.23 6.82 6.82 0 0 0-1-.1h-.81a5.27 5.27 0 0 1-.7 0 .51.51 0 0 0-.22-.01z"/>
      <path className="staff--trebleClefBackground" d="M23 42.19v.19c.07.39.13.78.2 1.17s.15.89.24 1.34c.12.64.22 1.27.33 1.91l.23 1.45.24 1.37.26 1.51v.26s0 .09-.08.11l-.41.12-.64.18-.25.1-.67.26a5.62 5.62 0 0 0-.78.37l-.38.19c-.29.14-.54.34-.81.51a13 13 0 0 0-1.21.91c-.2.21-.45.36-.62.59a1.81 1.81 0 0 1-.19.19 8.63 8.63 0 0 0-.83.92c-.16.2-.32.4-.47.61a10.77 10.77 0 0 0-.8 1.26c-.19.35-.37.71-.52 1.07a10.55 10.55 0 0 0-.59 1.85c-.07.34-.12.68-.16 1a1.93 1.93 0 0 0 0 .2v.58a3.8 3.8 0 0 0 .06.86 7 7 0 0 0 .19 1.14 10.66 10.66 0 0 0 .66 2 11.9 11.9 0 0 0 .56 1.12 11.51 11.51 0 0 0 .8 1.22 9.77 9.77 0 0 0 .7.84 5.91 5.91 0 0 0 .65.61l.39.32a12.85 12.85 0 0 0 1.9 1.2c.23.12.46.25.69.36l.19.1.21.11h.09a2.3 2.3 0 0 0 .25-.28l.26-.24c0-.06-.08-.09-.13-.12a5.7 5.7 0 0 1-.92-.61 7.39 7.39 0 0 1-.81-.74q-.44-.48-.83-1c-.21-.28-.4-.58-.58-.88a7.07 7.07 0 0 1-.69-1.54 5.49 5.49 0 0 1-.24-1.25v-.78a5.38 5.38 0 0 1 .13-1.23 5.71 5.71 0 0 1 .38-1.29 6.5 6.5 0 0 1 .78-1.27c.16-.2.33-.39.51-.57s.38-.35.57-.52.2-.13.3-.2a6.32 6.32 0 0 1 .85-.5 7 7 0 0 1 1.35-.5 5 5 0 0 1 .76-.17 6.15 6.15 0 0 1 .9-.11 4.41 4.41 0 0 1 .6 0 .08.08 0 0 1 .09.06 1 1 0 0 1 0 .14l.32 1.88c.07.44.15.87.23 1.31s.13.8.19 1.2l.22 1.28.21 1.25c.08.44.16.87.23 1.31 0 .26.08.51.13.77l.28 1.6c.1.57.2 1.14.29 1.71s.18 1 .27 1.54l.33 1.88.34 1.94c0 .13 0 .26.06.4h-.12l-.8.15h-.18c-.38.05-.76.11-1.14.15l-.6.06a6.72 6.72 0 0 1-.76 0h-.12a3.54 3.54 0 0 1-.72 0h-1.09c-.39 0-.78-.06-1.17-.11s-.68-.09-1-.15L20 76.65c-.46-.11-.91-.25-1.36-.39s-1-.34-1.43-.55a17.39 17.39 0 0 1-4.1-2.5c-.21-.17-.4-.35-.61-.52a8 8 0 0 1-.59-.54c-.29-.28-.57-.58-.84-.87A13.5 13.5 0 0 1 10 70q-.35-.49-.65-1a13.25 13.25 0 0 1-.73-1.43 10.64 10.64 0 0 1-.4-1.09c-.08-.27-.16-.54-.23-.81a10.72 10.72 0 0 1-.24-1.19c0-.26-.07-.51-.1-.77s0-.38 0-.58v-.58a8.79 8.79 0 0 1 .16-1.67 14.8 14.8 0 0 1 .65-2.4 18.53 18.53 0 0 1 .72-1.72c.15-.32.31-.65.48-1s.39-.72.6-1.07c.36-.62.74-1.22 1.13-1.81a20.73 20.73 0 0 1 1.47-1.95c.34-.4.7-.8 1.06-1.19.17-.18.35-.35.52-.53.52-.54 1.07-1.05 1.61-1.57.3-.28.61-.56.93-.83l.58-.51.21-.17.72-.62.82-.68c.43-.35.86-.7 1.3-1s1-.73 1.47-1.06c.27-.18.53-.35.81-.51a.13.13 0 0 1 .11-.07zm-.44-13.35v-2.63s0-.46.07-.69v-.17c.06-.53.12-1.05.23-1.57 0-.26.09-.51.14-.77.15-.7.31-1.39.51-2.08.14-.48.29-1 .47-1.43s.43-1 .65-1.56c.11-.25.23-.49.35-.73s.33-.59.51-.89a7.88 7.88 0 0 1 .54-.8 7.51 7.51 0 0 1 1.19-1.27 5.17 5.17 0 0 1 1.1-.7 3.67 3.67 0 0 1 1.15-.34 3.28 3.28 0 0 1 1-.05 2.51 2.51 0 0 1 1.3.42 2.41 2.41 0 0 1 .55.49 3.85 3.85 0 0 1 .65 1.17 7.86 7.86 0 0 1 .31 1.23c.06.36.09.73.13 1.09v.52a3.35 3.35 0 0 1-.06.81 6.55 6.55 0 0 1-.28 1.36c-.05.2-.13.4-.2.6s-.08.2-.11.3a4.35 4.35 0 0 1-.24.56c-.22.49-.48 1-.75 1.42a22.84 22.84 0 0 1-1.54 2.28q-.73 1-1.54 1.89c-.29.33-.6.65-.89 1s-.48.49-.72.74-.48.47-.73.7l-.47.45c-.23.22-.47.42-.71.62-.28.28-.6.52-.9.77s-.88.7-1.33 1l-.1.06a3.43 3.43 0 0 1-.06-.34c0-.3-.07-.59-.09-.89s-.05-.54-.05-.81a.31.31 0 0 0 0-.09 2.83 2.83 0 0 1 0-.6c-.09-.33-.08-.7-.08-1.07zm4.62 29.5a.51.51 0 0 1 .21 0 5.27 5.27 0 0 0 .7 0h.81a6.82 6.82 0 0 1 1 .1 7.4 7.4 0 0 1 1.09.23 5.67 5.67 0 0 1 1.11.39l.14.06a2.58 2.58 0 0 1 .46.23l.13.07a5.25 5.25 0 0 1 .93.64 6.15 6.15 0 0 1 .72.7 6.35 6.35 0 0 1 .75 1.05 8.24 8.24 0 0 1 .45.91 12.51 12.51 0 0 1 .48 1.49c0 .13.05.26.08.4a6.7 6.7 0 0 1 .15 1 3.28 3.28 0 0 1 .06.69.21.21 0 0 0 0 .06 2.7 2.7 0 0 1 0 .69v.78a1.89 1.89 0 0 1 0 .43 1.85 1.85 0 0 0 0 .32c0 .29-.07.57-.11.86s-.16.7-.22 1a11.93 11.93 0 0 1-.47 1.28 11.52 11.52 0 0 1-.65 1.21c-.2.28-.41.55-.63.81l-.14.15-.32.31a7.69 7.69 0 0 1-1.09.87 9 9 0 0 1-1 .58 7 7 0 0 1-1 .42l-.54.2a.08.08 0 0 1-.12-.05l-.16-.67-.14-.83c-.06-.35-.11-.7-.17-1.06s-.15-.84-.22-1.25-.09-.55-.13-.83l-.16-.94c-.11-.67-.22-1.33-.34-2-.08-.44-.14-.87-.22-1.31s-.1-.67-.16-1-.16-.91-.23-1.37L28 63.67l-.24-1.37c-.11-.66-.21-1.31-.32-2-.07-.4-.14-.8-.2-1.2 0-.22-.07-.44-.1-.66a.19.19 0 0 1 .04-.1z"/>
    </g>
    {children}
  </svg>
);

export default Staff;

export const notes = [
  { name: 'E2', yOffset: '0' },
  { name: 'F2', yOffset: '5' },
  { name: 'G2', yOffset: '10' },
  { name: 'A2', yOffset: '15' },
  { name: 'B2', yOffset: '20' },
  { name: 'C3', yOffset: '25' },
  { name: 'D3', yOffset: '30' },
  { name: 'E3', yOffset: '35'},
  { name: 'F3', yOffset: '40'},
  { name: 'G3', yOffset: '45'},
  { name: 'A3', yOffset: '50'},
  { name: 'B3', yOffset: '55'},
  { name: 'C4', yOffset: '60'},
  { name: 'D4', yOffset: '65'},
  { name: 'E4', yOffset: '70'},
  { name: 'F4', yOffset: '75'},
  { name: 'G4', yOffset: '80'},
  { name: 'A4', yOffset: '85'},
  { name: 'B4', yOffset: '90'},
  { name: 'C5', yOffset: '95'},
  { name: 'D5', yOffset: '100'},
  { name: 'E5', yOffset: '105'}
];
