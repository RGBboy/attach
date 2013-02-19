/*!
 * attach
 * Copyright(c) 2013 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
* Library version.
*/

exports.version = '0.0.1';

/**
 * Add attachable functionality to routable object.
 *
 * @param {Object} self
 * @api public
 */
exports.extend = function (self) {

  /**
   * Attaches a routable component to itself;
   *
   * @comment: When express and connect change to use params with
   * app.use, we can probably change this to just use app.use etc.
   *
   * @todo: Allow this to also take the route and define the route
   * for added convenience. Optionally you can define the route
   * beforehand.
   *
   * @param {String} routeName (the name of the route)
   * @param {Component} childComponent (should be routable)
   * @return {Component} for chaining
   * @api public
   */
  self.attach = function (routeName, component) {

    if (component.parent) {
      throw new Error('Component already attached');
    };

    self.all(self.lookupRoute(routeName) + '*', component.handler);

    // emit attached event
    component.parent = self;
    component.emit('attached', self);

    return self;
  };

  return self;

};