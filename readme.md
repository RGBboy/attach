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

## License 

(The MIT License)

Copyright (c) 2013 RGBboy &lt;me@rgbboy.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.