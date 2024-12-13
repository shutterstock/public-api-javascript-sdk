/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.42
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse20015Categories'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20015Categories'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20034 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20015Categories);
  }
}(this, function(ApiClient, InlineResponse20015Categories) {
  'use strict';




  /**
   * The InlineResponse20034 model module.
   * @module model/InlineResponse20034
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>InlineResponse20034</code>.
   * List of editorial categories
   * @alias module:model/InlineResponse20034
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse20034</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20034} obj Optional instance to populate.
   * @return {module:model/InlineResponse20034} The populated <code>InlineResponse20034</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20015Categories]);
      }
    }
    return obj;
  }

  /**
   * List of editorial categories
   * @member {Array.<module:model/InlineResponse20015Categories>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


