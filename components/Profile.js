import React from 'react';
import { Facebook, Twitter, Instagram, GitHub, LinkedIn } from './icons/index';
import profile from '../data/profile.json';

export default () => (
  <div className="profile">
    <amp-img width="100px" height="100px" className="avatar" src="/static/avatar.jpg" />
    <h2>{profile.name}</h2>
    <div className="social">
      {profile.facebook ? <Facebook width="24px" height="24px" fill="#fff" padding="0 10px" url={ "https://facebook.com/" + profile.facebook} /> : ''}     
      {profile.twitter ? <Twitter width="24px" height="24px" fill="#fff" padding="0 10px" url={ "https://twitter.com/" + profile.twitter} /> : ''}   
      {profile.instagram ? <Instagram width="24px" height="24px" fill="#fff" padding="0 10px" url={ "https://instagram.com/" + profile.instagram} /> : ''}   
      {profile.github ? <GitHub width="24px" height="24px" fill="#fff" padding="0 10px" url={ "https://github.com/" + profile.github} /> : ''}   
      {profile.linkedin ? <LinkedIn width="24px" height="24px" fill="#fff" padding="0 10px" url={ "https://linkedin.com/in/" + profile.linkedin} /> : ''}
    </div>
    <style jsx>
      {`
      .profile {
        padding: 20px;
        text-align: center;
      }
      .social {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        position: relative;
      }
      .social > div {
        flex: 1;
      }
      .social > div svg:hover {
        opacity: 0.5;
      }
      h1 {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      }
    .avatar {
      border-radius: 50%;
      text-align: center;
      position: relative;
    }
    
      `}
    </style>
  </div>
);