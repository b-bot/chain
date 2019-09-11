import React from 'react';

const YouTube = props => (
  <a style={{ padding: props.padding, margin: props.margin }} href={props.url} aria-label="YouTube">
    <svg height={props.height} width={props.width} viewBox="0 0 30 21" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M29.7 4.552s-.293-2.067-1.192-2.978C27.367.379 26.088.373 25.502.304 21.304 0 15.006 0 15.006 0h-.013S8.696 0 4.498.304c-.586.069-1.865.075-3.006 1.27C.593 2.485.3 4.552.3 4.552S0 6.98 0 9.407v2.176c0 2.428.3 4.855.3 4.855s.293 2.068 1.192 2.978c1.141 1.195 2.64 1.157 3.308 1.283C7.2 20.929 15 21 15 21s6.304-.01 10.502-.313c.586-.07 1.865-.076 3.006-1.271.899-.91 1.192-2.978 1.192-2.978s.3-2.427.3-4.855V9.407c0-2.427-.3-4.855-.3-4.855zm-17.797 9.889l-.002-8.429 8.107 4.23-8.105 4.199z" fill="#F66" />
      </g>
    </svg>
  </a>
);

export default YouTube;