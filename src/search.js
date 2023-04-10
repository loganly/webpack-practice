'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import right from './images/right.png';
import './search.less';

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text watch111122
        <img src={right} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
