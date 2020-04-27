import React from 'react';
import './style.scss';

export default () => (
  <>
    <div className="notFoundPage">
      <div className="text"><p>404</p></div>
      <div className="container">
        {/* <!-- caveman left --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye"><div className="nose"></div></div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right"><div className="club"></div></div>
        </div>
        {/* <!-- caveman right --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye"><div className="nose"></div></div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right"><div className="club"></div></div>
        </div>
      </div>
    </div>
  </>
);