import React, { Component } from 'react'
import { DivWrapper } from './styleClass'

const classNames = require('classnames/bind');


var styles = {
  foo:'abc',
  bar:'def',
  baz:'xyz'
};

var cx = classNames.bind(styles);
var className = cx('foo',['bar'],{baz:true});

export default class App extends Component {
  render() {
    return (
      <>
        <div className={className}>
          hello world
        </div>
        <DivWrapper color="pink">
          styleClass
        </DivWrapper>
      </>
    )
  }
}
