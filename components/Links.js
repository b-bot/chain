import React from 'react';
import Placeholder from './covers/Placeholder';
import { Link } from './icons/index';
import links from '../data/links.json';

export default () => (
    <div className="links">
      {links.map(link => (
        <a className={link.type} href={link.url} key={link.title} aria-label={link.id}>
            <div className="image">
              {link.icon ? <Link width="24px" height="24px" fill="#fff" /> : ''}
              <amp-img width={1200} height={630} alt={link.title} layout="intrinsic" src={link.cover || Placeholder } />
            </div>
            <div className="info">
              <h1>{link.title}</h1>
              <p>{link.description}</p>
            </div>
        </a>
      ))}
    <style jsx>
      {`
      .link-icon {
        position: absolute;
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 20px;
      }
      a {
        text-decoration: none;
      }
      .feature {
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        transition: all .2s ease-in-out;
        flex: 0 0 100%;
        display: flex;
      }
      .feature:hover {
        transform: scale(1.04);
      }
      .feature > div {
        flex: 1;
      }
      .visual {
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        transition: all .2s ease-in-out;
        position: relative;
        flex: 0 0 48%;
      }
      .visual .info {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: transparent;
        color: #a9a9a9;
        background: #202020;
        opacity: 0.9;
        width: 100%;
        text-align: center;
        padding: 10px;
      }
      .visual .info  p {
        display: none;
      }
      .visual .info  h1 {
        padding: 0;
        margin: 0;
      }
      .visual > div {
        flex: 1;
      }
      .visual:hover {
        transform: scale(1.04);
      }
      .text {
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        transition: all .2s ease-in-out;
        flex: 0 0 100%;
      }
      .text .image {
        display: none;
      }
      .text .info {
        color: #a9a9a9;
        background: #202020;
        text-align: center;
        padding: 20px;
      }
      .text .info  p {
        display: none;
      }
      .text .info  h1 {
        padding: 0;
        margin: 0;
      }
      .text > div {
        flex: 1;
      }
      .text:hover {
        transform: scale(1.04);
      }
      .info {
        background: #202020;
        color: #a9a9a9;
      }
      .image {
        width: 100%;
        display: block;
        position: relative;
      }
      .image amp-img {
        width: 100%;
        display: block;
      }
      h1 {
        font-size: 1.1rem;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
        padding: 20px 20px 0;
      }
      p {
        font-size: 1rem;
        line-height: 1.4rem;
        font-weight: 200;
        padding: 0 20px 0;
      }
      @media only screen and (max-width: 768px) {
        .visual .info {
          padding: 5px;
          min-height: 30px;
        }
        .feature {
          justify-content: space-between;
          flex: 0 1 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .visual > div {
          flex: 1 0 100%;
        }
        .feature > div {
          flex: 1 0 100%;
        }
        h1 {
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-align: center;
          padding: 5px 10px 0;
        }
        .feature .info h1 {
        font-size: 0.8rem;
        }
        .feature .info {
          min-height: 100px;
        }
        .visual .info  h1 {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.8rem;
          line-height: 1.2rem;
          font-weight: 200;
          padding: 0 20px 0;
          text-align: center;
        }
      }
      @media only screen and (max-width: 420px) {
        .feature {
          flex: 0 1 100%;
        }
        .visual {
          flex: 0 0 100%;
        }
        .feature .info {
          min-height: auto;
        }
        .visual .info {
          padding: 10px;
          min-height: 0;
        }
        p {
          line-height: 1.1rem;
          padding: 0 10px 0;
        }
      }
      `}
    </style>
  </div>
);