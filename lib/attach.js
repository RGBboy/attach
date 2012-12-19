/*!
 * attach
 * Copyright(c) 2012 RGBboy <me@rgbboy.com>
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

  // test that self has named routes
  // test that has .all function

  var children = [];

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

    if (children.indexOf(component) != -1) {
      throw new Error('Component already attached');
    };

    var origLookupRoute = self.lookupRoute,
        origComponentLookupRoute = component.lookupRoute;

    self.lookupRoute = function (lookupRouteName) {
      var re = /^(.*?)\.(.*?)$/g,
          test = re.exec(lookupRouteName);
      if (test && test[1] === routeName) {
        return component.lookupRoute(test[2]);
      } else {
        return origLookupRoute(lookupRouteName);
      }
    };

    children.push(component);

    component.lookupRoute = function (lookupRouteName, route) {
      var route = self.lookupRoute(routeName) + origComponentLookupRoute(lookupRouteName, route);
      route = route.replace(/\/{2,}/g, '/'); // remove double //
      route = route.replace(/(.+)\/+$/g, '$1'); // remove trailing slash
      return route;
    };

    self.all(self.lookupRoute(routeName) + '*', component.handler);

    // emit attached event
    component.emit('attached', self);

    return self;
  };

  return self;

};