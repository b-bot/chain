import React from 'react';
import { BP } from './icons/index';

export default () => (
  <div className="footer">
    <div className="logo">
      <BP height="30px" height="30px" />
    </div>
    <p><a href="https://b-b0t.com">b-b0t.com</a></p>
    <style jsx>
      {`
      .footer {
        color: #a9a9a9;
        background: #202020;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px;
        border: 1px solid #a9a9a9;
      }
      .logo {
        text-align: center;
        margin: 0 auto 5px;
        display: block;
      }
      .footer p {
        font-weight: 300;
        text-align: center;
        margin: 0 auto;
        font-size: 0.8rem;
      }
      .footer a {
        color: white;
        text-decoration: none;
      }
      @media only screen and (min-width: 768px) {
        .footer {

        }
      }
      `}
    </style>
  </div>
);