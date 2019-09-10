import React from 'react';

const LinkedIn = props => (
  <a style={{padding: props.padding, margin: props.margin}} href={props.url}>
  <svg height={props.height} width={props.width} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <g>
      <path d="M24.076 0H1.918C.86 0 0 .839 0 1.875v22.249C0 25.159.86 26 1.918 26h22.158c1.06 0 1.923-.841 1.923-1.876V1.875C25.999.839 25.136 0 24.076 0zM4 10h4v12H4V10zm2.001-1.6a2.399 2.399 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zM22 22h-4v-6c0-1.625-.438-3.169-2-3.169-1.563 0-2 1.568-2 3.187V22h-4V10h4v1.443h.2c.514-.975 1.8-1.804 3.329-1.804C21.219 9.639 22 12.063 22 15v7z" fill={props.fill} />
    </g>
  </svg>
  </a>
);

export default LinkedIn;