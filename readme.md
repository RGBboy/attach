# Attach

  Add attach functionality to a routable object.

  [![Build Status](https://secure.travis-ci.org/RGBboy/attach.png)](http://travis-ci.org/RGBboy/attach)

## Installation

    $ npm install attach

## Usage

  Attach adds functionality to attach components to each other.

``` javascript

// require it
var attach = require('attach'),
    routable = require('routable'),
    EventEmitter = require('events').EventEmitter,
    parent = new EventEmitter(),
    child = new EventEmitter();

// use it on your object
routable.extend(parent);
attach.extend(parent);

routable.extend(child);

parent.defineRoute('child', '/child');
parent.attach(child);

```

## To Do

  * Write tests
