import React from 'react';
import { openExternal } from 'common/utils';

import './style.less';

const Welcome = () => {
  return (
    <div id="welcome">
      <h1 className="title">Electron RT Boilerplate</h1>
      <span className="desc">This is a template for electron + react + typescript.</span>
      <div className="links">
        <p>
          <a href="#" onClick={() => { openExternal('https://www.electronjs.org/'); }}>Electron</a> |
          <a href="#" onClick={() => { openExternal('https://webpack.electron.build/'); }}>Electron-Webpack</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://react.docschina.org/'); }}>React</a> |
          <a href="#" onClick={() => { openExternal('https://reactrouter.com/'); }}>React-Router</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://www.typescriptlang.org/'); }}>Typescript</a> |
          <a href="#" onClick={() => { openExternal('http://lesscss.org/'); }}>Less</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://eslint.org/'); }}>Eslint</a> |
          <a href="#" onClick={() => { openExternal('https://www.npmjs.com/package/eslint-config-ali'); }}>Eslint-Config-Ali</a>
        </p>
      </div>
      <p className="footer"><a className="link" href="#" onClick={() => { openExternal('https://youmukonpaku.com'); }}>YoumuKonpaku</a></p>
    </div>
  );
};

export default Welcome;
