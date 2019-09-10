import React from 'react';

const Link = props => (
<div className="link-icon">
  <svg height={props.height} width={props.width} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <g>
      <g fill="#000">
        <path d="M13.994 20.249c.037.247.076.494.076.751a5.037 5.037 0 0 1-1.485 3.585l-2 2A5.034 5.034 0 0 1 7 28.07 5.076 5.076 0 0 1 1.93 23a5.04 5.04 0 0 1 1.485-3.585l1.99-1.989A5.038 5.038 0 0 1 9 15.93c.257 0 .504.039.751.076l1.539-1.539a6.882 6.882 0 0 0-7.202 1.646L2.1 18.1A6.884 6.884 0 0 0 .07 23 6.937 6.937 0 0 0 7 29.93a6.887 6.887 0 0 0 4.9-2.029l2-2a6.888 6.888 0 0 0 1.633-7.191l-1.539 1.539M23 .07a6.882 6.882 0 0 0-4.912 2.043L16.1 4.1a6.884 6.884 0 0 0-1.633 7.191l1.539-1.54c-.037-.247-.076-.494-.076-.751 0-1.354.527-2.627 1.485-3.585l1.99-1.989A5.038 5.038 0 0 1 23 1.93 5.077 5.077 0 0 1 28.07 7a5.037 5.037 0 0 1-1.485 3.585l-2 2A5.034 5.034 0 0 1 21 14.07c-.257 0-.504-.039-.751-.076l-1.539 1.539a6.887 6.887 0 0 0 7.19-1.632l2-2A6.888 6.888 0 0 0 29.93 7 6.938 6.938 0 0 0 23 .07"/>
        <path d="M10 21a.999.999 0 0 1-.707-1.707l10-10a.999.999 0 1 1 1.414 1.414l-10 10A.997.997 0 0 1 10 21"/>
      </g>
    </g>
  </svg>
  <style jsx>
    {`
    .link-icon {
      position: absolute;
      left: 20px;
      top: 20px;
      z-index: 1;
    }
    `}
  </style>
</div>
);

export default Link;