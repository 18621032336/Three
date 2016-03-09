'use strict';

import 'less/command.less';
import './circle-div.js';
import React from 'react';
import ReactDom from 'react-dom';

var FanShaped = React.createClass({
  render: function () {
    var index = this.props['fan-number'];
    return (
      <i className={'fan-shaped fan-position-' + index}>
        <span className="outer-fun">
          <div className="hidden-left"></div>
          <div className="hidden-right"></div>
        </span>
        <span className="inner-fun">
        </span>
      </i>
    );
  }
});

var FanShapedList = React.createClass({
  render: function () {
    var rows = [];
    this.props.shapes.forEach((number)=> {
        rows.push(<FanShaped fan-number={number} key={number}/>)
      }
    )
    return <span>{rows}</span>;
  }
});

var document = global.document;
var shapes = [0, 1, 2];

ReactDom.render(
  <FanShapedList shapes={shapes}/>,
  document.querySelector('annulus1')
)



