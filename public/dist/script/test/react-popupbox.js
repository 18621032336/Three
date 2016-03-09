import React, { Component } from 'react';
import { Popupbox, PopupboxTrigger, PopupboxModal } from 'react-popupbox/dist/react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import ReactDom from 'react-dom';

export class Example extends Component {
  render() {
    return (
      <Popupbox ref="popupbox">
        <PopupboxTrigger>
          <button>Click me</button>
        </PopupboxTrigger>
        <PopupboxModal>
          <p className="quotes">Work like you don't need the money.</p>
          <p className="quotes">Dance like no one is watching.</p>
          <p className="quotes">And love like you've never been hurt.</p>
          <span className="quotes-from">― Mark Twain</span>
        </PopupboxModal>
      </Popupbox>
    )
  }
}
//
//ReactDom.render(
//
//)
ReactDom.render(
  <Example/>,
  document.querySelector('.container')
)

console.log(Example);
