import React from 'react';

const Facebook = props => (
  <a style={{padding: props.padding, margin: props.margin}} href={props.url} aria-label="Facebook">
  <svg height={props.height} width={props.width} viewBox="0 0 15 30" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M10 10V7.023C10 5.68 10.297 5 12.383 5H15V0h-4C6 0 4 3.336 4 7v3H0v5h4v15h6V15h4.406L15 10h-5" fill={props.fill}/>
    </g>
  </svg>
</a>
);

export default Facebook;